import React from 'react'
import { navItems } from '@/utils/data';
import Link from 'next/link';

export default function NavFooter() {
  return (
    <nav>
      <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link className='font-display text-base/normal text-slate-700 transition-colors hover:text-slate-900' href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
