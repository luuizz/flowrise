import React from 'react'
import Image from 'next/image'
import Bounded from '@/components/Bounded'

export default function SectionHeroQuemSomos() {
  return (
    <section className='py-32'>
      <Bounded className='flex items-center justify-between gap-10'>
        <div className='w-full max-w-[30.3125rem] flex flex-col items-start gap-6'>
          <h1 className='text-6xl/short font-body text-slate-700 font-bold'>Conheça a equipe por trás do Flowrise.</h1>
          <p className='heading-strong w-[30.3125rem]'>Há mais de 8 anos, buscamos maneiras de alinhar produtividade e bem-estar. Somos uma equipe apaixonada por ajudar pessoas a alcançarem seu potencial máximo.</p>
        </div>

        <div className='w-full max-w-[36.1875rem] h-[26.25rem] overflow-hidden rounded-2xl'>
          <Image
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
