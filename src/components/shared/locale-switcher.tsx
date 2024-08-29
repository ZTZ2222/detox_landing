"use client"

import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/lib/i18n-navigation"
import { cn } from "@/lib/utils"

const TOGGLE_CLASSES =
  "text-text-primary flex items-center justify-center transition-colors relative z-10 w-[55px] h-[36px]"

const LocaleSwitcher = ({ className }: { className?: string }) => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  return (
    <div className="relative flex h-fit w-fit shrink-0 items-center gap-2 rounded-[12px] px-1 py-[9px]">
      <button
        className={cn(
          TOGGLE_CLASSES,
          locale === "ru" && "font-bold",
          className,
        )}
        onClick={async () => {
          router.push(pathname, { locale: "ru" })
          // router.refresh()
        }}
      >
        <span className="relative z-10">РУ</span>
      </button>
      <p className="font-semibold leading-6 text-text-secondary">/</p>
      <button
        className={cn(
          TOGGLE_CLASSES,
          locale === "en" && "font-bold",
          className,
        )}
        onClick={async () => {
          router.push(pathname, { locale: "en" })
          // router.refresh()
        }}
      >
        <span className="relative z-10">EN</span>
      </button>
      <div
        className={`absolute inset-1 z-0 flex ${
          locale === "en" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-[46%] rounded-md border-2 border-background-accent lg:w-[40%]"
        />
      </div>
    </div>
  )
}

export default LocaleSwitcher
