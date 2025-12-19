import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Globe2, Award, Users, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative py-24 bg-accent/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-light mb-6">About THE BOU Co.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An export specialist and premium global leader in Korean beauty products
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">The Beginning of the Unique</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              THE BOU COMPANY specializes in exporting premium Korean cosmetics and skincare products. We bridge Eastern
              beauty wisdom with global markets, delivering innovative formulations that have made K-beauty a worldwide
              phenomenon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <Globe2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Serving customers in over 30 countries with reliable international shipping and support.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Carefully curated selection of award-winning products from top Korean brands.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beauty specialists with deep knowledge of Korean skincare and cosmetics.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Always at the forefront of K-beauty trends and breakthrough ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-light text-center mb-12">Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product we export is 100% authentic, sourced directly from verified Korean manufacturers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We maintain the highest standards in product selection, packaging, and customer service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building long-term relationships with customers worldwide through transparency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
