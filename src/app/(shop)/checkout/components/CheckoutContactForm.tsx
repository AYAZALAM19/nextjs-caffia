"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema,
  CheckoutFormData,
} from "@/lib/checkout-validation-shema/checkout-schema";
import { useForm } from "react-hook-form";
import CheckoutFormInputs from "./CheckoutFormInputs";

export default function CheckoutContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({ resolver: zodResolver(checkoutSchema) });

 async function OnSubmit(data: CheckoutFormData) {
    console.log("Form submited data", data);
    // Ye line button ko 2 seconds tak "Processing..." dikhaye rakhegi
  await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  return (
    <div className="w-full">
      <h3 className="inline-flex gap-2"> <span>1</span>Address</h3>
      <form onSubmit={handleSubmit(OnSubmit, (errors) => console.log("Validation Errors:", errors))}  className=" space-y-3.5 ">
        <div className="grid lg:grid-cols-2 grid-cols-1">
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
        <div className="grid lg:grid-cols-2 grid-cols-1">
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
        <div className="grid lg:grid-cols-3 grid-cols-1">
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-caffia text-white px-4 py-2 rounded"
        >
         {isSubmitting ? "Processing..." : "Continue to Payment"}
        </button>
      </form>
    </div>
  );
}
