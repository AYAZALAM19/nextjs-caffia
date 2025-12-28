
import Link from "next/link";
import CoffeeCard from "@/components/CoffeeCard";
import { products } from "@/data/products";
import { type FC } from 'react';

export default function PremiumCollection() {
  return (
    <section className="my-20 bg-pink-300/10 container mx-auto">
      <div>
        <h2 className="text-center font-bold font-heading capitalize text-caffia md:text-5xl text-lg py-8">
          Premium Coffee Collection
        </h2>
        <p className="font-semibold text-grey7 md:text-xl text-base md:px-80 text-center">
          Discover our most popular coffee blends, carefully selected for
          their exceptional quality and taste.
        </p>
      </div>
      <div className="container mx-auto flex my-10 justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link href="/product">
          <button className="hover:bg-amberLight text-amber duration-300 border-amberLight border bg-white font-body font-semibold hover:text-white py-2 px-4 rounded-lg">
            View All Product
          </button>
        </Link>
      </div>
    </section>
  );
};

