import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        clerkId: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        stripeCustomerId: String,
        subscriptionStatus: {
            type: String,
            enum: ['active', 'canceled', 'incomplete', 'past_due', 'trialing', 'unpaid'],
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);