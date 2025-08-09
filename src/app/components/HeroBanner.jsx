import React from "react";
import {Star} from "lucide-react"

function HeroBanner({ img, title, description, subTitle }) {
  return (
    <div className="relative bg-gradient-to-br from-amber to-amberLight">
      <img
        src={img}
        className="object-cover object-center  w-full h-[350px] md:h-[500px] "
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-darkAmber/55 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 z-10 flex items-center ">
        <div className="py-4 px-4 md:px-16">
          <div
            className="inline-flex items-center gap-2 px-3 md:px-4 md:py-2 py-1 my-2 rounded-full bg-gradient-to-r from-darkAmber/85 to-amberLight/100 text-amber-200 text-base md:text-base font-semibold transition-all duration-700 translate-y-0 opacity-100"
          >
            <Star className="w-4 h-4" />
             {subTitle}
          </div>
          <h1 className=" font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-4 text-white">
            {title}
          </h1>
          <p className="font-body md:text-xl lg:text-2xl max-w-3xl text-start text-lg font-semibold  text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
