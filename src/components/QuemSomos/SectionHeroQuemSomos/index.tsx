import React from 'react'
import Image from 'next/image'
import Bounded from '@/components/Bounded'

export default function SectionHeroQuemSomos() {
  return (
    <section className='py-16 lg:py-32'>
      <Bounded className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        <div className='w-full text-center lg:text-left max-w-full sm:max-w-[30.3125rem] flex flex-col items-start gap-6'>
          <h1 className='text-4xl/short text-balance lg:text-6xl font-body text-slate-700 font-bold'>Conheça a equipe por trás do Flowrise.</h1>
          <p className='heading-strong w-auto md:w-[30.3125rem]'>Há mais de 8 anos, buscamos maneiras de alinhar produtividade e bem-estar. Somos uma equipe apaixonada por ajudar pessoas a alcançarem seu potencial máximo.</p>
        </div>

        <div className='w-full max-w-full sm:max-w-[36.1875rem] h-56 sm:h-[26.25rem] overflow-hidden rounded-2xl'>
          <Image
          className='w-full h-full object-cover'
          src="/group-happy.png"
          width={579}
          height={420}
          alt='Imagem de pessoas felizes na praia, comemorando a vida'
          />
        </div>
      </Bounded>
    </section>
  )
}
