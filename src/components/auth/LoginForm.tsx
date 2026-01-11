'use client';
console.log('LoginForm module loaded');

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { mockAuthServices } from "@/lib/mock-auth";
import { useAuthStore } from "@/lib/stores/auth/authStore";
import { toast } from "@/components/ui/sonner";

interface LoginFormData {
    email: string;
    password: string;
}

interface LoginFormProps {
    onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        setError('');
        setLoading(true);

        try {
            const response = await mockAuthServices.login(data);
            console.log('Login successful, firing toast:', response.user.name);
            login(response);
            toast.success(`Welcome back, ${response.user.name}!`);
            if (onSuccess) {
                onSuccess();
            } else {
                router.push('/');
            }
        } catch (err: any) {
            const msg = err.message || 'Login Failed';
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-center mb-6">
                <h2 className="text-2xl text-start inline-flex items-start justify-start font-bold">Login</h2>
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-caffia"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Password</label>
                <input
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-caffia"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-caffia text-white py-2 rounded-lg hover:bg-red-300 transition-colors duration-200 disabled:opacity-50"
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
}