import React from 'react'
import HeroBanner from "@/app/components/HeroBanner"

function AboutPage() {
  return (
    <>
    <div>
        <HeroBanner title="Our Story" img="/assets/images/about_banner.jpg" description="From a small neighborhood coffee shop to a premium coffee experience, discover the journey that makes Caffie special." subTitle="About Caffie"/>
    </div>
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mx-auto md:px-20 px-4 py-10'>
    <div>
        <h2 className='font-heading font-semibold md:text-5xl text-lg text-gray-700 mb-6'>
            Where Coffee Meets Comfort
        </h2>
        <p className='mb-4 text-grey font-body font-semibold md:text-lg text-base text-start leading-relaxed'>
            At Caffie, every sip tells a story. Whether you're rushing into a busy morning or slowing down for an afternoon breather, we're here to make each moment special. Our brews aren't just drinks — they're comfort in a cup, carefully crafted with ethically sourced beans and served with heart.
        </p>
        <p className='mb-6 text-grey font-body font-semibold md:text-lg text-base text-start leading-relaxed'>
            Step inside, breathe in the aroma, and discover your new favorite ritual. From single-origin masterpieces to signature blends, we're passionate about delivering the perfect cup that speaks to your soul.
        </p>
        <button className='py-2 px-4 inline-flex items-center justify-center font-semibold font-body text-base bg-amberLight hover:bg-amber text-white rounded-lg transition-colors duration-200'>
            View Our Store
        </button>
    </div>
    <div className='flex justify-center items-center'>
        <img 
            src="/placeholder.svg?height=400&width=400" 
            alt="Coffee cup with steam rising, representing comfort and warmth" 
            className='max-h-96 w-full object-contain rounded-lg'
        />
    </div>
 </section>

    </>
  )
}

export default AboutPage