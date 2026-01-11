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
            {items.map((item, index) => (
                <div key={index} className='flex lg:flex-row flex-col items-center mb-3 gap-4 rounded-xl bg-white p-4 border border-gray-200 shadow-sm'>
                    {/* Product Image */}
                    <div className='flex items-center w-full lg:w-auto gap-4'>
                        <Image
                            src={item.images[0]}
                            width={80}
                            height={80}
                            alt={item.title}
                            className='rounded-lg object-cover w-20 h-20'
                        />
                        <div className='lg:hidden flex-1'>
                            <h4 className='font-semibold text-gray-800 text-sm'>{item.title}</h4>
                            <p className='text-xs text-gray-500 uppercase tracking-tight'>
                                {item.selectedRoast} • {item.selectedGrind}
                            </p>
                            <button
                                onClick={() => remove(item.id, item.selectedRoast, item.selectedGrind)}
                                className='text-red-600 text-xs flex items-center gap-1 mt-1 font-medium'
                            >
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                    </div>

                    {/* Product Details (Desktop) */}
                    <div className='flex-1 lg:block hidden'>
                        <h4 className='font-semibold text-gray-800 text-sm mb-1'>
                            {item.title}
                        </h4>
                        <p className='text-xs text-gray-500'>
                            {item.selectedRoast} • {item.selectedGrind}
                        </p>
                        <p className='text-xs text-gray-500'>
                            {item.weight || '50g Pack'}
                        </p>
                    </div>

                    {/* Quantity Controls and Price */}
                    <div className='flex items-center justify-between w-full lg:w-auto gap-6'>
                        <div className='flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-1.5'>
                            <button
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1, item.selectedRoast, item.selectedGrind)}
                                disabled={(item.quantity || 1) <= 1}
                                className='text-gray-600 hover:text-gray-800 disabled:opacity-30'
                            >
                                <Minus size={14} />
                            </button>
                            <span className='text-sm font-medium min-w-6 text-center'>
                                {item.quantity || 1}
                            </span>
                            <button
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1, item.selectedRoast, item.selectedGrind)}
                                className='text-gray-600 hover:text-gray-800'
                            >
                                <Plus size={14} />
                            </button>
                        </div>

                        <div className='font-semibold text-gray-800 text-base'>
                            ₹{item.price * (item.quantity || 1)}
                        </div>

                        <button
                            onClick={() => remove(item.id, item.selectedRoast, item.selectedGrind)}
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
