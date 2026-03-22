import CoffeeCard from "../CoffeeCard";
import React from 'react'
import { ProductListResponse } from "@/lib/types/product";

async function getProducts(): Promise<ProductListResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error();
    return res.json();
  } catch(error) {
    return { data: [], page: 1, limit: 10, total: 0 };
  }
}

export default async function FeaturedProducts() {
  const productsResponse = await getProducts();
  const products = productsResponse.data.slice(0, 3); // Showing 3 featured products

  return (
    
    <div className="mx-auto">
        <h2 className="text-center font-semibold text-caffia lg:text-5xl text-lg my-8 uppercase">Premium Coffee Collection</h2>
      <p className="text-center my-8 font-medium lg:text-lg text-base">
        Discover our most popular coffee blends, carefully selected for their exceptional quality and taste.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {products.map((product) => (
            <CoffeeCard key={product.id} product={product as any} />
        ))}
      </div>
    </div>
   
  )
}

