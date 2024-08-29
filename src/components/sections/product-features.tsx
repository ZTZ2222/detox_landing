import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ProductFeatures() {
  const sectionData = await getNormalizedSectionById("product-features")
  return (
    <section
      id="product-features"
      className="container min-h-screen space-y-4 py-20 md:min-h-fit lg:py-32"
    >
      <div className="space-y-3">
        <Heading className="text-2xl leading-6 lg:text-3xl lg:leading-7 xl:text-4xl xl:leading-10">
          {sectionData?.heading}
        </Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sectionData?.cards.map((card, index) => (
          <Card
            key={index}
            style={{ borderWidth: 1, borderColor: `${card.extra}` }}
            className="overflow-hidden rounded-3xl"
          >
            <CardHeader
              style={{
                background: `${card.extra}`,
              }}
              className="flex min-h-[72px] items-start justify-center p-3 lg:min-h-24 lg:px-6 lg:py-4"
            >
              <CardTitle className="text-xl font-bold leading-6 text-white lg:text-2xl">
                {card.title}
              </CardTitle>
              <CardDescription className="sr-only">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-3 text-text-secondary lg:px-6 lg:pb-6 lg:text-xl lg:leading-6">
              <p>{card.description}</p>
              <p>{card.bullets.join(" / ")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
