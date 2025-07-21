import React from 'react'
import {Phone, MapPin, Search,ShoppingCart} from 'lucide-react';
import Link from 'next/link';
function Header() {
 const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
   <nav className=''>
  <div className='flex bg-amber py-3 justify-between text-white mx-auto px-3'>
    <div className='flex gap-1 items-center'>
      <div className=' flex gap-1.5 items-center'>
        <Phone size={15} />
        <a href="tel:+91 99875 45874"></a><span>+91 99875 45874 </span>
      </div>
      <div className='flex gap-1 items-center'>
        <MapPin size={15} />
        <p>Caffia Coffee House, 123 Brew Street, Aroma Plaza</p>
      </div>
    </div>
    <div className=''>
      <p className=' animate-pulse font-semibold  text-base  '>Free delivery on orders over 100Rs! ☕</p>
    </div>
  </div>
  
  {/* Header Start */}
  <div className='flex px-4 items-center py-2 mx-auto bg-white'>
    {/* Left side: Search and Cart */}
    <div>
      <img src="/assets/images/caffia.png" className='w-24' alt="" />
    </div>
    {/* Center: Navigation Menu */}
    <div className='flex-1 flex justify-center'>
      <ul className="flex gap-6 font-semibold md:text-xl text-gray-700">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <span className="hover:text-amber-600 cursor-pointer">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
     {/* Right side: Logo */}
     <div className='flex gap-4 items-center mx-6'>
      <Search className='text-black' />
      <ShoppingCart className='text-black' />
    </div>
  </div>
</nav>

  )
}

export default Header