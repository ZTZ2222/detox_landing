import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimatedButton from "@/components/shared/animated-button"
import Heading from "@/components/shared/heading"
import ServiceCard from "@/components/shared/service-card"
import Subheading from "@/components/shared/subheading"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function OurProducts() {
  const sectionData = await getNormalizedSectionById("our-products")
  const product1 = sectionData?.cards[0]
  const product2 = sectionData?.cards[1]
  const product3 = sectionData?.cards[2]

  return (
    <section id="our-products">
      {/* Prodcut 1 */}
      <div className="container grid justify-items-center gap-7 bg-[#B1151526]/[0.15] pb-6 pt-[120px]">
        {/* Procut Image */}
        <div className="relative h-[418.5px] w-[369px]">
          <Image
            src={product1?.image || "/assets/placeholder-gray.svg"}
            alt="Product Image 1"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Product Card */}
        <div className="w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4">
          <h3 className="text-text-secondary text-lg font-semibold leading-6">
            {product1?.title}
          </h3>
          <p className="text-2xl font-extrabold text-[#B11515]">
            {product1?.description}
          </p>
          <AnimatedButton>{product1?.extra}</AnimatedButton>
        </div>
      </div>

      {/* Prodcut 2 */}
      <div className="container grid justify-items-center gap-7 bg-[#FFB91926]/[0.15] pb-6 pt-[120px]">
        {/* Procut Image */}
        <div className="relative h-[418.5px] w-[369px]">
          <Image
            src={product2?.image || "/assets/placeholder-gray.svg"}
            alt="Product Image 1"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Product Card */}
        <div className="w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4">
          <h3 className="text-text-secondary text-lg font-semibold leading-6">
            {product2?.title}
          </h3>
          <p className="text-2xl font-extrabold text-[#B11515]">
            {product2?.description}
          </p>
          <AnimatedButton>{product2?.extra}</AnimatedButton>
        </div>
      </div>

      {/* Prodcut 3 */}
      <div className="container grid justify-items-center gap-7 bg-[#104D2826]/[0.15] pb-6 pt-[120px]">
        {/* Procut Image */}
        <div className="relative h-[418.5px] w-[369px]">
          <Image
            src={product3?.image || "/assets/placeholder-gray.svg"}
            alt="Product Image 1"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Product Card */}
        <div className="w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4">
          <h3 className="text-text-secondary text-lg font-semibold leading-6">
            {product3?.title}
          </h3>
          <p className="text-2xl font-extrabold text-[#B11515]">
            {product3?.description}
          </p>
          <AnimatedButton>{product3?.extra}</AnimatedButton>
        </div>
      </div>
    </section>
  )
}
