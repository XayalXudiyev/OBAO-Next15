import localFont from "next/font/local"

import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import ClientProvider from "./ClientProvider"

interface RootLayoutProps {
  children: React.ReactNode
}
// Avenir Fonts
const avenir = localFont({
  src: "./fonts/AvenirLTStd.otf",
  variable: "--font-avenir",
  weight: "100 900",
})

const avenirBlack = localFont({
  src: "./fonts/AvenirLTStdBlack.otf",
  variable: "--font-avenir-black",
  weight: "100 900",
})

const avenirBook = localFont({
  src: "./fonts/AvenirLTStdBook.otf",
  variable: "--font-avenir-book",
  weight: "100 900",
})

const avenirHeavy = localFont({
  src: "./fonts/AvenirLTStdHeavy.otf",
  variable: "--font-avenir-heavy",
  weight: "100 900",
})

const avenirMedium = localFont({
  src: "./fonts/AvenirLTStdMedium.otf",
  variable: "--font-avenir-medium",
  weight: "100 900",
})

const avenirRoman = localFont({
  src: "./fonts/AvenirLTStdRoman.otf",
  variable: "--font-avenir-roman",
  weight: "100 900",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`
        ${avenir.variable} 
        ${avenirMedium.variable} 
        ${avenirRoman.variable} 
        ${avenirBook.variable} 
        ${avenirHeavy.variable} 
        ${avenirBlack.variable} 
        antialiased`}
      >
        <ClientProvider>
          {children}
          <Toaster />
        </ClientProvider>
      </body>
    </html>
  )
}

