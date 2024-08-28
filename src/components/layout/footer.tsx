import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import ScrollLink from "@/components/shared/scroll-link"
import { getMetadata, getSocials } from "@/server/data-access-layer/content"

export default async function Footer() {
  const socials = await getSocials()
  const meta = await getMetadata()
  const logo2 = meta?.logo2
  const lat = meta?.map_coordinates[0]
  const lng = meta?.map_coordinates[1]
  const links = [
    {
      name: "Homepage",
      href: "hero",
      children: [],
    },
    {
      name: "About company",
      href: "about-us",
      children: [
        {
          name: "We are Top Partners",
          href: "about-us",
        },
        {
          name: "Our Mission",
          href: "about-us",
        },
      ],
    },
    {
      name: "Traffic Juice",
      href: "products-showcase",
      children: [
        {
          name: "Juice for nutrition & health control",
          href: "products-showcase",
        },
        {
          name: "A total of 49 ingredients",
          href: "product-features",
        },
      ],
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
  const Map = dynamic(() => import("@/components/shared/map-component"), {
    loading: () => (
      <p className="animate-pulse text-xl font-semibold text-teal-500">
        Загрузка... | Loading...
      </p>
    ),
    ssr: false,
  })
  return (
    <footer className="border-t border-red-550 py-12">
      <div className="container flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="space-y-8">
          {/* Logo */}
          <div className="relative h-28 w-52">
            <Image
              src={logo2 || "/assets/placeholder-gray.svg"}
              alt="Detox Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 lg:flex-row">
            {links.map((link, index) => (
              <div
                key={link.name}
                className={cn(
                  "space-y-3",
                  index === 0 ? "col-span-2" : "col-span-1",
                )}
              >
                <ScrollLink
                  href={link.href}
                  className="text-text-primary p-0 text-base font-bold"
                >
                  {link.name}
                </ScrollLink>
                <div className="flex flex-col gap-2">
                  {link.children?.map((child, index) => (
                    <ScrollLink
                      key={index}
                      href={child.href}
                      className="text-text-secondary p-0 text-sm font-medium"
                    >
                      {child.name}
                    </ScrollLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="space-y-3">
          <h2>Maps Location</h2>
          <div className="text-text-secondary space-y-1.5 text-sm leading-[17px]">
            {meta?.locations_en.map((location, index) => (
              <p key={index}>{location}</p>
            ))}
          </div>
          <Map latitude={lat} longitude={lng} />
        </div>

        {/* Socials */}
        <div className="flex w-full justify-center gap-9">
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
