import React from 'react'
import { ChevronRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
function Blog() {
  return (
    <div className="page-container pt-6">
      <Breadcrumb separator={<ChevronRight size={14} />} capitalizeLinks />
    </div>
  )
}

export default Blog