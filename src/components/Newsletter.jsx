"use client";
// import type React from "react"

import { useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react";

//  function Newsletter() {
//   const [email, setEmail] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Newsletter signup:", email)
//     setEmail("")
//   }

function Newsletter() {
  return (
    <section className="bg-amber py-6 md:py-8">
     <div className="container mx-auto px-3 md:px-4">

      <h2 className="font-heading uppercase text-center font-semibold text-2xl md:text-4xl lg:text-5xl text-white">
        Stay Connected
      </h2>
      <div className="my-4 md:my-6">
        <p className="text-amber-100 text-center font-body font-medium text-sm md:text-base">
          Get the latest updates on new blends, exclusive offers, and coffee
          brewing tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-3 my-4 md:my-6 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full sm:w-auto bg-white/5 text-amberLight placeholder:text-amber-200 border border-amberLight rounded-lg py-2 px-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-amberLight focus:border-transparent"
          />
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 bg-amberLight text-white py-2 px-4 md:px-6 text-sm md:text-base rounded-lg hover:bg-amberLight/90 transition-colors duration-200">
            <Mail className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-body font-semibold">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Newsletter;
