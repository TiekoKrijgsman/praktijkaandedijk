export default function SchemaOrg() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
    name: "Praktijk aan de Dijk",
    description:
      "Pedicure praktijk (niet medisch) in Haarlem Noord. Gespecialiseerd in pedicure behandelingen, spa behandelingen, gellak en nagelbeugels. Persoonlijke aandacht aan de Slaperdijkweg.",
    image: "https://praktijkaandedijk.com/images/pedicure_spa_behandeling.jpg",
    "@id": "https://praktijkaandedijk.com",
    url: "https://praktijkaandedijk.com",
    telephone: "+31619003480",
    email: "Aandedijkpedicure@gmail.com",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, PIN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Slaperdijkweg 106",
      addressLocality: "Haarlem",
      addressRegion: "Noord-Holland",
      postalCode: "2026 BL",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.388352,
      longitude: 4.640375,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    employee: {
      "@type": "Person",
      name: "Ilja",
      jobTitle: "Pedicure Specialist",
      description:
        "Pedicure specialist met 33 jaar ervaring in de tandheelkunde. Opgeleid bij Kollaart in Haarlem.",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+31619003480",
      contactType: "reservations",
      availableLanguage: "Dutch",
    },
    areaServed: [
      { "@type": "City", name: "Haarlem" },
      { "@type": "City", name: "Santpoort" },
      { "@type": "City", name: "IJmuiden" },
      { "@type": "City", name: "Driehuis" },
      { "@type": "City", name: "Velserbroek" },
      { "@type": "City", name: "Spaarndam" },
      { "@type": "City", name: "Heemstede" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pedicure Behandelingen",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Pedicure Behandeling",
          description:
            "Voeten desinfecteren, nagels knippen, nagels frezen, eelt verwijderen",
          price: "35.00",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Scrub en Masker",
          description:
            "In combinatie met de pedicure behandeling, ideaal bij zeer droge voeten",
          price: "10.00",
          priceCurrency: "EUR",
          duration: "PT20M",
        },
        {
          "@type": "Offer",
          name: "Spa Behandeling",
          description:
            "Pedicure behandeling, voetbad met badzout, scrub, masker en massage",
          price: "70.00",
          priceCurrency: "EUR",
          duration: "PT75M",
        },
        {
          "@type": "Offer",
          name: "Likdoorn Verwijderen",
          price: "12.50",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Gellak (voeten)",
          price: "30.00",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Nagelbeugel",
          price: "22.50",
          priceCurrency: "EUR",
        },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat kost een pedicure behandeling in Haarlem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een pedicure behandeling bij Praktijk aan de Dijk kost €35. Een uitgebreide spa behandeling (75 minuten) kost €70. Vanaf 1 juli 2026 gelden nieuwe prijzen.",
        },
      },
      {
        "@type": "Question",
        name: "Wanneer is de pedicure praktijk geopend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Praktijk aan de Dijk is geopend op woensdag en donderdag van 09:00 tot 17:00.",
        },
      },
      {
        "@type": "Question",
        name: "Waar zit Praktijk aan de Dijk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Praktijk aan de Dijk is gevestigd aan de Slaperdijkweg 106 in Haarlem Noord (2026 BL).",
        },
      },
      {
        "@type": "Question",
        name: "Hoe kan ik een afspraak maken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "U kunt een afspraak maken via WhatsApp, telefonisch (06-19003480) of per e-mail (Aandedijkpedicure@gmail.com). Tot 24 uur voor de afspraak kunt u kosteloos annuleren.",
        },
      },
      {
        "@type": "Question",
        name: "Is Praktijk aan de Dijk een medische pedicure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nee, Praktijk aan de Dijk is een pedicure praktijk (niet medisch). Wij bieden pedicure behandelingen, spa behandelingen, gellak en nagelbeugels.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
