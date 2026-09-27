import Image from '@/components/ui/AppImage';
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProducts } from "@/lib/api/products";
import SectionHeading from "./SectionHeading";

export default async function BestOptions() {
  const { data: products } = await getProducts();
  const picks = products.filter((item) => item.slug).slice(0, 5);

  if (picks.length === 0) return null;

  return (
    <section className="page-container py-16 md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Customer favourites"
          title="Order our best options"
        />
        <Link
          href="/product"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-caffia"
        >
          View all
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="scrollbar-hide -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5">
        {picks.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.slug}`}
            className="group w-40 shrink-0 snap-start text-center md:w-auto"
          >
            <div className="relative mx-auto aspect-square overflow-hidden rounded-full bg-crema ring-1 ring-latte transition-all duration-500 group-hover:ring-4 group-hover:ring-caramel/40">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 160px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 line-clamp-2 font-heading text-lg text-espresso transition-colors group-hover:text-caffia">
              {item.name}
            </p>
            <p className="mt-1 text-sm text-roast">from ₹{item.startingPrice}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
