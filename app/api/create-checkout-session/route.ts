import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe only if API key is available
const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey || secretKey === 'your_stripe_secret_key') {
    return null;
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-11-17.clover',
  });
};

export async function POST(request: NextRequest) {
  try {
    const { bookingId, amount, customerEmail } = await request.json();

    if (!bookingId || !amount || !customerEmail) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Check if Stripe is configured
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please use demo payment instead.' },
        { status: 503 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Al Buraq Logistics Service',
              description: `Booking ID: ${bookingId}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking-success?session_id={CHECKOUT_SESSION_ID}&booking_id=${bookingId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/book?canceled=true`,
      customer_email: customerEmail,
      metadata: {
        bookingId: bookingId,
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

