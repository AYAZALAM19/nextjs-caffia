import React from "react";
import { products, categories } from "@/data/products";
import CoffeeCard from "@/components/CoffeeCard";

function ProductsPage() {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-center lg:text-5xl uppercase text-caffia py-3.5 "> All Products</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
