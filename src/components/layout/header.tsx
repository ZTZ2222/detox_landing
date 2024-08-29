import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Navigation from "@/components/layout/navigation"

export default function Header({ logo }: { logo: string | null | undefined }) {
  return (
    <header
      className={cn(
        "border-b py-3",
        "fixed top-0 z-50 w-screen bg-white lg:top-4 lg:bg-white/70 lg:backdrop-blur-md",
        "lg:container lg:left-1/2 lg:-translate-x-1/2 lg:rounded-3xl",
      )}
    >
      <div className="container flex items-center justify-between lg:gap-10">
        <Link href="/" className="relative h-[32px] w-[158px]">
          <Image
            src={logo || "/assets/placeholder-gray.svg"}
            alt="Detox Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Link>
        <Navigation logo={logo} />
      </div>
    </header>
  )
}
