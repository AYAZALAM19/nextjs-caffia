'use client'
import React, { useEffect } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCartStore } from '@/lib/stores/cartStore'
export default function ToastNotification() {
    const toastMessage = useCartStore((state) => state.toastMessage)
    const toastImage = useCartStore((state) => state.toastImage)
    const showToast = useCartStore((state) => state.showToast)

    useEffect(() => {
      if(toastImage){
        const timer = setTimeout(() =>{
          showToast(null, null);
        },2500)
         return () => clearTimeout(timer);
      }
    },[toastImage, toastMessage])

    if(!toastMessage) return null;
  return (
    <div
    className={cn(
      "fixed top-5 right-2 z-50 flex items-center gap-3",
      "bg-caffia/85 text-white px-4 py-3 rounded-xl shadow-md",
      "animate-in fade-in-50 slide-in-from-top-5 duration-300"
    )}
    >
      {
        toastImage && (
          <Image
          src={toastImage}
          width={100}
          height={100}
          alt={toastMessage}
          className=' rounded-md '
           />
        )}

        <p className="text-sm font-medium">{toastMessage}</p>
    </div>
  )
}
