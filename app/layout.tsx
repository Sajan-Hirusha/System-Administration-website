import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Uva Wellassa University of Sri Lanka",
  description:
    "Excellence in Education - Uva Wellassa University, a leading national university in Sri Lanka offering innovative programs in science, technology, and management.",
  icons: {
    icon: [
      {
        url: "/unilogo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/unilogo.png.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/unilogo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
