import React from "react";
import Image from "next/image";

interface HeroBannerProps {
  img: string;
  title: string;
  description?: string;
  subTitle?: string;
}

function HeroBanner({ img, title, description, subTitle }: HeroBannerProps) {
  return (
    <section className="page-container pt-4">
      <div className="relative h-[320px] overflow-hidden rounded-[2rem] md:h-[440px] lg-short:h-[min(440px,calc(100svh-15rem))]">
        <Image
          src={img}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-6 md:px-14">
            {subTitle && (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-caramel">{subTitle}</p>
            )}
            <h1 className="font-heading text-4xl leading-tight text-cream md:text-6xl">{title}</h1>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-crema/85 md:text-lg">{description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
