"use client";

import Link from "next/link";
import { Phone, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import IljaBio from "@/components/IljaBio";
import Footer from "@/components/ui/Footer";
import OpeningHours from "@/components/OpeningHours";
import GoogleMap from "@/components/GoogleMap";

const contactOptions = [
  {
    href: "https://wa.me/31619003480",
    icon: Calendar,
    label: "WhatsApp",
    external: true,
  },
  {
    href: "tel:+31619003480",
    icon: Phone,
    label: "06 - 19 00 34 80",
    external: false,
  },
  {
    href: "mailto:Aandedijkpedicure@gmail.com",
    icon: Mail,
    label: "E-mail",
    external: false,
  },
];

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-stone-50 via-green-50/20 to-stone-50">
      {/* Fixed flower background */}
      <div className="hidden md:block fixed inset-0 pointer-events-none z-0 bg-[url('/images/flower.png')] bg-no-repeat bg-left-bottom md:bg-flower-md lg:bg-flower-lg" aria-hidden />
      <Header />

      <main className="max-w-3xl mx-auto relative z-10 px-4 md:px-8 pb-4">
        {/* Heading - appears after header (0.4s) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-14 space-y-3"
        >
          <h1 className="text-green-800 text-2xl md:text-3xl font-semibold">
            Pedicure Afspraak Maken
          </h1>
          <p className="text-green-600 text-sm md:text-base">
            Kies een van de opties hieronder.
          </p>
        </motion.div>

        {/* Contact buttons - stagger after heading */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          {contactOptions.map((option, idx) => (
            <motion.div
              key={option.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
              className="w-full sm:w-auto"
            >
              <Button
                asChild
                className="w-full sm:w-auto min-w-[200px] px-8 py-5 bg-green-800 hover:bg-green-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-base"
              >
                <Link
                  href={option.href}
                  target={option.external ? "_blank" : undefined}
                >
                  <option.icon className="w-4 h-4 mr-2" />
                  {option.label}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Cancellation policy - after buttons */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="text-center text-green-500 text-xs md:text-sm mt-6 max-w-lg mx-auto leading-relaxed"
        >
          Tot 24 uur voor de afspraak kosteloos annuleren of verzetten.
          <br />
          Anders ben ik genoodzaakt om de kosten door te berekenen.
        </motion.p>

        {/* Opening hours - scroll triggered */}
        <div className="mt-14">
          <OpeningHours />
        </div>

        {/* Google Maps - scroll triggered */}
        <GoogleMap />

        <Footer />
        <IljaBio />
      </main>
    </div>
  );
}
