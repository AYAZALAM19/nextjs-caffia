import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-2xl", className)}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-caramel">
        {eyebrow}
      </p>
      <h2 className={cn("font-heading text-3xl leading-tight md:text-4xl lg:text-5xl", dark ? "text-cream" : "text-espresso")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", dark ? "text-crema/75" : "text-roast")}>
          {description}
        </p>
      )}
    </div>
  );
}
