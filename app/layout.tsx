import "./globals.css"
import localFont from "next/font/local"

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

const avenirBlackOblique = localFont({
  src: "./fonts/AvenirLTStdBlackOblique.otf",
  variable: "--font-avenir-black-oblique",
  weight: "100 900",
})

const avenirBook = localFont({
  src: "./fonts/AvenirLTStdBook.otf",
  variable: "--font-avenir-book",
  weight: "100 900",
})

const avenirBookOblique = localFont({
  src: "./fonts/AvenirLTStdBookOblique.otf",
  variable: "--font-avenir-book-oblique",
  weight: "100 900",
})

const avenirHeavy = localFont({
  src: "./fonts/AvenirLTStdHeavy.otf",
  variable: "--font-avenir-heavy",
  weight: "100 900",
})

const avenirHeavyOblique = localFont({
  src: "./fonts/AvenirLTStdHeavyOblique.otf",
  variable: "--font-avenir-heavy-oblique",
  weight: "100 900",
})

const avenirMedium = localFont({
  src: "./fonts/AvenirLTStdMedium.otf",
  variable: "--font-avenir-medium",
  weight: "100 900",
})

const avenirOblique = localFont({
  src: "./fonts/AvenirLTStdOblique.otf",
  variable: "--font-avenir-oblique",
  weight: "100 900",
})

const avenirRoman = localFont({
  src: "./fonts/AvenirLTStdRoman.otf",
  variable: "--font-avenir-roman",
  weight: "100 900",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`
        ${avenir.variable} 
        ${avenirMedium.variable} 
        ${avenirRoman.variable} 
        ${avenirOblique.variable} 
        ${avenirBook.variable} 
        ${avenirBookOblique.variable} 
        ${avenirHeavy.variable} 
        ${avenirHeavyOblique.variable} 
        ${avenirBlack.variable} 
        ${avenirBlackOblique.variable} 
        antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
