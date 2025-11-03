'use client'
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
    homeElemet?: ReactNode;
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

export default function Breadcrumb(
    {
        homeElemet, 
        separator, 
        containerClasses, 
        listClasses, 
        activeClasses,
        capitalizeLinks
    }: TBreadCrumbProps) {
    const path = usePathname();
    const pathNames = path.split('/').filter(path => path)
  return (
    <div>
        <ul className={`flex ${containerClasses} px-4 py-2`}>
            <li className='font-semibold'><Link href='/'>Home</Link></li>
            {pathNames.map((link, index) => {
                let href = pathNames.slice(0, index + 1).join('/');
                // let itemClasses = path === href ? `${listClasses} ${activeClasses}`: listClasses;
                let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                return (
                    <div key={index} className='flex '> 
                     <span className='text-amberLight'>{separator}</span>
                        <li className={` font-semibold text-black`}>
                            <Link href={href}>{itemLink}</Link>
                            {pathNames.length !== index + 1}
                        </li>
                    </div>
                )
            })}
        </ul>
    </div>
  )
}
