import React from 'react'
import Image from 'next/image'
import Bounded from '@/components/Bounded'

export default function SectionHarmonize() {
  return (
    <section className='py-28'>
      <Bounded className='flex items-center justify-between gap-10'>
        <div className='w-full max-w-[35rem] h-[39.9375rem] overflow-hidden rounded-xl'>
          <Image
          className='w-full h-full object-cover'
          src="/woman-medit.jpg"
          alt='Mulher meditando'
          width={580}
          height={639}
          />
        </div>

        <div className='w-full max-w-96'>
          <h2 className='heading-2 text-balance mb-2'>Harmonize sua agenda com seus ritmos naturais.</h2>
          <p className='heading-strong text-balance'>Alinhe tarefas ao seu pico de energia e maximize sua produtividade sem esforço.</p>
        </div>
      </Bounded>
    </section>
  )
}
