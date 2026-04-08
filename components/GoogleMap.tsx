"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GoogleMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mt-10"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1 max-w-[80px]" />
        <h2 className="text-green-800 text-xl md:text-2xl font-semibold flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-500" />
          Locatie
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1 max-w-[80px]" />
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100 overflow-hidden shadow-sm">
        <iframe
          title="Praktijk aan de Dijk - Slaperdijkweg 106, Haarlem"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5!2d4.640375!3d52.388352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef0a6a3b1b1b%3A0x0!2sSlaperdijkweg+106%2C+2026+BL+Haarlem!5e0!3m2!1snl!2snl!4v1"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <p className="text-green-600 text-sm mt-3">
        Slaperdijkweg 106, 2026 BL Haarlem
      </p>
    </motion.section>
  );
}
