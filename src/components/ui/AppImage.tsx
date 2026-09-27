'use client'
import Image, { type ImageLoader, type ImageProps } from 'next/image'

const CLOUDINARY_UPLOAD = 'res.cloudinary.com/'

// Let Cloudinary resize/compress on its CDN instead of Next's optimizer.
// Next aborts upstream image fetches after 7s, and our original Cloudinary
// uploads (2MB+ PNGs) can take longer than that, which surfaces as a 500.
const cloudinaryLoader: ImageLoader = ({ src, width, quality }) =>
  src.replace('/upload/', `/upload/f_auto,q_${quality ?? 'auto'},c_limit,w_${width}/`)

// Drop-in replacement for next/image: Cloudinary URLs go through the
// Cloudinary loader, everything else (local /assets etc.) uses the default optimizer.
export default function AppImage(props: ImageProps) {
  const { src } = props
  const isCloudinary = typeof src === 'string' && src.includes(CLOUDINARY_UPLOAD) && src.includes('/upload/')
  return <Image {...props} loader={isCloudinary ? cloudinaryLoader : props.loader} />
}
