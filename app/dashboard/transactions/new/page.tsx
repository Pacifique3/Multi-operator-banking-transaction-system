"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

export default function NewTransactionPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    sourceAccount: "",
    targetOperator: "",
    targetAccount: "",
    amount: "",
    description: "",
  })

  const nextStep = () => setStep((s) => s + 1)
  const prevStep = () => setStep((s) => s - 1)

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Nouvelle Transaction</h1>
        <p className="text-muted-foreground">Effectuez un transfert inter-opérateur en toute sécurité.</p>
      </div>

      {/* Processus de Transaction (Template Method/Builder Pattern influence) */}
      <div className="flex items-center justify-between mb-8 px-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s ? <CheckCircle2 className="h-5 w-5" /> : s}
            </div>
            {s < 3 && <div className={`h-1 w-16 mx-2 rounded ${step > s ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      <Card className="border-none shadow-lg">
        <CardContent className="pt-6">
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <div className="space-y-2">
                <Label>Compte Source</Label>
                <Select onValueChange={(v: string) => setFormData({ ...formData, sourceAccount: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir le compte à débiter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="acc1">Compte Principal (2,450,000 FCFA)</SelectItem>
                    <SelectItem value="acc2">Orange Money (125,500 FCFA)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Opérateur de Destination</Label>
                <Select onValueChange={(v: string) => setFormData({ ...formData, targetOperator: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir l'opérateur cible" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mtn">MTN MoMo</SelectItem>
                    <SelectItem value="orange">Orange Money</SelectItem>
                    <SelectItem value="bank">Autre Banque</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full mt-4"
                onClick={nextStep}
                disabled={!formData.sourceAccount || !formData.targetOperator}
              >
                Suivant <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <div className="space-y-2">
                <Label>Numéro ou RIB de destination</Label>
                <Input
                  placeholder="Ex: 6XX XXX XXX"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, targetAccount: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Montant (FCFA)</Label>
                <Input
                  type="number"
                  placeholder="0"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, amount: e.target.value })}
                />
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={prevStep}>
                  Retour
                </Button>
                <Button className="flex-1" onClick={nextStep} disabled={!formData.amount}>
                  Confirmer les détails
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 text-center py-4">
              <ShieldCheck className="h-16 w-16 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Vérification de Sécurité</h3>
                <p className="text-muted-foreground">
                  Veuillez valider la transaction de {formData.amount} FCFA vers {formData.targetAccount}.
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frais de service:</span> <span>150 FCFA</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2">
                  <span>Total à débiter:</span> <span>{Number(formData.amount) + 150} FCFA</span>
                </div>
              </div>
              <Button className="w-full" size="lg" onClick={() => (window.location.href = "/dashboard")}>
                Valider par Biométrie / OTP
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
