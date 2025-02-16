import React from 'react'
import Image from 'next/image'

interface CardTestimonialsProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export default function CardTestimonials({ quote, name, role, image }: CardTestimonialsProps) {
  return (
    <div className='snap-center p-12 lg:py-16 lg:px-14 bg-white rounded-2xl shadow-md shadow-cyan-800/10 flex flex-col justify-between gap-4'>
      <blockquote className='mb-4'>
        <cite className='text-slate-700 font-display text-lg/base lg:text-xl/snug font-normal not-italic'>&quot;{quote}&quot;</cite>
      </blockquote>

      <div className='flex items-center gap-4'>
        <div className='w-14 h-14 rounded-full overflow-hidden'>
          <Image className='w-full h-full object-cover' src={image} width={56} height={56} alt={`Foto de ${name}`} />
        </div>

        <div className='flex flex-col flex-1'>
          <h3 className='text-slate-700 font-body text-normal/normal font-medium'>{name}</h3>
          <p className='text-slate-500 font-display text-sm/short md:text-normal/normal'>{role}</p>
        </div>
      </div>
    </div>
  )
}
