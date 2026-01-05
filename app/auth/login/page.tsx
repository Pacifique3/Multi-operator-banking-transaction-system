"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Fingerprint, Scan, ShieldEllipsis, Mail, Key, Globe } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [authStep, setAuthStep] = useState<"initial" | "otp">("initial")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulation d'une première étape de connexion
    setTimeout(() => {
      setAuthStep("otp")
      setIsLoading(false)
    }, 1000)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Globe className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Connexion OmniBank</CardTitle>
          <CardDescription>
            {authStep === "initial"
              ? "Choisissez votre méthode d'authentification sécurisée"
              : "Un code OTP a été envoyé à votre appareil"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {authStep === "initial" ? (
            <Tabs defaultValue="classic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="classic">Classique</TabsTrigger>
                <TabsTrigger value="biometric">Biométrie</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>

              <TabsContent value="classic">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email ou Identifiant</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="email" placeholder="nom@exemple.com" className="pl-10" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="password" type="password" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Traitement..." : "Continuer"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="biometric" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent" onClick={handleLogin}>
                    <Fingerprint className="h-8 w-8 text-primary" />
                    <span>Empreinte</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col gap-2 bg-transparent" onClick={handleLogin}>
                    <Scan className="h-8 w-8 text-primary" />
                    <span>Facial</span>
                  </Button>
                </div>
                <p className="text-xs text-center text-muted-foreground italic">
                  Utilisez les capteurs de votre appareil pour une connexion rapide.
                </p>
              </TabsContent>

              <TabsContent value="social">
                <Button variant="outline" className="w-full flex items-center gap-2 mb-3 bg-transparent">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continuer avec Google
                </Button>
              </TabsContent>
            </Tabs>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Code de vérification</Label>
                <div className="relative">
                  <ShieldEllipsis className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="otp"
                    placeholder="123456"
                    className="pl-10 text-center text-2xl tracking-[0.5em]"
                    required
                    maxLength={6}
                  />
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  Vous n&apos;avez pas reçu de code ?{" "}
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Renvoyer
                  </Button>
                </p>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Vérification..." : "Vérifier et se connecter"}
              </Button>
              <Button variant="ghost" className="w-full" onClick={() => setAuthStep("initial")}>
                Retour aux méthodes de connexion
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-sm text-center text-muted-foreground">
            Pas encore de compte ?{" "}
            <Link href="/auth/register" className="text-primary font-semibold hover:underline">
              S&apos;inscrire
            </Link>
          </div>
          <Link
            href="/auth/forgot-password"
            title="Mot de passe oublié"
            className="text-xs text-muted-foreground hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
