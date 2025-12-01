import { NextRequest, NextResponse } from 'next/server';
import { calculateDistance } from '@/lib/distance-calculator';

export async function POST(request: NextRequest) {
  try {
    const { pickupAddress, deliveryAddress } = await request.json();

    if (!pickupAddress || !deliveryAddress) {
      return NextResponse.json(
        { error: 'Both pickup and delivery addresses are required' },
        { status: 400 }
      );
    }

    const result = await calculateDistance(pickupAddress, deliveryAddress);

    if (result.error) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      distance: result.distance,
      duration: result.duration,
      formattedDistance: `${result.distance.toFixed(1)} miles`,
    });
  } catch (error: any) {
    console.error('Error calculating distance:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to calculate distance' },
      { status: 500 }
    );
  }
}

