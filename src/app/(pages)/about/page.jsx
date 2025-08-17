"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Timeline from "@/app/components/ui/Timeline";
import HeroBanner from "@/app/components/HeroBanner";
import {
  Heart,
  Globe,
  Leaf,
  Award,
  Users,
  Coffee,
  Calendar,
  Target,
  MapPin,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");

  const storyData = [
    {
      id: 1,
      year: "2021",
      title: "Started Learning Web Development",
      description: "HTML, CSS aur basic JavaScript se journey shuru ki.",
      img: "/assets/images/about_banner1.webp" || null,
    },
    {
      id: 2,
      year: "2022",
      title: "Built First Project",
      description: "Ek portfolio website banaya aur GitHub pe dala.",
      img: "/assets/images/about_banner1.webp" || null,
    },
    {
      id: 3,
      year: "2022",
      title: "Built First Project",
      description: "Ek portfolio website banaya aur GitHub pe dala.",
      img: "/assets/images/about_banner1.webp" || null,
    },
    {
      id: 4,
      year: "2022",
      title: "Built First Project",
      description: "Ek portfolio website banaya aur GitHub pe dala.",
      img: "/assets/images/about_banner1.webp" || null,
    },
  ];
  const owners = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "Product Designer",
      status: { text: "Available for collab", color: "bg-green-500" },
      img: "/assets/images/about_img/owners_1.jpg",
      badge: "Co-Founder",
      bio: "6+ years in UX/UI. Coffee-fueled creator focused on accessible, conversion-friendly interfaces across web and mobile.",
      links: [
        { label: "LinkedIn", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "Frontend Engineer",
      status: { text: "Mentoring interns", color: "bg-gray-400" },
      img: "/assets/images/about_img/owner_2.jpg",
      badge: "Co-Founder",
      bio: "React/Next.js specialist. Builds fast, accessible UIs with a strong focus on DX and performance budgets.",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Portfolio", href: "#" },
      ],
    },
  ];

  // const [] = useState('')
  const stats = [
    { icon: <Users size={32} />, value: "50K+", label: "Happy Customers" },
    { icon: <Globe size={32} />, value: "15", label: "Coffee Origins" },
    { icon: <Calendar size={32} />, value: "8", label: "Years Experience" },
    { icon: <Target size={32} />, value: "100%", label: "Satisfaction Rate" },
    { icon: <Coffee size={32} />, value: "24/7", label: "Fresh Roasting" },
    { icon: <MapPin size={32} />, value: "5", label: "Store Locations" },
  ];
  return (
    <>
      <div>
        <HeroBanner
          title="Our Story"
          img="/assets/images/about_img/about_banner.jpg"
          description="From a small neighborhood coffee shop to a premium coffee experience, discover the journey that makes Caffie special."
          subTitle="About Caffie"
        />
      </div>

      <div className="container mx-auto my-10">
        <h1 className="font-heading text-2xl md:text-5xl font-bold my-3.5 text-Greytext text-center">
          Our Values
        </h1>
        <p className="my-8 text-Greytext font-semibold md:text-xl text-lg md:px-64 text-center">
          These core principles guide everything we do, from sourcing beans to
          serving customers.
        </p>
      </div>

      <section className="my-20  flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 mx-4 lg:mx-20 items-center">
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-4 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Leaf className="mb-4 w-10 h-10 text-green-700" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Sustainability
          </p>
          <p className="md:text-lg text-base font-body font-semibold text-grey">
            We're committed to ethical sourcing and environmental responsibility
            in every step of our process.
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-8 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Award className="mb-4 w-10 h-10 text-yellow-600" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Quality Excellence
          </p>
          <p className="md:text-lg text-base font-body font-semibold text-grey">
            Our expert roasters ensure every batch meets the highest standards
            of flavor and aroma.
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-8 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Heart className="mb-4 w-10 h-10 text-red-700" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Passion Driven
          </p>
          <p className="md:text-lg text-base font-body font-semibold text-grey">
            Coffee isn't just our business—it's our passion, and it shows in
            every cup we serve.
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-4 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Users className="mb-4 w-10 h-10 text-blue-800" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Community Focus
          </p>
          <p className="md:text-lg text-base font-body font-semibold md:px-5 text-grey">
            We believe in building strong relationships with our farmers,
            customers, and local community.
          </p>
        </div>
      </section>

      <section className="my-3">
        <div className=" flex justify-center md:mx-auto mx-2 px-4 rounded-xl bg-caffia py-4 w-auto md:w-4xl  ">
          <div className="flex justify-center gap-3.5">
            <button
              className={`md:px-4 px-2 py-2 md:py-2 ${
                activeTab === "story" ? "bg-amberLight" : "bg-amber-200"
              } transition duration-300 rounded-xl font-semibold font-heading uppercase md:text-lg text-base cursor-pointer`}
              onClick={() => setActiveTab("story")}
            >
              Story
            </button>
            <button
              className={`md:px-4 px-2 py-2 md:py-2 ${
                activeTab === "teams" ? "bg-amberLight" : "bg-amber-200"
              } transition duration-300 rounded-xl font-semibold font-heading uppercase md:text-lg text-base cursor-pointer`}
              onClick={() => setActiveTab("teams")}
            >
              Teams
            </button>
            <button
              className={`md:px-4 px-2 py-2 md:py-2  ${
                activeTab === "values" ? "bg-amberLight" : "bg-amber-200"
              } transition duration-300 rounded-xl font-semibold uppercase font-heading md:text-lg text-base cursor-pointer`}
              onClick={() => setActiveTab("values")}
            >
              Values
            </button>
            <button
              className={`md:px-4 px-2 py-2 md:py-2  ${
                activeTab === "impact" ? "bg-amberLight" : "bg-amber-200"
              } transition duration-300 rounded-xl font-semibold uppercase font-heading md:text-lg text-base cursor-pointer`}
              onClick={() => setActiveTab("impact")}
            >
              Impact
            </button>
          </div>
        </div>
        {/* Tab Content  */}
        <div
          className={` ${
            activeTab == "story" ? "flex justify-center" : "hidden"
          }`}
        >
          <div className="relative mx-auto my-10">
            {/* Vertical line */}
            <Timeline storyData={storyData} />
          </div>
        </div>

        <div
          className={activeTab == "teams" ? "flex justify-center" : "hidden"}
        >
          <div className="w-full max-w-5xl mx-2 md:mx-4 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {owners.map((item, idx) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6 + idx * 0.15, ease: "easeOut" }}
                  className="overflow-hidden rounded-2xl bg-amberLight shadow-md ring-1 ring-amber-200/40 hover:-translate-y-0.5 hover:shadow-lg transition"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={`${item.name} portrait`}
                      className="h-72 w-full object-cover object-center"
                    />
                    {item.badge && (
                      <span className="absolute left-3 top-3 rounded-full bg-caffia px-3 py-1 text-xs font-semibold text-amber-900 shadow">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="md:text-2xl text-base font-bold text-Greytext text-center">
                      {item.name}
                    </h3>
                    <p className=" text-center font-semibold text-Greytext md:text-xl text-base">
                      {item.role}
                    </p>

                    {item.bio && (
                      <p className="mt-3 md:text-lg text-base font-semibold text-Greytext">
                        {item.bio}
                      </p>
                    )}

                    <div className="mt-5 flex items-center justify-between">
                      {/* Status */}
                      <div className="flex items-center font-semibold md:text-base gap-2 text-xs text-white">
                        <span
                          className={`inline-block shadow-sm shadow-Greytext/70 h-2 w-2 rounded-full ${
                            item.status?.color || "bg-gray-300"
                          }`}
                        ></span>
                        {item.status?.text || "—"}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-2">
                        {item.links?.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            className="rounded-lg bg-caffia/90 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:shadow transition"
                            aria-label={`Open ${l.label}`}
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className={` ${activeTab == "values" ? "block" : "hidden"}`}>
          <p>home3</p>
        </div>
        <div className={`${activeTab == "impact" ? "block" : "hidden"}`}>
          <p>h00ome4</p>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
