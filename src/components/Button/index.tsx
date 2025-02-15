import React from 'react'
import Link, { LinkProps } from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends LinkProps {
  children: React.ReactNode,
  className?: string
}

export default function Button({ children, className, href, ...props }: ButtonProps) {
  return (
    <Link href={href} className={twMerge("inline-block py-3 px-10 bg-cyan-700 hover:bg-cyan-900 rounded-full text-white font-bold transition-colors duration-300 text-base tracking-wider", className)} {...props}>{children}</Link>
  )
}
