import Image from 'next/image'
import React from 'react'
import Bounded from '@/components/Bounded'
import Form from './Form'

export default function SectionHeroContato() {
  return (
    <section className='py-10 md:py-16 lg:pt-16 lg:pb-24'>
      <Bounded className='flex flex-col md:flex-row items-center justify-between gap-14'>
        <div className='w-full max-w-full md:max-w-[38rem]'>
          <h1 className='mb-2 md:mb-4 text-3xl/short md:text-4xl font-body text-slate-700 font-semibold'>Entre em contato</h1>
          <p className='text-base/base md:text-lg text-balance text-slate-500 font-display mb-6 md:mb-12'>Nossa equipe amigável adoraria ouvir de você.</p>
          <Form />
        </div>

        <div className='w-full max-w-full md:max-w-[38rem] h-96 md:h-[50rem] overflow-hidden rounded-2xl'>
          <Image
          className='w-full h-full object-cover'
          src="/man-group.jpg"
          alt='Grupo de pessoas com um tablet e sorrindo'
          width={608}
          height={800}
          />
        </div>
      </Bounded>
    </section>
  )
}
