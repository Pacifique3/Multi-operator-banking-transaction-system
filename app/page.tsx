import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, ArrowRightLeft, LayoutDashboard, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center gap-2" href="#">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">OmniBank</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Fonctionnalités
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/auth/login">
            Connexion
          </Link>
          <Button asChild size="sm">
            <Link href="/auth/register">Ouvrir un compte</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-balance">
                  Le Futur des Transactions Multi-Opérateurs
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-pretty">
                  Une plateforme unifiée pour gérer vos comptes bancaires et mobile money avec une sécurité biométrique
                  de pointe.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="px-8">
                  <Link href="/auth/register">Commencer</Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 bg-transparent">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
                <CardHeader>
                  <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Sécurité Avancée</CardTitle>
                </CardHeader>
                <CardContent>
                  Authentification forte avec OTP, empreinte digitale et reconnaissance faciale pour protéger vos
                  actifs.
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
                <CardHeader>
                  <ArrowRightLeft className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Transactions Fluides</CardTitle>
                </CardHeader>
                <CardContent>
                  Transférez des fonds entre différents opérateurs (Banque, Mobile Money) instantanément.
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-card/50 backdrop-blur">
                <CardHeader>
                  <LayoutDashboard className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Gestion Unifiée</CardTitle>
                </CardHeader>
                <CardContent>
                  Un seul tableau de bord pour visualiser tous vos comptes et suivre vos d��penses en temps réel.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2026 OmniBank Inc. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d&apo;utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}
