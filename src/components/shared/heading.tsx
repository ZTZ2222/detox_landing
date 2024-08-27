import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function Heading({ className, children }: Props) {
  return (
    <h3
      className={cn(
        "text-text-primary text-[32px] font-bold leading-[39px]",
        className,
      )}
    >
      {children}
    </h3>
  )
}
