"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import IljaBio from "@/components/IljaBio";
import Footer from "@/components/ui/Footer";

export default function Contact() {
  return (
    <div className="relative bg-stone-50 bg-[url('/images/flower.png')] bg-no-repeat bg-fixed bg-left-bottom bg-flower-sm md:bg-flower-md lg:bg-flower-lg">
            <Header />

            <div className="mx-auto w-full max-w-2xl px-4">
  <div className="mt-4 flex items-start gap-3 rounded-md border border-yellow-300 bg-yellow-50 p-4 text-sm md:text-base text-yellow-800 shadow-sm">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 mt-0.5 shrink-0 text-yellow-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2.25m0 4.5h.007M12 3a9 9 0 100 18 9 9 0 000-18z"
      />
    </svg>
    <p>
      <strong>Let op:</strong> Vanaf <strong>1 augustus</strong> werk ik alleen op <strong>woensdag</strong> en <strong>donderdag</strong>.
    </p>
  </div>
</div>
<div className="max-w-2xl mx-auto space-y-4 md:space-y-8 relative z-10 p-2 md:p-8 pb-0">


        <h2 className="text-[#405e38] text-lg md:text-2xl flex justify-center text-center items-center gap-2">
          Afspraak maken? Kies een van de opties hieronder.
        </h2>

        <p className="text-center text-[#719c3b] text-sm md:text-md">
          Tot 24 uur voor de afspraak kosteloos annuleren of verzetten.
          <br />
          Anders ben ik genoodzaakt om de kosten door te berekenen.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-center">
          <Button
            asChild
            className="min-w-[200px] px-6 lg:px-8 py-4 bg-[#386427] hover:bg-[#527a47] text-white rounded-md shadow-lg"
          >
            <Link href="https://wa.me/31619003480" target="_blank">
              <Calendar className="inline-block mr-2" />
              WhatsApp
            </Link>
          </Button>

          <Button
            asChild
            className="min-w-[200px] px-6 lg:px-8 py-4 bg-[#386427] hover:bg-[#527a47] text-white rounded-md shadow-lg"
          >
            <Link href="tel:+31619003480">
              <Phone className="inline-block mr-2" />
             06 - 19 00 34 80
            </Link>
          </Button>

          <Button
            asChild
            className="min-w-[200px] px-6 lg:px-8 py-4 bg-[#386427] hover:bg-[#527a47] text-white rounded-md shadow-lg"
          >
            <Link href="mailto:Aandedijkpedicure@gmail.com">
              <Mail className="inline-block mr-2" />
              E-mail
            </Link>
          </Button>
        </div>

        <section className="mt-10 text-center pb-8">
          <h2 className="text-[#405e38] text-2xl mb-4 flex justify-center items-center gap-2">
            <Clock className="w-6 h-6" />
            Openingstijden
          </h2>
          <div className="overflow-x-auto">
            <table className="mx-auto border border-[#3d531e] text-[#719c3b] text-sm md:text-base">
              <thead>
                <tr>
                  <th className="border border-[#3d531e] px-4 py-2">Dag</th>
                  <th className="border border-[#3d531e] px-4 py-2">Tijd</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Maandag", "Gesloten"],
                  ["Dinsdag", "Gesloten"],
                  ["Woensdag", "09:00 - 17:00"],
                  ["Donderdag", "09:00 – 17:00"],
                  ["Vrijdag", "Gesloten"],
                  ["Zaterdag", "Gesloten"],
                  ["Zondag", "Gesloten"],
                ].map(([day, time]) => {
                  const isOpenDay = day === "Woensdag" || day === "Donderdag";
                  const textColor = isOpenDay ? "text-[#3d531e] font-bold" : "text-[#719c3b]";
                  return (
                    <tr key={day} className={textColor}>
                      <td className="border border-[#3d531e] px-4 py-2">{day}</td>
                      <td className="border border-[#3d531e] px-4 py-2">{time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Footer />
              <IljaBio />
    </div>
  );
}
