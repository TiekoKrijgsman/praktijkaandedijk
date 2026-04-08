"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TreatmentCard from "@/components/TreatmentCard";
import GiftCard from "@/components/GiftCard";
import IljaBio from "@/components/IljaBio";
import Footer from "@/components/ui/Footer";
import { treatments } from "@/data/treatments";

export default function PedicureMenu() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-stone-50 via-green-50/20 to-stone-50">
      {/* Fixed flower background */}
      <div className="hidden md:block fixed inset-0 pointer-events-none z-0 bg-[url('/images/flower.png')] bg-no-repeat bg-left-bottom md:bg-flower-md lg:bg-flower-lg" aria-hidden />
      <Header />

      <main className="max-w-4xl mx-auto relative z-10 px-4 md:px-8 pb-4">
        <Hero />

        <h2 className="text-green-700 text-lg md:text-xl font-semibold text-center mt-8 mb-2">
          Onze Behandelingen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.title}
              treatment={treatment}
              index={index}
            />
          ))}

          <GiftCard />
        </div>

        <Footer />
        <IljaBio />
      </main>
    </div>
  );
}
