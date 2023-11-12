"use client"

import Image from "next/image"
import uosmLogo from "@/public/uosm_dark.svg"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimate,
  useInView,
  AnimatePresence,
} from "framer-motion"
import { useRef } from "react"

export default function LandingPage() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end 0.5"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], ["100%", "300%"])
  const bottomRadius = useTransform(scrollYProgress, [0, 0.5], ["0%", "75%"])

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex flex-col gap-20 items-center justify-center"
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.80) 100%), url('/landing-bg.jpg')",
        backgroundPosition: "bottom",
        backgroundSize: scale,
        borderBottomLeftRadius: bottomRadius,
        borderBottomRightRadius: bottomRadius,
        overflow: "hidden",
        opacity,
      }}
    >
      <div className="flex flex-col gap-10 items-center">
        <span className="text-3xl text-white font-medium tracking-tighter">
          We are
        </span>
        <Image alt="UO Supermileage" src={uosmLogo} width={300} />
        <div className="flex flex-col items-center gap-6">
          <span className="text-7xl text-white font-black tracking-tighter">
            uO Supermileage.
          </span>
          <span className="text-3xl font-medium text-magnesium tracking-tighter">
            The forefront of electric car racing at the University of Ottawa.
          </span>
        </div>
      </div>
      <button className="text-white text-xl bg-clementine p-3 rounded-lg">
        Join the Team
      </button>
    </motion.div>
  )
}
