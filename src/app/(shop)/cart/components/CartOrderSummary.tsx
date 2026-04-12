'use client'
import { useCartStore } from '@/lib/stores/cartStore'
import { useSession } from 'next-auth/react'
import LoginDrawer from '@/components/auth/LoginDrawer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import AddressSelector from '@/components/AddressSelector'
import Link from 'next/link'

export default function OrderSummary() {
    const total = useCartStore((state) => state.cartData?.cartTotal || "0")
    const clearCart = useCartStore((state) => state.clearCart)
    const { status } = useSession()
    const isAuthenticated = status === "authenticated"
    const router = useRouter()

    const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheckout = async () => {
        if (!selectedAddressId) {
            toast.error("Please select a delivery address");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/checkout', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ addressId: selectedAddressId })
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message || "Order Placed Successfully");
                clearCart();
                router.push(`/thank-you?orderCode=${result.data?.publicOrderCode || result.publicOrderCode}`);
            } else {
                toast.error(result.message || "Failed to place order");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            toast.error("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    }

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
                    <Link href="/checkout" className='block w-full rounded-lg shadow shadow-caffia bg-caffia py-2 md:py-3 text-xs md:text-sm font-semibold text-white hover:bg-[#6D1217] transition text-center'>
                        Proceed to Checkout
                    </Link>

                {/* footer */}
                <div className="mt-3 md:mt-4 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-gray-500">
                        <span className="h-2.5 md:h-3 w-2.5 md:w-3 rounded-full border border-amber-500" />
                        <span>SSL Secured Checkout</span>
                    </div>
                </div>
            </div>
        </>
    )
}
