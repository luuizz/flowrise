import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="mb-2 text-balance font-body text-4xl/short font-bold text-slate-700 md:text-5xl xl:text-7xl">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="mx-auto w-auto text-balance font-display text-xl/base text-slate-600 md:text-2xl lg:w-[28.5rem]">
      {children}
    </p>
  ),
};

const components2: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-balance font-body text-4xl/short font-bold text-slate-700 lg:text-6xl">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="w-auto font-display text-xl leading-base text-slate-600 md:w-[30.3125rem] md:text-2xl">
      {children}
    </p>
  ),
};

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  return (
    <>
      {slice.variation === "default" && (
        <section
          className="py-10 md:py-16 lg:py-20"
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <Bounded className="flex justify-center">
            <main className="w-full max-w-full lg:max-w-[62.625rem]">
              <div className="mb-16 text-center md:mb-20 lg:mb-28">
                <PrismicRichText
                  field={slice.primary.textohero}
                  components={components}
                />
                <PrismicRichText
                  field={slice.primary.descricaohero}
                  components={components}
                />
                <PrismicNextLink
                  className="mt-6 inline-block rounded-full bg-cyan-700 px-10 py-3 text-base font-bold tracking-wider text-white transition-colors duration-300 hover:bg-cyan-900 md:mt-8"
                  field={slice.primary.link_hero}
                />
              </div>

              <PrismicNextImage
                className="rounded-2xl"
                fallbackAlt=""
                field={slice.primary.imagemhero}
              />
            </main>
          </Bounded>
        </section>
      )}

      {slice.variation === "horizontal" && (
        <section className="py-10 lg:py-20">
          <Bounded className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex w-full flex-col items-center gap-6 text-center md:max-w-[30.3125rem] md:items-start md:text-left">
              <PrismicRichText
                field={slice.primary.textohero}
                components={components}
              />
              <PrismicRichText
                field={slice.primary.descricaohero}
                components={components}
              />
              <PrismicNextLink
                className="mt-6 inline-block rounded-full bg-cyan-700 px-10 py-3 text-base font-bold tracking-wider text-white transition-colors duration-300 hover:bg-cyan-900"
                field={slice.primary.link_hero}
              />
            </div>

            <div className="h-64 w-full max-w-full overflow-hidden rounded-2xl md:h-[27.6875rem] md:max-w-[36.4375rem]">
              <PrismicNextImage
                field={slice.primary.imagemhero}
                fallbackAlt=""
              />
            </div>
          </Bounded>
        </section>
      )}

      {slice.variation === "hozontalSemBotao" && (
        <section className="py-16 lg:py-32">
          <Bounded className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex w-full max-w-full flex-col items-start gap-6 text-center sm:max-w-[30.3125rem] lg:text-left">
              <PrismicRichText
                field={slice.primary.textohero}
                components={components2}
              />
              <PrismicRichText
                field={slice.primary.descricaohero}
                components={components2}
              />
            </div>

            <div className="h-56 w-full max-w-full overflow-hidden rounded-2xl sm:h-[26.25rem] sm:max-w-[36.1875rem]">
              <PrismicNextImage
                field={slice.primary.imagemhero}
                fallbackAlt=""
              />
            </div>
          </Bounded>
        </section>
      )}
    </>
  );
};

export default HeroSection;
