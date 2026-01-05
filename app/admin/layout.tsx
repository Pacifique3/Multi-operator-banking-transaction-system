import type React from "react"
import Link from "next/link"
import { Globe, Users, Building2, ShieldAlert, BarChart3, Settings, LogOut, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r bg-card hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">OmniAdmin</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium"
          >
            <BarChart3 className="h-4 w-4" />
            Vue d&apos;ensemble
          </Link>
          <Link
            href="/admin/operators"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-muted-foreground"
          >
            <Building2 className="h-4 w-4" />
            Opérateurs
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-muted-foreground"
          >
            <Users className="h-4 w-4" />
            Clients
          </Link>
          <Link
            href="/admin/security"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-muted-foreground"
          >
            <ShieldAlert className="h-4 w-4" />
            Sécurité & Logs
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors text-muted-foreground"
          >
            <Settings className="h-4 w-4" />
            Configuration
          </Link>
        </nav>
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
            asChild
          >
            <Link href="/auth/login">
              <LogOut className="h-4 w-4" />
              Déconnexion
            </Link>
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b bg-card flex items-center justify-between px-6">
          <h2 className="font-semibold text-lg">Portail Administrateur</h2>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <div className="flex items-center gap-2 border-l pl-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                AD
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Admin System</span>
                <span className="text-[10px] text-muted-foreground leading-none">Super Utilisateur</span>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
