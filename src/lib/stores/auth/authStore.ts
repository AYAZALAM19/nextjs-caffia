import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthResponse, User } from '@/lib/types/auth';

// 1. Define the state interface

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;

    //Actions 
    login: (response: AuthResponse) => void;
    logout: () => void;
    register: (response: AuthResponse) => void;
}

export const useAuthStore = create<AuthState>()(
    persist((set) =>({
        user: null,
        token: null,
        isAuthenticated: false,

        login: (response: AuthResponse) => set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
        }),
        logout: () => set({
            user: null,
            token: null,
            isAuthenticated: false,
        }),

        register:(response: AuthResponse) => set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
        })
    }),
    {
        name: 'auth-storage', //LocalStorage key
    }
)
)