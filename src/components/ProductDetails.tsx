"use client"
import { ProductDetailsResponse, ProductVariant } from "@/lib/types/product";
import { IndianRupee, Leaf, Truck, BadgeCheck } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  productdetails: ProductDetailsResponse;
}

export default function ProductDetail({ productdetails }: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(productdetails.variants[0]);
  const [quantity, setQuantity] = useState(1);

  const addItemToCart = useCartStore((state) => state.addItemToCart);

  return (
    <div className="lg:max-w-7xl mx-auto my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Product Images */}
        <div>
          <div className="flex flex-col items-center">
            <Image
              src={"/assets/images/products/product-1.webp"}
              width={400}
              height={600}
              className="rounded-3xl shadow-md h-40 lg:h-80 w-auto object-cover"
              alt={productdetails.name}
            />
            {productdetails.images && productdetails.images.length > 0 && (
              <div className="flex gap-4 mt-5">
                {productdetails.images.slice(0, 3).map((img, i) => (
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
            )}
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className=" lg:space-y-3 w-full space-y-1.5 px-4 lg:px-8">
          <h1 className="font-bold text-xl lg:text-3xl leading-tight">
            {productdetails.name}
          </h1>
          
          <div className="bg-red-200 flex mx-auto items-center gap-3 rounded-md px-4 py-3 w-fit">
            <div className="flex items-center gap-2">
              <div className="flex text-caffia text-base">★★★★★</div>
              <span className="font-bold text-sm text-red-950">4.9</span>
              <span className="text-sm font-semibold text-caffia underline cursor-pointer">
                (245 reviews)
              </span>
            </div>
            <div className="h-5 w-px bg-Greytext"></div>
            <div className="text-sm italic text-caffia capitalize">
              {productdetails.category}
            </div>
          </div>

          {/* Price */}
          <div className="flex gap-6 items-center">
            <p className="text-3xl text-caffia font-bold flex items-center gap-1">
              <IndianRupee size={18} />
              {selectedVariant?.price || productdetails.price}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 font-semibold leading-relaxed pb-3 border-b border-gray-300">
            {productdetails.description}
          </p>

          {/* Variants Selector */}
          {productdetails.variants.length > 0 && (
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  Select Weight
                </p>
                <p className="text-sm text-caffia/80 font-medium">
                  {selectedVariant.weightGrams}g
                </p>
              </div>
              <div className="flex gap-3">
                {productdetails.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium cursor-pointer transition
                      ${selectedVariant.id === v.id
                        ? "border-red-300 text-white bg-caffia shadow-sm"
                        : "border-gray-200 text-caffia bg-white hover:border-gray-300"
                      }`}
                  >
                    {v.weightGrams}g
                  </button>
                ))}
              </div>
            </div>
          )}

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
                addItemToCart({ variantId: selectedVariant.id, quantity: quantity });
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
