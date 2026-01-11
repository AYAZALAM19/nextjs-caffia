import { AuthResponse, LoginPayload, RegisterPayload, User } from "../types/auth";

export const mockAuthServices = {
    // Simulates a POST /api/auth/login request
    login: async (payload: LoginPayload): Promise<AuthResponse> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Mock Login Attempt:', payload); // Debugging
                if (payload.password === 'Password' || payload.password === 'password') {
                    const user: User = {
                        id: '1',
                        name: 'Ayaz Alam',
                        email: payload.email,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                    };
                    resolve({
                        user,
                        token: 'mock-jwt-token-12345',
                    });
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 500); // Simulate network delay
        });
    },

    // Simulates a POST /api/auth/register request
    register: async (payload: RegisterPayload): Promise<AuthResponse> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const user: User = {
                    id: Math.random().toString(36).substring(2, 9),
                    name: payload.name,
                    email: payload.email,
                    phone: payload.phone,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                };
                resolve({
                    user,
                    token: 'mock-jwt-token-' + user.id,
                });
            }, 500);
        });
    },
};