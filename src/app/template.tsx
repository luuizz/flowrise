"use client"
import { motion } from "motion/react"

export default function Template({ children }: { children: React.ReactNode }) {
  return <motion.main
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeInOut", duration: 1 }}
  >{children}</motion.main>
}