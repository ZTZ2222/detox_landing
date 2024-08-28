import React from "react"
import { getNormalizedSectionById } from "@/server/data-access-layer/content"

export default async function ThreeSteps() {
  const sectionData = await getNormalizedSectionById("three-steps")
  return (
    <section
      id="three-steps"
      className="container grid place-content-center pb-[30px] pt-[70px]"
    >
      <div className="relative grid size-[255px] place-content-center rounded-full border border-dashed border-black">
        <div className="grid size-[173px] place-content-center space-y-2 rounded-full bg-white px-4 py-10 text-center">
          <h2 className="text-text-primary text-2xl font-bold">
            {sectionData?.heading}
          </h2>
          <p className="text-text-secondary font-medium leading-6">
            {sectionData?.subheading}
          </p>
        </div>
        <div className="absolute -top-[68px] left-1/2 grid w-[167px] -translate-x-1/2 justify-items-center gap-3 text-center">
          <h3 className="text-text-primary font-semibold leading-5">
            {sectionData?.cards[0].title}
          </h3>
          <div className="size-8 rounded-full bg-[#B11515]" />
        </div>
        <div className="absolute -bottom-[30px] -right-[60px] grid w-[153px] justify-items-center gap-3 text-center">
          <div className="size-8 -translate-x-5 rounded-full bg-[#FFB919]" />
          <h3 className="text-text-primary font-semibold leading-5">
            {sectionData?.cards[1].title}
          </h3>
        </div>
        <div className="absolute -bottom-[30px] -left-[55px] grid w-[139px] justify-items-center gap-3 text-center">
          <div className="size-8 translate-x-5 rounded-full bg-[#104D28]" />
          <h3 className="text-text-primary font-semibold leading-5">
            {sectionData?.cards[2].title}
          </h3>
        </div>
      </div>
    </section>
  )
}
