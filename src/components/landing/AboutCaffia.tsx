import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const points = [
  "Ethically sourced, Grade A beans",
  "Roasted in small batches for freshness",
  "Crafted for your morning rush and slow afternoons",
];

export default function AboutCaffia() {
  return (
    <section className="page-container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
      <div className="relative order-2 lg:order-1">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/assets/images/about_product/packeg_of_product.jpg"
            alt="Coffee pack surrounded by fresh coffee leaves and roasted beans"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-6 right-4 rounded-2xl border border-latte bg-cream px-6 py-5 shadow-xl sm:right-8">
          <p className="font-heading text-4xl text-caffia">25+</p>
          <p className="text-sm text-roast">coffee origins explored</p>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <SectionHeading
          align="left"
          eyebrow="About Caffia"
          title="Where coffee meets comfort"
          description="Every sip tells a story. Whether you're rushing into a busy morning or slowing down for an afternoon breather, we're here to make each moment special. Our brews aren't just drinks — they're comfort in a cup, served with heart."
        />
        <ul className="mt-8 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-espresso">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-caffia text-cream">
                <Check size={12} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-caffia"
        >
          Read our story
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
