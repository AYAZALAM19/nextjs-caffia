import Hero from "@/components/landing/Hero";
import TrustBar from "@/components/landing/TrustBar";
import BestOptions from "@/components/landing/BestOption";
import PremiumCollection from "@/components/landing/PremiumCollection";
import AboutCaffia from "@/components/landing/AboutCaffia";
import Qualities from "@/components/landing/Qualities";
import AboutProduct from "@/components/landing/AboutProduct";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BestOptions />
      <PremiumCollection />
      <AboutCaffia />
      <Qualities />
      <AboutProduct />
      <Newsletter />
    </>
  );
}
