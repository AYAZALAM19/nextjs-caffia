"use client";
import { Product } from "@/lib/types/product";
import { Badge, IndianRupee } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  productdetails: Product;
}
const roasts = ['Light', 'Medium', 'Dark'];
type RostType =(typeof roasts)[number]

const grind = ['whole Bean', 'Medium', 'Fine'];
type GrindType = (typeof grind)[number];

export default function ProductDetail({ productdetails }: ProductDetailsProps) {

  const [selectedRoast, setSelectedRoast] = useState<RostType>('Medium');
  const [selectGrind, setSelectGrind] =useState<GrindType>('Whole Bean');

  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="max-w-7xl mx-auto my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Product Images */}
        <div>
          <div className="flex flex-col items-center">
            <Image
              src={productdetails?.images[0]}
              width={400}
              height={600}
              className="rounded-3xl shadow-md h-40 lg:h-80 w-auto object-cover"
              alt={productdetails?.title || "Product Image"}
            />
            <div className="flex gap-4 mt-5">
              {productdetails?.images.slice(0, 3).map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  width={100}
                  height={100}
                  className="rounded-xl lg:block hidden cursor-pointer hover:scale-105 transition-transform shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className=" lg:space-y-3 space-y-1.5 px-5 lg:px-8">
          {/* Title */}
          <h1 className="font-bold text-xl lg:text-3xl leading-tight">
            {productdetails.title}
          </h1>
          <div className="bg-amberLight/30 flex mx-auto items-center gap-3 rounded-md px-4 py-3 w-fit">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500 text-sm">★★★★★</div>
              <span className="font-semibold text-sm text-gray-800">4.9</span>
              <span className="text-sm text-gray-500 underline cursor-pointer">
                (245 reviews)
              </span>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-amber-300"></div>

            {/* Quote */}
            <div className="text-sm italic text-gray-700">
              “Velvety smooth with zero acidity.”
            </div>
          </div>

          {/* Price */}
          <div className="flex gap-6 items-center">
            <p className="text-3xl text-caffia font-bold flex items-center gap-1">
              <IndianRupee size={18} />
              {productdetails.originalPrice}
            </p>
            <p className="line-through text-gray-500 text-lg flex items-center gap-1">
              <IndianRupee strokeWidth={1.7} size={18} />
              {productdetails.price}
            </p>
          </div>

          {/* Description */}
            <p className="text-gray-700 font-semibold leading-relaxed pb-3 border-b border-gray-300">
              {productdetails.description}
            </p>
            {/* Roast level */}
            <div className="w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                Roast Level
              </p>
              <p className="text-sm text-amber-600 font-medium">
                {selectedRoast}
              </p>
            </div>

            {/* Options */}
            <div className="flex gap-3">
              {roasts.map((roast) => (
                <button
                  key={roast}
                  onClick={() => setSelectedRoast(roast)}
                  className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium transition
                    ${
                      selectedRoast === roast
                        ? "border-amber-600 text-amber-600 bg-white shadow-sm"
                        : "border-gray-200 text-gray-500 bg-white hover:border-gray-300"
                    }`}
                >
                  {roast}
                </button>
              ))}
            </div>
          </div>

          {/* grind level */}
         <div>
          <p>Grind</p>
          <select
            value={selectGrind}
            onChange={(e) => setSelectGrind(e.target.value as GrindType)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-caffia"
          >
            {grind.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
          {/* Add to Cart Button */}
          <button
            className="bg-caffia w-full text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
            onClick={() => {
              addToCart(productdetails);
              console.log(productdetails);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
