import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "@/components/ui/AppImage";
import HeroBanner from "@/components/HeroBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionHeading from "@/components/landing/SectionHeading";
import ProductsUnavailable from "@/components/ProductsUnavailable";
import { getProducts } from "@/lib/api/products";
import { ProductResponse } from "@/lib/types/product";

export const metadata = {
  title: "Menu - Caffia",
  description: "Browse the full Caffia coffee menu — signature blends and instant coffees, crafted with care.",
};

// Group products by category, keeping the order the API returns them in
function groupByCategory(products: ProductResponse[]) {
  const groups = new Map<string, ProductResponse[]>();
  for (const product of products) {
    const key = product.category || "Other";
    groups.set(key, [...(groups.get(key) ?? []), product]);
  }
  return [...groups.entries()];
}

export default async function MenuPage() {
  const productsResponse = await getProducts();
  const categories = groupByCategory(productsResponse.data);

  return (
    <>
      <div className="page-container pt-6">
        <Breadcrumb separator={<ChevronRight size={14} />} capitalizeLinks />
      </div>

      <HeroBanner
        title="Our Menu"
        img="/assets/images/home-banner/roasted-coffee-beans-cinnamon.jpg"
        description="Signature blends and instant coffees — every one crafted with care, from bean to cup."
        subTitle="Caffia menu"
      />

      <section className="page-container py-16 md:py-24">
        <SectionHeading
          eyebrow="Drinks & delights"
          title="Pick your perfect cup"
          description="Browse our full coffee menu. Tap any item to see sizes, details and add it to your cart."
        />

        {categories.length === 0 ? (
          <ProductsUnavailable failed={productsResponse.failed} />
        ) : (
          <div className="mx-auto mt-14 max-w-5xl space-y-14">
            {categories.map(([category, items]) => (
              <div key={category}>
                {/* Category heading */}
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-heading text-2xl capitalize text-espresso md:text-3xl">
                    {category.toLowerCase()}
                  </h3>
                  <span className="h-px flex-1 bg-latte" />
                  <span className="text-sm text-roast">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Menu board rows */}
                <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/product/${item.slug}`}
                        className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-latte hover:bg-white hover:shadow-lg hover:shadow-espresso/5"
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-crema ring-1 ring-latte md:h-24 md:w-24">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            sizes="96px"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <h4 className="truncate font-heading text-lg text-espresso transition-colors group-hover:text-caffia md:text-xl">
                              {item.name}
                            </h4>
                            {/* Dotted leader, like a printed cafe menu */}
                            <span className="mb-1 min-w-6 flex-1 border-b-2 border-dotted border-latte" />
                            <span className="shrink-0 font-heading text-lg text-caffia md:text-xl">
                              ₹{item.startingPrice}
                            </span>
                          </div>
                          <div className="mt-1 flex items-center justify-between gap-2">
                            <p className="text-sm text-roast">
                              {item.defaultVariant?.weightGrams
                                ? `${item.defaultVariant.weightGrams}g · starting price`
                                : "Starting price"}
                            </p>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-caffia opacity-0 transition-opacity group-hover:opacity-100">
                              View <ArrowUpRight size={14} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Coffee flight CTA */}
      <section className="page-container pb-16 md:pb-24">
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] bg-espresso p-8 md:grid-cols-[1fr_auto] md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-caffia/50 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-caramel">Can&apos;t decide?</p>
            <h2 className="mt-3 font-heading text-3xl text-cream md:text-4xl">Try our Coffee Flight</h2>
            <p className="mt-3 max-w-xl text-crema/75 md:text-lg">
              Sample three of our signature coffees and discover your perfect match.
            </p>
          </div>
          <div className="relative flex flex-col items-start gap-3 md:items-end">
            <p className="font-heading text-4xl text-cream">₹799</p>
            <Link
              href="/product"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-caffia transition-colors hover:bg-white"
            >
              Explore coffees
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
