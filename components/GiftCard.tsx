"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function GiftCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-full md:col-span-2"
    >
      <div className="relative bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/60 rounded-2xl p-8 text-center shadow-sm">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1" />
          <Gift className="w-5 h-5 text-green-600" />
          <h2 className="text-green-800 text-xl font-semibold">Cadeaubon</h2>
          <Gift className="w-5 h-5 text-green-600" />
          <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1" />
        </div>
        <p className="text-green-600 text-sm">
          Kies een bedrag of behandeling naar keuze
        </p>
      </div>
    </motion.section>
  );
}
