import React from "react";

function HeroBanner({ img, title, description, subTitle }) {
  return (
    <div className="relative">
      <img
        src={img}
        className="object-cover object-center  w-full h-[500px] "
        alt=""
      />
      <div className="absolute inset-0  bg-amber/75"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="py-4 px-6 text-center">
          <div className=" flex justify-center items-center ">
            <p className=" font-body font-semibold md:text-base  text-base bg-amberLight/15 hover:bg-amberLight/80 duration-200 text-amberLight hover:text-white px-3.5 pb-0.5 inline-flex items-center justify-center rounded-xl">
              {subTitle}
            </p>
          </div>
          <h1 className="text-center font-heading font-bold md:text-6xl mb-4 text-white">
            {title}
          </h1>
          <p className="font-body md:text-xl text-lg font-semibold md:px-80 text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
