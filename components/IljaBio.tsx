"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IljaBio() {
  return (
    <>
      {/* Mobile view - inline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="block lg:hidden mt-10 mb-6"
      >
        <div className="flex flex-col items-center bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100 p-6 mx-4 shadow-sm">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-green-200 ring-offset-2 shadow-md">
            <Image
              src="/images/ilja.jpg"
              alt="Ilja - pedicure specialist"
              width={192}
              height={192}
              className="w-full h-full object-cover object-[center_0%]"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-green-800 font-semibold text-base">Ilja</p>
            <p className="text-green-500 text-xs mb-2">Pedicure</p>
            <p className="text-green-600 text-sm leading-relaxed max-w-xs">
              Na 33 jaar tandheelkunde heb ik besloten om mij om te scholen.
              Ik heb mijn opleiding gedaan bij Kollaart in Haarlem.
              Mijn praktijk heb ik aan huis aan de Slaperdijkweg in Haarlem Noord.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Desktop view - fixed sidebar, larger */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden lg:flex fixed bottom-6 right-8 z-30 flex-col items-center"
      >
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-green-100 p-5 shadow-lg w-[260px]">
          <div className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-green-200 ring-offset-2 mx-auto shadow-md">
            <Image
              src="/images/ilja.jpg"
              alt="Ilja - pedicure specialist"
              width={256}
              height={256}
              className="w-full h-full object-cover object-[center_0%]"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-green-800 font-semibold text-base">Ilja</p>
            <p className="text-green-500 text-xs mb-2">Pedicure</p>
            <p className="text-green-600 text-sm leading-relaxed">
              Na 33 jaar tandheelkunde heb ik besloten om mij om te scholen.
              Ik heb mijn opleiding gedaan bij Kollaart in Haarlem.
              Mijn praktijk heb ik aan huis aan de Slaperdijkweg in Haarlem Noord.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
