import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: React.ReactNode
}

export default function Subheading({ className, children }: Props) {
  return (
    <p className={cn("text-text-secondary leading-5", className)}>{children}</p>
  )
}
