export default function SchemaOrg() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Praktijk aan de Dijk",
          image: "https://praktijkaandedijk.com/images/flower.png",
          "@id": "https://praktijkaandedijk.com",
          url: "https://praktijkaandedijk.com",
          telephone: "+31619003480",
          email: "Aandedijkpedicure@gmail.com",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Slaperdijkweg 106",
            addressLocality: "Haarlem",
            postalCode: "2026BL",
            addressCountry: "NL",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 52.388352,
            longitude: 4.640375,
          },
          offers: [
            {
              "@type": "Offer",
              name: "Pedicure Behandeling",
              price: "35.00",
              priceCurrency: "EUR",
              duration: "PT40M",
            },
            {
              "@type": "Offer",
              name: "Scrub en Masker",
              price: "10.00",
              priceCurrency: "EUR",
              duration: "PT20M",
            },
            {
              "@type": "Offer",
              name: "Voeten Massage",
              price: "30.00",
              priceCurrency: "EUR",
              duration: "PT30M",
            },
            {
              "@type": "Offer",
              name: "Spa Behandeling",
              price: "70.00",
              priceCurrency: "EUR",
              duration: "PT75M",
            },
            {
              "@type": "Offer",
              name: "Likdoorn Verwijderen",
              price: "12.50",
              priceCurrency: "EUR",
              duration: "PT75M",
            },
          ],
          areaServed: {
            "@type": "City",
            name: "Haarlem",
          },
        }),
      }}
    />
  )
}

