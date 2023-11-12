import IdentityPage from "@/components/01-identity"
import LandingPage from "@/components/00-landing"

export default function Home() {
  return (
    <main className="scroll-smooth">
      <LandingPage />
      <IdentityPage />
    </main>
  )
}
