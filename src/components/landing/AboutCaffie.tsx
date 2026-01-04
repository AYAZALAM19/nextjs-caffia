
import react from 'react';

export default function AboutCaffie() {
  return (
    <section className="my-6 md:my-8 container mx-auto px-3 md:px-4">
      <div className="flex justify-center items-center">
        <p className="font-body font-semibold text-xs md:text-sm bg-amberLight/15 hover:bg-amberLight/80 duration-200 text-amberLight hover:text-white px-3 py-1.5 inline-flex items-center justify-center rounded-xl">
          About Caffie
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase my-2 md:my-3 text-center text-caffia font-bold py-2 md:py-4">
          Where Coffee Meets Comfort
        </h2>
        <p className="font-body text-sm md:text-base lg:text-lg font-medium text-grey text-center">
          At Caffie, every sip tells a story. Whether you're rushing into a
          busy morning or slowing down for an afternoon breather, we're here
          to make each moment special. Our brews aren't just drinks — they're
          comfort in a cup, carefully crafted with ethically sourced beans and
          served with heart.
        </p>
      </div>
    </section>
  );
};


