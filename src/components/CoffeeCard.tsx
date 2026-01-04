'use client'
import React from 'react'
import { Product } from '@/lib/types/product'
import { IndianRupee } from 'lucide-react'
import AddToCart from './ui/AddToCart'
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
    <div className="w-full max-w-xs bg-caffia/10 px-2.5 py-2.5 rounded-lg">
      {/* Image - Fixed aspect ratio */}
      <div className="relative w-full aspect-square bg-gray-200 rounded-md overflow-hidden mb-2">
        <Link href={`/product/${product.slug}`} className="text-Greytext hover:underline block w-full h-full">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          priority={true}
          className="object-cover object-center hover:scale-105 transition-transform duration-300"
        />
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between px-2 py-2">
        <h2 className="lg:text-base text-sm font-semibold text-caffia line-clamp-2">{product.title}</h2>

        <div className="flex justify-between items-center py-2 gap-4 mt-1">
          <p className="text-base md:text-lg font-semibold inline-flex items-center gap-0.5"><IndianRupee strokeWidth={2} size={16} />{product.price}</p>
          {product.originalPrice && (
            <p className='line-through text-sm font-semibold inline-flex items-center gap-0.5'><IndianRupee strokeWidth={2} size={14} />{product.originalPrice}</p>
          )}
        </div>

        <div className="flex justify-between items-center gap-2 mt-2 flex-wrap">
          <Link href={`/product/${product.slug}`} className="text-Greytext font-semibold text-xs md:text-sm hover:underline">
            View Product
          </Link>
          <div>
            <AddToCart product={product}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard