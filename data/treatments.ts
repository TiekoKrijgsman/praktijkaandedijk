export interface Treatment {
  title: string;
  time?: string;
  currentPrice?: string;
  newPrice?: string;
  details?: string[];
  description?: string;
  note?: string;
  image?: string;
}

export const treatments: Treatment[] = [
  {
    title: "Pedicure Behandeling",
    currentPrice: "€ 35",
    newPrice: "€ 38",
    image: "/images/pedicure.webp",
    details: [
      "Voeten desinfecteren",
      "Nagels knippen",
      "Nagels frezen",
      "Eelt verwijderen",
    ],
  },
  {
    title: "Spa Behandeling",
    time: "75 minuten",
    currentPrice: "€ 70",
    newPrice: "€ 75",
    image: "/images/pedicure_spa_behandeling.jpg",
    details: [
      "Pedicure behandeling",
      "Voetbad met badzout",
      "Scrub",
      "Masker",
      "Massage (20 minuten)",
    ],
  },
  {
    title: "Scrub + Masker",
    time: "20 minuten",
    currentPrice: "€ 10",
    newPrice: "€ 13",
    image: "/images/pedicure_scrub_masker.webp",
    description: "In combinatie met de pedicure behandeling, ideaal bij zeer droge voeten",
  },
  {
    title: "Gellak",
    currentPrice: "€ 30",
    image: "/images/pedicure_gellak.jpg",
    note: "Losse behandeling (voeten)",
  },
  {
    title: "Likdoorn Verwijderen",
    currentPrice: "€ 12,50",
    newPrice: "€ 15",
    note: "Losse behandeling",
  },
  {
    title: "Nagelbeugel",
    currentPrice: "€ 20",
    newPrice: "€ 22,50",
    note: "Losse behandeling",
  },
];

export const openingHours = [
  { day: "Maandag", time: "Gesloten", isOpen: false },
  { day: "Dinsdag", time: "Gesloten", isOpen: false },
  { day: "Woensdag", time: "09:00 - 17:00", isOpen: true },
  { day: "Donderdag", time: "09:00 - 17:00", isOpen: true },
  { day: "Vrijdag", time: "Gesloten", isOpen: false },
  { day: "Zaterdag", time: "Gesloten", isOpen: false },
  { day: "Zondag", time: "Gesloten", isOpen: false },
];
