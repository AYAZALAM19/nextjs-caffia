"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MapPin, Plus, Trash2, Edit2, CheckCircle2, Home, Briefcase, Globe } from "lucide-react";
import AddressForm from "@/components/AddressForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Address {
    id: string;
    type: 'HOME' | 'WORK' | 'OTHER' | 'Home' | 'Work' | 'Other';
    line1?: string;
    line2?: string;
    street?: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
}

export default function AddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingAddress, setEditingAddress] = useState<Address | undefined>();

    const fetchAddresses = useCallback(async () => {
        try{
            const res = await fetch('/api/addresses',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            const data = await res.json();
            
            if (Array.isArray(data)) {
                setAddresses(data);
            } else if (data && Array.isArray(data.data)) {
                setAddresses(data.data);
            } else if (data && Array.isArray(data.addresses)) {
                setAddresses(data.addresses);
            } else {
                console.error("Received non-array address data:", data);
                setAddresses([]);
            }
        } catch(error) {
            console.error("Addresses fetch failed:", error);
            setAddresses([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses])

    const deleteAddress = async (id: string) => {
        if (!confirm("Are you sure you want to delete this address?")) return;
        try {
            const res = await fetch(`/api/addresses/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setAddresses(addresses.filter(a => a.id !== id));
            } else {
                console.error("Failed to delete address");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getTypeIcon = (type: string) => {
        const uType = type.toUpperCase();
        switch (uType) {
            case 'HOME': return <Home size={18} />;
            case 'WORK': return <Briefcase size={18} />;
            default: return <Globe size={18} />;
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 font-heading italic">Saved Addresses</h1>
                    <p className="text-gray-500 mt-2 font-medium">Manage your delivery locations for faster checkout.</p>
                </div>
                <button 
                    onClick={() => {
                        setEditingAddress(undefined);
                        setIsDialogOpen(true);
                    }}
                    className="px-6 py-4 bg-caffia text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-caffia/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                    <Plus size={18} /> Add New Address
                </button>
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-200">
                    <div className="w-10 h-10 border-4 border-gray-200 border-t-caffia rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-medium">Loading your addresses...</p>
                </div>
            ) : addresses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map((address) => (
                        <div
                            key={address.id}
                            className={`group p-6 rounded-[32px] border transition-all duration-500 relative overflow-hidden ${address.isDefault
                                    ? 'bg-caffia/[0.02] border-caffia/20 ring-1 ring-caffia/10 shadow-xl shadow-caffia/[0.05]'
                                    : 'bg-white border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            {address.isDefault && (
                                <div className="absolute top-4 right-4 bg-caffia text-white p-1 rounded-full shadow-md">
                                    <CheckCircle2 size={16} />
                                </div>
                            )}

                            <div className="flex flex-col h-full gap-6">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${address.isDefault ? 'bg-caffia text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-caffia/10 group-hover:text-caffia'
                                        }`}>
                                        {getTypeIcon(address.type)}
                                    </div>
                                    <span className="font-black text-xs uppercase tracking-widest text-gray-400">{address.type}</span>
                                </div>

                                <div className="space-y-1 flex-1">
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed mt-2">
                                        {address.line1 || address.street}{address.line2 ? `, ${address.line2}` : ''}<br />
                                        {address.city}, {address.state} - {address.pincode}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto">
                                    <button 
                                        onClick={() => {
                                            setEditingAddress(address);
                                            setIsDialogOpen(true);
                                        }}
                                        className="flex-1 py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-600 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300">
                                        <Edit2 size={14} /> Edit
                                    </button>
                                    {!address.isDefault && (
                                        <button
                                            onClick={() => deleteAddress(address.id)}
                                            className="w-12 h-11 bg-red-50 hover:bg-red-100 rounded-xl text-red-400 flex items-center justify-center transition-all duration-300"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-200">
                    <MapPin size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold">No addresses saved yet.</p>
                </div>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold font-heading italic text-caffia">
                            {editingAddress ? "Edit Address" : "Add New Address"}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="pt-2">
                        <AddressForm 
                            initialData={editingAddress as any} 
                            onSuccess={() => {
                                setIsDialogOpen(false);
                                fetchAddresses();
                            }} 
                            onCancel={() => setIsDialogOpen(false)} 
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
