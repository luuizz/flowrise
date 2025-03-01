import React from 'react'
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';

export default async function NavFooter() {
  const client = createClient();

  const settings = await client.getSingle("settings");
  return (
    <nav>
      <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
        {settings.data.navegacao[0]?.link.map((item) => (
          <li key={item.key}>
            <PrismicNextLink className='font-display text-base/normal text-slate-700 transition-colors hover:text-slate-900' href={item.url}>
              {item.text}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
