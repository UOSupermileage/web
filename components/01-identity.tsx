"use client"

import {
  AnimationPlaybackControls,
  animate,
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"

export default function IdentityPage() {
  const ref = useRef(null)
  const containerRef = useRef(null)

  const animationControls = useRef<AnimationPlaybackControls>()

  const { scrollYProgress } = useScroll({
    target: ref,
    // container: containerRef,
    offset: ["start end", "end end"],
  })

  scrollYProgress.on("change", (yProgress) => {
    if (yProgress === 0.25) {
    }
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => console.log(v))

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.25], ["300%", "100%"])
  const topRadius = useTransform(scrollYProgress, [0, 0.25], ["75%", "0%"])
  const position = useTransform(scrollYProgress, (v) =>
    v >= 0.25 ? "fixed" : "static"
  )
  const bgOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 0.2, 0.7])
  const background = useMotionTemplate`linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url('/identity-students-bg.jpg')`

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.3],
    [0, 0, 1]
  )

  const descOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [0, 0, 1])

  return (
    <motion.div
      ref={ref}
      className="min-h-[400vh] flex flex-col rounded-full"
      style={{
        opacity,
      }}
    >
      <motion.div
        className="relative flex flex-col min-h-screen min-w-full p-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url('/identity-students-bg.jpg')",
          backgroundPosition: "bottom",
          backgroundSize: scale,
          borderTopLeftRadius: topRadius,
          borderTopRightRadius: topRadius,
          overflow: "hidden",
          position,
          top: 0,
          left: 0,
        }}
      >
        <div className="absolute space-x-2">
          <span className="text-magnesium text-lg">01</span>
          <span className="text-white text-lg">Identity</span>
        </div>

        <div className="flex-1 flex flex-col justify-center mt-20">
          <motion.div className="space-x-5" style={{ opacity: headingOpacity }}>
            <span className="text-8xl text-white font-bold tracking-tighter">
              We are
            </span>
            <span className="text-8xl text-white font-bold tracking-tighter bg-garnet rounded-xl px-4">
              students.
            </span>
          </motion.div>
          <motion.div
            className="mt-20 text-2xl tracking-tighter text-white space-y-4"
            style={{ opacity: descOpacity }}
          >
            <p>
              UO Supermileage is a competitive student engineering team in the
              Faculty of Engineering at uOttawa.
            </p>
            <p>Built by students. Run by students.</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
