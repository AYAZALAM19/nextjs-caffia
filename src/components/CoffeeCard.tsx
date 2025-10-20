'use client'
import React from 'react'
import { Product } from '@/lib/types/product'
import { IndianRupee } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/lib/stores/cartStore'

interface ProductCardProps {
  product: Product
}

function CoffeeCard({product}:ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  // const cart = useCartStore((state)=> state.cart)
  // console.log( 'cart data',cart)//
  // console.log('data added',addToCart)
  return (
    <div className="w-[300px] bg-caffia/10 px-2.5 py-2.5 rounded-lg">
      {/* Image */}
      <div className="">
        <Link href={`/product/${product.slug}`} className="text-Greytext hover:underline">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={100}
          className="object-cover object-center rounded-md"
        />
        </Link>
      </div>

      {/* Info */}
      <div className="col-span-2 flex flex-col justify-between px-2.5 py-2.5">
        <h2 className="lg:text-lg text-base font-semibold text-caffia ">{product.title}</h2>

        <div className="flex justify-between items-center py-2 gap-32">
          <p className="text-lg font-semibold inline-flex items-center"><IndianRupee strokeWidth={2} size={20} />{product.price}</p>
          {product.originalPrice && (
            <p className=' line-through text-lg font-semibold inline-flex items-center '><IndianRupee strokeWidth={2} size={20} />{product.originalPrice}</p>
          )}
        </div>

        <div className="flex justify-between items-center gap-4 mt-2">
          <Link href={`/product/${product.slug}`} className="text-Greytext font-semibold hover:underline">
            View Product
          </Link>
          <button className="bg-caffia text-white px-3 py-1 rounded-md hover:bg-caffia/50"
          onClick={() =>{ addToCart(product)
            console.log(product)
          }}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard