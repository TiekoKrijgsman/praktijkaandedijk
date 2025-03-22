import type { Metadata} from "next"
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
  title: "Praktijk aan de Dijk | Pedicure in Haarlem",
  description:
    "Pedicure Praktijk in Haarlem. Gespecialiseerd in pedicure behandelingen, voetmassage en spa behandelingen. Pedicure behandelingen vanaf €35, voetmassage, spa behandelingen en likdoornbehandeling. ✓ Persoonlijke aandacht ✓ Direct een afspraak maken",
  metadataBase: new URL("https://praktijkaandedijk.com"),
  keywords: [
    "pedicure Haarlem",
    "voetverzorging Haarlem",
    "spa behandeling voeten",
    "voetmassage Haarlem",
    "likdoorn verwijderen Haarlem",
    "nagelverzorging Haarlem",
    "eelt verwijderen Haarlem",
    "scrub en masker voeten",
    "pedicure praktijk Slaperdijkweg",
    "pedicure behandeling Haarlem",
    "wellness voeten Haarlem",
    "cadeaubon pedicure Haarlem",
      "pedicure Haarlem",
      "voetverzorging Haarlem",
      "spa behandeling voeten",
      "voetmassage Haarlem",
      "likdoorn verwijderen Haarlem",
      "nagelverzorging Haarlem",
      "eelt verwijderen Haarlem",
      "scrub en masker voeten",
      "pedicure praktijk Slaperdijkweg",
      "pedicure behandeling Haarlem",
      "wellness voeten Haarlem",
      "cadeaubon pedicure Haarlem",
      "pedicure Santpoort",
      "pedicure IJmuiden",
      "pedicure Driehuis",
      "pedicure Velserbroek",
      "pedicure Spaarndam"
  ],
  openGraph: {
    title: "Praktijk aan de Dijk | Pedicure in Haarlem",
    description:
      "Pedicure praktijk in Haarlem. Pedicure behandelingen, voetmassage en spa behandelingen. Direct een afspraak maken!",
    url: "https://praktijkaandedijk.com",
    siteName: "Praktijk aan de Dijk",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/flower.png",
        width: 800,
        height: 600,
        alt: "Praktijk aan de Dijk - Pedicure in Haarlem",
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

