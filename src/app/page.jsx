// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
import {
  QrCode,
  ArrowRight,
  Heart,
  Star,
  Globe,
  Leaf,
  Award,
  Coffee,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CoffeeSliderBanner from "./components/CoffeeSliderBanner";
// import CoffeeCard from "../components/CoffeeCard";
import Newsletter from "./components/Newsletter";

function page() {
  const products = [
    {
      id: 1,
      title: "French Vanilla",
      description:
        "Smooth medium roast with creamy vanilla notes. Perfect for a mellow, aromatic cup.",
      image: "/assets/images/products/product-5.jfif", // replace with your path or keep gradient
      gradientFrom: "from-amber",
      gradientTo: "to-amberLight",
      href: "/menu",
      cta: "Read More",
      tags: ["Medium roast", "Vanilla", "Aromatic"],
    },
    {
      id: 2,
      title: "Original Classic",
      description:
        "Balanced everyday brew with a clean finish. Ideal for black coffee or with milk.",
      image: "/assets/images/products/product-6.jfif",
      gradientFrom: "from-amberLight",
      gradientTo: "to-amber",
      href: "/menu",
      cta: "Read More",
      tags: ["Balanced", "Daily brew", "Clean finish"],
    },
    {
      id: 3,
      title: "Turkish Hazelnut",
      description:
        "Rich, nutty profile with Turkish-style depth. Best enjoyed finely ground.",
      image: "/assets/images/products/product-7.jfif",
      gradientFrom: "from-amber",
      gradientTo: "to-amberLight",
      href: "/menu",
      cta: "Read More",
      tags: ["Nutty", "Bold", "Fine grind"],
    },
    {
      id: 4,
      title: "Mocha Caramel",
      description:
        "Chocolate-forward blend with caramel sweetness and a silky mouthfeel.",
      image: "/assets/images/products/product-8.jfif",
      gradientFrom: "from-amberLight",
      gradientTo: "to-amber",
      href: "/menu",
      cta: "Read More",
      tags: ["Chocolate", "Sweet", "Silky"],
    },
  ];

  return (
    <>
      <CoffeeSliderBanner />
      <section className="my-20 bg-pink-300/10">
        <div className="flex justify-center items-center py-5">
          <p className="inline-block text-base font-semibold text-amber bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-2 rounded-full border-2 border-amber-200 shadow-sm hover:shadow-md hover:from-amber hover:via-amber-200 hover:to-amberLight hover:bg-gradient-to-bl transition-colors duration-500 ease-in-out">
            Featured Products
          </p>
        </div>
        <div>
          <h2 className="text-center font-bold font-heading uppercase text-caffia md:text-5xl text-lg py-8">
            Premium Coffee Collection
          </h2>
          <p className="font-semibold text-grey7 md:text-xl text-base md:px-80 text-center">
            Discover our most popular coffee blends, carefully selected for
            their exceptional quality and taste.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image/Gradient Section */}
            <div className="h-48 w-full">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full bg-gradient-to-r ${item.gradientFrom || 'from-gray-300'} ${item.gradientTo || 'to-gray-400'}`}
                />
              )}
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-Greytext mb-3">
                {item.title}
              </h3>
              
              <p className="text-Greytext/75 font-semibold text-base leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-semibold bg-amber/45 text-caffia rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <a
                href={item.href}
                className="inline-block w-full text-center bg-caffia hover:bg-amberLigh text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                {item.cta || "Read More"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

        <div className="flex justify-center items-center">
          <Link href="/product">
            <button className="hover:bg-amberLight text-amber duration-300 border-amberLight border bg-white font-body font-semibold hover:text-white py-2 px-4 rounded-lg">
              View All Product
            </button>
          </Link>
        </div>
      </section>

      <section className="my-10">
        <div className=" flex justify-center items-center ">
          <p className=" font-body font-semibold md:text-base  text-base bg-amberLight/15 hover:bg-amberLight/80 duration-200 text-amberLight hover:text-white px-3.5 pb-0.5 inline-flex items-center justify-center rounded-xl">
            About Caffie
          </p>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl uppercase my-2.5 text-center text-caffia font-bold py-5">
            Where Coffee Meets Comfort
          </h2>
          <p className="font-body md:text-xl font-semibold text-lg md:px-52 px-10 text-grey text-center">
            At Caffie, every sip tells a story. Whether you're rushing into a
            busy morning or slowing down for an afternoon breather, we're here
            to make each moment special. Our brews aren't just drinks — they're
            comfort in a cup, carefully crafted with ethically sourced beans and
            served with heart.
          </p>
        </div>
      </section>

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

      <section className="my-20 md:px-20 px-4">
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

      <div className="container mx-auto px-4 py-8">
        <h2 className="font-heading md:text-4xl text-lg mx-auto my-4 text-caffia uppercase text-center">
          About Product
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6">
          {/* First block */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
            <img
              src="/assets/images/about_product/process_1_1080x.avif"
              alt="Product process step 1"
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
            <img
              src="/assets/images/about_product/process_3_1080x.avif"
              alt="Product process step 3"
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
            <img
              src="/assets/images/about_product/packeg_of_product.jpg"
              alt="Packaged product"
              className="rounded-2xl object-cover w-72"
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

      <Newsletter />
    </>
  );
}
export default page;
