'use client'

import { useCartStore } from '@/lib/stores/cartStore'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CheckoutOrderSummary() {
  const cart = useCartStore((state) => state.cart)
  const total = useCartStore((state) => state.totalAmount)

  return (
    <div className="space-y-4 border-gray-400 rounded-xl border-2  px-4">
      <h2 className="lg:text-xl text-lg text-center font-semibold text-gray-900 border-b py-4">
        Order Summary
      </h2>

      <div className="space-y-4 border-b pb-4">
        {cart.map((item, index) => {
          const lineTotal = item.price * item.quantity

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-4"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src={item.images[0]}
                    alt={item.brand}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title + price + qty */}
              <div className="flex flex-1 flex-col justify-center">
                <p className="lg:text-base text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="lg:text-base text-sm text-gray-500">
                  {item.roastLevel} {item.weight}
                </p>
                {item.quantity > 1 && (
                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>
                )}
              </div>

              {/* Line total */}
              <div className="flex-shrink-0 text-right">
                <p className="lg:text-base text-sm font-bold text-gray-900">
                  ${lineTotal.toFixed(2)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className=' font-semibold'>
        <div className='flex justify-between'>
            <p>subtotal</p> 
            <p>{total}</p>
        </div>
        <div className='flex justify-between'>
            <p>Shiping</p>
            <p className='text-green-600'>Free</p>
        </div>
        <div className='flex justify-between'>
        </div>
        <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <p className='text-lg font-bold text-caffia'>{total}</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='bg-caffia font-bold text-white px-4 py-2 rounded-lg'>
            <Link className='inline-flex items-center gap-3' href={''} >Pay & Palce Order <MoveRight /></Link>
        </button>
      </div>
    </div>
  )
}
