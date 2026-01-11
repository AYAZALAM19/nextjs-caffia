import { useAuthStore } from './stores/auth/authStore';

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiError {
    message: string;
    status: number;
}

export class ApiClient {
    private baseUrl: string;
    private getToken: () => string | null;

    constructor(baseUrl: string, tokenProvider: () => string | null) {
        this.baseUrl = baseUrl;
        this.getToken = tokenProvider;
    }

    private async request<T>(endpoint: string, method: RequestMethod, body?: any): Promise<T> {
        const token = this.getToken();
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config: RequestInit = {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        };

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, config);

            // Handle 204 No Content
            if (response.status === 204) {
                return {} as T;
            }

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                const error: ApiError = {
                    message: data?.message || response.statusText || 'An error occurred',
                    status: response.status,
                };
                throw error;
            }

            return data as T;
        } catch (error: any) {
            // Re-throw ApiError or create a generic one
            if (error.status && error.message) {
                throw error;
            }
            throw {
                message: error.message || 'Network error',
                status: 500
            } as ApiError;
        }
    }

    // These are the easy buttons we use in our components

    get<T>(endpoint: string) {
        return this.request<T>(endpoint, "GET")
    }

    post<T>(endpoint: string, data: unknown) { return this.request<T>(endpoint, 'POST', data); }

    put<T>(endpoint: string, data: unknown) { return this.request<T>(endpoint, 'PUT', data); }

    delete<T>(endpoint: string) { return this.request<T>(endpoint, 'DELETE'); }
}

// We export a "singleton" - one instance for the whole app

export const api = new ApiClient('/api', () => useAuthStore.getState().token);