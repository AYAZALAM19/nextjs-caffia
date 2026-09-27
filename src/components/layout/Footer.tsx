import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"

const columns = [
  {
    title: "Explore",
    links: [
      { name: "Shop Coffee", href: "/product" },
      { name: "Menu", href: "/menu" },
      { name: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "My Profile", href: "/profile" },
      { name: "My Orders", href: "/profile/orders" },
      { name: "Cart", href: "/cart" },
    ],
  },
]

// TODO: replace "#" with the real social profile URLs
const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

function Footer() {
  return (
    <footer className="bg-caffia-dark text-crema">
      <div className="page-container grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr_1.2fr]">
        {/* Brand */}
        <div>
          <Image
            src="/assets/images/caffiaDark.png"
            className="h-auto w-40"
            width={160}
            height={60}
            alt="Caffia"
          />
          <p className="mt-5 max-w-xs leading-relaxed text-crema/70">
            Premium coffee from farm to your doorstep. Every sip tells a story of quality, passion and sustainability.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-crema/80 transition-colors hover:border-caramel hover:bg-caramel hover:text-espresso"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-lg text-cream">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-crema/70 transition-colors hover:text-caramel">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg text-cream">Visit or reach us</h3>
          <ul className="mt-4 space-y-4 text-sm text-crema/70">
            <li className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-caramel" />
              MG Road, Pune
            </li>
            <li>
              <a href="tel:+919987545874" className="flex items-center gap-3 transition-colors hover:text-caramel">
                <Phone size={17} className="shrink-0 text-caramel" />
                +91 99875 45874
              </a>
            </li>
            <li>
              <a href="mailto:hello@caffia.com" className="flex items-center gap-3 transition-colors hover:text-caramel">
                <Mail size={17} className="shrink-0 text-caramel" />
                hello@caffia.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-container flex flex-col items-center justify-between gap-2 py-6 text-xs text-crema/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Caffia. All rights reserved.</p>
          <p>Brewed with care in India ☕</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
