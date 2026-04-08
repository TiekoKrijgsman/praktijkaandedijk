"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Footer() {
  return (
    <FadeIn>
      <footer className="border-t border-green-100 mt-12 pt-8 pb-6">
        <div className="max-w-3xl mx-auto px-4">
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <Link
              href="tel:+31619003480"
              className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors group"
            >
              <Phone className="w-4 h-4 text-green-500 group-hover:text-green-700 transition-colors" />
              06 - 19 00 34 80
            </Link>

            <Link
              href="mailto:Aandedijkpedicure@gmail.com"
              className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors group"
            >
              <Mail className="w-4 h-4 text-green-500 group-hover:text-green-700 transition-colors" />
              Aandedijkpedicure@gmail.com
            </Link>

            <Link
              href="https://maps.apple.com/?q=Slaperdijkweg+106,+2026BL,+Haarlem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-green-500 group-hover:text-green-700 transition-colors shrink-0" />
              Slaperdijkweg 106, Haarlem
            </Link>
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />

          {/* Legal info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-green-400">
            <span>KVK: 91923948</span>
            <span className="hidden sm:inline">|</span>
            <span>BTW: NL004925458B48</span>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
