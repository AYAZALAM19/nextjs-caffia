
import Image from "next/image";
import Link from "next/link";
import { type FC } from 'react';

export default function AboutProduct() {
  return (
    <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
      <h2 className="font-heading text-xl md:text-2xl lg:text-4xl my-3 md:my-4 text-caffia uppercase text-center">
        About Product
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-6">
        {/* First block */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-3">
          <Image
            src="/assets/images/about_product/process_1_1080x.avif"
            alt="Product process step 1"
            width={100}
            height={100}
            className="rounded-lg md:rounded-2xl object-cover"
          />
          <p className="text-sm md:text-base font-medium text-grey">
            Made from Grade A coffee, roasted in small batches.
          </p>
          <Link href="#" className="text-blue-600 hover:underline text-xs md:text-sm">
            Learn More
          </Link>
        </div>

        {/* Second block */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-3">
          <Image
            src="/assets/images/about_product/process_3_1080x.avif"
            alt="Product process step 3"
            width={100}
            height={100}
            className="rounded-lg md:rounded-2xl object-cover"
          />
          <p className="text-sm md:text-base font-medium text-grey">
            Made from Grade A coffee, roasted in small batches.
          </p>
          <Link href="#" className="text-blue-600 hover:underline text-xs md:text-sm">
            Learn More
          </Link>
        </div>

        {/* Third block */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-3">
          <Image
            src="/assets/images/about_product/packeg_of_product.jpg"
            alt="Packaged product"
            width={200}
            height={200}
            className="rounded-lg md:rounded-2xl object-cover h-24 md:h-32 w-40 md:w-56"
          />
          <p className="text-sm md:text-base font-medium text-grey">
            Made from Grade A coffee, roasted in small batches.
          </p>
          <Link href="#" className="text-blue-600 hover:underline text-xs md:text-sm">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};


