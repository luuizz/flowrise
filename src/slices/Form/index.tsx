import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import FormContato from "@/components/Form";

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form: FC<FormProps> = ({ slice }) => {
  return (
    <section
      className="py-10 md:py-16 lg:pb-24 lg:pt-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded className="flex flex-col items-center justify-between gap-14 md:flex-row">
        <div className="w-full max-w-full md:max-w-[38rem]">
          <h1 className="mb-2 font-body text-3xl/short font-semibold text-slate-700 md:mb-4 md:text-4xl">
            {slice.primary.titulo_secao}
          </h1>
          <p className="mb-6 text-balance font-display text-base/base text-slate-500 md:mb-12 md:text-lg">
            {slice.primary.descricao_secao}
          </p>
          <FormContato />
        </div>
        <div className="h-96 w-full max-w-full overflow-hidden rounded-2xl md:h-[50rem] md:max-w-[38rem]">
          <PrismicNextImage
            field={slice.primary.imagem_destaque_secao}
            className="h-full w-full object-cover"
            fallbackAlt=""
          />
        </div>
      </Bounded>
    </section>
  );
};

export default Form;
