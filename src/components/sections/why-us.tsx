import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function WhyUs() {
  const sectionData = await getNormalizedSectionById("why-us")

  return (
    <section className="container grid justify-items-center gap-8 py-12 lg:grid-cols-2 lg:gap-16">
      <div className="grid gap-6">
        <div className="space-y-2">
          <Heading>{sectionData?.heading}</Heading>
          <h4 className="font-semibold leading-6 text-red-550">
            {sectionData?.cards[0].title}
          </h4>
        </div>
        <Separator />
        <div className="space-y-6 md:grid md:justify-items-center">
          <Subheading>{sectionData?.subheading}</Subheading>
          <Button
            variant="core"
            size="lg"
            className="h-11 w-full max-w-xl"
            asChild
          >
            <Link href="#cta">{sectionData?.primaryButton}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
