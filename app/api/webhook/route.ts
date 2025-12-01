import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { updateBookingStatus } from '@/lib/firestore';

// Initialize Stripe only if API key is available
const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-11-17.clover',
  });
};

const getWebhookSecret = () => {
  return process.env.STRIPE_WEBHOOK_SECRET || '';
};

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const bookingId = session.metadata?.bookingId;

    if (bookingId) {
      try {
        await updateBookingStatus(bookingId, 'confirmed', 'paid');
        console.log(`Booking ${bookingId} confirmed and marked as paid`);
      } catch (error) {
        console.error('Error updating booking status:', error);
      }
    }
  }

  return NextResponse.json({ received: true });
}

