import React from "react"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ThreeSteps() {
  const sectionData = await getNormalizedSectionById("three-steps")
  return (
    <section
      id="three-steps"
      className="container grid place-content-center pb-[30px] pt-[70px]"
    >
      <div className="relative grid size-[255px] place-content-center rounded-full border border-dashed border-black lg:size-[452px]">
        <div className="grid size-[173px] place-content-center space-y-2 rounded-full bg-white px-4 py-10 text-center lg:size-[292px]">
          <h2 className="text-2xl font-bold text-text-primary lg:text-4xl">
            {sectionData?.heading}
          </h2>
          <p className="font-medium leading-6 text-text-secondary lg:text-xl">
            {sectionData?.subheading}
          </p>
        </div>
        <div className="absolute -top-[68px] left-1/2 grid w-[167px] -translate-x-1/2 justify-items-center gap-3 text-center lg:-top-[100px] lg:w-[200px]">
          <h3 className="font-semibold leading-5 text-text-primary lg:text-2xl">
            {sectionData?.cards[0].title}
          </h3>
          <div className="size-8 rounded-full bg-[#B11515] lg:size-12" />
        </div>
        <div className="absolute -bottom-[30px] -right-[60px] grid w-[153px] justify-items-center gap-3 text-center lg:-right-[150px] lg:bottom-[40px] lg:w-[296px]">
          <div className="size-8 -translate-x-5 rounded-full bg-[#FFB919] lg:size-12" />
          <h3 className="font-semibold leading-5 text-text-primary lg:text-2xl">
            {sectionData?.cards[1].title}
          </h3>
        </div>
        <div className="absolute -bottom-[30px] -left-[55px] grid w-[139px] justify-items-center gap-3 text-center lg:-left-[145px] lg:bottom-[40px] lg:w-[280px]">
          <div className="size-8 translate-x-5 rounded-full bg-[#104D28] lg:size-12" />
          <h3 className="font-semibold leading-5 text-text-primary lg:text-2xl">
            {sectionData?.cards[2].title}
          </h3>
        </div>
      </div>
    </section>
  )
}
