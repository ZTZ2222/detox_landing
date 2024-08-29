import Image from "next/image"
import AnimatedButton from "@/components/shared/animated-button"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function OurProducts() {
  const sectionData = await getNormalizedSectionById("our-products")
  const product1 = sectionData?.cards[0]
  const product2 = sectionData?.cards[1]
  const product3 = sectionData?.cards[2]

  return (
    <section id="our-products" className="overflow-hidden">
      {/* Prodcut 1 */}
      <div className="relative bg-[#B1151526]/[0.15]">
        <div className="container grid justify-items-center gap-7 pb-6 pt-[120px] lg:pb-[128px] lg:pt-[172px]">
          {/* Procut Image */}
          <div className="relative h-[418.5px] w-[271px] lg:h-[660px] lg:w-[423px]">
            <Image
              src={product1?.image || "/assets/placeholder-gray.svg"}
              alt="Product Image 1"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Product Card */}
          <div className="w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4 lg:absolute lg:bottom-20 lg:right-20 lg:max-w-[294px] lg:bg-white xl:bg-white/40">
            <h3 className="text-lg font-semibold leading-6 text-text-secondary lg:text-3xl">
              {product1?.title}
            </h3>
            <p className="text-2xl font-extrabold text-[#B11515]">
              {product1?.description}
            </p>
            <AnimatedButton>{product1?.extra}</AnimatedButton>
          </div>
        </div>
      </div>

      {/* Prodcut 2 */}
      <div className="relative bg-[#FFB91926]/[0.15]">
        <div className="container grid justify-items-center gap-7 pb-6 pt-[120px] lg:pb-[111px] lg:pt-[145px]">
          {/* Procut Image */}
          <div className="relative h-[455px] w-[355px] lg:h-[705.5px] lg:w-[783px]">
            <Image
              src={product2?.image || "/assets/placeholder-gray.svg"}
              alt="Product Image 1"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Product Card */}
          <div className="w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4 lg:absolute lg:bottom-20 lg:right-20 lg:max-w-[294px] lg:bg-white xl:bg-white/40">
            <h3 className="text-lg font-semibold leading-6 text-text-secondary lg:text-3xl">
              {product2?.title}
            </h3>
            <p className="text-2xl font-extrabold text-[#B11515]">
              {product2?.description}
            </p>
            <AnimatedButton>{product2?.extra}</AnimatedButton>
          </div>
        </div>
      </div>

      {/* Prodcut 3 */}
      <div className="relative bg-[#104D2826]/[0.15]">
        <div className="container grid justify-items-center gap-7 pb-6 pt-[120px] lg:pb-[100px] lg:pt-[145px]">
          {/* Procut Image */}
          <div className="relative h-[427px] w-[375px] lg:h-[732px] lg:w-[763px]">
            <Image
              src={product3?.image || "/assets/placeholder-gray.svg"}
              alt="Product Image 1"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Product Card */}
          <div className="w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4 lg:absolute lg:bottom-20 lg:right-20 lg:max-w-[294px] lg:bg-white xl:bg-white/40">
            <h3 className="text-lg font-semibold leading-6 text-text-secondary lg:text-3xl">
              {product3?.title}
            </h3>
            <p className="text-2xl font-extrabold text-[#B11515]">
              {product3?.description}
            </p>
            <AnimatedButton>{product3?.extra}</AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
