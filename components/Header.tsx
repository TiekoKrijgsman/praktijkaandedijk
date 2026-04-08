"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Tarieven" },
  { href: "/contact", label: "Maak Afspraak" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50"
    >
      <nav className="max-w-4xl mx-auto flex justify-center items-center px-4 py-4 gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-5 py-2 rounded-full text-sm md:text-base transition-all duration-300",
                isActive
                  ? "bg-green-800 text-white shadow-md"
                  : "text-green-700 hover:bg-green-50 hover:text-green-800"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
