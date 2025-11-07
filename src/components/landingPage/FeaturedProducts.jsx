  'use client'
  import CoffeeCard from "../CoffeeCard";
  import { products } from "@/data/products";
  import React from 'react'

  export default function FeaturedProducts() {
    return (
      
      <div className="mx-auto">
          <h2 className="text-center font-semibold text-caffia lg:text-5xl text-lg my-8 uppercase">Premium Coffee Collection</h2>
        <p className="text-center my-8 font-medium lg:text-lg text-base">
          Discover our most popular coffee blends, carefully selected for their exceptional quality and taste.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          {products.map((product) => (
              <CoffeeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
     
    )
  }

