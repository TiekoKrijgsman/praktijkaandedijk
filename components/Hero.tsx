"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-center pt-10 pb-6 md:pt-16 md:pb-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-100/40 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Flower decoration */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center mb-4"
        >
          <Image
            src="/images/flower.png"
            alt=""
            width={60}
            height={60}
            className="opacity-60"
            aria-hidden
          />
        </motion.div>

        <h1 className="text-green-800 text-5xl md:text-7xl font-custom drop-shadow-sm leading-tight">
          Praktijk aan de Dijk
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-green-500 text-lg md:text-xl mt-3 font-light tracking-wide">
            Pedicure praktijk in Haarlem Noord
          </p>
          <p className="text-green-400 text-sm mt-1">
            Cosmetische pedicure
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
