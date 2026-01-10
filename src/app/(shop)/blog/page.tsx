import React from 'react'
import { ChevronRight } from 'lucide-react'
import Breadcrumb from '@/components/layout/Breadcrumb'
function Blog() {
  return (
    <div>
      <Breadcrumb separator={<ChevronRight />} 
               capitalizeLinks/>
    </div>
  )
}

export default Blog