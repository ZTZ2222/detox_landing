import React from "react"
import Image from "next/image"
import FormRequest from "@/components/forms/form-request"
import Heading from "@/components/shared/heading"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function CTA() {
  const sectionData = await getNormalizedSectionById("cta")
  return (
    <div
      id="cta"
      className="container mb-20 grid justify-items-center gap-y-8 lg:grid-cols-2 lg:place-items-center lg:gap-x-12 xl:gap-x-24"
    >
      <div className="space-y-8 rounded-3xl bg-white px-4 py-8 lg:p-10 xl:p-16">
        <div className="space-y-3">
          <Heading className="text-2xl leading-6 lg:text-3xl lg:leading-7 xl:text-4xl xl:leading-10">
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
      <div className="relative h-[232px] w-[332px] lg:h-[400px] lg:w-[458px]">
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
