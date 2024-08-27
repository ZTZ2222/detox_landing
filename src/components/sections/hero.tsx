import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function Hero() {
  const sectionData = await getNormalizedSectionById("hero")

  return (
    <section id="hero" className="relative mb-20 overflow-x-hidden">
      <div className="container relative z-10 mt-12">
        {/* Heading */}
        <h1 className="text-text-primary mx-4 mb-[203px] text-[32px] font-bold leading-[39px]">
          {sectionData?.heading}
        </h1>

        {/* Subheading */}
        <h2 className="text-text-secondary mx-4 mb-8 max-w-[280px] leading-5">
          {sectionData?.subheading}
        </h2>

        {/* CTA Button */}
        <Button variant="accent" size="lg">
          {sectionData?.primaryButton}
        </Button>
      </div>
      {/* Background Image */}
      <div className="absolute left-1/2 top-0 h-[514px] w-[772px] -translate-x-[15%]">
        <Image
          src={sectionData?.image || "/assets/placeholder-gray.svg"}
          alt="Hero Background Image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
