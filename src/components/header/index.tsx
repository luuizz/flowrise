"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Bounded from "../Bounded";
import LogoFlowRise from "../assets/logo";
import NavItems from "./NavItems";
import Hamburger from "hamburger-react";
import AsideMenu from "./AsideMenu";
import { createClient } from "@/prismicio";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };
  const styleHeader =
    "fixed top-0 left-0 z-[2050] !py-4 bg-white shadow-md shadow-cyan-800/10";

  const [isFixed, setFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [navData, setNavData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const settings = await client.getSingle("settings");
      setNavData(settings.data.navegacao);
    };

    fetchData();
  }, []);
  return (
    <>
      <header
        className={`w-full py-7 transition-all duration-300${isFixed ? ` ${styleHeader}` : ""}`}
      >
        <Bounded className="flex items-center justify-between">
          <Link title="Ir para página inicial" href="/">
            <LogoFlowRise />
          </Link>
          {navData && <NavItems links={navData[0]?.link} />}
          <button className="relative z-[99] block lg:hidden">
            <Hamburger color="#0e7490" toggled={isOpen} toggle={setOpen} />
          </button>
        </Bounded>
      </header>
      {navData && <AsideMenu isOpen={isOpen} closeMenu={closeMenu} navItems={navData[0]?.link} />}
    </>
  );
}
