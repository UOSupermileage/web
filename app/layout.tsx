import type { Metadata } from "next"
import { Inter, Spectral } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-spectral",
})

export const metadata: Metadata = {
  title: "uO Supermileage",
  description:
    "The forefront of electric car racing at the University of Ottawa.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spectral.variable}`}>
      <body>{children}</body>
    </html>
  )
}
