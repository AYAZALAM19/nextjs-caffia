
import { Coffee, Users, Globe } from "lucide-react";

export default function Stats() {
  return ( 
    <section className="my-8 md:my-10 container mx-auto px-3 md:px-4">
      <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
        <div>
          <div className="flex justify-center mb-2 md:mb-3">
            <Coffee className="w-10 md:w-12 h-10 md:h-12 text-amber-600" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">50K+</div>
          <div className="text-gray-600 font-body font-semibold text-sm md:text-base">
            Cups Served Daily
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-2 md:mb-3">
            <Users className="w-10 md:w-12 h-10 md:h-12 text-amber-600" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">15K+</div>
          <div className="text-gray-600 font-body font-semibold text-sm md:text-base">
            Happy Customers
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-2 md:mb-3">
            <Globe className="w-10 md:w-12 h-10 md:h-12 text-amber-600" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">25+</div>
          <div className="text-gray-600 font-semibold font-body text-sm md:text-base">
            Coffee Origins
          </div>
        </div>
      </div>
    </section>
  );
}
