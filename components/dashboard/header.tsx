"use client"

import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"

const getPageTitle = (pathname: string) => {
    if (pathname === "/dashboard") return "Dashboard"
    if (pathname.startsWith("/dashboard/settings/profile")) return "Profile Settings"
    if (pathname.startsWith("/dashboard/settings/subscription")) return "Subscription"
    if (pathname.startsWith("/dashboard/settings")) return "Settings"
    return "Dashboard"
}

export function Header() {
    const pathname = usePathname()
    const title = getPageTitle(pathname)

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold">{title}</h1>
        </header>
    )
}
