'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Address } from '@/lib/types/address'

const addressSchema = z.object({
    type: z.enum(['HOME', 'WORK', 'OTHER']),
    line1: z.string().min(1, 'Address is required'),
    line2: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    pincode: z.string().min(6, 'Pincode must be 6 digits').max(6),
    isDefault: z.boolean().optional(),
})

type AddressFormData = z.infer<typeof addressSchema>

interface AddressFormProps {
    initialData?: Address;
    onSuccess: () => void;
    onCancel: () => void;
}

export default function AddressForm({ initialData, onSuccess, onCancel }: AddressFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AddressFormData>({
        resolver: zodResolver(addressSchema),
        defaultValues: initialData ? {
            ...initialData,
            type: (['HOME', 'WORK', 'OTHER'].includes(initialData.type as any) ? initialData.type : 'HOME') as 'HOME' | 'WORK' | 'OTHER'
        } : {
            type: 'HOME',
            isDefault: false,
        },
    })

    const onSubmit = async (data: AddressFormData) => {
        try {
            const url = initialData ? `/api/addresses/${initialData.id}` : '/api/addresses';
            const method = initialData ? 'PATCH' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if (res.ok) {
                toast.success(initialData ? 'Address updated' : 'Address added');
                onSuccess();
            } else {
                toast.error(result.message || 'Something went wrong');
            }
        } catch (error) {
            toast.error('Failed to save address');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">Address Type</label>
                    <div className="flex gap-3">
                        {['HOME', 'WORK', 'OTHER'].map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value={type}
                                    {...register('type')}
                                    className="w-3 h-3 text-[#8B1A20] focus:ring-[#8B1A20]"
                                />
                                <span className="text-xs font-medium text-gray-600 uppercase">{type}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-3">
                    <div>
                        <input
                            {...register('line1')}
                            placeholder="Address Line 1"
                            className="w-full px-3 py-2 text-sm border border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1A20]"
                        />
                        {errors.line1 && <p className="text-[10px] text-red-500 mt-1">{errors.line1.message}</p>}
                    </div>

                    <input
                        {...register('line2')}
                        placeholder="Address Line 2 (Optional)"
                        className="w-full px-3 py-2 text-sm border border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1A20]"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            {...register('city')}
                            placeholder="City"
                            className="w-full px-3 py-2 text-sm border border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1A20]"
                        />
                        {errors.city && <p className="text-[10px] text-red-500 mt-1">{errors.city.message}</p>}
                    </div>
                    <div>
                        <input
                            {...register('state')}
                            placeholder="State"
                            className="w-full px-3 py-2 text-sm border border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1A20]"
                        />
                        {errors.state && <p className="text-[10px] text-red-500 mt-1">{errors.state.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            {...register('pincode')}
                            placeholder="Pincode"
                            className="w-full px-3 py-2 text-sm border border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8B1A20]"
                        />
                        {errors.pincode && <p className="text-[10px] text-red-500 mt-1">{errors.pincode.message}</p>}
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            {...register('isDefault')}
                            className="w-3 h-3 text-[#8B1A20] focus:ring-[#8B1A20] rounded-sm"
                        />
                        <span className="text-xs font-medium text-gray-600">Set as default</span>
                    </label>
                </div>
            </div>

            <div className="flex gap-3 pt-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:bg-gray-50 rounded-lg transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-2 text-xs font-bold text-white bg-[#8B1A20] uppercase tracking-widest rounded-lg hover:bg-[#6D1217] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {isSubmitting ? <><Loader2 className="w-3 h-3 animate-spin" /> Saving...</> : 'Save Address'}
                </button>
            </div>
        </form>
    )
}
