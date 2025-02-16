import React from 'react'
import Bounded from '@/components/Bounded'
import CardTestimonials from './CardTestimonials'
import { dataTestimonials } from '@/utils/data'

export default function SectionTestimonials() {
  return (
    <section className='py-16 xl:py-24'>
      <Bounded>
        <h2 className='text-slate-700 font-body text-4xl/tight font-bold mb-6 lg:mb-9 text-left sm:text-center'>O que nossos clientes dizem</h2>

        <div className='overflow-x-auto pb-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8 snap-x snap-mandatory'>
          {dataTestimonials.map((testimonial, index) => (  
            <CardTestimonials
            image={testimonial.image}
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            key={index} />
          ))}
        </div>
      </Bounded>
    </section>
  )
}
