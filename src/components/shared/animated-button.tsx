import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  href: string
  className?: string
}

export default function AnimatedButton({ children, href, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "block w-full rounded-2xl border-2 border-background-accent px-4 py-2.5 text-center text-base font-semibold text-text-primary",
        "animate-shimmer bg-[length:200%_100%] transition-colors hover:bg-[linear-gradient(110deg,transparent,45%,#f2d41a,55%,transparent)]", // shimmer effect
        className,
      )}
    >
      {children}
    </Link>
  )
}
