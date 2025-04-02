"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function PedicureMenu() {
  return (
    <div className="relative bg-stone-50 bg-[url('/images/flower.png')] bg-no-repeat bg-fixed bg-left-bottom bg-flower-sm md:bg-flower-md lg:bg-flower-lg overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-8 relative z-10 min-h-screen p-4 md:p-8">
        <header className="text-center space-y-2">
          <h1 className="text-[#386427] text-5xl md:text-7xl font-custom drop-shadow-md">Praktijk aan de Dijk</h1>
          <p className="text-[#719c3b] text-lg">Pedicure praktijk (niet medisch)</p>
        </header>

        <div className="text-center">
  <Button
    asChild
    className="bg-[#386427] hover:bg-[#527a47] text-white px-8 py-2 rounded-md shadow-lg dropshadow-xl inline-block"
  >
    <Link href="/contact">Maak direct een afspraak!</Link>
  </Button>
</div>



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
                "Voeten Massage (20 minuten)",
              ],
            },
            {
              title: "Gellak",
              detailsWithPrice: [
                { detail: "Voeten of handen lakken", price: "€ 25" },
                { detail: "Lak verwijderen en nieuw lakken", price: "€ 32,50" },
                { detail: "Lak verwijderen handen of voeten", price: "€ 10" },
                { detail: "Lak verwijderen handen en voeten", price: "€ 17,50" },
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
                  {treatment.title}{" "}
                  {treatment.time && (
                    <span className="text-sm">({treatment.time})</span>
                  )}
                </h2>
                <div className="h-0.5 bg-[#79994d] flex-1" />
              </div>
              <div className="relative max-w-md mx-auto flex flex-col justify-center items-center space-y-2">
                {treatment.details && (
                  <div className="text-[#79994d] space-y-1 md:text-sm text-sm text-center">
                    {treatment.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                )}

                {treatment.detailsWithPrice && (
                  <div className="text-[#79994d] space-y-1 md:text-sm text-sm text-center">
                    {treatment.detailsWithPrice.map((item, idx) => (
                      <p key={idx}>
                        {item.detail} –{" "}
                        <span className="text-[#719c3b] font-semibold">
                          {item.price}
                        </span>
                      </p>
                    ))}
                  </div>
                )}

                {treatment.price && !treatment.detailsWithPrice && (
                  <p className="text-[#719c3b] font-semibold mt-2">{treatment.price}</p>
                )}
              </div>
            </section>
          ))}

          <section className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 bg-[#79994d] flex-1" />
              <h2 className="text-[#405e38] text-xl">Gift Card</h2>
              <div className="h-0.5 bg-[#79994d] flex-1" />
            </div>
            <p className="text-[#719c3b] text-sm max-w-md mx-auto">Kies een bedrag of behandeling</p>
          </section>
        </div>


        <div className="text-center pt-4 space-y-4">


</div>



        <footer className="text-center text-[#405e38] space-y-2 pb-2">
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
          <p className="text-[#93b589]">
            KVK: 91923948<br />
            BTW: NL004925458B48
          </p>
        </footer>

        <div className="block lg:hidden text-center mb-6">
          <div className="mx-auto w-36">
            <Image
              src="/images/ilja.jpg"
              alt="Ilja - pedicure specialist"
              width={192}
              height={192}
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>
          <div className="mt-2 max-w-xs mx-auto text-[#719c3b] text-sm font-medium leading-snug">
            <p className="text-[#405e38] font-bold ">Ilja – Pedicure</p>
            <p className="mt-1 px-20 md:px-5 text-sm md:text-base ">
              Na 33 jaar tandheelkunde heb ik besloten om mij om te scholen. Ik heb mijn opleiding gedaan bij Kollaart in Haarlem. Mijn praktijk heb ik aan huis aan de Slaperdijkweg in Haarlem Noord.
            </p>
          </div>
        </div>
      </div>

<div className="hidden lg:flex fixed bottom-4 right-8 z-30 flex-col items-end">
  <div className="w-40 lg:w-48">
    <Image
      src="/images/ilja.jpg"
      alt="Ilja - pedicure specialist"
      width={192}
      height={192}
      className="rounded-xl shadow-md w-full h-auto object-cover"
    />
  </div>
  <div className="mt-2 text-center max-w-[200px] text-sm font-medium leading-snug bg-stone-50/90 backdrop-blur p-2 rounded-md">
    <p className="text-[#405e38] font-bold">Ilja – Pedicure</p>
    <p className="mt-1 text-[#719c3b]">
      Na 33 jaar tandheelkunde heb ik besloten om mij om te scholen. Ik heb mijn opleiding gedaan bij Kollaart in Haarlem. Mijn praktijk heb ik aan huis aan de Slaperdijkweg in Haarlem Noord.
    </p>
  </div>
</div>

    </div>
  );
}
