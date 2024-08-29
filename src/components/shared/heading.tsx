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
        "text-[32px] font-bold leading-[39px] text-text-primary lg:text-5xl lg:leading-[60px] xl:text-[64px] xl:leading-[77.5px]",
        className,
      )}
    >
      {children}
    </h3>
  )
}
