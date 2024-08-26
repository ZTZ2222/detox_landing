import Heading from "@/components/shared/heading"
import ServiceCard from "@/components/shared/service-card"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function OurProducts() {
  const sectionData = await getNormalizedSectionById("our-services")

  return (
    <section id="our-services" className="bg-blue-950 py-12">
      <div className="container space-y-8">
        <div className="space-y-2 text-center lg:space-y-5">
          <Heading className="text-white">{sectionData?.heading}</Heading>
          <Subheading className="text-white">
            {sectionData?.subheading}
          </Subheading>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectionData?.cards.map((card, index) => (
            <ServiceCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
