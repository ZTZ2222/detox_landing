import React from "react"
import Image from "next/image"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ProductDetails() {
  const sectionData = await getNormalizedSectionById("product-details")
  return (
    <section className="relative h-screen">
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
