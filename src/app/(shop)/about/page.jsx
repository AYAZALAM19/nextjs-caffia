"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Timeline from "../../components/ui/Timeline";
import HeroBanner from "../../components/HeroBanner";
import { useId } from "react";
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
  icons,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");

  const id = useId();

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
  const value = [
    {
      id: "leaf",
      icon: <Leaf />,
      title: "Sustainability",
      description:
        "We're committed to ethical sourcing and environmental responsibility in every step of our process.",
      description2:
        "100% sustainable farming practices with direct farmer partnerships",
      color: {
        text: "text-green-700",
        bg: "bg-green-500/10",
      },
    },
    {
      id: "award",
      icon: <Award size={32} />,
      title: " Quality Excellence",
      description:
        "Our expert roasters ensure every batch meets the highest standards of flavor and aroma.",
      description2: "Award-winning roasting techniques perfected over 8 years",
      color: {
        text: "text-caffia",
        bg: "bg-amberLight/45",
      },
    },
    {
      id: "heart",
      icon: <Heart size={32} />,
      title: "Passion Driven",
      description:
        " Coffee isn't just our business—it's our passion, and it shows in every cup we serve.",
      description2: "Handcrafted with love by our passionate coffee artisans",
      color: {
        text: "text-red-700",
        bg: "bg-red-600/20",
      },
    },
    {
      id: "users",
      icon: <Users size={32} />,
      title: "Community Focus",
      description:
        "We believe in building strong relationships with our farmers, customers, and local community.",
      description2: "Supporting 50+ farming communities worldwide",
      color: {
        text: "text-blue-700",
        bg: "bg-blue-700/30",
      },
    },
  ];
  const impact = [
    {
      icons: <Users size={32} />,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icons: <Globe size={32} />,
      value: "15",
      label: "Coffee Origins",
    },
    {
      icons: <Calendar size={32} />,
      value: "8",
      label: "Years Experience",
    },
    {
      icons: <Target size={32} />,
      value: "100%",
      label: "Satisfaction Rate",
    },
    {
      icons: <Coffee size={32} />,
      value: "24/7",
      label: "Fresh Roasting",
    },
    {
      icons: <MapPin size={32} />,
      value: "5",
      label: "Store Locations",
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

      <section className="my-20">
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
            <div className="flex flex-col md:flex-row md:mx-20 md:gap-8 justify-center items-center">
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="md:px-10 px-4">
                  <h2 className="text-4xl font-bold text-caffia mb-4">
                    Where Coffee Meets Comfort
                  </h2>
                  <p className="mb-4 font-semibold text-Greytext md:text-xl text-lg">
                    At Caffie, every sip tells a story. Whether you're rushing
                    into a busy morning or slowing down for an afternoon
                    breather, we're here to make each moment special. Our brews
                    aren't just drinks — they're comfort in a cup, carefully
                    crafted with ethically sourced beans and served with heart.
                  </p>
                  <p className="mb-6 font-semibold text-Greytext md:text-xl text-lg">
                    Step inside, breathe in the aroma, and discover your new
                    favorite ritual. From single-origin masterpieces to
                    signature blends, we're passionate about delivering the
                    perfect cup that speaks to your soul.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-center text-caffia">
                        2015
                      </h3>
                      <p className="font-semibold text-Greytext">Founded</p>
                    </div>
                    <div>
                      <h3 className="text-xl text-center font-bold text-caffia ">
                        5
                      </h3>
                      <p className="font-semibold text-Greytext">Locations</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 h-auto my-6 md:my-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <picture>
                  <img
                    src="/assets/images/about_banner1.webp"
                    alt="Caffie ambiance"
                    className="rounded-xl shadow-lg w-full object-cover h-64 md:h-auto"
                  />
                </picture>
              </motion.div>
            </div>
            {/* Vertical line */}
            <Timeline storyData={storyData} />
          </div>
        </div>

        <div
          className={activeTab == "teams" ? "flex justify-center" : "hidden"}
        >
          <div className="w-full max-w-5xl mx-2 md:mx-4 my-10">
            <h2 className="text-center text-caffia md:text-4xl font-bold uppercase text-base">
              Meet Our Team
            </h2>
            <p className="md:px-24 md:mt-6 md:mb-10 text-center font-semibold text-Greytext md:text-xl text-base">
              Behind every great cup of coffee is a passionate team dedicated to
              excellence. Meet the people who make Caffie special.
            </p>
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-center text-caffia font-bold md:text-4xl text-base mt-14 uppercase">
              Our Core Values
            </h3>
            <p className=" text-center md:px-52 font-semibold text-Greytext md:text-xl my-6 text-base">
              These principles guide everything we do, from sourcing beans to
              serving customers, ensuring we deliver excellence in every aspect
              of our business.
            </p>
          </motion.div>
          {value.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              key={`${id}-${idx}`}
              className="md:mx-auto mx-3 px-4 py-8 inset-shadow-2xs md:gap-3 rounded-xl my-4 md:max-w-6xl flex flex-col sm:flex-col md:flex-row justify-start"
            >
              <div
                className={`${item.color.text} ${item.color.bg} rounded-full w-14 h-14 md:ml-0 ml-40 justify-center inline-flex items-center  `}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="my-3 md:text-2xl text-lg text-caffia md:text-start text-center uppercase">
                  {item.title}
                </h3>
                <p className="font-semibold text-Greytext md:text-xl md:text-start text-center text-base">
                  {item.description}
                </p>
                <p
                  className={`${item.color.text} text-center py-2 md:py-3  px-4 my-4 font-semibold rounded-full ${item.color.bg}`}
                >
                  {item.description2}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={`${activeTab == "impact" ? "block" : "hidden"}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-center uppercase my-7 font-bold text-caffia md:text-4xl text-lg">
                Our Impact
              </h2>
              <p className="font-semibold md:text-xl text-lg text-Greytext text-center md:px-60 px-4">
                We measure our success not just in cups sold, but in the
                positive impact we create for our community, farmers, and
                environment.
              </p>
            </div>

            <div className="grid mx-auto md:px-24 md:grid-cols-2 my-10 grid-cols-1 lg:grid-cols-3 gap-6">
              {impact.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6 + idx * 0.15, ease: "easeOut" }}
                  className="flex mx-auto items-center justify-center flex-col my-4 w-72 p-6 bg-amberLight/15 shadow-md rounded-xl transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-caffia mb-2">{item.icons}</div>
                  <h3 className="text-2xl font-bold text-caffia mb-1">
                    {item.value}
                  </h3>
                  <p className="text-center font-semibold text-Greytext md:text-xl text-base">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}>
                <div className="flex gap-4 items-center ">
                  <p className="bg-green-600/20 inline-flex items-center justify-center px-4 py-4 rounded-full text-green-700 font-semibold text-lg">
                  <Leaf className="text-green-700" />
                  </p>
                  <p ClassName="text-center font-semibold text-Greytext md:text-xl text-base px-4 md:px-60">
                    Environmental Impact
                  </p>
                </div>
                <p className="font-semibold text-Greytext md:text-xl text-base px-4 md:px-60 my-4">
                  We've reduced our carbon footprint by 40% through sustainable practices, renewable energy, and eco-friendly packaging. Our commitment to the planet is as strong as our commitment to great coffee.
                </p>
              </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-amberLight py-10">
        <div>
          <h3 className=" my-4 font-semibold md:text-4xl uppercase text-lg text-caffia text-center ">
            Ready to Experience Caffie?
          </h3>
          <p className="my-4 text-center font-semibold text-Greytext md:text-xl text-base px-4 md:px-60">
            Join thousands of coffee lovers who have made Caffie their daily
            ritual. Visit us today and taste the difference passion makes.
          </p>
        </div>
        <div className="flex justify-center gap-5 my-3 mt-3">
          <button className=" px-4 py-3 bg-caffia rounded-md text-white font-semibold md:text-lg text-base">
            Find the location
          </button>
          <button className=" px-4 py-3 font-semibold rounded-md text-white md:text-lg text-base border border-white ">
            shop online
          </button>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
