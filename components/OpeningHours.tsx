"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { openingHours } from "@/data/treatments";

export default function OpeningHours() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1 max-w-[80px]" />
        <h2 className="text-green-800 text-xl md:text-2xl font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5 text-green-500" />
          Openingstijden
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1 max-w-[80px]" />
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100 overflow-hidden shadow-sm max-w-sm mx-auto">
        {openingHours.map(({ day, time, isOpen }, idx) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className={`flex items-center justify-between px-6 py-3 text-sm ${
              idx < openingHours.length - 1 ? "border-b border-green-50" : ""
            } ${isOpen ? "bg-green-50/50" : ""}`}
          >
            <span className={isOpen ? "text-green-800 font-semibold" : "text-green-500"}>
              {day}
            </span>
            <span className={isOpen ? "text-green-700 font-semibold" : "text-green-400"}>
              {time}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
