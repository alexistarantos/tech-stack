import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AvatarGroup } from "@/components/ui/avatar-group"
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react"
import { auth } from "@clerk/nextjs/server"


export async function Hero() {
  const { userId } = await auth();
  const isLoggedIn = !!userId;

  return (
    <section className="relative max-w-6xl mx-auto px-4 flex min-h-screen flex-col items-center justify-center overflow-hidden xl:overflow-visible bg-background py-12 sm:py-16">
      {/* Content Section */}
      <div className="relative z-10 mx-auto flex flex-col items-center gap-6 text-center">
        {/* Badge */}
        <Badge variant="outline" className="w-fit whitespace-nowrap shrink-0 gap-1 justify-center overflow-hidden mb-4">
          <Star className="h-3 w-3" />
          New Features Released
        </Badge>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Design faster than ever
        </h1>

        <div className="flex flex-col gap-2">
          {/* Subtitle */}
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Our intuitive interface and powerful components help you build beautiful websites in record time.
          </p>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 rounded-full bg-background mb-2">
            <AvatarGroup
              avatars={[
                { src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png", alt: "User 1", fallback: "OS" },
                { src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png", alt: "User 2", fallback: "HL" },
                { src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png", alt: "User 3", fallback: "HR" },
                { src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png", alt: "User 4", fallback: "JW" },
              ]}
              max={4}
            />
            <span className="text-sm font-medium">
              Loved by <span className="font-bold">10K+</span> developers.
            </span>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2" asChild>
            <Link href={isLoggedIn ? "/dashboard" : "/sign-up"}>
              {isLoggedIn ? "Go to Dashboard" : "Try it Free"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline">
            View Documentation
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-12 w-full">
        {/* Main Image */}
        <div className="bg-card rounded-xl border shadow-2xl animate-float-slower">
          <Image
            src="https://placehold.co/1200x600.jpeg"
            alt="Dashboard Screenshot"
            width={1200}
            height={600}
            className="rounded-xl w-full h-auto"
            priority
          />
        </div>

        {/* Smaller Image - Top Right */}
        <div className="absolute -top-12 -right-8 w-72 rotate-3 transform transition-transform duration-300 hover:rotate-0 animate-float">
          <div className="bg-card rounded-lg border shadow-lg">
            <Image
              src="https://placehold.co/300x200.jpeg"
              alt="Feature Screenshot 1"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Smaller Image - Top Left */}
        <div className="absolute top-1/4 -left-8 w-64 -rotate-3 transform transition-transform duration-300 hover:rotate-0 animate-float-slow">
          <div className="bg-card rounded-lg border shadow-lg">
            <Image
              src="https://placehold.co/300x200.jpeg"
              alt="Feature Screenshot 2"
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
