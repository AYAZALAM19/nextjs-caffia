
import react from 'react';

export default function AboutCaffie() {
  return (
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
  );
};


