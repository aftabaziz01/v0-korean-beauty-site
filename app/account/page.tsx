import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package, User, MapPin, Heart } from "lucide-react"

export default function AccountPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-light mb-8">My Account</h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-6 h-6 text-primary" />
                <CardTitle>Orders</CardTitle>
              </div>
              <CardDescription>Track and manage your orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/account/orders">View Orders</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <User className="w-6 h-6 text-primary" />
                <CardTitle>Profile</CardTitle>
              </div>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/account/profile">Edit Profile</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-6 h-6 text-primary" />
                <CardTitle>Addresses</CardTitle>
              </div>
              <CardDescription>Manage shipping addresses</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/account/addresses">Manage Addresses</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-6 h-6 text-primary" />
                <CardTitle>Wishlist</CardTitle>
              </div>
              <CardDescription>View your saved products</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/account/wishlist">View Wishlist</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
