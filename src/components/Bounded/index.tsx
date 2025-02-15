import React from 'react'
import { twMerge } from 'tailwind-merge'
interface BoundedProps {
  children: React.ReactNode,
  className?: string
}

export default function Bounded({ children, className }: BoundedProps) {
  return (
    <div className={twMerge('px-3 w-full max-w-container mx-auto', className)}>{children}</div>
  )
}
