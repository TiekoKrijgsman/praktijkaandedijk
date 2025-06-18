"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex justify-center items-center px-4 py-5 gap-6">
        <Link
          href="/"
          className={cn(
            "text-base md:text-lg hover:underline text-[#405e38]",
            pathname === "/" && "font-semibold underline"
          )}
        >
          Tarieven
        </Link>
        <Link
          href="/contact"
          className={cn(
            "text-base md:text-lg hover:underline text-[#405e38]",
            pathname === "/contact" && "font-semibold underline"
          )}
        >
          Maak Afspraak
        </Link>
      </nav>
    </header>
  );
}
