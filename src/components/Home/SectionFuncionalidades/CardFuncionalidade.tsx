import React from 'react'

interface CardFuncionalidadeProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function CardFuncionalidade({ title, description, icon: Icon }: CardFuncionalidadeProps) {
  return (
    <div className='flex flex-col gap-5'>
      <Icon />
      <h3 className='text-3xl/tight font-body text-slate-700 font-medium text-balance'>{title}</h3>
      <span className='text-slate-600 font-display text-normal'>{description}</span>
    </div>
  )
}
