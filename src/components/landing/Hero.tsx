import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Star } from "lucide-react";

const stats = [
  { value: "50K+", label: "Cups served daily" },
  { value: "15K+", label: "Happy customers" },
  { value: "25+", label: "Coffee origins" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Soft warm glow behind the content */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-latte/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-caramel/15 blur-3xl" />

      <div className="relative page-container grid items-center gap-10 pb-16 pt-10 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-12 lg-short:py-8">
        {/* Copy */}
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-latte bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-roast">
            <Leaf size={14} className="text-caramel" />
            100% Arabica · Artisan roasted
          </span>

          <h1 className="mt-6 font-heading text-[2.6rem] leading-[1.05] text-espresso sm:text-5xl lg:text-[4.25rem] lg-short:mt-4 lg-short:text-[3.25rem]">
            Every sip tells <br className="hidden sm:block" />
            a <em className="font-normal italic text-caffia">story</em> worth savouring.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-roast md:text-lg lg-short:mt-4 lg-short:text-base">
            Carefully selected beans, roasted in small batches and delivered from farm to your
            doorstep — so every morning starts with the perfect cup.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 lg-short:mt-6">
            <Link
              href="/product"
              className="group inline-flex items-center gap-2 rounded-full bg-caffia px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-caffia/20 transition-all duration-300 hover:bg-caffia-dark hover:shadow-xl"
            >
              Shop Coffee
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-7 py-3.5 text-sm font-semibold text-espresso transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
            >
              Our Story
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-latte pt-6 lg-short:mt-6 lg-short:pt-4 lg-tiny:hidden">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl text-espresso md:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-roast">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-espresso/20 lg:max-h-[calc(100svh-11rem)]">
            <Image
              src="/assets/images/home-banner/Home_Banner_1.jpg"
              alt="Caffia French Vanilla instant coffee jar with a fresh espresso at sunrise"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[60%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent" />
          </div>

          {/* Floating cards */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl backdrop-blur animate-float sm:bottom-6 sm:left-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-crema text-caffia">
              <Star size={20} className="fill-caramel text-caramel" />
            </span>
            <div>
              <p className="text-sm font-bold text-espresso">Rich taste</p>
              <p className="text-xs text-roast">Smooth aroma, every cup</p>
            </div>
          </div>

          <div className="absolute right-4 top-4 hidden rounded-2xl bg-caffia px-5 py-4 text-cream shadow-xl sm:right-6 sm:top-6 sm:block">
            <p className="font-heading text-3xl leading-none">30%</p>
            <p className="mt-1 text-xs text-crema/80">off · limited time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
