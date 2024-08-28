"use client"

import Link from "next/link"
import { usePathname, useRouter } from "@/lib/i18n-navigation"
import { cn } from "@/lib/utils"

type ScrollLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ScrollLink({
  href,
  children,
  className,
}: ScrollLinkProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname !== "/") {
      router.push(`/#${href}`)
    }

    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <Link
      href={`#${href}`}
      onClick={handleClick}
      className={cn(
        "text-text-primary w-full p-3 text-base font-semibold leading-6",
        pathname === `/#${href}` && "font-bold",
        "hover:underline hover:underline-offset-4",
        className,
      )}
    >
      {children}
    </Link>
  )
}
