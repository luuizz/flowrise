import React from "react";
import { PrismicNextLink } from "@prismicio/next";

interface LinkItem {
  key: string;
  text: string;
  url: string;
}

interface NavItemsProps {
  links: LinkItem[];
}

export default function NavItems({ links }: NavItemsProps) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.key}>
            <PrismicNextLink
              className="font-display text-base/normal text-slate-700 transition-colors hover:text-slate-900"
              href={link.url}
            >
              {link.text}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
