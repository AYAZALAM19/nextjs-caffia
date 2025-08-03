'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import {Phone, Menu, MapPin, UserRound, Search, ShoppingCart, X, ChevronRight} from 'lucide-react';
import { usePathname } from 'next/navigation';

function Header() {
  const [toggle, setToggle] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isActive, setActive]= useState()

  function Toggle(){
    setToggle(prev => !prev)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className='flex bg-gradient-to-r from-amberLight to-amber-500 py-3 px-1 justify-between text-white shadow-sm'>
        <div className='flex gap-1 items-center'>
          <div className='flex whitespace-nowrap gap-0.5 md:text-base text-xs items-center hover:text-amber-100 transition-colors'>
            <div className="p-1 bg-white/20 rounded-full">
              <Phone size={14} />
            </div>
            <a href="tel:+91 99875 45874" className='font-medium'>+91 99875 45874</a>
          </div>
          <div className='flex gap-0.5 md:text-base text-xs items-center'>
            <div className="p-1 bg-white/20 rounded-full">
              <MapPin size={14} />
            </div>
            <p className="truncate max-w-[120px] md:max-w-none md:whitespace-normal font-medium">
              Caffia Coffee House, 123 Brew Street, Aroma Plaza
            </p>
          </div>
        </div>
        <div className='flex gap-0.5 md:text-base text-[10px] text-center whitespace-nowrap items-center'>
          <p className='animate-pulse font-semibold bg-white/20 px-1 py-1 rounded-full'>
            Free delivery ₹100+ ☕
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className={`md:block hidden sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'
      }`}>
        <div className='flex px-6 items-center py-4 mx-auto max-w-7xl'>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href='/'>
            <img 
              src="/assets/images/caffia.png" 
              className='w-24 hover:scale-105 transition-transform duration-200' 
              alt="Caffia Logo" 
            />
            </Link>
          </div>
          
          {/* Center: Navigation Menu */}
          <div className='flex-1 flex justify-center'>
            <ul className="flex gap-8 font-semibold text-lg text-gray-700 ">

              <li className={`${pathname === '/' ? 'text-amberLight' : ''} relative group`}>
                <Link href='/'>
                    <span className="hover:text-amberLight uppercase cursor-pointer transition-all duration-200 py-2 px-1 relative">
                      Home
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amberLight transition-all duration-300 group-hover:w-full ${pathname === '/' ? 'w-full' :'group-hover:w-full'}`}></span>
                    </span>
                  </Link>
              </li>

               <li className={`${pathname === '/about' ? 'text-amberLight' : ''} relative group`}>
                <Link href='/about'>
                    <span className="hover:text-amberLight uppercase cursor-pointer transition-all duration-200 py-2 px-1 relative">
                      About Us
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amberLight transition-all duration-300 group-hover:w-full ${pathname === '/about' ? 'w-full':'group-hover:w-full'}`}></span>
                    </span>
                  </Link>
              </li>
               <li className={`${pathname === '/menu' ? 'text-amberLight' : ''} relative group`}>
                <Link href='/menu'>
                    <span className="hover:text-amberLight uppercase cursor-pointer transition-all duration-200 py-2 px-1 relative">
                      Menu
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amberLight transition-all duration-300 group-hover:w-full ${pathname === '/menu' ? 'w-full':'group-hover:w-full'}`}></span>
                    </span>
                  </Link>
              </li>
               <li className={`${pathname === '/product' ? 'text-amberLight' : ''} relative group`}>
                <Link href='/product'>
                    <span className="hover:text-amberLight uppercase cursor-pointer transition-all duration-200 py-2 px-1 relative">
                      Product
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amberLight transition-all duration-300 group-hover:w-full ${pathname === '/product' ? 'w-full':'group-hover:w-full'}`}></span>
                    </span>
                  </Link>
              </li>
               <li className={`${pathname === '/blog' ? 'text-amberLight' : ''} relative group`}>
                <Link href='/blog'>
                    <span className="hover:text-amberLight uppercase cursor-pointer transition-all duration-200 py-2 px-1 relative">
                      Blog
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amberLight transition-all duration-300 group-hover:w-full ${pathname === '/blog' ? 'w-full':'group-hover:w-full'}`}></span>
                    </span>
                  </Link>
              </li>
               <li className={`${pathname === '/contact' ? 'text-amberLight' : ''} relative group`}>
                <Link href='/contact'>
                    <span className="hover:text-amberLight uppercase cursor-pointer transition-all duration-200 py-2 px-1 relative">
                      Contact
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amberLight transition-all duration-300 group-hover:w-full ${pathname === '/contact' ? 'w-full':'group-hover:w-full'}`}></span>
                    </span>
                  </Link>
              </li>
            </ul>
          </div>
          
          {/* Right side: Search and Cart */}
          <div className='flex gap-4 items-center'>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative group'>
              <Search className='text-gray-700 group-hover:text-amberLight transition-colors' size={22} />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative group'>
              <ShoppingCart className='text-gray-700 group-hover:textamberLight transition-colors' size={22} />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className={`md:hidden sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'
      }`}>
        <div className='flex mx-auto justify-between items-center px-4 py-3'>
          <button 
            onClick={Toggle}
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300'
            aria-label="Toggle menu"
          >
            {toggle ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          
          <img 
            src="/assets/images/caffia.png" 
            className='w-28 hover:scale-105 transition-transform duration-200' 
            alt="Caffia Logo" 
          />
          
          <div className="flex gap-2">
            <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200'>
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative'>
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 bottom-0 z-50 transition-all duration-300 ${
        toggle ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/20 transition-opacity duration-300 ${
            toggle ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={Toggle}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl transform transition-transform duration-300 ${
          toggle ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-amber-100">
            <img 
              src="/assets/images/caffia.png" 
              className='w-24' 
              alt="Caffia Logo" 
            />
            <button 
              onClick={Toggle}
              className='p-2 hover:bg-white rounded-lg transition-colors duration-200'
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <ul className='py-4'>
            {navigation.map((item, index) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className='group flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-amber-50 hover:textamberLight transition-all duration-200 font-medium border-b border-gray-100 last:border-b-0'
                  style={{
                    animationDelay: toggle ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={Toggle}
                >
                  <span className="group-hover:translate-x-1  font-semibold transition-transform duration-200">
                    {item.name}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-amber-50 to-amber-100 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold bg-amber-100/10 rounded-full p-3 "><UserRound /></span>
                </div>
                <span className="font-medium">My Account</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-amber-500 toamberLight hover:fromamberLight hover:to-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                Order Now ☕
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header