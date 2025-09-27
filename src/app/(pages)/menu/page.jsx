import React from "react";
import HeroBanner from "../../components/HeroBanner";
// import GooglePay from "@/app/components/GoogelPay";
import {IndianRupee} from 'lucide-react'

function Menu() {
 const menuItems = [
  {
    id: 1,
    name: "Vanilla Instant Coffee",
    description:
      "Smooth and aromatic instant coffee infused with natural vanilla flavoring. Rich coffee taste with sweet vanilla notes for a comforting cup.",
    price: 300,
    img: "/assets/images/products/product-1.jpeg",
    category: "Coffee",
    isSpecial: true,
  },
  {
    id: 2,
    name: "Original Instant Coffee",
    description:
      "Classic premium instant coffee made from carefully selected beans. Pure, bold coffee flavor with no additives - just authentic coffee taste.",
    price: 400,
    img: "/assets/images/products/product-2.jfif",
    category: "Specialty Drinks",
  },
  {
    id: 3,
    name: "Hazelnut Instant Coffee",
    description:
      "Delicious instant coffee blended with rich hazelnut flavoring. Creamy, nutty aroma with a smooth finish that coffee lovers adore.",
    price: 300,
    img: "/assets/images/products/product-3.jfif",
    category: "Cold Drinks",
  },
  {
    id: 4,
    name: "Vanilla Instant Coffee",
    description:
      "Premium vanilla-flavored instant coffee with a perfect balance of coffee strength and sweet vanilla essence. Ideal for morning or evening enjoyment.",
    price: 400,
    img: "/assets/images/products/product-4.jfif",
    category: "Pastries",
  },
  {
    id: 5,
    name: "Vanilla Instant Coffee",
    description:
      "Luxurious vanilla instant coffee with a velvety smooth texture. Enhanced with natural vanilla extract for an indulgent coffee experience.",
    price: 300,
    img: "/assets/images/products/product-1.jpeg",
    category: "Desserts",
  },
];


  return (
    <>
        <HeroBanner
          title="Our Menu"
          img="/assets/images/about_banner.jpg"
          description="From a small neighborhood coffee shop to a premium coffee experience, discover the journey that makes Caffie special."
          subTitle="Our Menu" 
          />
      <div>
        {/* Menu
        <GooglePay /> */}
        <div className="flex justify-center mt-10">
          <p className="inline-block text-base font-semibold text-amber bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-2 rounded-full border-2 border-amber-200 shadow-sm hover:shadow-md hover:from-amber hover:via-amber-200 hover:to-amberLight hover:bg-gradient-to-bl transition-colors duration-500 ease-in-out">
            Our Menu
          </p>
        </div>
        <div className="">
          <h1 className="text-center font-bold font-heading uppercase text-Greytext md:text-5xl text-lg md:py-6 py-4">
            Drinks & Delights
          </h1>
          <p className="font-semibold mb-8 px-4 text-Greytext md:text-xl text-base md:px-80 text-center">
            Browse our full menu of hot and cold beverages, fresh pastries, and light bites. Every item is crafted with care using the finest ingredients.
          </p>
        </div>
        {/* Menu Items */}
        <div className="max-w-5xl px-4 mx-auto space-y-6">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-amber-200/50 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Special Badge */}
              {item.isSpecial && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-amber to-amberLight text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ✨ Chef's Special
                  </span>
                </div>
              )}

              <div className="lg:flex">
                {/* Image Section */}
                <div className="lg:w-80 lg:h-64 lg:flex-shrink-0"> 
                  <div className="relative overflow-hidden lg:h-full">
                    <img
                      className="w-full h-64 lg:h-full object-cover object-right-top group-hover:scale-105 transition-transform duration-700"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:py-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between h-full">
                    <div className="flex-1 lg:pr-8">
                      {/* Category */}
                      <span className="inline-block text-sm font-bold tracking-wide uppercase text-caffia bg-amberLight/30 px-2 py-1 rounded mb-3">
                        {item.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-caffia mb-3 group-hover:text-amberLight transition-colors duration-300">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-Greytext text-sm md:text-base font-semibold mb-6 lg:mb-0">
                        {item.description}
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center lg:flex-col lg:items-end lg:justify-center lg:h-full">
                      <div className="text-right flex space-x-28 md:gap-0 lg:flex-col">
                        <div className="text-3xl lg:text-4xl font-bold text-amberLight mb-2">
                          {item.price}
                        </div>
                        <button className="bg-gradient-to-r from-amber/75 to-amberLight/70 hover:from-amber hover:to-amberLight text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap transition-all duration-300">
                          Order Now
                        </button>
                      </div>
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


      <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Can't decide? Try our Coffee Flight!
            </h3>
            <p className="text-gray-600 mb-6">
              Sample three of our signature drinks and discover your perfect match.
            </p>
            <button className="bg-gradient-to-t from-amber via-amber-200 to-amberLight hover:from-amber-700 hover:to-orange-700 text-base text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex">
              Explore Coffee Flight - 799<IndianRupee className="text-white w-3" />
            </button>
          </div>
        </div>
    </>
  );
}

export default Menu;
