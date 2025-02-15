import Link from "next/link";
import Bounded from "../Bounded";
import LogoFlowRise from "../assets/logo";
import NavItems from "../header/NavItems";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white">
      <Bounded className="flex items-center justify-between">
      <Link title="Ir para página inicial" href="/">
          <LogoFlowRise />
      </Link>
      
      <p className="font-display text-xs/normal text-slate-700">Flowrise &copy; {anoAtual}</p>

      <NavItems />
      </Bounded>
    </footer>
  )
}
