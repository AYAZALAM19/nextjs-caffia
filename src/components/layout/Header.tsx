'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from "next-auth/react";
import { Phone, Menu, MapPin, UserRound, Search, ShoppingBag, Coffee, X, ArrowRight, Truck } from 'lucide-react';
import { useCartStore } from '@/lib/stores/cartStore';
import ToastNotification from '../ui/ToastNotification';
import LoginDrawer from '../auth/LoginDrawer';
import { cn } from '@/lib/utils';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/product" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const announcements = [
  { icon: Coffee, text: "Get 30% off on coffee — limited time offer" },
  { icon: Truck, text: "Freshly roasted & shipped across India" },
  { icon: MapPin, text: "Visit our cafe at MG Road, Pune" },
  { icon: Phone, text: "+91 99875 45874", href: "tel:+919987545874" },
]

function AnnouncementBar() {
  // Rendered twice so the -50% marquee translation loops seamlessly
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {announcements.map(({ icon: Icon, text, href }) => (
        <span key={text} className="mx-8 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-crema">
          <Icon size={13} className="text-caramel" />
          {href ? <a href={href} className="hover:underline" tabIndex={hidden ? -1 : 0}>{text}</a> : text}
        </span>
      ))}
    </div>
  )

  return (
    <div className="group overflow-hidden bg-caffia py-2">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

function Header() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { status } = useSession()
  const totalCount = useCartStore((state) => state.cartData?.totalItems) || 0
  const fetchCart = useCartStore((state) => state.fetchCart)

  useEffect(() => {
    setMounted(true)
    fetchCart()
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on navigation and lock body scroll while open
  useEffect(() => setMenuOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  const accountIcon = <UserRound size={20} strokeWidth={1.75} />
  const iconButton = 'grid h-10 w-10 place-items-center rounded-full text-espresso transition-colors duration-200 hover:bg-crema hover:text-caffia'

  return (
    <>
      <AnnouncementBar />

      <header
        className={cn(
          'sticky top-0 z-40 border-b transition-all duration-300',
          isScrolled ? 'border-latte/70 bg-cream/85 shadow-sm backdrop-blur-md' : 'border-transparent bg-cream'
        )}
      >
        <div className="page-container flex h-16 items-center justify-between gap-4 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className={cn(iconButton, 'md:hidden')}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <Link href="/" className="shrink-0" aria-label="Caffia home">
            <Image
              src="/assets/images/caffia.png"
              width={144}
              height={48}
              className="h-auto w-28 md:w-32"
              priority
              alt="Caffia"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:block" aria-label="Main">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200',
                      isActive(item.href)
                        ? 'bg-caffia text-cream'
                        : 'text-espresso/80 hover:bg-crema hover:text-caffia'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Link href="/product" className={cn(iconButton, 'hidden sm:grid')} aria-label="Browse products">
              <Search size={20} strokeWidth={1.75} />
            </Link>

            <div className="hidden md:block">
              {mounted && (status === "authenticated" ? (
                <Link href="/profile" className={iconButton} aria-label="My account">{accountIcon}</Link>
              ) : (
                <LoginDrawer>
                  <button className={iconButton} aria-label="Login">{accountIcon}</button>
                </LoginDrawer>
              ))}
            </div>

            <Link href="/cart" className={cn(iconButton, 'relative')} aria-label={`Cart, ${mounted ? totalCount : 0} items`}>
              <ShoppingBag size={20} strokeWidth={1.75} />
              <span className="absolute right-0.5 top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-caramel px-1 text-[10px] font-bold text-white">
                {mounted ? totalCount : 0}
              </span>
            </Link>
            <ToastNotification />
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-[visibility] duration-300',
          menuOpen ? 'visible' : 'invisible'
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-espresso/50 backdrop-blur-sm transition-opacity duration-300',
            menuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMenuOpen(false)}
        />

        <nav
          className={cn(
            'absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out',
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
          aria-label="Mobile"
        >
          <div className="flex items-center justify-between border-b border-latte px-5 py-4">
            <Image src="/assets/images/caffia.png" className="h-auto w-24" width={96} height={32} alt="Caffia" />
            <button onClick={() => setMenuOpen(false)} className={iconButton} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-3 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-4 py-3.5 font-heading text-xl transition-colors',
                    isActive(item.href) ? 'bg-caffia text-cream' : 'text-espresso hover:bg-crema'
                  )}
                >
                  {item.name}
                  <ArrowRight size={18} className="opacity-50" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3 border-t border-latte bg-crema/60 p-5">
            {mounted && (status === "authenticated" ? (
              <Link href="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 font-semibold text-espresso">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-latte">{accountIcon}</span>
                My Account
              </Link>
            ) : (
              <LoginDrawer>
                <button className="flex items-center gap-3 font-semibold text-espresso">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-latte">{accountIcon}</span>
                  Login / Sign up
                </button>
              </LoginDrawer>
            ))}

            <Link
              href="/product"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-caffia py-3 font-semibold text-cream transition-colors hover:bg-caffia-dark"
            >
              Shop Coffee <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
