import React from "react"
import Image from "next/image"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function WhyUs() {
  const sectionData = await getNormalizedSectionById("why-us")

  return (
    <section className="relative min-h-[627px] px-6 pt-8 lg:min-h-screen xl:min-h-[1050px]">
      <div className="container relative z-10 grid gap-y-6 lg:grid-cols-5 lg:gap-x-20">
        <Heading className="font-philosopher leading-9 text-text-secondary lg:col-span-3">
          {sectionData?.heading}
        </Heading>
        <div className="lg:col-span-2">
          <Subheading className="font-bold leading-5">
            {sectionData?.primaryButton}
          </Subheading>
          <Subheading>{sectionData?.subheading}</Subheading>
        </div>
      </div>
      <Image
        src={sectionData?.image || "/assets/placeholder-gray.svg"}
        alt="Why Us"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 100vw, 50vw"
      />
    </section>
  )
}
