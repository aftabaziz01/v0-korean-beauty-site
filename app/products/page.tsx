import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our complete collection of premium Korean beauty products
          </p>
        </div>

        {/* Filter/Sort Section */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="outline">All Products</Button>
          <Button variant="ghost">Skincare</Button>
          <Button variant="ghost">Cosmetics</Button>
          <Button variant="ghost">Serums</Button>
          <Button variant="ghost">Cleansers</Button>
        </div>

        <ProductGrid />
      </div>

      <Footer />
    </main>
  )
}
