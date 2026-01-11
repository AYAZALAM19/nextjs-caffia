import { useCartStore, type CartItem } from '@/lib/stores/cartStore'
import { ShieldCheck, Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CheckoutOrderSummaryProps {
  shippingCost?: number
  isSubmitting?: boolean
  hideButton?: boolean
  items?: CartItem[]
  subtotal?: number
}

export default function CheckoutOrderSummary({
  shippingCost = 0,
  isSubmitting = false,
  hideButton = false,
  items,
  subtotal
}: CheckoutOrderSummaryProps) {
  const storeCart = useCartStore((state) => state.cart)
  const storeSubtotal = useCartStore((state) => state.totalAmount)

  const cart = items || storeCart
  const displaySubtotal = subtotal !== undefined ? subtotal : storeSubtotal
  const finalTotal = displaySubtotal + shippingCost

  // Helper for consistent currency formatting
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price)

  return (
    // 1. Shadow aur Border ko thoda light kiya aur background ko subtle gray
    <div className="space-y-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-10">
      <h2 className="text-xl font-bold text-gray-800 tracking-tight">
        Order Summary
      </h2>

      {/* 2. Scrollable area agar cart items zyada hon */}
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-5 custom-scrollbar">
        {cart.map((item, index) => {
          const lineTotal = item.price * item.quantity
          return (
            <div key={item.id} className="flex items-start justify-between gap-4 group">
              <div className="flex gap-4">
                {/* Product Image with Badge for Quantity */}
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                  <Image
                    src={item.images[0]}
                    alt={item.brand}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {item.quantity > 1 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-[10px] font-bold text-white shadow-lg">
                      {item.quantity}
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 italic">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.roastLevel} | {item.weight}
                  </p>
                </div>
              </div>

              <p className="text-sm font-bold text-gray-900">
                {formatPrice(lineTotal)}
              </p>
            </div>
          )
        })}
      </div>

      <hr className="border-gray-100" />

      {/* 3. Pricing Details Section */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span className="font-medium text-gray-900">{formatPrice(displaySubtotal)}</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Shipping</span>
          <span className={`font-medium tracking-wide ${shippingCost === 0 ? 'text-green-600' : 'text-gray-900'}`}>
            {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
          </span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Estimated Tax</span>
          <span className="font-medium text-gray-900">{formatPrice(0)}</span>
        </div>

        <div className="flex justify-between pt-3 border-t border-gray-100 mt-2">
          <p className="text-lg font-black text-gray-900 uppercase">Total</p>
          <div className="text-right">
            <p className="text-xl font-black text-caffia">{formatPrice(finalTotal)}</p>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">Including VAT</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      {!hideButton && (
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 flex items-center justify-center bg-caffia text-white font-bold rounded-xl transition-all duration-300 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Continue to Payment'
          )}
        </button>
      )}

      {/* 4. Trust Signal */}
      {!hideButton && (
        <div className="flex items-center justify-center gap-2 pt-2">
          <ShieldCheck size={16} className="text-gray-400" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Secure Checkout Encrypted
          </span>
        </div>
      )}
    </div>
  )
}