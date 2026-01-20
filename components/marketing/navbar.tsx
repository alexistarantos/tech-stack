import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function Navbar() {
    const { userId } = await auth();

    return (
        <nav className="border-b border-border sticky top-0 z-50 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-semibold">
                    Tech Stack
                </Link>
                <div className="flex items-center gap-4">
                    {userId && (
                        <>
                            <Button variant="ghost" asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                            <UserButton />
                        </>
                    )}
                    {!userId && (
                        <>
                            <Button variant="ghost" asChild>
                                <Link href="/sign-in">Sign In</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/sign-up">Sign Up</Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
