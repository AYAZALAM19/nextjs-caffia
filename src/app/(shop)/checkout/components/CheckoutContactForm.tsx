"use client";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import CheckoutFormInputs from "./CheckoutFormInputs";
import { CheckoutFormData } from "@/lib/checkout-validation-shema/checkout-schema";
import { Loader2 } from "lucide-react";

// Define the props interface
interface CheckoutContactFormProps {
  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  isSubmitting: boolean;
}

export default function CheckoutContactForm({ register, errors, isSubmitting }: CheckoutContactFormProps) {
  return (
    <div className="w-full">
      <h3 className="inline-flex items-center gap-3 text-lg font-bold text-gray-900 mb-4">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-sm">
          1
        </span>
        Shipping Address
      </h3>
      <div className="space-y-3.5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <CheckoutFormInputs
            register={register}
            label="Name"
            name="name"
            error={errors.name?.message}
          />
          <CheckoutFormInputs
            register={register}
            label="Phone"
            name="Phone"
            error={errors.Phone?.message}
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <CheckoutFormInputs
            register={register}
            label="Email"
            name="email"
            error={errors.email?.message}
          />
          <CheckoutFormInputs
            register={register}
            label="Address"
            name="address"
            error={errors.address?.message}
          />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          <CheckoutFormInputs
            register={register}
            label="City"
            name="city"
            error={errors.city?.message}
          />
          <CheckoutFormInputs
            register={register}
            label="State"
            name="state"
            error={errors.state?.message}
          />
          <CheckoutFormInputs
            register={register}
            label="Pincode"
            name="pincode"
            error={errors.pincode?.message}
          />
        </div>

        {/* Submit Button for smaller screens or as primary action */}
        <div className="pt-4 lg:hidden">
            <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 flex items-center justify-center bg-caffia text-white font-bold rounded-xl transition-all duration-300 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
            {isSubmitting ? (
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
            </>
            ) : (
            'Continue to Payment'
            )}
        </button>
        </div>
      </div>
    </div>
  );
}
