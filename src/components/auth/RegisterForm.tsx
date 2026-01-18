'use client';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/sonner";

interface RegisterFormData {
    name: string;
    email: string;
    number: string;
    password: string;
}

export default function RegisterForm() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const payload = await response.json().catch(() => ({}));

            if (!response.ok) {
                const msg = payload?.message || "Registration failed";
                throw new Error(msg);
            }

            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.error) {
                const msg = result.error || "Login Failed";
                setError(msg);
                toast.error(msg);
                return;
            }

            toast.success(`Account created! Welcome, ${data.name}`);
            router.push('/');
        } catch (err: any) {
            const msg = err.message || 'Registration failed';
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    }
    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}
            className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Name</label>

                <input type="text"
                    {...formRegister('name', { required: 'Name is required' })}
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email</label>
                <input type="email"
                className='border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    {...formRegister('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email address'
                        }
                    })} />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                    type="tel"
                    inputMode="numeric"
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...formRegister('number', {
                        required: 'Number is required',
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Enter a valid 10-digit mobile number'
                        }
                    })}
                />
                {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Password</label>
                <input
                    type="password"
                    {...formRegister('password', { required: 'Password is required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-caffia text-white py-2 rounded-lg hover:bg-red-900 duration-200 disabled:opacity-50"
            >
                {loading ? 'Registering...' : 'Register'}
            </button>
        </form>
    )
}
