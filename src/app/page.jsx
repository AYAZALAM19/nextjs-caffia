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
import Link from "next/link";
import FeaturedProduct from '@/components/landingPage/FeaturedProducts'
import CoffeeSliderBanner from "../components/CoffeeSliderBanner";
import CoffeeCard from "@/components/CoffeeCard";
import { products } from "@/data/products";
import Newsletter from "../components/Newsletter";
import Image from "next/image";
import BestOPtions from "@/components/landingPage/BestOPtions";

function page() {
  return (
    <>
      <CoffeeSliderBanner />

      <div className="mx-auto container">
        <BestOPtions />
      </div>
      <section className="my-20 bg-pink-300/10 container mx-auto">
        <div>
          <h2 className="text-center font-bold font-heading capitalize text-caffia md:text-5xl text-lg py-8">
            Premium Coffee Collection
          </h2>
          <p className="font-semibold text-grey7 md:text-xl text-base md:px-80 text-center">
            Discover our most popular coffee blends, carefully selected for
            their exceptional quality and taste.
          </p>
        </div>
        <div className="container mx-auto flex my-10 justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
            {products.map((product) => (
              <CoffeeCard key={product.id} product={product} />
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

      <section className="my-10 container mx-auto">
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

      <Newsletter />
    </>
  );
}
export default page;
