import Image from "next/image"
import uosmLogo from "@/public/uosm.svg"

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl m-auto flex flex-col">
      <div className="m-auto text-center">
        <div className="flex justify-center">
          <Image height={300} src={uosmLogo} alt="UO Supermileage" />
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-8xl font-black text-raisin tracking-tighter">
            uO Supermileage.
          </h1>
          <span className="text-3xl font-bold tracking-tighter text-bunker/30">
            The forefront of electric car racing at the University of Ottawa.
          </span>
        </div>
        <div className="mt-20 text-lg font-light space-y-2 text-raisin">
          <p>
            Our code monkeys are working away on the latest version of our
            website.
          </p>
          <p>
            Please check back later for the{" "}
            <span className="font-bold">offical launch</span> of our revamped
            website.
          </p>
        </div>
      </div>
    </main>
  )
}
