import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function Subheading({ className, children }: Props) {
  return (
    <p
      className={cn(
        "leading-5 text-text-secondary lg:text-lg lg:leading-5 xl:text-xl xl:leading-6",
        className,
      )}
    >
      {children}
    </p>
  )
}
