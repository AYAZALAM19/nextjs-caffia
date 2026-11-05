// Single source of truth for brand + SEO facts. Keep these identical everywhere
// (site, Google Business Profile, marketplaces, socials) — search and AI engines
// trust a brand more when its facts don't contradict each other.
export const site = {
  name: "Caffia",
  url: "https://caffia.in",
  title: "Buy Premium Instant Coffee Online in India | Caffia",
  description:
    "Explore Caffia's range of instant coffee, including Original Classic, Turkish Hazelnut, French Vanilla and Extra Strong. Discover your favourite coffee and order online.",
  ogImage: "/assets/images/home-banner/Home_Banner_1.jpg",
  phone: "+91-99875-45874",
  email: "salescaffia.co@gmail.comm",
  address: {
    streetAddress: "MG Road",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  // Official profiles: shown in the footer and used as Organization.sameAs.
  // Leave a platform empty until the real profile exists — it's hidden automatically.
  social: {
    instagram: "https://www.instagram.com/caffia_coffee/",
    facebook: "",
    youtube: "",
    twitter: "",
  },
} as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
