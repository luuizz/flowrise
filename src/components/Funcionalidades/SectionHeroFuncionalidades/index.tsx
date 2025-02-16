import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

export default function SectionHeroFuncionalidades() {
  return (
    <section className='py-20'>
      <Bounded className='flex items-center justify-between gap-10'>
        <div className='w-full max-w-[30.3125rem] flex flex-col items-start gap-6'>
          <h1 className='text-5xl/short font-body text-slate-700 font-bold'>Funcionalidades projetadas para maximizar seu foco.</h1>
          <p className='paraphrase w-96'>Potencialize sua produtividade com ferramentas inteligentes que se adaptam ao seu ritmo.</p>
          <Button className='inline-block' href={"/contato"}>Experimente grátis</Button>
        </div>

        <div className='w-full max-w-[36.4375rem] h-[27.6875rem] overflow-hidden rounded-2xl'>
          <Image
          src="/lente.png"
          width={583}
          height={443}
          alt='Imagem de uma mão segurando uma lente de uma câmera'
          />
        </div>
      </Bounded>
    </section>
  )
}
