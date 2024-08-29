"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import AnimatedButton from "@/components/shared/animated-button"
import type { NormalizedCard } from "@/types/content.schema"

type ParallaxProps = {
  product: NormalizedCard | undefined
  background: string
  imageSize: string
  btnText: string | null | undefined
  btnLink: string | null | undefined
  index: number
}

export default function Parallax({
  product,
  background,
  imageSize,
  btnText,
  btnLink,
  index,
}: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const slowT = useTransform(scrollYProgress, [0, 1], [0, -200])
  const slowY = useSpring(slowT, {
    stiffness: 1000,
    damping: 200,
  })

  const fastT = useTransform(scrollYProgress, [0, 1], [200, -200])
  const fastY = useSpring(fastT, {
    stiffness: 1000,
    damping: 200,
  })

  return (
    <div ref={ref} className={cn("relative overflow-hidden", background)}>
      <div className="container grid justify-items-center gap-7 pb-6 pt-[120px] lg:pb-[110px] lg:pt-[145px]">
        {/* Procut Image */}
        <div className={cn("relative z-20", imageSize)}>
          <Image
            src={product?.image || "/assets/placeholder-gray.svg"}
            alt={`Product Image ${product?.uid}`}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 100vw, 50vw"
          />
        </div>
        {/* Product Card */}
        <div className="z-40 w-full max-w-md space-y-3 rounded-3xl bg-white/40 p-4 lg:absolute lg:bottom-20 lg:right-20 lg:max-w-[294px] lg:bg-white xl:bg-white/40">
          <h3 className="text-lg font-semibold leading-6 text-text-secondary lg:text-3xl">
            {product?.title}
          </h3>
          <p className="text-2xl font-extrabold text-[#B11515]">
            {product?.description}
          </p>
          <AnimatedButton href={btnLink || "/#hero"}>{btnText}</AnimatedButton>
        </div>
      </div>
      {/* Pomegranate */}
      <motion.div
        className={cn(
          "left-2 top-[15%] z-10 h-[284px] w-[408px] lg:left-1/4 lg:h-[426px] lg:w-[612px]",
          index === 1 ? "absolute" : "hidden",
        )}
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowY,
        }}
      >
        <Image
          src="/assets/for-animations/pomegranate.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Cherry Left */}
      <motion.div
        className={cn(
          "left-[5%] top-[35%] z-10 size-[355px] lg:size-[532px]",
          index === 1 ? "absolute" : "hidden",
        )}
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowY,
        }}
      >
        <Image
          src="/assets/for-animations/cherry.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Cherry Right */}
      <motion.div
        className={cn(
          "right-[15%] top-[25%] z-10 size-[417px] lg:right-[10%] lg:top-[20%] lg:size-[626px]",
          // "hidden lg:block",
          index === 1 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: fastY,
        }}
      >
        <Image
          src="/assets/for-animations/cherry.png"
          alt="Parallax Image"
          fill
          className="rotate-180 object-cover lg:rotate-0"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Romashka Top Left */}
      <motion.div
        className={cn(
          "left-[5%] top-[25%] z-30 h-[77px] w-[79px] lg:left-[18%] lg:h-[154px] lg:w-[154px]",
          index === 2 ? "absolute" : "hidden",
        )}
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: fastY,
        }}
      >
        <Image
          src="/assets/for-animations/romashka.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Romashka Top Right */}
      <motion.div
        className={cn(
          "right-[20%] top-[19%] z-10 h-[67px] w-[69.5px] lg:right-[25%] lg:h-[134px] lg:w-[139px] xl:right-[35%]",
          index === 2 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: fastY,
        }}
      >
        <Image
          src="/assets/for-animations/romashka.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </motion.div>

      {/* Romashka Bottom Left */}
      <motion.div
        className={cn(
          "bottom-[25%] left-2 z-10 h-[60px] w-[62px] lg:bottom-[8%] lg:left-[16%] xl:left-[26%]",
          index === 2 ? "absolute" : "hidden",
        )}
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowT,
        }}
      >
        <Image
          src="/assets/for-animations/romashka.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </motion.div>

      {/* Romashka Bottom Right */}
      <motion.div
        className={cn(
          "bottom-[25%] right-2 z-10 h-[104px] w-[108px] lg:bottom-[20%] lg:right-[30%] xl:bottom-[15%]",
          index === 2 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowT,
        }}
      >
        <Image
          src="/assets/for-animations/romashka.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Radish */}
      <motion.div
        className={cn(
          "bottom-[50%] right-[5%] z-0 h-[154px] w-[133px] lg:right-[23%] lg:h-[307px] lg:w-[265px]",
          index === 2 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: fastY,
        }}
      >
        <Image
          src="/assets/for-animations/radish2.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Parsley Left Center */}
      <motion.div
        className={cn(
          "left-[8%] top-[30%] z-10 h-[96px] w-[97.5px] lg:left-[25%] lg:h-[192px] lg:w-[195px]",
          index === 3 ? "absolute" : "hidden",
        )}
        initial={{ x: "-100%", rotate: 25 }}
        whileInView={{ x: 0, rotate: -25 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowY,
        }}
      >
        <Image
          src="/assets/for-animations/parsley2.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Parsley Right Center */}
      <motion.div
        className={cn(
          "right-[5%] top-[35%] z-10 h-[118px] w-[119px] lg:right-[34%] lg:h-[236px] lg:w-[239px]",
          index === 3 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%", rotate: -15 }}
        whileInView={{ x: 0, rotate: 15 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: fastY,
        }}
      >
        <Image
          src="/assets/for-animations/parsley2.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Parsley Top Right Corner */}
      <motion.div
        className={cn(
          "right-0 top-[10%] z-10 h-[96px] w-[97.5px] lg:-top-5 lg:h-[192px] lg:w-[195px]",
          index === 3 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%", rotate: -25 }}
        whileInView={{ x: 0, rotate: 25 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowY,
        }}
      >
        <Image
          src="/assets/for-animations/parsley2.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Parsley Bottom Left Corner */}
      <motion.div
        className={cn(
          "-bottom-5 -left-20 z-10 h-[192px] w-[195px]",
          index === 3 ? "absolute" : "hidden",
          // "hidden lg:block",
        )}
        initial={{ rotate: 0 }}
        animate={{ rotate: 115 }}
        transition={{ duration: 1, type: "spring" }}
        style={{
          y: slowY,
        }}
      >
        <Image
          src="/assets/for-animations/parsley2.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      {/* Oranges */}
      <motion.div
        className={cn(
          "bottom-[20%] left-0 z-10 h-[261px] w-[216px] lg:-bottom-[5%] lg:left-[47%] lg:h-[522px] lg:w-[432px]",
          index === 3 ? "absolute" : "hidden",
        )}
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
        style={{
          y: slowY,
        }}
      >
        <Image
          src="/assets/for-animations/orange2.png"
          alt="Parallax Image"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  )
}
