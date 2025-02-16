import Image from 'next/image'
import React from 'react'
import Bounded from '@/components/Bounded'
import Form from './Form'

export default function SectionHeroContato() {
  return (
    <section className='pt-16 pb-24'>
      <Bounded className='flex items-center justify-between gap-14'>
        <div className='w-full max-w-[38rem]'>
          <h1 className='mb-4 text-4xl/base font-body text-slate-700 font-semibold'>Entre em contato</h1>
          <p className='text-lg/base text-slate-500 font-display mb-12'>Nossa equipe amigável adoraria ouvir de você.</p>
          <Form />
        </div>

        <div className='w-full max-w-[38rem] h-[50rem] overflow-hidden rounded-2xl'>
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
