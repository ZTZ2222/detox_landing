import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Navigation from "@/components/layout/navigation"

export default function Header({ logo }: { logo: string | null | undefined }) {
  return (
    <header
      className={cn(
        "border-b py-3",
        "z-50 w-screen lg:fixed lg:top-0 lg:bg-white/70 lg:backdrop-blur-md",
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
