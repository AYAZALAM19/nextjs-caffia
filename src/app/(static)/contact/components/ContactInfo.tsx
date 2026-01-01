import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="max-w-md4 space-y-6">
      {/* Contact Card */}
      <div className="rounded-xl border bg-white p-6 shadow-sm space-y-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact Information
        </h2>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <Mail className="h-5 w-5 text-amber-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Email us</p>
            <p className="text-sm text-gray-600">hello@coffeeo.in</p>
            <p className="text-xs text-gray-400">We reply within 24 hours.</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <Phone className="h-5 w-5 text-amber-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Call us</p>
            <p className="text-sm text-gray-600">+91 98765 43210</p>
            <p className="text-xs text-gray-400">
              Mon–Fri, 9am – 6pm IST
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <MapPin className="h-5 w-5 text-amber-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Visit our Roastery</p>
            <p className="text-sm text-gray-600">123 Roast Avenue</p>
            <p className="text-xs text-gray-400">
              Bangalore, Karnataka 560001
            </p>
          </div>
        </div>
      </div>

      {/* Map Preview */}
      <div className="relative h-64 overflow-hidden rounded-xl bg-gray-200">
        {/* Fake map placeholder */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#d1d5db_1px,_transparent_1px)] bg-[size:20px_20px]" />

        <button
          className="absolute inset-x-0 bottom-4 mx-auto w-fit rounded-full bg-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-50"
        >
          Open in Maps
        </button>
      </div>
    </section>
  );
}
