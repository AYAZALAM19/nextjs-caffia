
import { Coffee, Users, Globe } from "lucide-react";

export default function Stats() {
  return ( 
    <section className="my-20 md:px-20 px-4 container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="flex justify-center mb-4">
            <Coffee className="w-12 h-12 text-amber-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
          <div className="text-gray-600 font-body font-semibold md:text-xl text-lg">
            Cups Served Daily
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-amber-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">15K+</div>
          <div className="text-gray-600 font-body font-semibold md:text-xl text-lg ">
            Happy Customers
          </div>
        </div>
        <div>
          <div className="flex justify-center mb-4">
            <Globe className="w-12 h-12 text-amber-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
          <div className="text-gray-600 font-semibold font-body md:text-xl text-lg ">
            Coffee Origins
          </div>
        </div>
      </div>
    </section>
  );
}
