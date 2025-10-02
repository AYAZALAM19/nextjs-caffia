export interface Product {
  id: string;
  slug: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  flavor: string;
  roastLevel: string;
  weight: string;
  category: string;
  availability: 'available' | 'unavailable';
  features: string[];
  description: string;
  specifications: {
    itemForm: string;
    packageInfo: string;
    dietType: string;
    specialty: string;
    numberOfItems: number;
  };
}


export const products: Product [] =[
    {
        id:'1',
        slug: "caffia-turkish-hazelnut-instant-coffee",
        title: "CAFFIA Turkish Hazelnut Premium Instant Coffee",
        brand: "CAFFIA",
        price: 399,
        originalPrice: 499,
        images: [
            "/assets/images/products/product-1.jpeg",
            "/assets/images/products/product-2.jfif"
            ],
        flavor: "Turkish Hazelnut",
        roastLevel: "Medium Roast",
        weight: "50g",
        category: "instant-coffee",
        availability: "unavailable",
        features: [ "100% Arabica", "Freeze Dried Coffee Powder", "Preservatives Free", "Smooth & Rich Taste"],
       description: "Made with Arabica coffee beans and roasted ground coffee, this Turkish Hazelnut coffee offers a      smooth, sweet flavor with every sip.",
       specifications: {
            itemForm: "Powder",
            packageInfo: "Glass Bottle",
            dietType: "Vegetarian",
            specialty: "Preservatives Free",
            numberOfItems: 1
         }
  },
  {
    id: '2',
    slug: "caffia-french-vanilla-instant-coffee",
    title: "CAFFIA French Vanilla Premium Instant Coffee",
    brand: "CAFFIA",
    price: 399,
    originalPrice: 499,
    images: ["/assets/images/products/product-3.jfif"],
    flavor: "French Vanilla",
    roastLevel: "Medium Roast",
    weight: "50g",
    category: "instant-coffee",
    availability: "unavailable",
    features: ["100% Arabica", "Freeze Dried", "Rich Vanilla Flavor"],
    description: "Premium French Vanilla instant coffee with smooth, creamy vanilla notes.",
    specifications: {
      itemForm: "Powder",
      packageInfo: "Glass Bottle",
      dietType: "Vegetarian",
      specialty: "Preservatives Free",
      numberOfItems: 1
    }
  },
  {
    id: "3",
    slug: "caffia-original-classic-instant-coffee",
    title: "CAFFIA Original Classic Premium Instant Coffee",
    brand: "CAFFIA",
    price: 399,
    originalPrice: 499,
    images: ["/assets/images/products/product-4.jfif"],
    flavor: "Original Classic",
    roastLevel: "Medium Roast",
    weight: "50g",
    category: "instant-coffee",
    availability: "unavailable",
    features: ["100% Arabica", "Classic Taste", "No Preservatives"],
    description: "Classic instant coffee with traditional rich flavor and aroma.",
    specifications: {
      itemForm: "Powder",
      packageInfo: "Glass Bottle",
      dietType: "Vegetarian",
      specialty: "Preservatives Free",
      numberOfItems: 1
    }
  }
]

export const categories = [
  { slug: "instant-coffee", name: "Instant Coffee", count: 3 },
  { slug: "ground-coffee", name: "Ground Coffee", count: 0 },
  { slug: "coffee-beans", name: "Coffee Beans", count: 0 }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}