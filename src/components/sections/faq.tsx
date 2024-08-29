import Image from "next/image"
import Heading from "@/components/shared/heading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function FAQ() {
  const sectionData = await getNormalizedSectionById("faq")
  return (
    <section id="faq" className="container my-20 space-y-3">
      <Heading className="text-2xl leading-6">{sectionData?.heading}</Heading>
      <div className="grid gap-8">
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
              <h3 className="text-lg font-semibold leading-6 text-text-primary">
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
