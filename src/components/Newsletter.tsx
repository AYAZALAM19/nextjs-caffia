"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

function Newsletter() {
  const [email, setEmail] = useState("");

  // TODO: wire this to a subscribe API once the backend endpoint exists
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Newsletter sign-up is coming soon — stay tuned!");
    setEmail("");
  };

  return (
    <section className="page-container pb-16 md:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-caffia px-6 py-14 text-center md:px-12 md:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-caramel/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-black/30 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/10 text-caramel">
            <Mail size={22} />
          </span>
          <h2 className="mt-5 font-heading text-3xl text-cream md:text-5xl">Stay in the loop</h2>
          <p className="mt-4 text-crema/80 md:text-lg">
            New blends, exclusive offers and brewing tips — delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row sm:rounded-full sm:bg-white sm:p-1.5"
          >
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-espresso placeholder:text-roast/60 focus:outline-none focus:ring-2 focus:ring-caramel sm:bg-transparent sm:focus:ring-0"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
            >
              Subscribe <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
