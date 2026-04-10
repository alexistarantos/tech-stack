import Link from "next/link"
import { Twitter, Github, Linkedin, Instagram, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Dashboard", href: "/dashboard" },
]

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-xl font-semibold">
              Tech Stack
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A production-ready Next.js starter with auth, database, and payments built in.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Product</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold">Connect</p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <Link
              href="mailto:info@techstackstarter.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@techstackstarter.com
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-4 pb-2">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Tech Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
