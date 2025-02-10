import type { Metadata, Viewport} from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import type React from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const customFont = localFont({
  src: "../public/fonts/DreamAvenue.ttf",
  variable: "--font-custom",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  themeColor: "#AAAFFF",
  colorScheme: "dark",
}

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "Praktijk aan de Dijk | Pedicure"
  const description = "Pedicure Praktijk in Haarlem. Gespecialiseerd in pedicure behandelingen, voetmassage en spa behandelingen. Boek een afspraak voor gezonde en verzorgde voeten."
  const url = new URL(`https://praktijkaandedijk.com`)

  return {
    title,
    description,
    metadataBase: url,
    keywords: [
      "pedicure Haarlem",
      "voetverzorging",
      "spa behandeling",
      "voetmassage",
      "likdoorn verwijderen",
      "nagelverzorging",
      "eelt verwijderen",
      "scrub en masker",
      "pedicure praktijk",
      "verzorgde voeten",
      "medische pedicure",
      "wellness voeten",
      "gift card pedicure",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      type: "website",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${customFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

