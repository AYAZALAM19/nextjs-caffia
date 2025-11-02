import React from "react";
import { products, categories } from "@/data/products";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CoffeeCard from "@/components/CoffeeCard";
import {ChevronRight} from 'lucide-react'

function ProductsPage() {
  return (
    <div className="container mx-auto my-10">
      <Breadcrumb separator={<ChevronRight />} />
      <h2 className="text-center lg:text-5xl uppercase text-caffia py-3.5 "> All Products</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
