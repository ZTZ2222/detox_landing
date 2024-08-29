import React from "react"
import Image from "next/image"
import FormRequest from "@/components/forms/form-request"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function CTA() {
  const sectionData = await getNormalizedSectionById("cta")
  return (
    <div id="cta" className="container mb-20 grid justify-items-center gap-y-8">
      <div className="space-y-8 rounded-3xl bg-white px-4 py-8">
        <div className="space-y-3">
          <Heading className="text-2xl leading-6">
            {sectionData?.heading}
          </Heading>
          <Subheading className="leading-6">
            {sectionData?.subheading}
          </Subheading>
        </div>
        <FormRequest
          btnText={sectionData?.primaryButton}
          privacyText={sectionData?.secondaryButton}
        />
      </div>
      <div className="relative h-[232px] w-[332px]">
        <Image
          src={sectionData?.image || "/assets/placeholder-gray.svg"}
          alt="CTA Background Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
