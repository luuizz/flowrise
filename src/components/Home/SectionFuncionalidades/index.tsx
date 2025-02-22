import React from 'react'
import Bounded from '@/components/Bounded'
import { dataFuncionalidades } from '@/utils/data'
import CardFuncionalidade from './CardFuncionalidade'


export default function SectionFuncionalidades() {
  return (
    <section className='py-10 md:py-14'>
      <Bounded className='flex flex-col items-center gap-11'>
        <h2 className='text-slate-700 font-body text-4xl/tight font-bold text-left sm:text-center w-auto md:w-[26.625rem] mx-auto'>Funcionalidades que se adaptam ao seu ritmo</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-[66.125rem] gap-8'>
          {
            dataFuncionalidades.map((funcionalidade, index) => (
              <CardFuncionalidade 
              key={index} 
              title={funcionalidade.title} 
              description={funcionalidade.description} 
              icon={funcionalidade.icon} />
            ))
          }
        </div>
      </Bounded>
    </section>
  )
}
