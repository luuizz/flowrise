import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Depoimentos`.
 */
export type DepoimentosProps = SliceComponentProps<Content.DepoimentosSlice>;

/**
 * Component for "Depoimentos" Slices.
 */
const Depoimentos: FC<DepoimentosProps> = async ({ slice }) => {
  const client = createClient();
  const depoimentosAll = await Promise.all(
    slice.primary.depoimentos_fetch.map(async (item) => {
      if (
        isFilled.contentRelationship(item.card_depoimentos) &&
        item.card_depoimentos.uid
      ) {
        return client.getByUID("depoimentos", item.card_depoimentos.uid);
      }
    }),
  );
  return (
    <section
      className="py-16 xl:py-24"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded>
        <h2 className="mb-6 text-left font-body text-4xl/tight font-bold text-slate-700 sm:text-center lg:mb-9">
          {slice.primary.titulo_secao}
        </h2>

        <div className="grid snap-x snap-mandatory grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 overflow-x-auto pb-4 sm:gap-8">
          {depoimentosAll.map((item, index) => (
            <div
              key={index}
              className="flex snap-center flex-col justify-between gap-4 rounded-2xl bg-white p-12 shadow-md shadow-cyan-800/10 lg:px-14 lg:py-16"
            >
              <blockquote className="mb-4">
                <cite className="font-display text-lg/base font-normal not-italic text-slate-700 lg:text-xl/snug">
                  {item?.data.texto_depoimento}
                </cite>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-full">
                  <PrismicNextImage
                    field={item?.data.avatar}
                    className="h-full w-full object-cover"
                    fallbackAlt=""
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="text-normal/normal font-body font-medium text-slate-700">
                    {item?.data.nome_autor}
                  </h3>
                  <p className="md:text-normal/normal font-display text-sm/short text-slate-500">
                    {item?.data.funcao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default Depoimentos;
