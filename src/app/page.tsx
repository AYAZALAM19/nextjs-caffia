import { type FC } from "react";
import CoffeeSliderBanner from "../components/CoffeeSliderBanner";
import Newsletter from "../components/Newsletter";
import BestOptions from "../components/landing/BestOption";
import Stats from "../components/landing/Stats";
import PremiumCollection from "../components/landing/PremiumCollection";
import AboutCaffie from "../components/landing/AboutCaffie";
import Qualities from "../components/landing/Qualities";
import AboutProduct from "../components/landing/AboutProduct";

export default function HomePage() {
  return (
    <>
      <CoffeeSliderBanner />

      <div className="mx-auto container">
        <BestOptions />
      </div>
      <PremiumCollection />

      <AboutCaffie />

      <Qualities />

      <Stats />
      <AboutProduct />
      <Newsletter />
    </>
  );
}
;
