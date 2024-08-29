import Image from "next/image"
import Heading from "@/components/shared/heading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function FAQ() {
  const sectionData = await getNormalizedSectionById("faq")
  return (
    <section id="faq" className="container my-20 space-y-3">
      <Heading className="text-2xl leading-6 lg:text-3xl lg:leading-7 xl:text-4xl xl:leading-10">
        {sectionData?.heading}
      </Heading>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-[55px] lg:gap-y-16 xl:grid-cols-3">
        {sectionData?.cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 text-center"
          >
            <div className="relative size-12">
              <Image
                src={card.image || "/assets/placeholder-gray.svg"}
                alt={`Q&A icon ${index}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-6 text-text-primary lg:text-xl">
                {card.title}
              </h3>
              <p className="text-text-secondary">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
