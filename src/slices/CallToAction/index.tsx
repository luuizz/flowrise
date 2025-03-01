import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className='text-3xl/short md:text-4xl font-body text-slate-700 font-medium text-balance mb-2'>{children}</h3>
  )
}

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='py-14 md:py-20'
    >
      <Bounded className='flex items-center justify-center'>
        <div className='w-full max-w-full md:max-w-4xl shadow-xl rounded-lg bg-gradient-to-tr grid gap-8 place-items-center from-cyan-50 via-white to-emerald-50 md:px-12 px-4 py-12'>
          <div className='w-auto md:w-[30.3125rem] text-center'>
            <PrismicRichText field={slice.primary.titulo_call_to_action} components={components} />
            <p className='paraphrase text-balance'>{slice.primary.descricao_call_to_action}</p>
          </div>

          <PrismicNextLink
          className="inline-block rounded-full bg-cyan-700 px-10 py-3 text-base font-bold tracking-wider text-white transition-colors duration-300 hover:bg-cyan-900"
          field={slice.primary.link_cta} />
        </div>
      </Bounded>
    </section>
  );
};

export default CallToAction;
