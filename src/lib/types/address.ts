export interface Address {
    id: number;
    userId: number;
    type?: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface AddressResponse {
    success: boolean;
    message: string;
    data: Address[];
}

export interface CreateAddressBody {
    type?: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    isDefault?: boolean;
}
