import Image from "next/image";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    image: "/assets/images/about_product/process_1_1080x.avif",
    title: "Sourced with care",
    text: "Made from Grade A coffee, picked from partner farms we know and trust.",
  },
  {
    image: "/assets/images/home-banner/top-view-coffee-with-copy-space.jpg",
    position: "object-[80%_center]",
    title: "Roasted in small batches",
    text: "Each batch is roasted slowly to bring out its full body and aroma.",
  },
  {
    image: "/assets/images/home-banner/coffee-beans-cup-packaging.jpg",
    title: "Packed fresh for you",
    text: "Sealed right after roasting and shipped straight to your doorstep.",
  },
];

export default function AboutProduct() {
  return (
    <section className="page-container py-16 md:py-24">
      <SectionHeading
        eyebrow="Our process"
        title="From farm to your cup"
        description="Three simple steps, done properly — the secret behind every Caffia brew."
      />

      <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
        {steps.map((step, i) => (
          <li key={step.title} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-crema">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${step.position ?? ""}`}
              />
              <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-cream font-heading text-lg text-caffia shadow-md">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-5 font-heading text-2xl text-espresso">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-roast">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
