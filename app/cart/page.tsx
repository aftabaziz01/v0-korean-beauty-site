import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"

export default function CartPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-light mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
