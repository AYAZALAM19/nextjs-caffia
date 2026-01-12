"use client";

import React, { useState } from "react";
import { MapPin, Plus, Trash2, Edit2, CheckCircle2, Home, Briefcase, Globe } from "lucide-react";

interface Address {
    id: string;
    type: 'Home' | 'Work' | 'Other';
    name: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
}

const mockAddresses: Address[] = [
    {
        id: "1",
        type: 'Home',
        name: "John Doe",
        phone: "+91 99875 45874",
        street: "123 Coffee Street, MG Road",
        city: "Pune",
        state: "Maharashtra",
        pincode: "411001",
        isDefault: true
    },
    {
        id: "2",
        type: 'Work',
        name: "John Doe",
        phone: "+91 99875 45874",
        street: "Tech Park, Hitech City",
        city: "Hyderabad",
        state: "Telangana",
        pincode: "500081",
        isDefault: false
    }
];

export default function AddressesPage() {
    const [addresses, setAddresses] = useState(mockAddresses);

    const deleteAddress = (id: string) => {
        setAddresses(addresses.filter(a => a.id !== id));
    };

    const getTypeIcon = (type: Address['type']) => {
        switch (type) {
            case 'Home': return <Home size={18} />;
            case 'Work': return <Briefcase size={18} />;
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
                <button className="px-6 py-4 bg-caffia text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-caffia/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                    <Plus size={18} /> Add New Address
                </button>
            </div>

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
                                <h3 className="font-bold text-lg text-gray-900">{address.name}</h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    {address.street}<br />
                                    {address.city}, {address.state} - {address.pincode}
                                </p>
                                <p className="pt-2 text-sm text-gray-400 font-bold tracking-tighter">
                                    {address.phone}
                                </p>
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                <button className="flex-1 py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-xl text-gray-600 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300">
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

            {addresses.length === 0 && (
                <div className="text-center py-20 bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-200">
                    <MapPin size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold">No addresses saved yet.</p>
                </div>
            )}
        </div>
    );
}
