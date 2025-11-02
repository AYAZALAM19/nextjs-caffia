'use client'
import React, { useActionState } from 'react'
import { useCartStore } from '@/lib/stores/cartStore'
import Image from 'next/image'
import { Product } from '@/lib/types/product'
import { Trash2, Minus, IndianRupee, Plus } from 'lucide-react'


export default function CartPage(){
    const cart  = useCartStore((state) =>state.cart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const updateQuantity = useCartStore((state) => state.updateQuantity)

    const handleQuantityChange = (productId: string, newQty: number) =>{
        if(newQty <= 0){
            removeFromCart(productId)
        }
        else{
            updateQuantity(productId, newQty)
        }
    }

    console.log('data of cart ',cart)
    return(
        <>
        <section className=''>
            <div>
            <h1 className='text-center text-caffia font-semibold lg:text-4xl uppercase text-shadow-2xs'>Your Cart</h1>
                { cart.length === 0 ? (
                <p>cart is empty</p>
                ) : cart.map((item, index) =>(
                    <div className=' flex items-center justify-center my-10 gap-6' key={index}>
                        <div>
                             <Image 
                                src={item.images[0]}
                                width={200}
                                height={200}
                                alt={item.title}
                                />
                        </div>
                        <div className='lg:w-80 m-4'>
                            <h2 className='text-caffia lg:text-2xl font-semibold font-heading'>{item.flavor}</h2>
                            <p className='text-lg font-semibold'>{item.flavor}</p>
                            <p className='py-3 font-semibold text-base lg:text-lg'>{item.description}</p>
                            <p className='text-lg font-semibold'>{item.category}</p>
                            <div className='flex gap-3.5 my-3 font-semibold text-caffia lg:text-2xl'>
                                <p className='inline-flex items-center gap-2.5'>
                                   <IndianRupee /> {item.price}
                                </p>
                                <p className=' line-through items-center inline-flex gap-2.5 '>
                                  <IndianRupee />  {item.originalPrice}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 rounded-3xl bg-caffia'>
                            <button className='px-3 py-1 rounded text-amberLight hover:bg-amberLight duration-300 hover:text-caffia hover:rounded-3xl'
                           onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                            <Minus />
                           </button>
                           <input type="number" min='1'
                           value={item.quantity}
                           onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)} 
                            className="w-12 text-center font-semibold text-amberLight lg:text-2xl rounded"
                            />
                            <button className="px-3 py-1 rounded text-amberLight hover:bg-amberLight duration-300 hover:rounded-3xl  hover:text-caffia" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                             <Plus className='strokeWidth={1.4}' />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => removeFromCart(item.id)} className='hover:bg-red-700 py-2 px-3 rounded-2xl duration-200 cursor-pointer hover:text-white inline-flex gap-3 items-center '><Trash2 className='hover:text-white'/> Remove</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
        </>
    )
}