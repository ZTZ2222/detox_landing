import React from "react"
import Image from "next/image"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function Hero() {
  const sectionData = await getNormalizedSectionById("hero")

  return (
    <section
      id="hero"
      className="relative mb-10 flex h-[calc(100vh-70px)] w-full justify-center overflow-hidden"
    >
      <h1 className="mt-[180px] max-w-[289px] text-center text-4xl font-semibold leading-[44px] tracking-tight lg:max-w-[814px] lg:text-[64px] lg:leading-[80px]">
        <span className="text-blue-950">{sectionData?.heading} </span>
        <span className="text-[#757C8A]">{sectionData?.subheading} </span>
        <span className="text-blue-950">{sectionData?.primaryButton} </span>
        <br className="lg:hidden" />
        <span className="text-red-650">{sectionData?.secondaryButton} </span>
      </h1>
    </section>
  )
}
