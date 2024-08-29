import React from "react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ProductDetails() {
  const sectionData = await getNormalizedSectionById("product-details")
  return (
    <section className="relative grid h-screen place-content-center lg:h-screen">
      <div className="container relative z-10 grid max-w-lg justify-items-center gap-5 rounded-3xl bg-white/60 px-6 py-8 text-center backdrop-blur-md lg:max-w-4xl lg:px-36 lg:py-12 xl:max-w-5xl xl:px-[220px]">
        {/* Blocks */}
        <h4 className="w-full rounded-md border border-text-secondary p-3 text-center font-bold leading-5 text-text-primary lg:text-xl lg:leading-6">
          {sectionData?.cards[0].title}
        </h4>
        <span className="text-5xl font-medium text-text-primary">+</span>
        <h4 className="w-full rounded-md border border-text-secondary p-3 text-center font-bold leading-5 text-text-primary lg:text-xl lg:leading-6">
          {sectionData?.cards[1].title}
        </h4>
        <h4 className="w-full rounded-md border border-text-secondary p-3 text-center font-bold leading-5 text-text-primary lg:text-xl lg:leading-6">
          {sectionData?.cards[2].title}
        </h4>
        {/* Texts */}
        <p className="font-semibold leading-5 text-text-secondary lg:text-xl lg:leading-6">
          {sectionData?.sectionName}
        </p>
        <Separator className="bg-text-primary" />
        <h3 className="font-bold leading-5 text-text-secondary lg:text-xl lg:leading-6">
          {sectionData?.heading}
        </h3>
        <p className="leading-5 text-text-secondary lg:text-xl lg:leading-6">
          {sectionData?.subheading}
        </p>
      </div>

      {/* Background Image */}
      <Image
        src={sectionData?.image || "/assets/placeholder-gray.svg"}
        alt="Product Details Background Image"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 100vw, 50vw"
      />
    </section>
  )
}
