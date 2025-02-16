import Link from "next/link";
import Bounded from "../Bounded";
import LogoFlowRise from "../assets/logo";
import NavFooter from "./NavFooter";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white">
      <Bounded className="flex flex-col md:flex-row items-center justify-between">
      <Link className="mb-8 md:mb-0" title="Ir para página inicial" href="/">
          <LogoFlowRise />
      </Link>
      
      <p className="font-display hidden md:block text-xs/normal text-slate-700">Flowrise &copy; {anoAtual}</p>

      <NavFooter />
      </Bounded>
    </footer>
  )
}
