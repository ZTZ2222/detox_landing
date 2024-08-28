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
      className="container min-h-screen space-y-4 py-20"
    >
      <div className="space-y-3">
        <Heading className="text-2xl leading-6">{sectionData?.heading}</Heading>
        <Subheading>{sectionData?.subheading}</Subheading>
      </div>
      <div className="grid gap-5">
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
              className="flex h-[72px] items-start justify-center p-3"
            >
              <CardTitle className="text-xl font-bold leading-6 text-white">
                {card.title}
              </CardTitle>
              <CardDescription className="sr-only border-yellow-200">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-3 text-text-secondary">
              <p>{card.description}</p>
              <p>{card.bullets.join(" / ")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
