// npm i lucide-react
import { Droplet,Coffee, Icon, type LucideIcon } from "lucide-react";

type Method = {
  name: string;
  subtitle: string;
  highlight: boolean;
  icon: LucideIcon;
};

const methods = [
  {
    name: "Pour Over",
    subtitle: "1:16 Ratio · 3:00 min",
    highlight: true,
    icon: Droplet
  },
  {
    name: "Aeropress",
    subtitle: "Inverted · 2:00 min",
    highlight: true,
    icon: Droplet
  },
  {
    name: "French Press",
    subtitle: "Not recommended",
    highlight: false,
    icon: Coffee
  },
  {
    name: "Espresso",
    subtitle: "Bright & Acidic",
    highlight: false,
    icon: Coffee
  },
];

export function BrewingGuide() {
  return (
    <section className="py-12 bg-red-950/25 w-full">
      <div className="px-6 container mx-auto text-center">
        <h2 className="lg:text-3xl text-xl font-semibold text-caffia">
          Brewing Guide
        </h2>
        <p className="mt-2 lg:text-lg font-semibold text-gray-600">
          To unlock the full potential of these beans, we recommend the following
          methods.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method) => {
            const Icon = method.icon
            return(
            <div
              key={method.name}
              className={`rounded-xl border border-[#f0ebe6] bg-white px-6 py-6 text-center shadow-sm ${
                method.highlight ? "shadow-[0_12px_25px_rgba(0,0,0,0.04)]" : ""
              }`}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-caffia bg-caffia/5 ">
                <Icon />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-[#3a332e]">
                {method.name}
              </h3>
              <p
                className={`mt-1 text-xs lg:text-base font-medium lg:font-semibold ${
                  method.highlight ? "text-Greytext" : ""
                }`}
              >
                {method.subtitle}
              </p>
            </div>
        )})}
        </div>
      </div>
    </section>
  );
}
