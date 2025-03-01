import React from 'react'
import Bounded from '../Bounded';
import Link from 'next/link';

interface NavItem {
  slug: string;
  url: string;
  key: string;
  text: string;
}

interface AsideMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  navItems: NavItem[];
}

export default function AsideMenu({ isOpen, closeMenu, navItems }: AsideMenuProps) {
  return (
    <aside
    className={`top-23 fixed bottom-0 z-50 h-full w-full overflow-y-auto bg-white transition-all ${isOpen ? "translate-y-0" : "translate-y-full"} @laptop:hidden transition-all ease-in`}
    >
      <Bounded className='flex h-screen items-center justify-center py-10'>
      <nav>
        <ul className='flex flex-col items-center gap-8'>
          {navItems.map((item) => (
            <li key={item.key}>
              <Link
              onClick={closeMenu}
              className='font-display text-2xl/normal text-slate-700 transition-colors hover:text-slate-900' href={item.slug}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      </Bounded>
    </aside>
  )
}
