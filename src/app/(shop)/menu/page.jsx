import React from "react";
import HeroBanner from "../../../components/HeroBanner";
// import GooglePay from "@/app/components/GoogelPay";
import {ChevronRight, IndianRupee} from 'lucide-react'
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";

function Menu() {
 const menuItems = [
  {
    id: 1,
    name: "Vanilla Instant Coffee",
    description:
      "Smooth and aromatic instant coffee infused with natural vanilla flavoring. Rich coffee taste with sweet vanilla notes for a comforting cup.",
    price: 300,
    img: "/assets/images/products/product-1.webp",
    category: "Coffee",
    isSpecial: true,
  },
  {
    id: 2,
    name: "Original Instant Coffee",
    description:
      "Classic premium instant coffee made from carefully selected beans. Pure, bold coffee flavor with no additives - just authentic coffee taste.",
    price: 400,
    img: "/assets/images/products/product-2.webp",
    category: "Specialty Drinks",
  },
  {
    id: 3,
    name: "Hazelnut Instant Coffee",
    description:
      "Delicious instant coffee blended with rich hazelnut flavoring. Creamy, nutty aroma with a smooth finish that coffee lovers adore.",
    price: 300,
    img: "/assets/images/products/product-3.webp",
    category: "Cold Drinks",
  },
  {
    id: 4,
    name: "Vanilla Instant Coffee",
    description:
      "Premium vanilla-flavored instant coffee with a perfect balance of coffee strength and sweet vanilla essence. Ideal for morning or evening enjoyment.",
    price: 400,
    img: "/assets/images/products/product-4.webp",
    category: "Pastries",
  },
  {
    id: 5,
    name: "Vanilla Instant Coffee",
    description:
      "Luxurious vanilla instant coffee with a velvety smooth texture. Enhanced with natural vanilla extract for an indulgent coffee experience.",
    price: 300,
    img: "/assets/images/products/product-1.webp",
    category: "Desserts",
  },
];


  return (
    <>
    <div className="conatainer mx-auto">
       <Breadcrumb separator={<ChevronRight />} 
         capitalizeLinks/>
    </div>
        <HeroBanner
          title="Our Menu"
          img="/assets/images/about_banner1.webp"
          description="From a small neighborhood coffee shop to a premium coffee experience, discover the journey that makes Caffie special."
          subTitle="Our Menu" 
          />
      <div>
        {/* Menu
        <GooglePay /> */}
        <div className="flex justify-center mt-6 md:mt-8 px-3 md:px-4">
          <p className="inline-block text-xs md:text-base font-semibold text-amber bg-gradient-to-r from-amber-50 to-orange-50 px-4 md:px-6 py-2 rounded-full border-2 border-amber-200 shadow-sm hover:shadow-md hover:from-amber hover:via-amber-200 hover:to-amberLight hover:bg-gradient-to-bl transition-colors duration-500 ease-in-out">
            Our Menu
          </p>
        </div>
        <div className="px-3 md:px-4">
          <h1 className="text-center font-bold font-heading uppercase text-Greytext text-xl md:text-3xl lg:text-5xl md:py-4 py-2">
            Drinks & Delights
          </h1>
          <p className="font-medium mb-6 md:mb-8 text-Greytext text-xs md:text-base text-center">
            Browse our full menu of hot and cold beverages, fresh pastries, and light bites. Every item is crafted with care using the finest ingredients.
          </p>
        </div>
        {/* Menu Items */}
        <div className="max-w-5xl px-3 md:px-4 mx-auto space-y-3 md:space-y-6">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-lg md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-amber-200/50`}
            >
              {/* Special Badge */}
              {item.isSpecial && (
                <div className="absolute top-1.5 md:top-4 left-1.5 md:left-4 z-10">
                  <span className="bg-gradient-to-r from-amber to-amberLight text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md">
                    ✨ Chef's Special
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-72 flex-shrink-0">
                  <div className="relative w-full h-[180px] md:h-[260px] lg:h-[300px] bg-gray-100 overflow-hidden">

                     <Image
                        src={item.img}
                        alt={item.name}
                        width={600}
                        height={400}
                        className="
                          w-full h-full
                          object-contain md:object-cover
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-3 md:p-6 lg:p-8 lg:py-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 md:gap-4">
                    <div className="flex-1 lg:pr-6">
                      {/* Category */}
                      <span className="inline-block text-[10px] md:text-xs lg:text-sm font-bold tracking-wide uppercase text-caffia bg-amberLight/30 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded mb-1 md:mb-3">
                        {item.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-sm md:text-xl lg:text-3xl font-bold text-caffia mb-1.5 md:mb-3 group-hover:text-amberLight transition-colors duration-300">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-Greytext text-[11px] md:text-sm lg:text-base font-medium mb-2 md:mb-6 lg:mb-0 line-clamp-2 md:line-clamp-none">
                        {item.description}
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center gap-2 md:gap-3 mt-1 md:mt-0">
                      <div className="text-lg md:text-3xl lg:text-4xl font-bold text-amberLight">
                        ₹{item.price}
                      </div>
                      <button className="bg-gradient-to-r from-amber/75 to-amberLight/70 hover:from-amber hover:to-amberLight text-white font-semibold px-3 md:px-6 py-1.5 md:py-2 text-[10px] md:text-sm rounded-full shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap transition-all duration-300">
                        <Link href='/product'>View</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-caffia to-amberLight group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>


      <div className="text-center my-8 md:my-10 px-3 md:px-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg md:rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-white/50 shadow-lg">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">
              Can't decide? Try our Coffee Flight!
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
              Sample three of our signature drinks and discover your perfect match.
            </p>
            <button className="bg-gradient-to-t from-amber via-amber-200 to-amberLight hover:from-amber-700 hover:to-orange-700 text-xs md:text-base text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-1">
              Explore Coffee Flight - 799<IndianRupee className="text-white w-3 md:w-4" />
            </button>
          </div>
        </div>
    </>
  );
}

export default Menu;
