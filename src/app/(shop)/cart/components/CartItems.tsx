import { useCartStore } from '@/lib/stores/cartStore'
import { Product } from '@/lib/types/product';
import Image from 'next/image';
import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'; // or use any icon library

export default function CartItems() {
    const items = useCartStore((state) => state.cart);
    const remove = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity); // make sure this exists in your store

    return (
        <>
            {items.map((item: Product, index) => (
                <div key={index} className='flex lg:flex-row flex-col items-center mb-3 gap-4 rounded-xl bg-white p-4 border border-gray-200 shadow-sm'>
                    {/* Product Image */}
                    <div className='flex items-center'>
                        <Image
                            src={item.images[0]}
                            width={80}
                            height={80}
                            alt={item.title}
                            className='rounded-lg object-cover'
                        /> 
                        <div className='lg:hidden block'>
                            <h4>{item.title}</h4>
                             <button
                        onClick={() => remove(item.id)}
                        className='text-gray-400 lg:hidden block group hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition'
                    >
                        <p className='flex items-center gap-3'>
                        <Trash2 className='text-red-600' size={18} /> <span className='lg:hidden block text-red-600group-hover:text-red-600'>Remove</span>
                        </p>
                    </button>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className='flex-1 lg:block hidden'>
                        <h4 className='font-semibold text-gray-800 text-sm mb-1'>
                            {item.title}
                        </h4>
                        <p className='text-xs text-gray-500'>
                            Dark Roast • Whole Bean
                        </p>
                        <p className='text-xs text-gray-500'>
                            {item.weight || '250g Pack'}
                        </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className='flex justify-between gap-3.5'>
                        <div className='flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-1.5'>
                        <button
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                            disabled={(item.quantity || 1) <= 1}
                            className='text-gray-600 hover:text-gray-800 disabled:opacity-30'
                        >
                            <Minus size={14} />
                        </button>
                        <span className='text-sm font-medium w-6 text-center'>
                            {item.quantity || 1}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                            className='text-gray-600 hover:text-gray-800'
                        >
                            <Plus size={14} />
                        </button>
                    </div>

                    {/* Price */}
                    <div className='font-semibold text-gray-800 text-base'>
                        ₹{item.price}
                    </div>

                    {/* Delete Button */}
                    <button
                        onClick={() => remove(item.id)}
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
