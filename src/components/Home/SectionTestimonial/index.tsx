import React from 'react'
import Bounded from '@/components/Bounded'
import CardTestimonials from './CardTestimonials'
import { dataTestimonials } from '@/utils/data'

export default function SectionTestimonials() {
  return (
    <section className='py-24'>
      <Bounded>
        <h2 className='text-slate-700 font-body text-5xl/tight font-bold mb-9 text-center'>O que nossos clientes dizem</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
