
import Link from "next/link";
import CoffeeCard from "@/components/CoffeeCard";
import { products } from "@/data/products";
import { type FC } from 'react';

export default function PremiumCollection() {
  return (
    <section className="my-8 md:my-10 bg-pink-300/10 container mx-auto px-3 md:px-4">
      <div>
        <h2 className="text-center font-bold font-heading capitalize text-caffia text-xl md:text-3xl lg:text-5xl py-4 md:py-6">
          Premium Coffee Collection
        </h2>
        <p className="font-medium text-grey text-sm md:text-base text-center">
          Discover our most popular coffee blends, carefully selected for
          their exceptional quality and taste.
        </p>
      </div>
      <div className="flex my-6 md:my-8 justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 md:gap-4 place-items-center">
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mb-2 md:mb-4">
        <Link href="/product">
          <button className="hover:bg-amberLight text-amber duration-300 border-amberLight border bg-white font-body font-semibold hover:text-white py-2 px-4 text-sm md:text-base rounded-lg">
            View All Product
          </button>
        </Link>
      </div>
    </section>
  );
};

