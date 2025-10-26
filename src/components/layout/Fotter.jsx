import React from 'react'
import {Instagram, Facebook,Youtube,Twitter, Mail,Phone,MapPin} from "lucide-react"
import Image from 'next/image'
function Fotter() {
  return (
    <div className='bg-caffia px-10 py-8'>
  <div className='flex md:flex-row flex-col gap-8'>
    {/* Logo and Description Section */}
    <div className='w-full md:w-1/4'>
      <div className='mb-4'>
        <Image 
        src="/assets/images/caffiaDark.png" 
        className='w-44 h-auto' 
        width={100}
        height={100}
        alt="footer" />
      </div>
      <p className='text-white mb-6 leading-relaxed font-body font-medium md:text-xl text-base '>
        Premium coffee from farm to your doorstep. Every sip tells a story of quality, passion, and sustainability.
      </p>
      <div className='flex gap-4'>
        <span><Instagram className='text-yellow-600 hover:text-yellow-500 cursor-pointer' /></span>
        <span><Facebook className='text-yellow-600 hover:text-yellow-500 cursor-pointer' /></span>
        <span><Youtube className='text-yellow-600 hover:text-yellow-500 cursor-pointer' /></span>
        <span><Twitter className='text-yellow-600 hover:text-yellow-500 cursor-pointer' /></span>
      </div>
    </div>

    {/* Quick Links Section */}
    <div className='w-full md:w-1/4'>
      <h3 className='text-white font-semibold text-lg mb-4'>Quick Links</h3>
      <div className='space-y-2'>
        <li><a href="#" className='text-yellow-500 hover:text-white transition-colors'>About Us</a></li>
        <li><a href="#" className='text-yellow-500 hover:text-white transition-colors'>Privacy Policy</a></li>
        <li><a href="#" className='text-yellow-500 hover:text-white transition-colors'>Terms & Conditions</a></li>
        <li><a href="#" className='text-yellow-500 hover:text-white transition-colors'>Contact</a></li>
      </div>
      </div>
    {/* Contact Info Section */}
    <div className='w-full md:w-1/4'>
      <h3 className='text-white font-semibold text-lg mb-4'>Contact Info</h3>
      <div className='space-y-3'>
        <p className='flex items-center gap-2 text-yellow-500'>
          <MapPin size={18} />
          <span>123 Brew Street, Aroma Plaza</span>
        </p>
        <p className='flex items-center gap-2 text-yellow-500'>
          <Phone size={18} />
          <span>+1 (555) 123-4567</span>
        </p>
        <p className='flex items-center gap-2 text-yellow-500'>
          <Mail size={18} />
          <span>hello@caffia.com</span>
        </p>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className='w-full md:w-1/4'>
      <h3 className='text-white font-semibold text-lg mb-4'>Stay Updated</h3>
      <div className='flex gap-3'>
        <input 
          className='bg-white text-black rounded-md px-3 py-2 placeholder-gray-500' 
          type="email" 
          placeholder="Enter your email"
        />
        <button className='bg-amber-400 hover:bg-amber-500 p-3 rounded-md transition-colors flex items-center justify-center'>
          <Mail size={18} />
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Fotter