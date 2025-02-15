import Link from "next/link";
import Bounded from "../Bounded";
import LogoFlowRise from "../assets/logo";
import NavItems from "./NavItems";

export default function Header() {
  return (
    <header className="py-7">
      <Bounded className="flex items-center justify-between">
        <Link title="Ir para página inicial" href="/">
          <LogoFlowRise />
        </Link>
        <NavItems />
      </Bounded>
    </header>
  )
}