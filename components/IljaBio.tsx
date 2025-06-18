"use client";

import Image from "next/image";

export default function IljaBio() {
  return (
    <>
      {/* Mobile view */}
      <div className="block lg:hidden text-center mb-6">
        <div className="mx-auto w-36">
          <Image
            src="/images/ilja.jpg"
            alt="Ilja - pedicure specialist"
            width={192}
            height={192}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="mt-2 max-w-xs mx-auto text-[#719c3b] text-sm font-medium leading-snug">
          <p className="text-[#405e38] font-bold">Ilja – Pedicure</p>
          <p className="mt-1 px-20 md:px-5 text-sm md:text-base">
            Na 33 jaar tandheelkunde heb ik besloten om mij om te scholen. Ik heb mijn opleiding gedaan bij Kollaart in Haarlem. Mijn praktijk heb ik aan huis aan de Slaperdijkweg in Haarlem Noord.
          </p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex fixed bottom-4 right-8 z-30 flex-col items-end">
        <div className="w-40 lg:w-48">
          <Image
            src="/images/ilja.jpg"
            alt="Ilja - pedicure specialist"
            width={192}
            height={192}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="mt-2 text-center max-w-[200px] text-sm font-medium leading-snug bg-stone-50/90 backdrop-blur p-2 rounded-md">
          <p className="text-[#405e38] font-bold">Ilja – Pedicure</p>
          <p className="mt-1 text-[#719c3b]">
            Na 33 jaar tandheelkunde heb ik besloten om mij om te scholen. Ik heb mijn opleiding gedaan bij Kollaart in Haarlem. Mijn praktijk heb ik aan huis aan de Slaperdijkweg in Haarlem Noord.
          </p>
        </div>
      </div>
    </>
  );
}
