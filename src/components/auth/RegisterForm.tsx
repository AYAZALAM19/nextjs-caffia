'use client';

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { mockAuthServices } from "@/lib/mock-auth";
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/auth/authStore';
import { toast } from "@/components/ui/sonner";

interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

export default function RegisterForm() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const register = useAuthStore((state) => state.register);

    const { register: formRegister, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

    const onSubmit = async (data: RegisterFormData) => {
        setError('');
        setLoading(true);

        try {
            const response = await mockAuthServices.register(data);
            register(response);
            toast.success(`Account created! Welcome, ${response.user.name}`);
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
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Registering...' : 'Register'}
            </button>
        </form>
    )
}