"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center text-[#405e38] space-y-2 pb-2">
      <p className="text-lg">
        <Link
          href="tel:+31619003480"
          className="text-[#405e38] hover:underline"
        >
          06 - 19 00 34 80
        </Link>
      </p>
      <p>
        <Link
          href="mailto:Aandedijkpedicure@gmail.com"
          className="text-[#405e38] hover:underline"
        >
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
        KVK: 91923948
        <br />
        BTW: NL004925458B48
      </p>
    </footer>
  );
}
