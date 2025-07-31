"use client";
import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("");
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
          img="/assets/images/about_banner.jpg"
          description="From a small neighborhood coffee shop to a premium coffee experience, discover the journey that makes Caffie special."
          subTitle="About Caffie"
        />
      </div>

      <div className="container mx-auto ">
        <h1 className="font-heading text-2xl md:text-6xl font-bold inli text-black text-center">
          Our Values
        </h1>
        <p className="my-8 text-Greytext font-semibold md:text-2xl text-base md:px-64 text-center">
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

      <div className="container md:px-44 mx-auto">
        <div className="flex flex-wrap justify-evenly  bg-pink-500/15 p-4 gap-4">
          <button
            onClick={() => setActiveTab("story")}
            className={`font-body font-semibold text-black md:text-lg text-base py-2 px-9 rounded-lg ${
              activeTab === "story" ? "bg-amberLight text-white" : ""
            }`}
          >
            Story
          </button>
          <button
            onClick={() => setActiveTab("value")}
            className={`font-body font-semibold text-black md:text-lg text-base py-2 rounded-lg px-9 ${
              activeTab === "value" ? "bg-amberLight text-white" : ""
            } `}
          >
            Values
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`font-body font-semibold text-black md:text-lg text-base py-2 rounded-lg px-9 ${
              activeTab === "team" ? "bg-amberLight text-white" : ""
            }`}
          >
            Teams
          </button>
          <button
            onClick={() => setActiveTab("impact")}
            className={`font-body font-semibold text-black md:text-lg text-base py-2 rounded-lg px-9 ${
              activeTab === "impact" ? "bg-amberLight text-white" : ""
            }`}
          >
            Impact
          </button>
        </div>
      </div>

      <div className="" value="story">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mx-auto md:px-20 px-4 py-10">
          <div>
            <h2 className="font-heading font-semibold md:text-5xl text-lg text-gray-700 mb-6">
              Where Coffee Meets Comfort
            </h2>
            <p className="mb-4 text-grey font-body font-semibold md:text-lg text-base text-start leading-relaxed">
              At Caffie, every sip tells a story. Whether you're rushing into a
              busy morning or slowing down for an afternoon breather, we're here
              to make each moment special. Our brews aren't just drinks —
              they're comfort in a cup, carefully crafted with ethically sourced
              beans and served with heart.
            </p>
            <p className="mb-6 text-grey font-body font-semibold md:text-lg text-base text-start leading-relaxed">
              Step inside, breathe in the aroma, and discover your new favorite
              ritual. From single-origin masterpieces to signature blends, we're
              passionate about delivering the perfect cup that speaks to your
              soul.
            </p>
            <button className="py-2 px-4 inline-flex items-center justify-center font-semibold font-body text-base bg-amberLight hover:bg-amber text-white rounded-lg transition-colors duration-200">
              View Our Store
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Coffee cup with steam rising, representing comfort and warmth"
              className="max-h-96 w-full object-contain rounded-lg"
            />
          </div>
        </section>
        <section>
          <div className="relative flex flex-col items-center w-full px-4 py-16">
            {/* Timeline vertical line */}
            <div
              className="absolute top-0 left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full z-0"
              style={{
                background:
                  "linear-gradient(to bottom, #F8DCC2, #D28B55, #A14E1C, #78350F)",
              }}
            ></div>

            {/* Timeline items */}
            {/* Item 1 */}
            <div className="absolute left-2 mx-1 md:mx-0 md:relative top-52 bg-amber bg-gradient-to-r p-3 md:p-5 rounded-full text-white">
              <Coffee className="text-white" />
            </div>
            <div className="relative z-10 mb-20 w-full mr-auto px-16 md:w-1/2">
              <div className="bg-white  shadow-Greytext shadow-2xl p-6 rounded-lg ">
                <span className="text-sm font-semibold bg-[#F8DCC2] text-[#78350F] px-2 py-1 rounded">
                  First Store Opened
                </span>
                <h3 className="text-xl font-bold text-[#78350F] mt-2">2015</h3>
                <p className="font-semibold text-gray-700">The Beginning</p>
                <p className="text-gray-600">
                  Started as a small neighborhood coffee shop with a dream to
                  serve exceptional coffee.
                </p>
                <img
                  src="/assets/images/about_banner.jpg"
                  className="h-[150px] w-full rounded-md my-1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto my-10">
        <h2 className="uppercase font-heading text-black font-bold md:text-5xl text-xl  text-center">
          Our Impact
        </h2>

        <div className="py-10">
          <p className="text-center md:px-36 text-Greytext px-4 font-body font-semibold md:text-xl text-lg">
            We measure our success not just in cups sold, but in the positive
            impact we create for our community, farmers, and environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20 py-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-6 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg"
            >
              <div className="mb-4 text-amberLight">{stat.icon}</div>
              <p className="md:text-lg text-base font-body font-semibold text-Greytext">
                {stat.value}
              </p>
              <p className="md:text-lg text-base font-body font-semibold text-grey">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutPage;
