import type { Metadata } from "next"
import "./globals.css"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import type React from "react"
import SchemaOrg from "../components/schema-org"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

const customFont = localFont({
  src: "../public/fonts/DreamAvenue.ttf",
  variable: "--font-custom",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Praktijk aan de Dijk | Pedicure Haarlem Noord",
  description:
    "Pedicure praktijk in Haarlem Noord. Behandelingen vanaf €35: pedicure, spa, gellak, scrub & nagelbeugels. ✓ Persoonlijke aandacht ✓ Direct afspraak maken",
  metadataBase: new URL("https://praktijkaandedijk.com"),
  keywords: [
    "pedicure Haarlem",
    "pedicure Haarlem Noord",
    "cosmetische pedicure Haarlem",
    "voetverzorging Haarlem",
    "voetzorg Haarlem",
    "spa behandeling voeten",
    "scrub masker voeten Haarlem",
    "likdoorn verwijderen Haarlem",
    "nagelverzorging Haarlem",
    "nagelbeugel Haarlem",
    "gellak voeten Haarlem",
    "eelt verwijderen Haarlem",
    "ingegroeide nagel Haarlem",
    "scrub en masker voeten",
    "pedicure praktijk Slaperdijkweg",
    "pedicure behandeling Haarlem",
    "pedicure afspraak maken Haarlem",
    "pedicure in de buurt Haarlem",
    "wellness voeten Haarlem",
    "cadeaubon pedicure Haarlem",
    "pedicure Santpoort",
    "pedicure IJmuiden",
    "pedicure Driehuis",
    "pedicure Velserbroek",
    "pedicure Spaarndam",
    "pedicure Heemstede",
    "pedicure Kennemerland",
  ],
  openGraph: {
    title: "Praktijk aan de Dijk | Pedicure Haarlem Noord",
    description:
      "Pedicure praktijk in Haarlem Noord. Pedicure, spa behandelingen, gellak en scrub. Direct een afspraak maken!",
    url: "https://praktijkaandedijk.com",
    siteName: "Praktijk aan de Dijk",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/pedicure_spa_behandeling.jpg",
        width: 1200,
        height: 630,
        alt: "Praktijk aan de Dijk - Pedicure in Haarlem Noord",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Praktijk aan de Dijk | Pedicure Haarlem Noord",
    description:
      "Pedicure praktijk in Haarlem Noord. Behandelingen vanaf €35. Spa, gellak, scrub en meer.",
    images: ["/images/pedicure_spa_behandeling.jpg"],
  },
  alternates: {
    canonical: "https://praktijkaandedijk.com",
  },
  verification: {
    google: "Dd97IZcnzJzOGtO7cPilyXKMGUSw-Txeo9MLDgRkqcY",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <SchemaOrg />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${poppins.variable} ${customFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
