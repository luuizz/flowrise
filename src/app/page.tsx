import CallToAction from "@/components/CallToAction";
import SectionFuncionalidades from "@/components/Home/SectionFuncionalidades";
import SectionHarmonize from "@/components/Home/SectionHarmonize";
import SectionHero from "@/components/Home/SectionHero";
import SectionProdutividade from "@/components/Home/SectionProdutividade";
import SectionRastreio from "@/components/Home/SectionRastreio";
import SectionTestimonials from "@/components/Home/SectionTestimonial";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionTestimonials />
      <SectionFuncionalidades />
      <SectionHarmonize />
      <SectionRastreio />
      <SectionProdutividade />
      <CallToAction />
    </>
  );
}
