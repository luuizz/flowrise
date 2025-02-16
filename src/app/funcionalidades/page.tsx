import React from 'react'
import CallToAction from '@/components/CallToAction'
import SectionHeroFuncionalidades from '@/components/Funcionalidades/SectionHeroFuncionalidades'
import SectionFuncionalidades from '@/components/Home/SectionFuncionalidades'
import SectionHarmonize from '@/components/Home/SectionHarmonize'
import SectionTestimonials from '@/components/Home/SectionTestimonial'

export default function Servicos() {
  return (
    <>
      <SectionHeroFuncionalidades />
      <SectionFuncionalidades />
      <SectionHarmonize />
      <SectionTestimonials />
      <CallToAction />
    </>
  )
}
