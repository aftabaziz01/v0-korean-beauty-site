import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OrdersPage() {
  // This would come from a database in a real app
  const orders = [
    {
      id: "ORD-2024-001",
      date: "Dec 15, 2024",
      status: "delivered",
      total: 89.99,
      items: 3,
    },
    {
      id: "ORD-2024-002",
      date: "Dec 10, 2024",
      status: "in-transit",
      total: 124.5,
      items: 2,
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/account" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Account
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-light mb-8">Order History</h1>

        <div className="max-w-3xl space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Placed on {order.date}</p>
                  </div>
                  <Badge variant={order.status === "delivered" ? "default" : "secondary"}>
                    {order.status === "delivered" ? "Delivered" : "In Transit"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <p className="text-muted-foreground">
                      {order.items} items • ${order.total}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
