"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function AnimatedButton({ children, className }: Props) {
  return (
    <button
      className={cn(
        "border-background-accent text-text-primary w-full rounded-2xl border-2 px-4 py-2.5 text-base font-semibold",
        "animate-shimmer bg-[length:200%_100%] transition-colors hover:bg-[linear-gradient(110deg,transparent,45%,#f2d41a,55%,transparent)]", // shimmer effect
        className,
      )}
    >
      {children}
    </button>
  )
}
