import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
        <Badge variant="outline" className="w-fit whitespace-nowrap shrink-0 justify-center overflow-hidden mb-4">
          New Features Released
        </Badge>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Design faster than ever
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Our intuitive interface and powerful components help you build beautiful websites in record time.
        </p>

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
        <div className="bg-card rounded-xl border shadow-2xl">
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
        <div className="absolute -top-12 -right-8 w-72 rotate-3 transform transition-transform duration-300 hover:rotate-0">
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
        <div className="absolute top-1/4 -left-8 w-64 -rotate-3 transform transition-transform duration-300 hover:rotate-0">
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
