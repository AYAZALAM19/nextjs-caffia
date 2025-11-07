"use client";
import React, { useActionState } from "react";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { Product } from "@/lib/types/product";
import { Trash2, Minus, IndianRupee, Plus, ChevronRight, IndianRupeeIcon } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const totalAmount = useCartStore((state) => state.totalAmount);

  const handleQuantityChange = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQty);
    }
  };

  console.log("data of cart ", cart);
  return (
    <>
      <section className="py-8">
        <Breadcrumb 
        separator={<span> <ChevronRight /> </span>} 
                capitalizeLinks />
        <h1 className="text-center text-caffia font-semibold lg:text-4xl uppercase text-shadow-2xs">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div>
            <p className="text-center py-10 text-gray-600">Cart is empty</p>

            <div className="flex justify-center items-center">
              <Link href='/product' className="text-center px-11 py-2 bg-caffia text-white font-semibold  rounded-xl" >
              View Coffee Collection
              </Link>
            </div>
          </div>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center gap-10 my-10 bg-white shadow-md rounded-2xl p-6"
            >
              {/* LEFT SIDE — IMAGE */}
              <div className="flex-shrink-0">
                <Image
                  src={item.images[0]}
                  width={300}
                  height={300}
                  alt={item.title}
                  className="rounded-2xl object-cover w-80 h-80"
                />
              </div>

              {/* RIGHT SIDE — DETAILS */}
              <div className="flex flex-col justify-between lg:w-[500px] space-y-3">
                <div>
                  <h2 className="text-caffia lg:text-2xl font-semibold font-heading">
                    {item.flavor}
                  </h2>
                  <p className="text-lg font-semibold">{item.flavor}</p>
                  <p className="py-3 font-semibold text-base lg:text-lg text-gray-700">
                    {item.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-500">
                    {item.category}
                  </p>
                </div>

                {/* PRICE SECTION */}
                <div className="flex gap-3.5 my-3 font-semibold text-caffia lg:text-2xl">
                  <p className="inline-flex items-center gap-2.5">
                    <IndianRupee /> {item.price}
                  </p>
                  <p className="line-through inline-flex items-center gap-2.5 text-gray-400">
                    <IndianRupee /> {item.originalPrice}
                  </p>
                </div>

                {/* QUANTITY SECTION */}
                <div className="flex items-center gap-3 rounded-3xl bg-caffia w-fit">
                  <button
                    className="px-3 py-1 rounded text-amberLight hover:bg-amberLight duration-300 hover:text-caffia"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    <Minus />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value) || 1
                      )
                    }
                    className="w-12 text-center font-semibold text-amberLight lg:text-2xl rounded"
                  />
                  <button
                    className="px-3 py-1 rounded text-amberLight hover:bg-amberLight duration-300 hover:text-caffia"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <Plus strokeWidth={1.4} />
                  </button>
                </div>

                {/* REMOVE BUTTON */}
                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:bg-red-700 py-2 px-3 rounded-2xl duration-200 cursor-pointer hover:text-white inline-flex gap-3 items-center text-red-600"
                  >
                    <Trash2 /> Remove
                  </button>
                </div>
                <div className="text-center text-lg font-semibold mt-8 inline-flex justify-center gap-5">
                   Total Amount: <span className="text-caffia inline-flex gap-2 items-center"><IndianRupeeIcon size={17} /> {totalAmount || 0}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
