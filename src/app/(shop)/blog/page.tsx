import React from 'react'
import { ChevronRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
export const metadata = {
  title: "Blog",
  // TODO: remove noindex once real articles are published
  robots: { index: false, follow: true },
};

function Blog() {
  return (
    <div className="page-container pt-6">
      <Breadcrumb separator={<ChevronRight size={14} />} capitalizeLinks />
    </div>
  )
}

export default Blog