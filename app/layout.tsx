import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "AMAN - Web Developer & Cybersecurity Enthusiast",
  description:
    "Portfolio of AMAN, a Computer Science undergraduate passionate about web development and cybersecurity. Specializing in React, full-stack development, and ethical hacking.",
  keywords:
    "web developer, cybersecurity, react developer, full-stack developer, ethical hacking, computer science, bangalore",
  authors: [{ name: "AMAN" }],
  openGraph: {
    title: "AMAN - Web Developer & Cybersecurity Enthusiast",
    description: "Building secure, innovative web applications and exploring cybersecurity",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
