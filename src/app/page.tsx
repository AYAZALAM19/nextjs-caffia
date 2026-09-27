import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import BestOptions from "@/components/landing/BestOption";
import PremiumCollection from "@/components/landing/PremiumCollection";
import AboutCaffie from "@/components/landing/AboutCaffie";
import Qualities from "@/components/landing/Qualities";
import AboutProduct from "@/components/landing/AboutProduct";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestOptions />
      <PremiumCollection />
      <AboutCaffie />
      <Qualities />
      <AboutProduct />
      <Newsletter />
    </>
  );
}
