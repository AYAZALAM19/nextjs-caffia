"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Timeline = ({ storyData }) => {
  return (
    <div className="relative mx-auto md:my-10 max-w-5xl">
  {/* Vertical line */}
  <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-caffia" />

  <div className="space-y-20">
    {storyData.map((item, index) => (
      <motion.div
        key={item.id}
        className="relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Marker on the center line at this item’s row */}
        <div className="absolute left-1/2 top-2 z-10 h-10 w-10 -translate-x-1/2 rounded-full border-4 border-amberLight bg-caffia shadow-md flex items-center justify-center">
          ☕
        </div>

        {/* Card row: left/right alternate */}
        <div
          className={[
            "grid grid-cols-1 md:grid-cols-2 items-start",
            index % 2 === 0 ? "" : "md:[&>*]:order-none md:[&>*:first-child]:order-2",
          ].join(" ")}
        >
          {/* Left column */}
          <div className={index % 2 === 0 ? "md:pr-16" : "md:pr-0"} />

          {/* Right/Left card (alternating) */}
          <div className={index % 2 === 0 ? "md:pl-10" : "md:pr-10 md:justify-self-end"}>
            <div className="rounded-lg bg-amberLight px-4 mx-3 py-3 shadow-md md:w-xl">
              <p className="md:text-lg font-semibold pt-3.5 text-Greytext">{item.year}</p>
              <h2 className="text-lg font-bold text-Greytext">{item.title}</h2>
              <p className="text-Greytext font-semibold">{item.description}</p>
              <div className="mt-3 rounded-lg bg-caffia p-2">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  className="h-40 w-full rounded-lg object-cover"
                  alt={item.title}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  );
};

export default Timeline;
