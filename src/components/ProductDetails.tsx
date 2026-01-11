"use client";
import { Product } from "@/lib/types/product";
import { Badge, IndianRupee, Leaf, Truck, BadgeCheck } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  productdetails: Product;
}
const roasts = ['Light', 'Medium', 'Dark'];
type RostType = (typeof roasts)[number]

const grind = ['whole Bean', 'Medium', 'Fine'];
type GrindType = (typeof grind)[number];

export default function ProductDetail({ productdetails }: ProductDetailsProps) {

  const [selectedRoast, setSelectedRoast] = useState<RostType>('Medium');
  const [selectGrind, setSelectGrind] = useState<GrindType>('Whole Bean');
  const [quantity, setQuantity] = useState(1);

  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="lg:max-w-7xl mx-auto my-6">
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
        <div className=" lg:space-y-3 w-full space-y-1.5 px-4 lg:px-8">
          {/* Title */}
          <h1 className="font-bold text-xl lg:text-3xl leading-tight">
            {productdetails.title}
          </h1>
          <div className="bg-red-200 flex mx-auto items-center gap-3 rounded-md px-4 py-3 w-fit">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-caffia text-base">★★★★★</div>
              <span className="font-bold text-sm text-red-950">4.9</span>
              <span className="text-sm font-semibold text-caffia underline cursor-pointer">
                (245 reviews)
              </span>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-Greytext"></div>

            {/* Quote */}
            <div className="text-sm italic text-caffia">
              “Velvety smooth with zero acidity.”
            </div>
          </div>

          {/* Price */}
          <div className="flex gap-6 items-center">
            <p className="text-3xl text-caffia font-bold flex items-center gap-1">
              <IndianRupee size={18} />
              {productdetails.price}
            </p>
            {productdetails.originalPrice && (
              <p className="line-through text-gray-500 text-lg flex items-center gap-1">
                <IndianRupee strokeWidth={1.7} size={18} />
                {productdetails.originalPrice}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 font-semibold leading-relaxed pb-3 border-b border-gray-300">
            {productdetails.description}
          </p>
          {/* Roast level */}
          <div className="w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                Roast Level
              </p>
              <p className="text-sm text-caffia/80 font-medium">
                {selectedRoast}
              </p>
            </div>

            {/* Options */}
            <div className="flex gap-3">
              {roasts.map((roast) => (
                <button
                  key={roast}
                  onClick={() => setSelectedRoast(roast)}
                  className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium cursor-pointer transition
                    ${selectedRoast === roast
                      ? "border-red-300 text-white bg-caffia shadow-sm"
                      : "border-gray-200 text-caffia bg-white hover:border-gray-300"
                    }`}
                >
                  {roast}
                </button>
              ))}
            </div>
          </div>

          {/* grind level */}
          <div className="space-y-2">
            <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">Grind</p>
            <select
              value={selectGrind}
              onChange={(e) => setSelectGrind(e.target.value as GrindType)}
              className="border rounded-lg px-3 py-2 w-full focus:ring-caffia focus:outline-none"
            >
              {grind.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity and Add to Cart Button */}
          <div className="flex gap-4 items-center pt-4">
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden h-12">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 hover:bg-gray-100 transition-colors h-full border-r"
              >
                -
              </button>
              <span className="w-12 text-center font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="px-4 hover:bg-gray-100 transition-colors h-full border-l"
              >
                +
              </button>
            </div>
            <button
              className="bg-caffia flex-1 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all h-12 flex items-center justify-center"
              onClick={() => {
                addToCart(productdetails, quantity, selectedRoast, selectGrind);
              }}
            >
              Add To Cart
            </button>
          </div>

          {/*  */}

          <div className="flex items-center lg:gap-10 text-gray-600 lg:px-8 px-2 py-4 text-xs lg:text-sm">
            {/* Free shipping */}
            <div className="flex items-center gap-1 lg:gap-2 whitespace-nowrap">
              <Truck className="h-8 w-h-8 text-white fill-Greytext" />
              <span>Free shipping over $50</span>
            </div>

            {/* Direct trade */}
            <div className="flex items-center gap-1 lg:gap-2 whitespace-nowrap">
              <BadgeCheck className="h-6 w-h-6 stroke-white fill-Greytext" />
              <span>Direct Trade</span>
            </div>

            {/* Carbon neutral */}
            <div className="flex items-center gap-1 lg:gap-2 whitespace-nowrap">
              <Leaf className="h-6 w-6 stroke-white fill-Greytext" />
              <span>Carbon Neutral</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
