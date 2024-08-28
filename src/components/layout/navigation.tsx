"use client"

import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"
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
  const links = [
    {
      name: "Homepage",
      href: "hero",
    },
    {
      name: "About company",
      href: "about-us",
    },
    {
      name: "Traffic Juice",
      href: "products-showcase",
    },
    {
      name: "3 Steps",
      href: "three-steps",
    },
    {
      name: "Q&A",
      href: "faq",
    },
  ]
  return (
    <>
      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button
            variant="ghost"
            size="menu"
            // className="border-none"
          >
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
                <ScrollLink key={link.name} href={link.href}>
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
              className="px-[20px] py-[14px] transition-colors hover:bg-black/80 hover:text-white lg:p-4"
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
