import React from "react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CoffeeCard from "@/components/CoffeeCard";
import { ChevronRight } from 'lucide-react';
import { ProductListResponse, Product } from "@/lib/types/product";

async function getProducts(): Promise<ProductListResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

async function ProductsPage() {
  const productsResponse = await getProducts();
  
  return (
    <div className="container mx-auto my-10 px-4">
      <Breadcrumb separator={<ChevronRight />} />
      <h2 className="text-center text-3xl lg:text-5xl uppercase text-caffia py-6">All Products</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsResponse.data.map((product) => (
            <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
