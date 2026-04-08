import * as z from 'zod';

export const checkoutSchema = z.object({
    addressId: z.number().min(1, 'Please select an address'),
})

export type CheckoutFormData = z.infer<typeof checkoutSchema>;