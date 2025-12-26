import * as z from 'zod';

export const checkoutSchema = z.object({
    // fristName: z.string().min(2, 'Frist name must be at least 2 characters long')
    // .regex(/^[a-zA-Z]+$/, "Only alphabets are allowed"),

    // lastName: z.string().min(2, 'Last name must be at least 2 characters long')
    // .regex(/^[a-zA-Z]+$/, "Only alphabets are allowed"),

    name: z.string().min(2, 'Name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),

    Phone: z.string().min(10, 'Phone number must be at least 10 characters long')
    .regex(/^[0-9]+$/, "Phone number must contain only digits"),

    address: z.string().min(5, 'Address must be at least 5 characters long'),

    city: z.string().min(2, 'City must be at least 2 characters long'),

    state: z.string().min(2, 'State must be at least 2 characters long'),

    pincode: z.string().regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>;