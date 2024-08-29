import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function Hero() {
  const sectionData = await getNormalizedSectionById("hero")

  return (
    <section id="hero" className="relative overflow-hidden lg:h-screen">
      <div className="container relative z-10 my-20 lg:mt-[258px]">
        {/* Heading */}
        <h1 className="mx-4 mb-[180px] text-[32px] font-bold leading-[39px] text-text-primary md:mb-40 md:max-w-lg md:text-4xl lg:mb-12 lg:max-w-3xl lg:text-[64px] lg:leading-tight">
          {sectionData?.heading}
        </h1>

        {/* Subheading */}
        <h2 className="mx-4 mb-8 max-w-[280px] leading-5 text-text-secondary lg:mb-12 lg:max-w-lg lg:text-2xl">
          {sectionData?.subheading}
        </h2>

        {/* CTA Button */}
        <Button variant="accent" size="lg">
          {sectionData?.primaryButton}
        </Button>
      </div>
      {/* Background Image */}
      <div className="absolute left-1/2 top-0 h-[514px] w-[772px] -translate-x-[15%] md:h-[640px] md:w-[960px] md:-translate-x-[10%] lg:h-[960px] lg:w-[1440px]">
        <Image
          src={sectionData?.image || "/assets/placeholder-gray.svg"}
          alt="Hero Background Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  )
}
