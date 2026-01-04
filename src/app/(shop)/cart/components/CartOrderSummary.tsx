'use client'
import { useCartStore } from '@/lib/stores/cartStore'
import Link from 'next/link'
import React from 'react'

export default function OrderSummary() {
    const total = useCartStore((state) => state.totalAmount)
  return (
    <>
    <div className="w-full rounded-lg md:rounded-2xl bg-[#FBF5EF] p-4 md:p-5 shadow-sm border border-[#F1E3D6]">
  <h3 className="text-gray-800 font-semibold text-base md:text-lg mb-2 md:mb-4 border-b-2 pb-2 md:pb-3">
    Order Summary
  </h3>

  <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
    <div className="flex justify-between">
      <p className="text-gray-600">Subtotal</p>
      <p className="font-medium text-gray-800">₹{total}</p>
    </div>

    <div className="flex justify-between">
      <p className="text-gray-600">Shipping Estimate</p>
      <p className="font-medium text-emerald-600">Free</p>
    </div>

    <div className="flex justify-between">
      <p className="text-gray-600">Tax (5%)</p>
      <p className="font-medium text-gray-800 line-through">₹125</p>
    </div>
  </div>

  {/* divider */}
  <div className="my-2 md:my-4 border-t border-[#E2D4C5]" />

  {/* discount input */}
  <div className="flex gap-2 mb-3 md:mb-4">
    <input
      type="text"
      placeholder="Discount code"
      className="w-full rounded-lg border border-[#E2D4C5] bg-white px-2 md:px-3 py-2 text-xs md:text-sm outline-none focus:border-[#8B1A20]"
    />
    <button className="rounded-lg bg-[#F3E3D6] px-3 md:px-4 py-2 text-xs font-semibold text-gray-800 whitespace-nowrap">
      Apply
    </button>
  </div>

  {/* total */}
  <div className="flex items-baseline justify-between mb-1">
    <p className="text-sm md:text-base text-gray-800 font-medium">Total</p>
    <p className="text-xl md:text-2xl font-semibold text-[#8B1A20]">
     {total}
    </p>
  </div>
  <p className="text-[10px] md:text-[11px] text-gray-500 mb-3 md:mb-4">Including GST</p>

  {/* button */}
  <button className="w-full rounded-lg shadow shadow-caffia bg-caffia py-2 md:py-3 text-xs md:text-sm font-semibold text-white hover:bg-[#6D1217] transition">
    <Link href={'/checkout'}>
        Proceed to Checkout
    </Link>  
    </button>

  {/* footer */}
  <div className="mt-3 md:mt-4 flex flex-col items-center gap-2">
    <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-gray-500">
      <span className="h-2.5 md:h-3 w-2.5 md:w-3 rounded-full border border-amber-500" />
      <span>SSL Secured Checkout</span>
    </div>
    <div className="flex gap-2">
      <div className="h-4 md:h-5 w-6 md:w-8 rounded bg-gray-800" />
      <div className="h-4 md:h-5 w-6 md:w-8 rounded bg-gray-500" />
      <div className="h-4 md:h-5 w-6 md:w-8 rounded bg-gray-700" />
    </div>
  </div>
</div>

    </>
  )
}
