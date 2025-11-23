import React from 'react'
import { useCartStore } from '@/lib/stores/cartStore';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types/product';

export default function AddToCart({product}:{product:Product}) {
    const addToCart = useCartStore((state) => state.addToCart);

    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const cart  = useCartStore((state) => state.cart)

    const cartItem = cart.find((item) => item.id === product.id)
    const quantity = cartItem?.quantity || 0;

  return (
    <div>
        {quantity === 0 && (
            <button
             onClick={() => addToCart(product)}
             className=' flex gap-2 bg-caffia/85 text-white px-4 py-1 rounded-md duration-200'
             >
                <ShoppingCart /> <span className='font-semibold'>ADD</span>
            </button>
        )}
        {quantity > 0 && (
            <div className='flex gap-2 bg-caffia/85 text-white px-4 py-1 rounded-md duration-200'>
                <button onClick={() => updateQuantity(product.id, quantity - 1)}
                className=''
                 >
                    <Minus />
                </button>
                {quantity}
                <button onClick={() => updateQuantity(product.id, quantity + 1)}>
                    <Plus />
                </button>
            </div>
        )}
    </div>
  )
}
