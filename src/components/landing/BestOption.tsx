import Image from "next/image";
import Link from "next/link";
import { ProductListResponse } from "@/lib/types/product";

interface BestOption {
  title: string;
  image: string;
  link: string;
}

async function getProducts(): Promise<ProductListResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error();
    return res.json();
  } catch (error) {
    return { data: [], page: 1, limit: 10, total: 0 };
  }
}

export default async function BestOptions() {
  const productsResponse = await getProducts();
  const products = productsResponse.data;

  const SlugData = products.filter((item) => item.slug).slice(0, 5);
  
  const data: BestOption[] = SlugData.map((product) => ({
    title: product.name,
    image: product.imageUrl,
    link: `/product/${product.slug}`,
  }));

  console.log('here is the data', data.filter((item) => item.link))
  return (
    <div className="container mx-auto">
      <h2 className="lg:text-4xl text-caffia text-lg md:text-2xl my-4 md:my-6 px-3 md:px-4 font-semibold">Order Our Best Options</h2>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 px-3 md:px-4">
          {data.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-[180px] h-[180px] flex justify-center items-center">
                  <Image
                    src={item.image}
                    width={180}
                    height={180}
                    alt={item.title}
                    className="object-cover rounded-full shadow-md w-36 h-36 lg:w-40 lg:h-40 "
                  />
                </div>
              </Link>
              <p className="text-center font-semibold lg:text-xl text-base text-caffia my-4">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
