export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    avatar? : string;
    createdAt: string;
    updatedAt: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export interface LoginPayload { 
    email: string;
    phone?: string;
    password: string; 
}

export interface RegisterPayload {
    name: string;
    email: string;
    phone?: string;
    password: string;
}