import { Truck, Flame, ShieldCheck, Leaf } from "lucide-react";

const items = [
  { icon: Flame, title: "Small-batch roasted", text: "Roasted for peak freshness" },
  { icon: Leaf, title: "Ethically sourced", text: "Direct from coffee farms" },
  { icon: Truck, title: "Doorstep delivery", text: "Shipped across India" },
  { icon: ShieldCheck, title: "Secure payments", text: "UPI, cards & wallets" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-latte bg-white">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <li
            key={title}
            className="flex items-center gap-3 border-latte px-4 py-5 odd:border-r md:px-6 lg:border-r lg:last:border-r-0"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-crema text-caffia">
              <Icon size={18} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-bold text-espresso">{title}</p>
              <p className="text-xs text-roast">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
