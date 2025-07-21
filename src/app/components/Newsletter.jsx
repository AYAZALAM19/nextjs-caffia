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
    <section className="bg-amber py-10">
      <h2 className="font-heading text-center font-semibold md:text-5xl text-white text-lg md:pt-10">
        Stay Connected
      </h2>
      <div className="my-9">
        <p className="md:px-80 text-amber-100 text-center font-body font-semibold md:text-xl text-base">
          Get the latest updates on new blends, exclusive offers, and coffee
          brewing tips delivered to your inbox.
        </p>
        <div className="flex justify-center items-center my-8 gap-6">
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-white/5 text-amberLight placeholder:text-amber-200 border border-amberLight rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-amberLight focus:border-transparent"
          />
          <button className="flex items-center gap-3 bg-amberLight text-white py-2 px-6 rounded-lg hover:bg-amberLight/90 transition-colors duration-200">
            <Mail />
            <span className="font-body font-semibold">Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
