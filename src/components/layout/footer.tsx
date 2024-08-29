import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { cn } from "@/lib/utils"
import ScrollLink from "@/components/shared/scroll-link"
import { getMetadata, getSocials } from "@/server/data-access-layer/content"

export default async function Footer() {
  const t = await getTranslations()
  const socials = await getSocials()
  const meta = await getMetadata()
  const logo2 = meta?.logo2
  const lat = meta?.map_coordinates[0]
  const lng = meta?.map_coordinates[1]
  const links = [
    {
      name: t("Components.NavigationLinks.homepage"),
      href: "hero",
      children: [],
    },
    {
      name: t("Components.NavigationLinks.about-company"),
      href: "about-us",
      children: [
        {
          name: t("Components.NavigationLinks.we-are-top-partners"),
          href: "about-us",
        },
        {
          name: t("Components.NavigationLinks.our-mission"),
          href: "about-us",
        },
      ],
    },
    {
      name: t("Components.NavigationLinks.traffic-juice"),
      href: "products-showcase",
      children: [
        {
          name: t("Components.NavigationLinks.products-showcase"),
          href: "products-showcase",
        },
        {
          name: t("Components.NavigationLinks.49-ingredients"),
          href: "product-features",
        },
      ],
    },
    {
      name: t("Components.NavigationLinks.3-steps"),
      href: "three-steps",
    },
    {
      name: "Q&A",
      href: "faq",
    },
  ]
  const Map = dynamic(() => import("@/components/shared/map-component"), {
    loading: () => (
      <p className="animate-pulse text-xl font-semibold text-teal-500">
        Загрузка... | Loading...
      </p>
    ),
    ssr: false,
  })
  return (
    <footer className="border-red-550 border-t py-12">
      <div className="container flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-9 xl:gap-14">
          {/* Logo */}
          <div className="relative h-28 w-52 shrink-0">
            <Image
              src={logo2 || "/assets/placeholder-gray.svg"}
              alt="Detox Logo"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 md:grid-cols-3 lg:gap-6">
            {links.map((link, index) => (
              <div
                key={link.name}
                className={cn(
                  "space-y-3",
                  index === 0 ? "col-span-2 md:col-span-1" : "col-span-1",
                )}
              >
                <ScrollLink
                  href={link.href}
                  className="whitespace-nowrap p-0 text-base font-bold text-text-primary xl:text-lg"
                >
                  {link.name}
                </ScrollLink>
                <div className="flex flex-col gap-2">
                  {link.children?.map((child, index) => (
                    <ScrollLink
                      key={index}
                      href={child.href}
                      className="p-0 text-sm font-medium text-text-secondary"
                    >
                      {child.name}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:space-y-2">
          {/* Map */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold leading-5 text-text-primary">
              {t("Components.Footer.maps-location")}
            </h2>
            <div className="space-y-1.5 text-sm leading-[17px] text-text-secondary">
              {meta?.locations_en.map((location, index) => (
                <p key={index}>{location}</p>
              ))}
            </div>
            <Map latitude={lat} longitude={lng} />
          </div>

          {/* Socials */}
          <div className="flex w-full justify-center gap-9 md:justify-start">
            {socials?.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="flex items-center gap-2"
              >
                <div className="relative size-8">
                  <Image
                    src={social.icon || "/assets/placeholder-gray.svg"}
                    alt={social.name || `social ${index}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
