import Image from "next/image"
import uosmLogo from "@/public/uosm.svg"

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl m-auto p-8 flex flex-col">
      <div className="m-auto text-center">
        <div className="flex justify-center">
          <Image
            src={uosmLogo}
            alt="UO Supermileage"
            className="w-[60vw] sm:w-[450px]"
          />
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-raisin tracking-tighter">
            uO Supermileage.
          </h1>
          <div className="inline-block text-2xl sm:text-3xl font-bold tracking-tighter text-bunker/30">
            <span>The forefront of electric car racing </span>
            <span className="whitespace-nowrap">
              at the University of Ottawa.
            </span>
          </div>
        </div>
        <div className="mt-20 text-base sm:text-lg font-light space-y-2 text-raisin">
          <p>
            Our code monkeys are working away on the latest version of our
            website.
          </p>
          <p>
            Please check back later for the{" "}
            <span className="font-bold">official launch</span> of our revamped
            website.
          </p>
        </div>
      </div>
    </main>
  )
}
