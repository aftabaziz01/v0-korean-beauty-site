export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

// Mock product data - in a real app, this would come from a database
const products: Product[] = [
  {
    id: "1",
    slug: "hydrating-essence-serum",
    name: "Hydrating Essence Serum",
    description:
      "Lightweight essence serum that deeply hydrates and brightens skin with hyaluronic acid and niacinamide",
    price: 42.0,
    image: "/korean-skincare-serum-bottle-minimal.jpg",
    category: "Serum",
  },
  {
    id: "2",
    slug: "gentle-foam-cleanser",
    name: "Gentle Foam Cleanser",
    description: "pH-balanced gentle foam cleanser that removes impurities while maintaining skin moisture barrier",
    price: 28.0,
    image: "/korean-cleanser-tube-clean-aesthetic.jpg",
    category: "Cleanser",
  },
  {
    id: "3",
    slug: "brightening-vitamin-c-cream",
    name: "Brightening Vitamin C Cream",
    description: "Antioxidant-rich cream with vitamin C that evens skin tone and boosts radiance",
    price: 56.0,
    image: "/korean-skincare-jar-cream-elegant.jpg",
    category: "Moisturizer",
  },
  {
    id: "4",
    slug: "calming-toner-mist",
    name: "Calming Toner Mist",
    description: "Soothing toner mist with centella asiatica and green tea extract for sensitive skin",
    price: 32.0,
    image: "/korean-toner-spray-bottle-minimal.jpg",
    category: "Toner",
  },
  {
    id: "5",
    slug: "repair-night-mask",
    name: "Repair Night Mask",
    description: "Intensive overnight mask that repairs and rejuvenates skin while you sleep",
    price: 48.0,
    image: "/korean-night-mask-jar-luxury.jpg",
    category: "Mask",
  },
  {
    id: "6",
    slug: "spf-50-sun-essence",
    name: "SPF 50+ Sun Essence",
    description: "Lightweight sun essence with broad spectrum protection and non-greasy finish",
    price: 35.0,
    image: "/korean-sunscreen-bottle-modern.jpg",
    category: "Sunscreen",
  },
  {
    id: "7",
    slug: "collagen-eye-cream",
    name: "Collagen Eye Cream",
    description: "Firming eye cream with marine collagen that reduces fine lines and dark circles",
    price: 44.0,
    image: "/korean-eye-cream-jar-premium.jpg",
    category: "Eye Care",
  },
  {
    id: "8",
    slug: "exfoliating-peel-pad",
    name: "Exfoliating Peel Pads",
    description: "Gentle chemical exfoliating pads with AHA and BHA for smooth, clear skin",
    price: 38.0,
    image: "/korean-toner-pads-container-clean.jpg",
    category: "Exfoliator",
  },
]

export async function getProducts({ limit, category }: { limit?: number; category?: string } = {}) {
  let filtered = products

  if (category) {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase())
  }

  if (limit) {
    filtered = filtered.slice(0, limit)
  }

  return filtered
}

export async function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null
}
