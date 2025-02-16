import React from 'react'
import Bounded from '../Bounded'
import Button from '../Button'

export default function CallToAction() {
  return (
    <section className='py-20'>
      <Bounded className='flex items-center justify-center'>
        <div className='w-full max-w-4xl shadow-xl rounded-lg bg-gradient-to-tr grid gap-8 place-items-center from-cyan-50 via-white to-emerald-50 md:px-12 px-4 py-12'>
          <div className='w-[30.3125rem] text-center'>
            <h3 className='text-4xl/short font-body text-slate-700 font-medium text-balance mb-2'>Liberte sua produtividade no seu ritmo.</h3>
            <p className='paraphrase text-balance'>Alinhe tarefas e bem-estar ao seu fluxo natural e alcance mais com menos esforço.</p>
          </div>
          <Button href="/contato">Experimente grátis</Button>
        </div>
      </Bounded>
    </section>
  )
}
