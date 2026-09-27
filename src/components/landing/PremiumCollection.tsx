import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CoffeeCard from "@/components/CoffeeCard";
import { getProducts } from "@/lib/api/products";
import SectionHeading from "./SectionHeading";

export default async function PremiumCollection() {
  const { data } = await getProducts();
  const products = data.slice(0, 4);

  if (products.length === 0) return null;

  return (
    <section className="bg-crema/60 py-16 md:py-24">
      <div className="page-container">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Premium coffee collection"
          description="Our most-loved blends, carefully selected for their exceptional quality and taste."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/product"
            className="group inline-flex items-center gap-2 rounded-full border border-espresso/20 bg-white px-7 py-3.5 text-sm font-semibold text-espresso transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
          >
            View all products
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
