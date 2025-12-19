import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, Sparkles, Globe2, Award } from "lucide-react"
import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-accent/30 to-background">
        <div className="absolute inset-0 bg-[url('/minimal-korean-beauty-aesthetic-clean.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Premium K-Beauty</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 text-balance leading-tight">
            Discover the art of Korean beauty
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience premium global leader in cosmetics and skincare. Innovative formulations crafted for radiant,
            healthy skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-base px-8">
              <Link href="/products">
                Shop Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent">
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Export Specialist</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trusted worldwide for premium Korean beauty products with international shipping.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Carefully curated selection of innovative formulations and luxury ingredients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Shopping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy ordering with secure checkout and tracked delivery to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance">Featured Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our curated collection of premium Korean skincare and cosmetics
            </p>
          </div>
          <ProductGrid limit={6} />
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">The beginning of the unique</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                THE BOU COMPANY is a premium global leader in cosmetics exports. We specialize in bringing the finest
                Korean beauty innovations to customers worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our carefully selected products represent the pinnacle of K-beauty excellence, combining traditional
                wisdom with cutting-edge technology for exceptional results.
              </p>
              <Button asChild>
                <Link href="/about">
                  Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/korean-beauty-products-elegant-display.jpg')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
