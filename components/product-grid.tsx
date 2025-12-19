import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getProducts } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductGridProps {
  limit?: number
  category?: string
}

export async function ProductGrid({ limit, category }: ProductGridProps) {
  const products = await getProducts({ limit, category })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
          <Link href={`/products/${product.slug}`}>
            <div className="aspect-square relative overflow-hidden bg-muted">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
            </div>
          </Link>
          <CardContent className="p-4">
            <Link href={`/products/${product.slug}`}>
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
            </Link>
            <p className="text-lg font-semibold">${product.price}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <AddToCartButton product={product} />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
