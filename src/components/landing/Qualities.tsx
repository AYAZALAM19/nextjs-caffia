
import { Leaf, Award, Heart, Globe } from "lucide-react";
import react from 'react';

 export default function Qualities() {
  return (
    <div className="container mx-auto">
      <section className="my-20 flex flex-col lg:flex-row justify-center gap-6 lg:gap-10 mx-4 lg:mx-20 items-center">
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-8 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Leaf className="mb-4 w-8 h-8 text-green-700" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Ethically Sourced
          </p>
          <p className="md:text-lg text-base font-body font-semibold text-grey">
            Direct trade partnerships with coffee farmers worldwide
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-8 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Award className="mb-4 w-8 h-8 text-yellow-600" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Award Winning
          </p>
          <p className="md:text-lg text-base font-body font-semibold text-grey">
            Recognized for excellence in coffee roasting and brewing
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-8 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Heart className="mb-4 w-8 h-8 text-red-700" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Crafted with Love
          </p>
          <p className="md:text-lg text-base font-body font-semibold text-grey">
            Every cup is prepared with passion and attention to detail
          </p>
        </div>
        <div className="w-full lg:w-1/4 bg-pink-500/10 hover:shadow-xl hover:shadow-black/30 py-8 px-6 flex flex-col items-center justify-center text-center transition-shadow duration-300 rounded-lg">
          <Globe className="mb-4 w-8 h-8 text-blue-800" />
          <p className="md:text-lg text-base font-body font-semibold text-Greytext ">
            Global Community
          </p>
          <p className="md:text-lg text-base font-body font-semibold md:px-5 text-grey">
            Connecting coffee lovers from around the world
          </p>
        </div>
      </section>
    </div>
  );
};


