import Image from 'next/image'
import React from 'react'
import Bounded from '@/components/Bounded'
import Button from '@/components/Button'

export default function SectionHero() {
  return (
    <section className='py-20'>
      <Bounded className='flex justify-center'>
        <main className='w-full max-w-[62.625rem]'>
          <div className='text-center mb-28'>
            <h1 className='text-7xl/tight font-body text-slate-700 font-bold mb-2'>Produtividade que se adapta à sua vida, não o contrário.</h1>
            <p className='text-2xl/normal font-display text-slate-600 w-[28.5rem] mx-auto'>Descubra seu fluxo ideal: organize tarefas, hábitos e energia no seu ritmo.</p>
            <Button className='mt-8' href="/contato">Experimente grátis</Button>
          </div>

          <Image className='mx-auto' alt='Dashboard da Flowrise' src="/dashboard.png" width={936} height={665} />
        </main>
      </Bounded>
    </section>
  )
}
