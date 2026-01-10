import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@/data/products";

type BestOption = {
  image: string;
  link: string;
  title: string;
};

export default function BestOptions() {

  const SlugData = products.filter((item) => item.slug)
  console.log('here is slug data', SlugData.length)
  const data: BestOption[] = [
  {
    image: "/assets/images/downloaded_images/Best_options-1.png",
    link: `/product/${SlugData[0]?.slug || ''}`,
    title: "Vanilla Latte",
  },
  {
    image: "/assets/images/downloaded_images/Best_options-2.png",
    link: `/product/${SlugData[1]?.slug || ''}`,
    title: "Organic Brew",
  },
  {
    image: "/assets/images/downloaded_images/Best_options-4.png",
    link: `/product/${SlugData[2]?.slug || ''}`,
    title: "Hazelnut Delight",
  },
  {
    image: "/assets/images/downloaded_images/Best_options-3.png",
    link: `/product/${SlugData[2]?.slug || ''}`,
    title: "Dark Roast",
  },
  {
    image: "/assets/images/downloaded_images/Best_options-5.png",
    link: `/product/${SlugData[2]?.slug || ''}`,
    title: "Caramel Mocha",
  },
];

console.log( 'here si rhe data',data.filter((item) => item.link))
  return (
    <div className="container mx-auto">
      <h2 className="lg:text-4xl text-caffia text-lg md:text-2xl my-4 md:my-6 px-3 md:px-4 font-semibold">Order Our Best Options</h2>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 px-3 md:px-4">
          {data.map((item, index) => (
            <div  key={index}>
                <Link
              href={item.link}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-[180px] h-[180px] flex justify-center items-center">
                <Image
                  src={item.image}
                  width={180}
                  height={180}
                  alt={item.title}
                  className="object-cover rounded-full shadow-md w-36 h-36 lg:w-40 lg:h-40 "
                />
              </div>
            </Link>
            <p className="text-center font-semibold lg:text-xl text-base text-caffia my-4">
                {item.title}
            </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
