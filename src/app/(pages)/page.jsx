"use client";

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
import Newsletter from "../components/Newsletter";

function page() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced Background with multiple layers */}
        {/* Background image container */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/about_banner1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-orange-900/85 to-amber-800/90 z-10"></div>

        {/* Animated overlay pattern */}
        <div className="absolute inset-0 z-15 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>

        {/* Enhanced floating coffee beans with different animations */}
        <div className="absolute inset-0 z-20">
          <Coffee
            className="absolute top-20 left-10 w-6 h-6 text-amber-300/40 animate-float"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <Coffee
            className="absolute top-40 right-20 w-4 h-4 text-amber-300/30 animate-float"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <Coffee
            className="absolute bottom-40 left-20 w-5 h-5 text-amber-300/35 animate-float"
            style={{ animationDelay: "2s", animationDuration: "3.5s" }}
          />
          <Sparkles
            className="absolute top-60 left-1/3 w-4 h-4 text-yellow-300/50 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <Sparkles
            className="absolute bottom-60 right-1/3 w-3 h-3 text-yellow-300/40 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Left content */}
            <div className="text-white space-y-8 animate-slide-up">
              <div className="space-y-6">
                {/* Enhanced rating section */}
                <div className="flex items-center gap-2 text-amber-300 animate-fade-in">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    Rated #1 Coffee Shop
                  </span>
                </div>

                {/* Enhanced main heading */}
                <div className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                  <span
                    className="inline-block animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <img
                      src="/assets/images/caffia.png"
                      className="w-60"
                      alt=""
                    />
                  </span>
                  <h1
                    className="block text-3xl font-heading md:text-4xl font-extrabold text-amber-300 animate-slide-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Premium Coffee
                  </h1>
                </div>

                <p
                  className="text-xl md:text-2xl text-amber-100 max-w-lg leading-relaxed animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  Enjoy the finest coffee from farm to your doorstep. Every sip
                  tells a story of quality and passion.
                </p>
              </div>

              {/* Enhanced action buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                style={{ animationDelay: "0.8s" }}
              >
                <Link href="/products">
                  {/* <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg hover-lift group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button> */}
                </Link>
                <Link href="/menu">
                  {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3 text-lg bg-transparent hover-lift glass"
                >
                  View Menu
                </Button> */}
                </Link>
              </div>

              {/* Enhanced QR Code Card */}
              {/* <Card
              className="glass border-white/20 p-6 max-w-sm hover-lift animate-slide-up"
              style={{ animationDelay: "1s" }}
            > */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg animate-pulse-glow">
                  <QrCode className="w-16 h-16 text-gray-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Scan me for</h3>
                  <p className="text-amber-200 text-lg font-medium">
                    your Order
                  </p>
                </div>
              </div>
              {/* </Card> */}
            </div>

            {/* Enhanced Right content */}
            <div
              className="relative animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative z-10">
                <Image
                  src="/assets/images/Gemini_Generated_Image_q92txvq92txvq92t.jfif"
                  alt="Caffie Coffee Products"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl hover-lift"
                />
              </div>

              {/* Enhanced floating cards */}
              {/* <Card className="absolute -top-4 -left-4 bg-white p-4 shadow-lg animate-float hover-lift"> */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Fresh Roasted Daily</span>
              </div>
              {/* </Card> */}

              {/* <Card
              className="absolute -bottom-4 -right-4 bg-white p-4 shadow-lg animate-float hover-lift"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600">Organic Beans</div>
              </div>
            </Card> */}

              {/* Additional floating element */}
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className=" flex justify-center items-center ">
          <p className=" font-body font-semibold md:text-base  text-base bg-amberLight/15 hover:bg-amberLight/80 duration-200 text-amberLight hover:text-white px-3.5 pb-0.5 inline-flex items-center justify-center rounded-xl">
            Why Choose Caffie
          </p>
        </div>
        <div>
          <h2 className="font-heading md:text-5xl text-2xl my-2.5 text-center text-Greytext font-bold py-5">
            Where Coffee Meets Comfort
          </h2>
          <p className="font-body md:text-xl text-lg md:px-52 px-10 text-grey text-center">
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
      <section className="my-20 bg-pink-300/10">
        <div className=" flex justify-center items-center py-5">
          <p className=" font-body font-semibold md:text-base  text-base bg-amberLight/15 hover:bg-amberLight/80 duration-200 text-amberLight hover:text-white px-3.5 pb-0.5 inline-flex items-center justify-center rounded-xl">
            Featured Products
          </p>
        </div>
        <div className="">
          <h2 className="text-center font-semibold font-heading text-Greytext md:text-5xl text-lg py-8 ">
            Premium Coffee Collection
          </h2>
          <p className="font-semibold text-grey md:text-xl text-base md:px-80 text-center">
            Discover our most popular coffee blends, carefully selected for
            their exceptional quality and taste.
          </p>
        </div>
        <div className=" my-10 flex justify-center grid-cols-3 gap-16 mx-auto">

          <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-amber to-amberLight"></div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tailwind card
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-amberLight py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amberLight/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>
          {/*  */}
           <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-amber to-amberLight"></div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tailwind card
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-amberLight py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amberLight/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>
          {/*  */}
           <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-amber to-amberLight"></div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Tailwind card
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-amberLight py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-amberLight/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="hover:bg-amberLight text-amber duration-300 border-amberLight border bg-white  font-body font-semibold hover:text-white py-2 px-4 rounded-lg">
            View All Product
          </button>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

export default page;
