"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import LocaleSwitcher from "@/components/shared/locale-switcher"
import ScrollLink from "@/components/shared/scroll-link"

export default function Navigation({
  logo,
}: {
  logo: string | null | undefined
}) {
  const t = useTranslations("Components.NavigationLinks")
  const [activeSection, setActiveSection] = useState("")

  const links = [
    {
      name: t("homepage"),
      href: "hero",
    },
    {
      name: t("about-company"),
      href: "about-us",
    },
    {
      name: t("traffic-juice"),
      href: "products-showcase",
    },
    {
      name: t("3-steps"),
      href: "three-steps",
    },
    {
      name: "Q&A",
      href: "faq",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.href))
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.5 }, // Adjust this threshold as needed
      )

      sections.forEach(section => {
        if (section) observer.observe(section)
      })

      return () => {
        sections.forEach(section => {
          if (section) observer.unobserve(section)
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call it once to set the initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [links])
  return (
    <>
      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="menu">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-full bg-white p-0 backdrop-blur-md xl:hidden"
          logo={logo}
        >
          {/* SR ONLY */}
          <SheetHeader className="sr-only">
            <SheetTitle>Меню навигации</SheetTitle>
            <SheetDescription>Открыть меню навигации</SheetDescription>
          </SheetHeader>
          <div className="mx-[35px] mt-[65px] flex h-[75%] flex-col justify-between">
            {/* Links */}
            <nav className="flex flex-col items-center gap-12 text-center">
              {links.map(link => (
                <ScrollLink
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "rounded-md border-2 border-transparent transition-colors duration-700",
                    activeSection === link.href ? "border-[#F2D41A]" : "",
                  )}
                >
                  <SheetClose>{link.name}</SheetClose>
                </ScrollLink>
              ))}
            </nav>
            <SheetFooter className="flex w-full justify-center">
              <LocaleSwitcher className="h-[42px] w-[148.5px]" />
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop */}
      <nav className="hidden shrink-0 items-center lg:flex lg:flex-1 lg:justify-between">
        <div className="flex">
          {links.map(link => (
            <ScrollLink
              key={link.name}
              href={link.href}
              className={cn(
                "w-fit rounded-md border-2 border-transparent px-[20px] py-[14px] transition-colors duration-700",
                activeSection === link.href ? "border-[#F2D41A]" : "",
              )}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
        <LocaleSwitcher />
      </nav>
    </>
  )
}
