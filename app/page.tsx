
"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
export default function PedicureMenu() {
  return (
    <div className="relative min-h-screen bg-white p-4 md:p-8 bg-[url('/images/flower.png')] bg-no-repeat bg-fixed bg-left-bottom bg-flower-sm md:bg-flower-md lg:bg-flower-lg">
      <div className="max-w-2xl mx-auto space-y-8 relative z-10">

        <header className="text-center space-y-2">
          <h1 className="text-[#386427] text-5xl md:text-7xl font-custom drop-shadow-md">Praktijk aan de Dijk</h1>
          <p className="text-[#719c3b] text-lg">Pedicure praktijk (niet medisch)</p>
        </header>

        <div className="space-y-6">
          {[
            {
              title: "Pedicure Behandeling",
              time: "40 minuten",
              price: "€ 35",
              details: [
                "Voeten desinfecteren",
                "Nagel omgeving reinigen",
                "Nagels knippen",
                "Nagels frezen",
                "Eelt verwijderen",
              ],
            },
            {
              title: "Scrub + Masker",
              time: "20 minuten",
              price: "€ 10",
              details: [
                "In combinatie met de pedicure behandeling of voetmassage ideaal bij zeer droge voeten",
              ],
            },
            {
              title: "Voeten Massage",
              time: "30 minuten",
              price: "€ 30",
              details: [
                "Desinfecteren van de voeten",
                "Massage met geurende verzorgende olie",
              ],
            },
            {
              title: "Spa Behandeling",
              time: "75 minuten",
              price: "€ 70",
              details: [
                "Pedicure behandeling",
                "Voetbad met badzout",
                "Scrub",
                "Masker",
                "Massage (20 minuten)",
              ],
            },
            {
              title: "Likdoorn",
              price: "€ 12,50",
              details: ["Verwijderen van likdoorn"],
            },
          ].map((treatment, index) => (
            <section key={index} className="relative text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-0.5 bg-[#79994d] flex-1" />
                <h2 className="text-[#405e38] font-bold md:text-xl text-base whitespace-nowrap px-4 drop-shadow-md">
                  {treatment.title} {treatment.time && <span className="text-sm">({treatment.time})</span>}
                </h2>
                <div className="h-0.5 bg-[#79994d] flex-1" />
              </div>
              <div className="relative max-w-md mx-auto flex justify-center">
                <div className="text-[#79994d] space-y-1 md:text-sm text-sm text-center">
                  {treatment.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                <p className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 text-[#719c3b] font-semibold">{treatment.price}</p>
              </div>
            </section>
          ))}

          <section className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 bg-[#79994d] flex-1" />
              <h2 className="text-[#405e38] text-xl">Gift Card</h2>
              <div className="h-0.5 bg-[#79994d] flex-1" />
            </div>
            <p className="text-[#719c3b] text-sm max-w-md mx-auto">Kies een bedrag of behandeling en verwen een persoon naar keuze!</p>
          </section>
        </div>
        <div className="text-center pt-4">
          <Button
            className="bg-[#386427] hover:bg-[#527a47] hover:border text-white px-8 py-2 rounded-md shadow-lg dropshadow-xl"
            onClick={() => window.open("https://wa.me/31619003480", "_blank")}
          >
            Maak direct een afspraak!
          </Button>
        </div>
        <footer className="text-center text-[#405e38] space-y-2">
          <p className="text-lg">
            <Link href="tel:+31619003480" className="text-[#405e38] hover:underline">
              06 - 19 00 34 80
            </Link>
          </p>
          <p>
            <Link href="mailto:Aandedijkpedicure@gmail.com" className="text-[#405e38] hover:underline">
              Aandedijkpedicure@gmail.com
            </Link>
          </p>
          <p className="text-lg flex items-center justify-center gap-2">
  <MapPin className="w-5 h-5 text-[#405e38]" />
  <Link
  href="https://maps.apple.com/?q=Slaperdijkweg+106,+2026BL,+Haarlem"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#405e38] hover:underline"
>
  Slaperdijkweg 106, 2026BL, Haarlem
</Link>
</p>
        </footer>
      </div>
    </div>
  );
}
