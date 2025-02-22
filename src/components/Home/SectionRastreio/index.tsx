import React from 'react'
import Image from 'next/image'
import Bounded from '@/components/Bounded'

export default function SectionRastreio() {
  return (
    <section className='py-20 lg:py-28'>
      <Bounded className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
        <div className='w-full max-w-full sm:max-w-96'>
          <h2 className='heading-2 text-center md:text-left text-balance mb-2'>Rastreie tarefas com atenção plena e propósito.</h2>
          <p className='heading-strong text-center md:text-left text-balance'>Combine produtividade e mindfulness para entender seus padrões e aumentar o foco.</p>
        </div>

        <div className='w-full max-w-full md:max-w-[35rem] h-[39.9375rem] overflow-hidden rounded-xl'>
          <Image
          className='w-full h-full object-cover'
          src="/teamworks.jpg"
          alt='Duas mulheres sorrindo'
          width={580}
          height={639}
          />
        </div>
      </Bounded>
    </section>
  )
}
