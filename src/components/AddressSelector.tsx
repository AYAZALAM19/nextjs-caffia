'use client'
import React, { useEffect, useState } from 'react'
import { Address, AddressResponse } from '@/lib/types/address'
import { toast } from 'sonner'
import { Loader2, Home, MapPin, Plus } from 'lucide-react'

interface AddressSelectorProps {
    onSelect: (addressId: number) => void;
}

export default function AddressSelector({ onSelect }: AddressSelectorProps) {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const res = await fetch('/api/addresses');
                const result: AddressResponse = await res.json();
                
                if (result.success) {
                    setAddresses(result.data || []);
                    if (result.data?.length > 0) {
                        const defaultAddr = result.data.find(a => a.isDefault) || result.data[0];
                        setSelectedId(defaultAddr.id);
                        onSelect(defaultAddr.id);
                    }
                }
            } catch (error) {
                console.error("Fetch addresses error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAddresses();
    }, [onSelect]);

    if (loading) {
        return (
            <div className="mt-4 flex items-center justify-center p-3 border border-gray-100 rounded-xl bg-gray-50/50">
                <Loader2 className="w-3 h-3 animate-spin text-[#8B1A20] mr-2" />
                <span className="text-[10px] text-gray-500 font-medium">Loading addresses...</span>
            </div>
        );
    }

    return (
        <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between px-1">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin className="w-2.5 h-2.5" />
                    Delivery Address
                </h4>
                <button type="button" className="text-[9px] font-bold text-[#8B1A20] hover:underline flex items-center gap-0.5">
                    <Plus className="w-2 h-2" /> ADD NEW
                </button>
            </div>

            {addresses.length === 0 ? (
                <div className="p-3 border-2 border-dashed border-gray-100 rounded-xl text-center bg-gray-50/20 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <p className="text-[10px] text-gray-400 mb-1">No addresses found</p>
                    <span className="text-[9px] text-[#8B1A20] font-bold uppercase">Add your first address</span>
                </div>
            ) : (
                <div className="grid gap-2">
                    {addresses.map((addr) => (
                        <button
                            key={addr.id}
                            type="button"
                            onClick={() => {
                                setSelectedId(addr.id);
                                onSelect(addr.id);
                            }}
                            className={`flex items-start text-left p-2.5 rounded-xl border-2 transition-all duration-200 ${
                                selectedId === addr.id
                                    ? "border-[#8B1A20] bg-red-50/30 shadow-sm"
                                    : "border-gray-50 bg-white hover:border-gray-100 shadow-sm"
                            }`}
                        >
                            <div className={`mt-0.5 p-1 rounded-md mr-2.5 ${selectedId === addr.id ? "bg-[#8B1A20] text-white" : "bg-gray-50 text-gray-400"}`}>
                                <Home className="w-2.5 h-2.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[9px] font-bold text-gray-700 uppercase truncate">
                                        {addr.type || "Default"}
                                    </span>
                                    {addr.isDefault && (
                                        <span className="text-[7px] font-bold bg-emerald-50 text-emerald-600 px-1 py-0.5 rounded-sm uppercase">Default</span>
                                    )}
                                </div>
                                <p className="text-[10px] font-medium text-gray-500 leading-tight truncate">
                                    {addr.line1}, {addr.city}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}