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
        <ul className={`flex flex-wrap items-center gap-1 ${containerClasses ?? ''} text-xs text-roast lg:text-sm`}>
            <li className='font-medium transition-colors hover:text-caffia'><Link href='/'>Home</Link></li>
            {pathNames.map((link, index) => {
                let href = '/' + pathNames.slice(0, index + 1).join('/');
                // let itemClasses = path === href ? `${listClasses} ${activeClasses}`: listClasses;
                let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                return (
                    <div key={index} className='flex items-center gap-1'>
                     <span className='text-latte'>{separator}</span>
                        <li className={pathNames.length === index + 1 ? 'font-semibold text-espresso' : 'font-medium transition-colors hover:text-caffia'}>
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
