import React from "react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ProductDetails() {
  const sectionData = await getNormalizedSectionById("product-details")
  return (
    <section className="container relative grid h-screen items-center justify-items-center">
      <div className="relative z-10 grid max-w-lg justify-items-center gap-5 rounded-3xl bg-white/60 px-6 py-8 text-center backdrop-blur-md">
        <h4 className="border-text-secondary text-text-primary w-full rounded-md border p-3 text-center font-bold leading-5">
          {sectionData?.cards[0].title}
        </h4>
        <span className="text-text-primary text-5xl font-medium">+</span>
        <h4 className="border-text-secondary text-text-primary w-full rounded-md border p-3 text-center font-bold leading-5">
          {sectionData?.cards[1].title}
        </h4>
        <h4 className="border-text-secondary text-text-primary w-full rounded-md border p-3 text-center font-bold leading-5">
          {sectionData?.cards[2].title}
        </h4>
        <p className="text-text-secondary font-semibold leading-5">
          {sectionData?.sectionName}
        </p>
        <Separator className="bg-text-primary" />
        <h3 className="text-text-secondary font-bold leading-5">
          {sectionData?.heading}
        </h3>
        <p className="text-text-secondary leading-5">
          {sectionData?.subheading}
        </p>
      </div>

      {/* Background Image */}
      <Image
        src={sectionData?.image || "/assets/placeholder-gray.svg"}
        alt="Product Details Background Image"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </section>
  )
}
