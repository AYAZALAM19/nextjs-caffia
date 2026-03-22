import { useCartStore } from '@/lib/stores/cartStore';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/types/product';

export default function AddToCart({product}:{product:Product}) {
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
                const variants = (product as any).variants;
                const variantId = (product as any).defaultVariant?.id;
                const weightGrams = (product as any).defaultVariant?.weightGrams;

                if (variantId) {
                    addToCart({variantId: variantId, quantity: 1})
                } else {
                    console.error("No variant found for this product.");
                }
             }}
             className=' flex gap-2 bg-caffia/85 text-white px-4 py-1 rounded-md duration-200'
             >
                <ShoppingCart /> <span className='font-semibold'>ADD</span>
            </button>
        )}
        {quantity > 0 && (
            <div className='flex gap-2 bg-caffia/85 text-white px-4 py-1 rounded-md duration-200'>
                <button onClick={() => updateQuantity(cartItem!.variantId, quantity - 1)}
                className=''
                 >
                    <Minus />
                </button>
                {quantity}
                <button onClick={() => updateQuantity(cartItem!.variantId, quantity + 1)}>
                    <Plus />
                </button>
            </div>
        )}
    </div>
  )
}
