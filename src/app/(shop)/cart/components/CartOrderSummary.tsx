'use client'
import { useCartStore } from '@/lib/stores/cartStore'
import Link from 'next/link'
import React from 'react'

export default function OrderSummary() {
    const total = useCartStore((state) => state.totalAmount)
  return (
    <>
    <div className="max-w-xs rounded-2xl bg-[#FBF5EF] p-6 shadow-sm border border-[#F1E3D6]">
  <h3 className="text-gray-800 font-semibold text-lg mb-4 border-b-2 pb-3 ">
    Order Summary
  </h3>

  <div className="space-y-2 text-sm">
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
  <div className="my-4 border-t border-[#E2D4C5]" />

  {/* discount input */}
  <div className="flex gap-2 mb-4">
    <input
      type="text"
      placeholder="Discount code"
      className="w-full rounded-lg border border-[#E2D4C5] bg-white px-3 py-2 text-sm outline-none focus:border-[#8B1A20]"
    />
    <button className="rounded-lg bg-[#F3E3D6] px-4 py-2 text-xs font-semibold text-gray-800">
      Apply
    </button>
  </div>

  {/* total */}
  <div className="flex items-baseline justify-between mb-1">
    <p className="text-base text-gray-800 font-medium">Total</p>
    <p className="text-2xl font-semibold text-[#8B1A20]">
     {total}
    </p>
  </div>
  <p className="text-[11px] text-gray-500 mb-4">Including GST</p>

  {/* button */}
  <button className="w-full rounded-lg shadow shadow-caffia bg-caffia py-3 text-sm font-semibold text-white hover:bg-[#6D1217] transition">
    <Link href={'/checkout'}>
        Proceed to Checkout
    </Link>  
    </button>

  {/* footer */}
  <div className="mt-4 flex flex-col items-center gap-2">
    <div className="flex items-center gap-2 text-[11px] text-gray-500">
      <span className="h-3 w-3 rounded-full border border-amber-500" />
      <span>SSL Secured Checkout</span>
    </div>
    <div className="flex gap-2">
      <div className="h-5 w-8 rounded bg-gray-800" />
      <div className="h-5 w-8 rounded bg-gray-500" />
      <div className="h-5 w-8 rounded bg-gray-700" />
    </div>
  </div>
</div>

    </>
  )
}
