import React from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CoffeeCard from "@/components/CoffeeCard";
import { ChevronRight } from 'lucide-react';
import ProductsUnavailable from "@/components/ProductsUnavailable";
import { getProducts } from "@/lib/api/products";

export const metadata = {
  title: "Shop Coffee Online — Flavoured Instant Coffee",
  description:
    "Buy Caffia 100% Arabica flavoured instant coffee online — Turkish Hazelnut, French Vanilla, Original Classic and more. Delivered across India.",
  alternates: { canonical: "/product" },
};

async function ProductsPage() {
  const productsResponse = await getProducts();
  const products = productsResponse.data;
  const failed = productsResponse.failed;

  return (
    <div className="page-container pb-20 pt-6">
      <Breadcrumb separator={<ChevronRight size={14} />} capitalizeLinks />

      <div className="mt-8 flex flex-col justify-between gap-4 border-b border-latte pb-8 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-caramel">Shop</p>
          <h1 className="font-heading text-4xl text-espresso md:text-5xl">All coffee</h1>
          <p className="mt-3 max-w-xl text-roast">
            Freshly roasted blends and instant coffees — pick your perfect cup.
          </p>
        </div>
        {!failed && <p className="text-sm text-roast">{products.length} products</p>}
      </div>

      {products.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <ProductsUnavailable failed={failed} />
      )}
    </div>
  );
}

export default ProductsPage;
