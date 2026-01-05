import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, PieChart, Activity, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analyses & Rapports</h1>
          <p className="text-muted-foreground">Rapports consolidés basés sur le patron Visiteur (Objectif 10).</p>
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Download className="h-4 w-4" /> Export PDF
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-md">Volume par Opérateur</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-20" />
              <p>Visualisation des parts de marché (Données simulées)</p>
              <div className="mt-4 flex gap-4 text-xs justify-center">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full" /> Orange
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-accent rounded-full" /> MTN
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-secondary rounded-full" /> Banques
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-md">Détection de Fraude</CardTitle>
            <Activity className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 border rounded-lg bg-destructive/5 border-destructive/20"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-bold">Activité Suspecte #00{i}</p>
                    <p className="text-xs text-muted-foreground">Retraits multiples en moins de 5 min</p>
                  </div>
                  <Button size="sm" variant="destructive">
                    Bloquer
                  </Button>
                </div>
              ))}
              <p className="text-xs text-center text-muted-foreground mt-4">
                Analyse automatisée en cours sur l&apos;ensemble du réseau.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
