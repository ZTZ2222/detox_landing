import React from "react"
import Image from "next/image"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function WhyUs() {
  const sectionData = await getNormalizedSectionById("why-us")

  return (
    <section className="container relative h-[627px] px-6 pt-8">
      <div className="relative z-10 space-y-6">
        <Heading className="font-philosopher text-text-secondary leading-9">
          {sectionData?.heading}
        </Heading>
        <div>
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
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </section>
  )
}
