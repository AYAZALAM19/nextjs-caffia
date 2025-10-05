import { Product } from "@/data/products";
import { IndianRupee } from "lucide-react";
import Image from "next/image";

interface ProductDetailsProps {
    productdetails: Product;
}

export default function ProductDetail({productdetails}: ProductDetailsProps){
    return(
        <div className=" ">
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
               <div className="my-8">
  <h3 className="text-2xl lg:text-3xl font-semibold mb-6 text-caffia">
    Features
  </h3>
  
  <div className="flex flex-wrap gap-3 lg:gap-4">
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-caffia text-white font-semibold text-sm shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs opacity-75">Flavor:</span>
      <span>{productdetails.flavor}</span>
    </div>
    
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-caffia text-white font-semibold text-sm shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs opacity-75">Roast:</span>
      <span>{productdetails.roastLevel}</span>
    </div>
    
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-caffia text-white font-semibold text-sm shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs opacity-75">Weight:</span>
      <span>{productdetails.weight}</span>
    </div>
  </div>
</div>

                <div>
                    <h2>{'Description'}</h2>
                    <p>{productdetails.description}</p>
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
            <div>
            </div>    
        </div>
        </div>
    )
}