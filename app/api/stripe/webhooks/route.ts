import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectDB from '@/lib/db';
import { stripe } from '@/lib/stripe';
import User from '@/models/user';

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    try {
        await connectDB();

        switch (event.type) {
            case 'customer.subscription.created':
            case 'customer.subscription.updated':
                const subscription = event.data.object as Stripe.Subscription;
                await User.findOneAndUpdate(
                    { stripeCustomerId: subscription.customer as string },
                    { subscriptionStatus: subscription.status }
                );
                break;
        }

        return NextResponse.json({ received: true });
    } catch (dbError) {
        console.error('Database error in webhook:', dbError);
        return NextResponse.json(
            { error: 'Database connection failed' },
            { status: 503 }
        );
    }
}