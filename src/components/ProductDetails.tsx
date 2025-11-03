'use client'
import { Product } from "@/lib/types/product";
import { Badge, IndianRupee } from "lucide-react";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";

interface ProductDetailsProps {
  productdetails: Product;
}

export default function ProductDetail({ productdetails }: ProductDetailsProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  return (
   <div className="max-w-7xl mx-auto px-4 py-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* LEFT: Product Images */}
    <div>
      <div className="flex flex-col items-center">
        <Image
          src={productdetails?.images[0]}
          width={600}
          height={500}
          className="rounded-3xl shadow-md object-cover"
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
              className="rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-sm"
            />
          ))}
        </div>
      </div>
    </div>

    {/* RIGHT: Product Details */}
    <div className="flex flex-col justify-center ">
      {/* Title */}
      <h1 className="text-caffia font-bold text-3xl lg:text-5xl leading-tight">
        {productdetails.title}
      </h1>

      {/* Price */}
      <div className="flex gap-6 items-center">
        <p className="font-semibold text-3xl text-caffia flex items-center gap-1">
          <IndianRupee strokeWidth={1.7} size={18} />
          {productdetails.originalPrice}
        </p>
        <p className="line-through text-gray-500 text-lg flex items-center gap-1">
          <IndianRupee strokeWidth={1.7} size={18} />
          {productdetails.price}
        </p>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-caffia">Features</h3>
        {/* <div className="flex flex-wrap gap-3">
          <Badge label="Flavor" value={productdetails.flavor} />
          <Badge label="Roast" value={productdetails.roastLevel} />
          <Badge label="Weight" value={productdetails.weight} />
        </div> */}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-caffia">Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {productdetails.description}
        </p>
      </div>

      {/* Add to Cart Button */}
      <button
        className="bg-caffia w-full text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform"
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
