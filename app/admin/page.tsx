import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, ArrowRightLeft, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"

export default function AdminOverview() {
  const stats = [
    { title: "Opérateurs Actifs", value: "12", icon: Building2, trend: "+1", trendType: "up" },
    { title: "Utilisateurs Totaux", value: "45,230", icon: Users, trend: "+12%", trendType: "up" },
    { title: "Transactions (24h)", value: "1,204", icon: ArrowRightLeft, trend: "+5%", trendType: "up" },
    { title: "Alertes Système", value: "2", icon: AlertTriangle, trend: "-15%", trendType: "down" },
  ]

  const operators = [
    { name: "Orange Money", status: "Online", transactions: "450", health: "98%" },
    { name: "MTN MoMo", status: "Online", transactions: "380", health: "97%" },
    { name: "Banque Atlantique", status: "Online", transactions: "210", health: "99%" },
    { name: "Express Union", status: "Maintenance", transactions: "45", health: "85%" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Vue d&apos;ensemble du Système</h1>
        <p className="text-muted-foreground">Suivi en temps réel des performances multi-opérateurs.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs mt-1">
                {stat.trendType === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={stat.trendType === "up" ? "text-green-500" : "text-red-500"}>{stat.trend}</span>
                <span className="text-muted-foreground ml-1">depuis hier</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">État des Opérateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {operators.map((op, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${op.status === "Online" ? "bg-green-500" : "bg-amber-500"}`}
                    />
                    <span className="font-medium text-sm">{op.name}</span>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">Transactions</span>
                      <span className="font-bold">{op.transactions}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-muted-foreground">Santé</span>
                      <span className="font-bold">{op.health}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Activités Récentes du Système</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-4 items-start pb-4 border-b last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <ArrowRightLeft className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Transaction Inter-Opérateur Réussie</p>
                    <p className="text-xs text-muted-foreground">Orange Money vers Banque Atlantique - 25,000 FCFA</p>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase">Il y a 5 minutes</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
