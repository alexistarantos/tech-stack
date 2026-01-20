"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Settings, User, CreditCard, ChevronRight } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
]

const settingsItems = [
  {
    title: "Profile Settings",
    icon: User,
    href: "/dashboard/settings/profile",
  },
  {
    title: "Subscription",
    icon: CreditCard,
    href: "/dashboard/settings/subscription",
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    setSettingsOpen(pathname.startsWith("/dashboard/settings"))
  }, [pathname])

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-4 w-4" />
          </div>
          <div className="text-xl font-semibold whitespace-nowrap group-data-[collapsible=icon]:hidden">
            Tech Stack
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open={settingsOpen} onOpenChange={setSettingsOpen} asChild>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Settings</span>
                      <ChevronRight className={`ml-auto transition-transform duration-200 ${settingsOpen ? "rotate-90" : ""}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {settingsItems.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild isActive={pathname === item.href}>
                            <Link href={item.href}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <UserButton />
          <span className="text-sm group-data-[collapsible=icon]:hidden">Account</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
