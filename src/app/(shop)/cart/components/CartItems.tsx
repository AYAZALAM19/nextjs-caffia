import { useCartStore } from '@/lib/stores/cartStore'
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react'; // or use any icon library

export default function CartItems() {
    const cartData = useCartStore((state) => state.cartData?.items);
    const removeAsync = useCartStore((state) => state.removItemFromCart);
    const updateQuantityAsync = useCartStore((state) => state.updateItemQuantity); // make sure this exists in your store
    // Array banate hain wapas un items ka taaki map aaram se chale

    const items = cartData || [];
    return (
        <>
            {items.map((item, index) => (
                <div key={index} className='flex lg:flex-row flex-col items-center mb-3 gap-4 rounded-xl bg-white p-4 border border-gray-200 shadow-sm'>
                    {/* Product Image */}
                    <div className='flex items-center w-full lg:w-auto gap-4'>
                        <Image
                            src={item?.variant?.product?.imageUrl || '/assets/images/products/product-1.webp'}
                            width={80}
                            height={80}
                            alt={item.variant.product.name || (item as any).title}
                            className='rounded-lg object-cover w-20 h-20'
                        />
                        <div className='lg:hidden flex-1'>
                            <h4 className='font-semibold text-gray-800 text-sm'>{item.variant.product.name}</h4>
                            <p className='text-xs text-gray-500 uppercase tracking-tight'>
                                {item.variant.product.category}
                            </p>
                            <button
                                onClick={() => {
                                    removeAsync(item.variant.id)
                                }}
                                className='text-red-600 text-xs flex items-center gap-1 mt-1 font-medium'
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                    </div>

                    {/* Product Details (Desktop) */}
                    <div className='flex-1 lg:block hidden'>
                        <h4 className='font-semibold text-gray-800 text-sm mb-1'>
                            {item.variant.product.name || (item as any).title}
                        </h4>
                        <p className='text-xs text-gray-500'>
                            {item.variant.weightGrams}
                        </p>
                    </div>

                    {/* Quantity Controls and Price */}
                    <div className='flex items-center justify-between w-full lg:w-auto gap-6'>
                        <div className='flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-1.5'>
                            <button
                                onClick={() => {
                                    updateQuantityAsync(item.variantId, item.quantity - 1)
                                }}
                                disabled={(item.quantity || 1) <= 1}
                                className='text-gray-600 hover:text-gray-800 disabled:opacity-30'
                            >
                                <Minus size={14} />
                            </button>
                            <span className='text-sm font-medium min-w-6 text-center'>
                                {item.quantity || 1}
                            </span>
                            <button
                               onClick={() => {
                                updateQuantityAsync(item.variantId, item.quantity + 1)
                            }}
                                className='text-gray-600 hover:text-gray-800'
                            >
                                <Plus size={14} />
                            </button>
                        </div>

                        <div className='font-semibold text-gray-800 text-base'>
                            ₹{item.itemTotal}
                        </div>

                        <button
                        onClick={() => {
                            removeAsync(item.variantId)
                        }}
                            className='text-gray-400 lg:block hidden hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition'
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
