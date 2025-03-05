"use client";
import { motion } from "motion/react";
import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

interface LinkItem {
  key: string;
  text: string;
  url: string;
}

interface NavItemsProps {
  links: LinkItem[];
}

export default function NavItems({ links }: NavItemsProps) {

  const pathName = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.key}>
            <PrismicNextLink
              className="font-display relative px-3 py-2 text-base/normal text-slate-700 transition-colors hover:text-slate-900"
              href={link.url}
            >
              {link.url === pathName && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 w-full h-full z-0 bg-cyan-100 rounded-full"
                />
              )}
              <span className={`relative z-10 ${link.url === pathName && "text-cyan-700"} `}>{link.text}</span>
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
