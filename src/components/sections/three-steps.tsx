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
        <div className="absolute -top-[16px] left-1/2 grid -translate-x-1/2 justify-items-center gap-3 text-center lg:-top-[25px]">
          <h3 className="absolute -top-16 w-48 text-sm font-semibold leading-5 text-text-primary lg:w-96 lg:text-2xl">
            {sectionData?.cards[0].title}
          </h3>
          <div className="size-8 rounded-full bg-[#B11515] lg:size-12" />
        </div>
        <div className="absolute -right-[22px] bottom-[55px] grid justify-items-center gap-3 text-center lg:-right-[20px] lg:bottom-[100px]">
          <div className="size-8 -translate-x-5 rounded-full bg-[#FFB919] lg:size-12" />
          <h3 className="absolute -bottom-16 -right-[53px] w-48 text-sm font-semibold leading-5 text-text-primary lg:-left-[170px] lg:right-0 lg:w-96 lg:text-2xl">
            {sectionData?.cards[1].title}
          </h3>
        </div>
        <div className="absolute -left-[22px] bottom-[55px] grid justify-items-center gap-3 text-center lg:-left-[20px] lg:bottom-[100px]">
          <div className="size-8 translate-x-5 rounded-full bg-[#104D28] lg:size-12" />
          <h3 className="absolute -bottom-16 -left-[53px] w-48 text-sm font-semibold leading-5 text-text-primary lg:-left-[170px] lg:w-96 lg:text-2xl">
            {sectionData?.cards[2].title}
          </h3>
        </div>
      </div>
    </section>
  )
}
