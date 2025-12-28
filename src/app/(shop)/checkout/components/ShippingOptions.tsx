'use client'
import React from 'react'
import { Truck, Zap } from 'lucide-react'

export type ShippingMethod = {
    id: string,
    name: string,
    price: number,
    description: string,
    icon: React.ElementType,
}

export const SHIPPING_METHODS: ShippingMethod[] =[
  {
    id: 'standard',
    name: 'Standard Delivery',
    price: 0,
    description: 'Estimated 5-7 Days',
    icon: Truck,
  },
  {
    id: 'express',
    name: 'Express Delivery',
    price: 150, // ₹150
    description: 'Estimated 1-2 Days',
    icon: Zap,
  },
]


interface ShippingOptionsProps {
  selectedMethodId: string
  onSelect: (method: ShippingMethod) => void
}


export default function ShippingOptions({
    selectedMethodId,
    onSelect,
    }: ShippingOptionsProps) {

        const formatPrice = (price: number) => {
            return new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(price)
        }
  return (
    <div className='Space-y-4'>
        <h3 className="text-lg font-bold text-gray-900">Shipping Method</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {SHIPPING_METHODS.map((method) =>{
            const Icon = method.icon
            const isSelected = method.id === selectedMethodId
            return(
                <div key={method.id}
                    onClick={() => onSelect(method)}
                    className={`relative flex cursor-pointer flex-col rounded-2xl border p-4 transition-all hover:border-gray-300 ${
                    isSelected ?
                     'border-red-800/75 bg-gray-50 ring-1 ring-red-800/75'
                    : 'border-gray-200 bg-white'
                }`}
                    >
                                      <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      isSelected ? 'bg-red-200 text-caffia' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="font-semibold text-sm text-gray-900">
                    {method.name}
                  </span>
                </div>
                <span className="font-bold text-sm text-gray-900">
                  {method.price >  0 ? formatPrice(method.price) : 'FREE'}
                </span>
              </div>
              <p className="text-xs text-gray-500 ml-10">{method.description}</p>
              
              {/* Radio Circle Indicator */}
              <div
                className={`absolute top-2 right-2 h-4 w-4 rounded-full border ${
                  isSelected ? 'border-4 border-caffia' : 'border-gray-300'
                }`}
              />
            </div>
            )
        })}
      </div>


    </div>
  )
}
