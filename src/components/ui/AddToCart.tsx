'use client';

import { useCartStore } from '@/lib/stores/cartStore';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '@/lib/types/product';
import { useSession } from "next-auth/react";
import { toast } from "@/components/ui/sonner";

export default function AddToCart({product}:{product:Product}) {
    const { status } = useSession();
    const addToCart = useCartStore((state) => state.addItemToCart);

    const updateQuantity = useCartStore((state) => state.updateItemQuantity);
    const cart  = useCartStore((state) => state.cartData?.items) || [];

    const cartItem = cart.find((item) => item.variant.id ===(product as any).defaultVariant?.id)
    const quantity = cartItem?.quantity || 0;

  return (
    <div>
        {quantity === 0 && (
            <button
             onClick={() => {
                if (status !== 'authenticated') {
                    toast.error('Please login to add items to cart');
                    return;
                }
                const variants = (product as any).variants;
                const variantId = (product as any).defaultVariant?.id;
                const weightGrams = (product as any).defaultVariant?.weightGrams;

                if (variantId) {
                    addToCart({variantId: variantId, quantity: 1})
                } else {
                    console.error("No variant found for this product.");
                }
             }}
             className='inline-flex items-center gap-1.5 rounded-full bg-caffia px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream transition-colors duration-200 hover:bg-caffia-dark cursor-pointer'
             aria-label='Add to cart'
             >
                <ShoppingBag size={15} /> Add
            </button>
        )}
        {quantity > 0 && (
            <div className='inline-flex items-center gap-3 rounded-full bg-caffia px-2 py-1.5 text-sm font-bold text-cream'>
                <button onClick={() => {
                    if (status !== 'authenticated') {
                        toast.error('Please login to update cart');
                        return;
                    }
                    updateQuantity(cartItem!.variantId, quantity - 1)
                }}
                className='grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-white/15'
                aria-label='Decrease quantity'
                 >
                    <Minus size={14} />
                </button>
                <span className='min-w-4 text-center tabular-nums'>{quantity}</span>
                <button onClick={() => {
                    if (status !== 'authenticated') {
                        toast.error('Please login to update cart');
                        return;
                    }
                    updateQuantity(cartItem!.variantId, quantity + 1)
                }}
                className='grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-white/15'
                aria-label='Increase quantity'
                >
                    <Plus size={14} />
                </button>
            </div>
        )}
    </div>
  )
}
