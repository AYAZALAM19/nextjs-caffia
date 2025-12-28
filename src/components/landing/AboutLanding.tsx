import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutLanding() {
  return (
    <div>
        <div className="container mx-auto px-4 py-8">
                <h2 className="font-heading md:text-4xl text-lg mx-auto my-4 text-caffia uppercase text-center">
                  About Product
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-start gap-6">
                  {/* First block */}
                  <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
                    <Image
                      src="/assets/images/about_product/process_1_1080x.avif"
                      alt="Product process step 1"
                      width={100}
                      height={100}
                      className="rounded-2xl object-cover "
                    />
                    <p className="text-base md:px-2.5 font-semibold text-grey">
                      Made from Grade A coffee, roasted in small batches.
                    </p>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Hello
                    </Link>
                  </div>
        
                  {/* Second block */}
                  <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
                    <Image
                      src="/assets/images/about_product/process_3_1080x.avif"
                      alt="Product process step 3"
                      width={100}
                      height={100}
                      className="rounded-2xl object-cover "
                    />
                    <p className="text-base md:px-2.5 font-semibold text-grey">
                      Made from Grade A coffee, roasted in small batches.
                    </p>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Hello
                    </Link>
                  </div>
        
                  {/* Third block */}
                  <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
                    <Image
                      src="/assets/images/about_product/packeg_of_product.jpg"
                      alt="Packaged product"
                      width={200}
                      height={200}
                      className="rounded-2xl object-cover h-27 w-56"
                    />
                    <p className="text-base md:px-2.5 font-semibold text-grey">
                      Made from Grade A coffee, roasted in small batches.
                    </p>
                    <Link href="#" className="">
                      Hello
                    </Link>
                  </div>
                </div>
              </div>
    </div>
  )
}
