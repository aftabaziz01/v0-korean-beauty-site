import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BusinessPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Business Area</h1>
            <p className="text-xl text-muted-foreground">
              Global distribution and export services for premium Korean beauty products
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-[url('/world-map-business-global-network.jpg')] bg-cover bg-center" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 text-center">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold">ODM</span>
                </div>
                <h3 className="font-semibold mb-2">Product Development</h3>
                <p className="text-sm text-muted-foreground">
                  Original design and manufacturing services for custom beauty products
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold">OEM</span>
                </div>
                <h3 className="font-semibold mb-2">Private Label</h3>
                <p className="text-sm text-muted-foreground">
                  Custom branding and packaging solutions for your business
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold">B2B</span>
                </div>
                <h3 className="font-semibold mb-2">Bulk Export</h3>
                <p className="text-sm text-muted-foreground">
                  Wholesale distribution to retailers and distributors worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
