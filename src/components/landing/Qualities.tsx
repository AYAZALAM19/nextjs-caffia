import { Leaf, Award, Heart, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const qualities = [
  { icon: Leaf, title: "Ethically sourced", text: "Direct trade partnerships with coffee farmers worldwide." },
  { icon: Award, title: "Award winning", text: "Recognised for excellence in coffee roasting and brewing." },
  { icon: Heart, title: "Crafted with love", text: "Every cup is prepared with passion and attention to detail." },
  { icon: Globe, title: "Global community", text: "Connecting coffee lovers from around the world." },
];

export default function Qualities() {
  return (
    <section className="relative overflow-hidden bg-espresso py-16 md:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-caffia/40 blur-3xl" />
      <div className="relative page-container">
        <SectionHeading
          tone="dark"
          eyebrow="Why Caffia"
          title="Good coffee is a promise we keep"
          description="From the farm to your cup, every step is handled with care — so you can taste the difference."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualities.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-caramel/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-caramel/15 text-caramel transition-colors group-hover:bg-caramel group-hover:text-espresso">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <span className="font-heading text-sm text-crema/30">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-heading text-xl text-cream">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-crema/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
