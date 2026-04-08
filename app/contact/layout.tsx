import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Pedicure Afspraak Maken | Praktijk aan de Dijk Haarlem Noord",
  description:
    "Maak een pedicure afspraak in Haarlem Noord. Via WhatsApp, telefoon of e-mail. Open woensdag & donderdag 09:00-17:00. Slaperdijkweg 106, Haarlem.",
  alternates: {
    canonical: "https://praktijkaandedijk.com/contact",
  },
  openGraph: {
    title: "Afspraak Maken | Praktijk aan de Dijk",
    description:
      "Neem contact op voor een pedicure afspraak in Haarlem. Via WhatsApp, telefoon of e-mail. Woensdag en donderdag geopend.",
    url: "https://praktijkaandedijk.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
