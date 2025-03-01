import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import IconAgendamento from "@/components/assets/IconAgendamento";
import IconAnalytics from "@/components/assets/IconAnalytics";
import IconIntegration from "@/components/assets/IconIntegration";
import IconTime from "@/components/assets/IconTime";

/**
 * Props for `Funcionalidades`.
 */
export type FuncionalidadesProps =
  SliceComponentProps<Content.FuncionalidadesSlice>;

/**
 * Component for "Funcionalidades" Slices.
 */

const icons = {
  Tempo: <IconTime />,
  Analytics: <IconAnalytics />,
  Integrações: <IconIntegration />,
  Agenda: <IconAgendamento />,
};

const Funcionalidades: FC<FuncionalidadesProps> = ({ slice }) => {
  return (
    <section
      className="py-10 md:py-14"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Bounded className="flex flex-col items-center gap-11">
        <h2 className="mx-auto w-auto text-left font-body text-4xl/tight font-bold text-slate-700 sm:text-center md:w-[26.625rem]">
          {slice.primary.titulo_secao}
        </h2>

        <div className="grid w-full max-w-[66.125rem] grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {slice.primary.cadastrar_funcionalidades.map((item, index) => (
            <div key={index} className="flex flex-col gap-5">
              {item.icone && <div>{icons[item.icone]}</div>}
              <h3 className="text-balance font-body text-2xl/base font-medium text-slate-700 sm:text-3xl">
                {item.titulo_card}
              </h3>
              <span className="text-normal font-display text-slate-600">
                {item.descricao_card}
              </span>
            </div>
          ))}
        </div>
      </Bounded>
    </section>
  );
};

export default Funcionalidades;
