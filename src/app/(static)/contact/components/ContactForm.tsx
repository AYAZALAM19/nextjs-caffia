"use client";

import React from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  subject?: string;
  phoneNo: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 lg:px-6 px-2 py-10"
      >
        <p className="lg:text-3xl text-xl font-semibold text-caffia">
          Send as a Message
        </p>
        {/* Name + Email */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-caffia">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="peer w-full rounded border border-gray-300 p-2 outline-none focus:border-caffia"
              {...register("name", { required: true })}
            />
            <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
              Name is required
            </p>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold text-caffia"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="peer w-full rounded border border-gray-300 p-2 outline-none focus:border-caffia"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
              Enter a valid email address
            </p>
          </div>
        </div>

        {/* Subject + Phone */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-caffia"
            >
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border border-gray-300 p-2 outline-none focus:border-caffia"
              {...register("subject")}
            />
          </div>

          <div>
            <label
              htmlFor="phoneNo"
              className="text-sm font-semibold text-caffia"
            >
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Phone No"
              className="peer w-full rounded border border-gray-300 p-2 outline-none focus:border-caffia"
              {...register("phoneNo", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
            />
            <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
              Phone number must be 10 digits
            </p>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-sm font-semibold text-caffia"
          >
            Your Message
          </label>
          <textarea
            placeholder="Your Message"
            className="peer w-full rounded border border-gray-300 p-2 outline-none focus:border-caffia"
            rows={4}
            {...register("message", { required: true })}
          />
          <p className="mt-1 hidden text-sm text-red-600 peer-invalid:block">
            Message is required
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-caffia px-6 py-2 font-semibold text-white disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
