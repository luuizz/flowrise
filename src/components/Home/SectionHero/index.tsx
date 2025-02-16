import Image from 'next/image'
import React from 'react'
import Bounded from '@/components/Bounded'
import Button from '@/components/Button'

export default function SectionHero() {
  return (
    <section className='py-10 md:py-16 lg:py-20'>
      <Bounded className='flex justify-center'>
        <main className='w-full max-w-full lg:max-w-[62.625rem]'>
          <div className='text-center mb-16 md:mb-20 lg:mb-28'>
            <h1 className='text-balance text-4xl/short md:text-5xl xl:text-7xl font-body text-slate-700 font-bold mb-2'>Produtividade que se adapta à sua vida, não o contrário.</h1>
            <p className='text-balance text-xl/base md:text-2xl font-display text-slate-600 w-auto lg:w-[28.5rem] mx-auto'>Descubra seu fluxo ideal: organize tarefas, hábitos e energia no seu ritmo.</p>
            <Button className='mt-6 md:mt-8' href="/contato">Experimente grátis</Button>
          </div>

          <Image className='mx-auto' alt='Dashboard da Flowrise' src="/dashboard.png" width={936} height={665} />
        </main>
      </Bounded>
    </section>
  )
}
