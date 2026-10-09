import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ChevronRight, Heart, Leaf, Users } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/landing/SectionHeading";

export const metadata = {
  title: "About Us — Our Coffee Story",
  alternates: { canonical: "/about" },
  description:
    "From a small neighbourhood coffee shop to a premium coffee experience — discover the story, values and people behind Caffia.",
};

// TODO: replace with real milestones and dates
const journey = [
  {
    label: "2015",
    title: "It started with a single cup",
    text: "Caffia opened as a small neighbourhood coffee shop with one simple idea — make every cup feel like comfort.",
  },
  {
    label: "Chapter 02",
    title: "Finding the right beans",
    text: "We built direct partnerships with coffee farmers, so we know exactly where our beans come from and how they're grown.",
  },
  {
    label: "Chapter 03",
    title: "Roasting our own",
    text: "We began roasting in small batches, perfecting each profile until it brought out the full body and aroma of the bean.",
  },
  {
    label: "Today",
    title: "From our cafe to your doorstep",
    text: "With 5 locations and online ordering, we now deliver freshly roasted Caffia coffee to homes across India.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We're committed to ethical sourcing and environmental responsibility in every step of our process.",
    highlight: "Sustainable farming with direct farmer partnerships",
  },
  {
    icon: Award,
    title: "Quality excellence",
    text: "Our expert roasters make sure every batch meets the highest standards of flavour and aroma.",
    highlight: "Roasting techniques perfected over 8 years",
  },
  {
    icon: Heart,
    title: "Passion driven",
    text: "Coffee isn't just our business — it's our passion, and it shows in every cup we serve.",
    highlight: "Handcrafted by passionate coffee artisans",
  },
  {
    icon: Users,
    title: "Community focus",
    text: "We believe in strong relationships with our farmers, our customers and our local community.",
    highlight: "Supporting 50+ farming communities",
  },
];

const impact = [
  { value: "2015", label: "Founded" },
  { value: "15K+", label: "Happy customers" },
  { value: "25+", label: "Coffee origins" },
  { value: "5", label: "Store locations" },
];

// TODO: add the real team here (name, role, photo). The section stays hidden while empty.
const team: { name: string; role: string; img: string }[] = [];

export default function AboutPage() {
  return (
    <>
      <div className="page-container pt-6">
        <Breadcrumb separator={<ChevronRight size={14} />} capitalizeLinks />
      </div>

      <HeroBanner
        title="Our Story"
        img="/assets/images/home-banner/top-view-coffee-with-copy-space.jpg"
        description="From a small neighbourhood coffee shop to a premium coffee experience — discover the journey that makes Caffia special."
        subTitle="About Caffia"
      />

      {/* Intro */}
      <section className="page-container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who we are"
            title="Where coffee meets comfort"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-roast md:text-lg">
            <p>
              At Caffia, every sip tells a story. Whether you&apos;re rushing into a busy morning or
              slowing down for an afternoon breather, we&apos;re here to make each moment special.
              Our brews aren&apos;t just drinks — they&apos;re comfort in a cup, carefully crafted
              with ethically sourced beans and served with heart.
            </p>
            <p>
              Step inside, breathe in the aroma, and discover your new favourite ritual. From
              single-origin coffees to signature blends, we&apos;re passionate about delivering the
              perfect cup.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/assets/images/about_banner1.webp"
              alt="Ripe coffee cherries on the branch"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 rounded-2xl border border-latte bg-cream px-6 py-5 shadow-xl sm:left-8">
            <p className="font-heading text-4xl text-caffia">8+ years</p>
            <p className="text-sm text-roast">of roasting and brewing</p>
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="border-y border-latte bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {impact.map((item) => (
            <div
              key={item.label}
              className="border-latte px-4 py-10 text-center odd:border-r md:border-r md:last:border-r-0"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-heading text-4xl text-caffia md:text-5xl">{item.value}</dd>
              <dd className="mt-2 text-sm text-roast">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Journey */}
      <section className="bg-crema/60 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Our journey"
            title="How Caffia came to be"
            description="Every great cup has a story behind it. Here's ours."
          />

          <ol className="relative mt-14 space-y-10 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-px before:bg-latte md:before:left-1/2">
            {journey.map((step, i) => (
              <li key={step.title} className="relative grid gap-4 pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
                <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-4 border-cream bg-caffia font-heading text-sm text-cream md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </span>
                <div
                  className={
                    i % 2 === 0
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }
                >
                  <div className="rounded-2xl border border-latte/70 bg-white p-6 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-caramel">{step.label}</p>
                    <h3 className="mt-2 font-heading text-2xl text-espresso">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-roast">{step.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="page-container py-16 md:py-24">
        <SectionHeading
          eyebrow="Our values"
          title="What we stand for"
          description="These principles guide everything we do — from sourcing beans to serving you."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {values.map(({ icon: Icon, title, text, highlight }) => (
            <article
              key={title}
              className="group flex gap-5 rounded-2xl border border-latte/70 bg-white p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-espresso/5 md:p-8"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-crema text-caffia transition-colors group-hover:bg-caffia group-hover:text-cream">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-heading text-2xl text-espresso">{title}</h3>
                <p className="mt-2 leading-relaxed text-roast">{text}</p>
                <p className="mt-4 inline-block rounded-full bg-crema px-3 py-1 text-xs font-semibold text-caffia">
                  {highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Team (renders once real team data is added) */}
      {team.length > 0 && (
        <section className="page-container pb-16 md:pb-24">
          <SectionHeading
            eyebrow="Our people"
            title="Meet the team"
            description="Behind every great cup is a passionate team dedicated to getting it right."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((person) => (
              <article key={person.name} className="overflow-hidden rounded-2xl border border-latte/70 bg-white">
                <div className="relative aspect-[4/5] bg-crema">
                  <Image src={person.img} alt={person.name} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-espresso">{person.name}</h3>
                  <p className="text-sm text-roast">{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Environmental impact */}
      <section className="page-container pb-16 md:pb-24">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-espresso p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-14">
          <div className="text-center md:text-left">
            <p className="font-heading text-6xl text-caramel md:text-7xl">40%</p>
            <p className="mt-1 text-sm text-crema/70">lower carbon footprint</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-caramel">
              <Leaf size={14} /> Environmental impact
            </p>
            <p className="mt-3 text-lg leading-relaxed text-crema/85 md:text-xl">
              We&apos;ve reduced our carbon footprint through sustainable practices, renewable energy
              and eco-friendly packaging. Our commitment to the planet is as strong as our commitment
              to great coffee.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-container pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-caffia px-6 py-14 text-center md:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-caramel/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl text-cream md:text-5xl">Ready to experience Caffia?</h2>
            <p className="mt-4 text-crema/80 md:text-lg">
              Join the coffee lovers who have made Caffia their daily ritual. Visit us or order online
              and taste the difference passion makes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/product"
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-caffia transition-colors hover:bg-white"
              >
                Shop online
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
              >
                Find our cafe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
