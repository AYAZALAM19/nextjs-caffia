'use client'
import Image from '@/components/ui/AppImage';
import Link from 'next/link'
import { ProductResponse } from '@/lib/types/product'
import AddToCart from './ui/AddToCart'

interface ProductCardProps {
  product: ProductResponse
}

function CoffeeCard({ product }: ProductCardProps) {
  const weight = product.defaultVariant?.weightGrams
  const outOfStock = product.totalStock === 0

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-latte/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-espresso/10">
      <Link href={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-crema">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-roast backdrop-blur">
            {product.category}
          </span>
        )}
        {outOfStock && (
          <span className="absolute inset-x-3 bottom-3 rounded-full bg-espresso/85 py-1.5 text-center text-xs font-semibold text-cream">
            Out of stock
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 font-heading text-base leading-snug text-espresso transition-colors group-hover:text-caffia sm:text-lg">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-2 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-roast">
              {weight ? `${weight}g · from` : 'from'}
            </p>
            <p className="text-lg font-bold text-espresso">₹{product.startingPrice}</p>
          </div>
          {!outOfStock && <AddToCart product={product as any} />}
        </div>
      </div>
    </article>
  )
}

export default CoffeeCard
