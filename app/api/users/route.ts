import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';

export async function GET() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        try {
            await connectDB();
            const user = await User.findOne({ clerkId: userId });

            if (!user) {
                return NextResponse.json({ error: 'User not found' }, { status: 404 });
            }

            return NextResponse.json(user);
        } catch (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { error: 'Database connection failed. Please check your MONGODB_URI in .env.local' },
                { status: 503 }
            );
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function POST() {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const clerkUser = await currentUser();
        if (!clerkUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        try {
            await connectDB();

            const email = clerkUser.emailAddresses[0]?.emailAddress || '';

            const user = await User.findOneAndUpdate(
                { clerkId: userId },
                {
                    clerkId: userId,
                    email,
                },
                { upsert: true, new: true }
            );

            return NextResponse.json(user);
        } catch (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { error: 'Database connection failed. Please check your MONGODB_URI in .env.local' },
                { status: 503 }
            );
        }
    } catch (error) {
        console.error('Error creating/updating user:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
