import Image from 'next/image'
import React from 'react'
import Bounded from '@/components/Bounded'

export default function SectionProdutividade() {
  return (
    <section className='py-20 lg:py-28'>
      <Bounded className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        <div className='w-full max-w-full md:max-w-[35rem] h-[39.9375rem] overflow-hidden rounded-xl'>
          <Image
          className='w-full h-full object-cover'
          src="/woman-laptop.jpg"
          alt='Mulher utilizando um computador e sorrindo'
          width={580}
          height={639}
          />
        </div>

        <div className='w-full max-w-full sm:max-w-96'>
          <h2 className='heading-2 text-center md:text-left text-balance mb-2'>Produtividade que cuida de você.</h2>
          <p className='heading-strong text-center md:text-left text-balance'>Vá além da conclusão de tarefas: integre rotinas de autocuidado e promova um estilo de vida mais saudável.</p>
        </div>
      </Bounded>
    </section>
  )
}
