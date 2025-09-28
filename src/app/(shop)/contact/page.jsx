import React from "react";
import { SendHorizontal } from "lucide-react";
import HeroBanner from "../../components/HeroBanner";

function Contact() {
  const orderType = [
    { id: "Bulk Order", value: "Bulk Order" },
    { id: "For Gift", value: "For Gift" },
    { id: "For Query", value: "For Query" },
    { id: "Personal Order", value: "Personal Order" },
  ];

  return (
    <>
      <HeroBanner
        title="Get in Touch"
        img="/assets/images/home-banner/Banner_1.jpeg"
        description="Have questions about our coffee or want to place a custom order? We'd love to hear from you and help you find your perfect cup."
        subTitle="About Caffie"
      />

      <section className="md:my-16 md:px-20 container mx-auto">
        <div>
          <h2 className="md:text-5xl text-lg text-center text-caffia ">
            Contact Us
          </h2>
          <p className="md:text-3xl text-xl my-7 text-center text-Greytext font-semibold ">
            Leave us a message!
          </p>
        </div>
        <div className="w-full flex justify-center mx-5">
          <form
            action=""
            className="md:px-28 mx-8 p-10 border-2 border-caffia rounded-xl w-full max-w-6xl"
            method="post"
          >
            <div className="md:flex md:justify-between">
              <div className="relative z-0 w-56 md:w-96">
                <input
                  type="text"
                  id="full-name"
                  className="block py-2.5 px-2.5 w-full text-caffia bg-transparent border-0 border-b-2 border-Greytext/80 appearance-none font-semibold text-base md:text-xl focus:outline-none focus:ring-0 focus:border-caffia peer"
                  placeholder=""
                />
                <label
                  htmlFor="full-name"
                  className="absolute text-base text-Greytext duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 font-semibold peer-focus:text-caffia peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Full Name
                </label>
              </div>

              <div className="relative z-0 md:my-0 my-6 w-56 md:w-96">
                <input
                  type="email"
                  id="email"
                  className="block py-2.5 px-2.5 w-full text-caffia bg-transparent border-0 border-b-2 border-Greytext/80 appearance-none font-semibold text-base md:text-xl focus:outline-none focus:ring-0 focus:border-caffia peer"
                  placeholder=""
                />
                <label
                  htmlFor="email"
                  className="absolute text-base text-Greytext duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 font-semibold peer-focus:text-caffia peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Enter Email
                </label>
              </div>
            </div>

            <div className="md:flex my-10 md:justify-between">
              <div className="relative z-0 w-56 md:w-96">
                <input
                  type="text"
                  id="address"
                  className="block py-2.5 px-2.5 w-full text-caffia bg-transparent border-0 border-b-2 border-Greytext/80 appearance-none font-semibold text-base md:text-xl focus:outline-none focus:ring-0 focus:border-caffia peer"
                  placeholder=""
                />
                <label
                  htmlFor="address"
                  className="absolute text-base text-Greytext duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 font-semibold peer-focus:text-caffia peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Address
                </label>
              </div>

              <div className="relative z-0 md:my-0 my-6 w-56 md:w-96">
                <input
                  type="tel"
                  id="phone-number"
                  className="block py-2.5 px-2.5 w-full text-caffia bg-transparent border-0 border-b-2 border-Greytext/80 appearance-none font-semibold text-base md:text-xl focus:outline-none focus:ring-0 focus:border-caffia peer"
                  placeholder=""
                />
                <label
                  htmlFor="phone-number"
                  className="absolute text-base text-Greytext duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 font-semibold peer-focus:text-caffia peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Phone number
                </label>
              </div>
            </div>

            <div className="md:flex my-10 md:justify-between">
              <div className="relative z-0 w-56 md:w-96">
                <select
                  id="order-type"
                  className="block py-2.5 px-2.5 w-full text-caffia bg-transparent border-0 border-b-2 border-Greytext/80 appearance-none font-semibold text-base md:text-xl focus:outline-none focus:ring-0 focus:border-caffia peer"
                  defaultValue=""
                >
                  <option value="" disabled hidden></option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="for-gift">For Gift</option>
                  <option value="for-query">For Query</option>
                  <option value="personal-order">Personal Order</option>
                </select>
                <label
                  htmlFor="order-type"
                  className="absolute text-base text-Greytext duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 font-semibold peer-focus:text-caffia peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Select Order Type
                </label>
              </div>

              <div className="relative z-0 md:my-0 my-6 w-56 md:w-96">
                <textarea
                  id="message"
                  className="block py-2.5 px-2.5 w-full text-caffia bg-transparent border-0 border-b-2 border-Greytext/80 appearance-none font-semibold text-base md:text-xl focus:outline-none focus:ring-0 focus:border-caffia peer resize-y min-h-10 max-h-40"
                  placeholder=""
                  rows="1"
                />
                <label
                  htmlFor="message"
                  className="absolute text-base text-Greytext duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 font-semibold peer-focus:text-caffia peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Enter your message
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="inline-flex gap-2.5 items-center py-2 cursor-pointer px-32 hover:bg-amber duration-300 bg-caffia md:text-xl text-white font-semibold rounded-lg"
                type="submit"
              >
                SUBMIT <SendHorizontal />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
