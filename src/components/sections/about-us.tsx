import React from "react"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function AboutUs() {
  const sectionData = await getNormalizedSectionById("about-us")

  return (
    <section
      id="about-us"
      className="bg-background-accent container space-y-3 py-[68px] text-center"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <Heading className="w-[222px]">{sectionData?.sectionName}</Heading>
        <Heading className="font-philosopher">{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <div className="space-y-3">
        <h3 className="text-text-primary text-2xl font-bold">
          {sectionData?.cards[0].title}
        </h3>
        <p className="text-text-secondary leading-6">
          {sectionData?.cards[0].description}
        </p>
      </div>
    </section>
  )
}
