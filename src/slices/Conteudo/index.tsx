import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="heading-2 text-center md:text-left text-balance mb-2">{children}</h2>
  )
}

/**
 * Props for `Conteudo`.
 */
export type ConteudoProps = SliceComponentProps<Content.ConteudoSlice>;

/**
 * Component for "Conteudo" Slices.
 */
const Conteudo: FC<ConteudoProps> = ({ slice }) => {
  return (
    <>
    {slice.variation === "default" && (
    <section
      className='py-14 md:py-20 lg:py-28'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      >
      <Bounded className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        <div className='w-full max-w-full md:max-w-[35rem] h-96 lg:h-[39.9375rem] overflow-hidden rounded-xl'>
          <PrismicNextImage
          className='w-full h-full object-cover'
          fallbackAlt=""
          field={slice.primary.imagem_secao}
          />
        </div>

        <div className='w-full max-w-full sm:max-w-96'>
          <PrismicRichText field={slice.primary.texto_secao} components={components} />
          <p className='heading-strong text-center md:text-left text-balance'>{slice.primary.descricao_secao}</p>
        </div>
      </Bounded>
    </section>
    )}

    {slice.variation === "imagemDireita" && (
          <section className='py-14 md:py-20 lg:py-28'>
            <Bounded className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
              <div className='w-full max-w-full sm:max-w-96'>
              <PrismicRichText field={slice.primary.texto_secao} components={components} />
              <p className='heading-strong text-center md:text-left text-balance'>{slice.primary.descricao_secao}</p>
              </div>
      
              <div className='w-full max-w-full md:max-w-[35rem] h-96 lg:h-[39.9375rem] overflow-hidden rounded-xl'>
              <PrismicNextImage
              className='w-full h-full object-cover'
              fallbackAlt=""
              field={slice.primary.imagem_secao}
              />
              </div>
            </Bounded>
          </section>
    )}
  </>
  );
};

export default Conteudo;
