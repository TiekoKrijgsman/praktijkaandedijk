"use client";

import Header from "@/components/Header";
import IljaBio from "@/components/IljaBio";
import Footer from "@/components/ui/Footer";

export default function PedicureMenu() {
  return (
    <div className="relative bg-stone-50 bg-[url('/images/flower.png')] bg-no-repeat bg-fixed bg-left-bottom bg-flower-sm md:bg-flower-md lg:bg-flower-lg">
      <Header />
      <div className="max-w-2xl mx-auto space-y-8 relative z-10 min-h-screen p-4 md:p-8">
      <header className="text-center space-y-2">
          <h1 className="text-[#386427] text-5xl md:text-7xl font-custom drop-shadow-md">Praktijk aan de Dijk
          </h1>
          <p className="text-[#719c3b] text-lg">Pedicure praktijk (niet medisch)</p>
        </header>

        <div className="space-y-6">
          {[
            {
              title: "Pedicure Behandeling",
              time: "30 minuten",
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
            {
              title: "Nagelbeugel",
              price: "€ 20,00",
              details: ["Nagelbeugel plaatsen"],
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
                  <p className="text-[#719c3b] font-semibold mt-2">
                    {treatment.price}
                  </p>
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
            <p className="text-[#719c3b] text-sm max-w-md mx-auto">
              Kies een bedrag of behandeling
            </p>
          </section>
        </div>
        <Footer />
        <IljaBio />
      </div>
    </div>
  );
}
