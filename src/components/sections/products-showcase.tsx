import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ProductsShowcase() {
  const sectionData = await getNormalizedSectionById("products-showcase")

  return (
    <section
      id="products-showcase"
      className="container grid justify-items-center gap-32 py-16"
    >
      <div className="space-y-3 lg:justify-self-start">
        <Heading className="text-2xl leading-6 lg:text-3xl lg:leading-7 xl:text-4xl xl:leading-10">
          {sectionData?.heading}
        </Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {sectionData?.cards.map((card, index) => (
          <div
            key={index}
            className="relative h-[180px] w-[112px] md:h-[322px] md:w-[192px] lg:h-[465px] lg:w-[288px]"
          >
            <Image
              src={card.image || "/assets/placeholder-gray.svg"}
              alt={`Company Product ${index}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <Button
        variant="core"
        size="lg"
        className="rounded-none py-3 lg:text-xl lg:leading-6"
      >
        {sectionData?.primaryButton}
      </Button>
    </section>
  )
}
