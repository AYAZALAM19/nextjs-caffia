
import { Leaf, Award, Heart, Globe } from "lucide-react";
import react from 'react';

 export default function Qualities() {
  return (
    <div className="container mx-auto px-3 md:px-4">
      <section className="my-8 md:my-10 flex flex-col lg:flex-row justify-center gap-4 md:gap-6 items-center">
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-4 md:py-6 px-3 md:px-4 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Leaf className="mb-3 w-7 md:w-8 h-7 md:h-8 text-green-700" />
          <p className="text-sm md:text-base font-body font-semibold text-Greytext">
            Ethically Sourced
          </p>
          <p className="text-xs md:text-sm font-body font-medium text-grey mt-2">
            Direct trade partnerships with coffee farmers worldwide
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-4 md:py-6 px-3 md:px-4 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Award className="mb-3 w-7 md:w-8 h-7 md:h-8 text-yellow-600" />
          <p className="text-sm md:text-base font-body font-semibold text-Greytext">
            Award Winning
          </p>
          <p className="text-xs md:text-sm font-body font-medium text-grey mt-2">
            Recognized for excellence in coffee roasting and brewing
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-4 md:py-6 px-3 md:px-4 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Heart className="mb-3 w-7 md:w-8 h-7 md:h-8 text-red-700" />
          <p className="text-sm md:text-base font-body font-semibold text-Greytext">
            Crafted with Love
          </p>
          <p className="text-xs md:text-sm font-body font-medium text-grey mt-2">
            Every cup is prepared with passion and attention to detail
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-4 md:py-6 px-3 md:px-4 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Globe className="mb-3 w-7 md:w-8 h-7 md:h-8 text-blue-800" />
          <p className="text-sm md:text-base font-body font-semibold text-Greytext">
            Global Community
          </p>
          <p className="text-xs md:text-sm font-body font-medium text-grey mt-2">
            Connecting coffee lovers from around the world
          </p>
        </div>
      </section>
    </div>
  );
};


