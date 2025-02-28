import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { arSA } from "@clerk/localizations"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Cairo({ subsets: ["latin", "arabic"] })

export const metadata: Metadata = {
  title: "متجر | تسوق أونلاين",
  description: "متجر إلكتروني عربي لجميع احتياجاتك",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={arSA}>
      <html lang="ar" dir="rtl">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen bg-gray-50">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}



import './globals.css'