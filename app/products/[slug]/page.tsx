import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductBySlug, getProducts } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Star } from "lucide-react"

export async function generateStaticParams() {
  const products = await getProducts({})
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden bg-muted rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${product.image}')` }}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>

            <p className="text-3xl font-semibold mb-6">${product.price}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Deeply hydrates and nourishes skin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Improves skin texture and radiance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Contains premium Korean ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dermatologically tested and approved</span>
                </li>
              </ul>
            </div>

            <AddToCartButton product={product} className="text-lg h-12" />

            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-3">Product Details:</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Volume:</dt>
                  <dd className="font-medium">50ml / 1.69 fl oz</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Origin:</dt>
                  <dd className="font-medium">Made in Korea</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping:</dt>
                  <dd className="font-medium">Free worldwide shipping</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
