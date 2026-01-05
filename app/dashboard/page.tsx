import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Plus, Smartphone, Landmark } from "lucide-react"

export default function ClientDashboard() {
  const accounts = [
    { id: 1, name: "Compte Bancaire", operator: "Banque Atlantique", balance: "2,450,000", type: "bank" },
    { id: 2, name: "Mobile Money", operator: "Orange Money", balance: "125,500", type: "mobile" },
  ]

  const transactions = [
    { id: 1, type: "out", amount: "15,000", target: "Achat Supermarché", date: "Il y a 2h", status: "Complété" },
    { id: 2, type: "in", amount: "50,000", target: "Dépôt Cash", date: "Hier", status: "Complété" },
    { id: 3, type: "out", amount: "5,000", target: "Transfert vers 677...", date: "Hier", status: "En cours" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Bonjour, Jean</h1>
          <p className="text-muted-foreground">Voici l&apos;aperçu de vos comptes aujourd&apos;hui.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvelle Transaction
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <Card
            key={account.id}
            className="border-none shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
          >
            <div className="h-2 bg-primary" />
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{account.name}</CardTitle>
              {account.type === "bank" ? (
                <Landmark className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Smartphone className="h-4 w-4 text-muted-foreground" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{account.balance} FCFA</div>
              <p className="text-xs text-muted-foreground mt-1">{account.operator}</p>
              <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" size="sm" className="text-xs h-8">
                  Détails
                </Button>
                <Button variant="outline" size="sm" className="text-xs h-8 bg-transparent">
                  Historique
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 text-center bg-transparent cursor-pointer hover:bg-muted/50 transition-colors">
          <Plus className="h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-sm font-medium">Lier un nouveau compte</p>
          <p className="text-xs text-muted-foreground">Banque ou Mobile Money</p>
        </Card>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle>Transactions Récentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full ${tx.type === "in" ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"}`}
                  >
                    {tx.type === "in" ? <ArrowDownLeft className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{tx.target}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.type === "in" ? "text-green-600" : "text-foreground"}`}>
                    {tx.type === "in" ? "+" : "-"}
                    {tx.amount} FCFA
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-6 text-primary hover:text-primary hover:bg-primary/5" asChild>
            <Link href="/dashboard/transactions">Voir tout l&apos;historique</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
