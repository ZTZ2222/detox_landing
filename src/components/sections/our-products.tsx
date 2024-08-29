import Parallax from "@/components/shared/parallax"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function OurProducts() {
  const sectionData = await getNormalizedSectionById("our-products")
  const product1 = sectionData?.cards[0]
  const product2 = sectionData?.cards[1]
  const product3 = sectionData?.cards[2]

  return (
    <section id="our-products" className="overflow-hidden">
      {/* Prodcut 1 */}
      <Parallax
        product={product1}
        background="bg-[#B1151526]/[0.15]"
        imageSize="h-[418.5px] w-[271px] lg:h-[660px] lg:w-[423px]"
        btnText={sectionData?.primaryButton}
        btnLink={sectionData?.secondaryButton}
        index={1}
      />

      {/* Prodcut 2 */}
      <Parallax
        product={product2}
        background="bg-[#FFB91926]/[0.15]"
        imageSize="h-[455px] w-[355px] lg:h-[705.5px] lg:w-[783px]"
        btnText={sectionData?.primaryButton}
        btnLink={sectionData?.secondaryButton}
        index={2}
      />

      {/* Prodcut 3 */}
      <Parallax
        product={product3}
        background="bg-[#104D2826]/[0.15]"
        imageSize="h-[427px] w-[375px] lg:h-[732px] lg:w-[763px]"
        btnText={sectionData?.primaryButton}
        btnLink={sectionData?.secondaryButton}
        index={3}
      />
    </section>
  )
}
