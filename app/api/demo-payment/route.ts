import { NextRequest, NextResponse } from 'next/server';
import { updateBookingStatus } from '@/lib/firestore';

export async function POST(request: NextRequest) {
  try {
    const { bookingId } = await request.json();

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Missing booking ID' },
        { status: 400 }
      );
    }

    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Update booking status to confirmed and paid
    await updateBookingStatus(bookingId, 'confirmed', 'paid');

    return NextResponse.json({ 
      success: true,
      message: 'Demo payment processed successfully',
      bookingId 
    });
  } catch (error: any) {
    console.error('Error processing demo payment:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process demo payment' },
      { status: 500 }
    );
  }
}

