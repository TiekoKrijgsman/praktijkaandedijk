"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Treatment } from "@/data/treatments";
import { Sparkles } from "lucide-react";

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
}

export default function TreatmentCard({ treatment, index }: TreatmentCardProps) {
  const hasNewPrice = treatment.newPrice && treatment.newPrice !== treatment.currentPrice;

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative h-full"
    >
      <div className="relative h-full flex flex-col bg-white/60 backdrop-blur-sm border border-green-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300">
        {/* Treatment image */}
        {treatment.image && (
          <div className="relative w-full h-36 md:h-44 overflow-hidden">
            <Image
              src={treatment.image}
              alt={`${treatment.title} - Pedicure Haarlem Noord`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 672px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          {/* Title bar */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1" />
            <h2 className="text-green-800 font-semibold text-lg md:text-xl whitespace-nowrap flex items-center gap-2">
              {treatment.title === "Spa Behandeling" && (
                <Sparkles className="w-4 h-4 text-green-400" />
              )}
              {treatment.title}
              {treatment.time && (
                <span className="text-green-500 text-sm font-normal">
                  ({treatment.time})
                </span>
              )}
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent flex-1" />
          </div>

          {/* Details list */}
          {treatment.details && (
            <ul className="text-green-600 space-y-1.5 text-sm text-center">
              {treatment.details.map((detail, idx) => (
                <li key={idx} className="flex items-start justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-400 shrink-0 mt-[7px]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Description (same style as details) */}
          {treatment.description && (
            <p className="text-green-600 text-sm text-center">
              {treatment.description}
            </p>
          )}

          {/* Note */}
          {treatment.note && (
            <p className="text-green-500 text-sm text-center italic">
              {treatment.note}
            </p>
          )}

          {/* Price */}
          {treatment.currentPrice && (
            <div className="mt-auto pt-3 text-center">
              <p className="text-green-700 font-bold text-xl">
                {treatment.currentPrice}
              </p>
              {hasNewPrice && (
                <p className="text-green-500 text-xs mt-1">
                  Per 1 juli: <span className="font-semibold">{treatment.newPrice}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
