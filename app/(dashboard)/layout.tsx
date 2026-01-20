import { SidebarProvider, SidebarInset, Sidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <main className="flex-1 overflow-auto p-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}
