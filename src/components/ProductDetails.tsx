import { Product } from "@/data/products";
import { IndianRupee } from "lucide-react";
import Image from "next/image";

interface ProductDetailsProps {
    productdetails: Product;
}

export default function ProductDetail({productdetails}: ProductDetailsProps){
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <div className=" mx-auto px-4 ">
                     <Image 
                        src={productdetails?.images[0]}
                        width={600}
                        height={500}
                        className="rounded-3xl" 
                        alt={productdetails?.title || 'Product IMage'}/>
                </div>
                <div>

                </div>
            </div>
            <div className="py-10">
                <p className="text-caffia font-semibold lg:text-4xl text-2xl">{productdetails.title}</p>
                <div className="my-5 flex gap-7">
                    <p className="font-semibold lg:text-4xl text-xl inline-flex items-center text-caffia"><IndianRupee strokeWidth={1.7} size={19} />  {productdetails?.originalPrice}</p>
                    <p className="line-through font-semibold lg:text-xl text-lg inline-flex items-center "><IndianRupee strokeWidth={1.7} size={19} /> {productdetails.price}</p>
                </div>
                <div>
                    <h3 className="lg:text-3xl font-semibold my-3.5 text-caffia">Features</h3>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 px-8">
                        <p className="py-2 px-4 rounded-full bg-caffia text-white font-semibold text-center">{productdetails.flavor}</p>
                        <p className="py-2 px-4 rounded-full bg-caffia text-white font-semibold text-center">{productdetails.roastLevel}</p>
                        <p className="py-2 px-4 rounded-full bg-caffia text-white font-semibold text-center"> weight {productdetails.weight}</p>
                        {/* <p className="py-2 px-4 rounded-full bg-caffia/20 text-white font-semibold">{productdetails}</p> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                 <Image 
            src={productdetails.images[0]}
            alt={productdetails.title|| 'product 1'}
            width={100}
            height={100}
            className="rounded-2xl"
             />
            <Image 
            src={productdetails.images[0]} 
            width={100}
            height={100}
            alt={productdetails.title || 'Product image 2'}/>     
            </div>      
        </div>
        </>
    )
}