import React from "react"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function AboutUs() {
  const sectionData = await getNormalizedSectionById("about-us")

  return (
    <section id="about-us" className="bg-background-accent">
      <div className="container space-y-3 py-[68px] text-center lg:space-y-[30px] lg:py-20">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="space-y-3 lg:flex lg:items-center lg:gap-1.5 lg:space-y-0">
            <Heading className="w-[222px] lg:w-fit">
              {sectionData?.sectionName}
            </Heading>
            <Heading className="font-philosopher">
              {sectionData?.heading}
            </Heading>
          </div>
          <Subheading>{sectionData?.subheading}</Subheading>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-text-primary lg:text-4xl">
            {sectionData?.cards[0].title}
          </h3>
          <p className="leading-6 text-text-secondary lg:text-xl lg:leading-6">
            {sectionData?.cards[0].description}
          </p>
        </div>
      </div>
    </section>
  )
}
