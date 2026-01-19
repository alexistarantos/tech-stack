import { currentUser } from '@clerk/nextjs/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import connectDB from '@/lib/db';
import User from '@/models/user';

export default async function DashboardPage() {
    const user = await currentUser();

    if (!user) {
        return <div>Not authenticated</div>;
    }

    let dbUser = null;
    try {
        await connectDB();
        dbUser = await User.findOne({ clerkId: user.id });
    } catch (error) {
        console.error('Database connection error:', error);
        // Continue without database connection - show user info from Clerk only
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>User Information</CardTitle>
                        <CardDescription>Your account details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">{user.emailAddresses[0]?.emailAddress}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">User ID</p>
                            <p className="font-medium">{user.id}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Subscription Status</CardTitle>
                        <CardDescription>Your current subscription</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {dbUser?.subscriptionStatus ? (
                            <div>
                                <p className="text-sm text-muted-foreground mb-1">Status</p>
                                <p className="font-medium capitalize">{dbUser.subscriptionStatus}</p>
                            </div>
                        ) : (
                            <p className="text-muted-foreground">No active subscription</p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
