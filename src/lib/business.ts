export const business = {
  name: "Estetica Frisör - City",
  tagline: "Salon & boutique since 1996",
  description: "Established city salon since 1996 with an in-store accessories and gift retail section.",
  category: "Hair Salon",
  address: {
    street: "Vaksalagatan 26",
    postalCode: "753 31",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-10 46 00",
  phoneLink: "tel:+4618104600",
  email: "info@esteticafrisor.se" as string | null,
  emailLink: "mailto:info@esteticafrisor.se" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/estetica-frisor-city-132383",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Estetica Frisör",
  rating: 4.9,
  reviewCount: 714,
  foundedYear: 2010,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4.9 på Bokadirekt", icon: "star" },
    { label: "714+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "💇 Boutique Salon", icon: "student" },
  ],
  usps: [
    {
      title: "Erfarna stylister",
      description: "Professionell klippning och styling hos Estetica Frisör - City.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på Vaksalagatan 26 i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "714+ nöjda kunder enligt offentliga omdömen.",
    },
    {
      title: "Enkel bokning",
      description: "Boka tid online eller ring för snabb service.",
    },
  ],
  services: [
    {
      id: "klippning",
      name: "Klippning",
      icon: "✂️",
      description: "Professionell klippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "f-rgning-och-slingor",
      name: "Färgning och slingor",
      icon: "💇",
      description: "Professionell färgning och slingor med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "balayage",
      name: "Balayage",
      icon: "⭐",
      description: "Professionell balayage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-sh-r",
      name: "Löshår",
      icon: "🎯",
      description: "Professionell löshår med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "bryn-och-fransf-rg",
      name: "Bryn och fransfärg",
      icon: "✨",
      description: "Professionell bryn och fransfärg med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Styling", before: "from-[#3D2B3F] to-[#6B4C6E]", after: "from-[#D4AF37]/40 to-[#6B4C6E]" },
    { id: 2, label: "Behandling", before: "from-[#6B4C6E] to-[#3D2B3F]", after: "from-[#D4AF37]/30 to-[#3D2B3F]" },
    { id: 3, label: "Resultat", before: "from-[#3D2B3F] to-[#6B4C6E]/80", after: "from-[#D4AF37] to-[#6B4C6E]/50" },
    { id: 4, label: "Salong", before: "from-[#6B4C6E]/90 to-[#3D2B3F]", after: "from-[#D4AF37]/50 to-[#D4AF37]" },
    { id: 5, label: "Detalj", before: "from-[#3D2B3F] to-[#D4AF37]/20", after: "from-[#6B4C6E] to-[#D4AF37]/35" },
    { id: 6, label: "Atmosfär", before: "from-[#6B4C6E] to-[#D4AF37]/25", after: "from-[#D4AF37]/60 to-[#3D2B3F]" },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Estetica Frisör - City. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Estetica Frisör - City varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  about: {
    headline: "Om Estetica Frisör - City",
    paragraphs: [
      "Established city salon since 1996 with an in-store accessories and gift retail section.",
    ],
  },
  faq: [
    {
      question: "Var ligger Estetica Frisör - City?",
      answer: "Vi finns på Vaksalagatan 26, 753 31 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Estetica Frisör - City?",
      answer: "Boka via Bokadirekt eller ring 018-10 46 00.",
    },
    {
      question: "Vad säger kunder om Estetica Frisör - City?",
      answer: "Vi har 4.9 i snittbetyg baserat på 714+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning.",
    },
    {
      question: "Erbjuder ni presentkort?",
      answer: "Kontakta oss för information om presentkort.",
    },
    {
      question: "Finns parkering nära?",
      answer: "Gatuparkering finns i närheten av Vaksalagatan 26.",
    },
  ],
  seoKeywords: [
    "frisör Vaksalagatan",
    "hårfärg Uppsala",
    "salong med butik Uppsala",
    "Estetica Uppsala",
    "Estetica Frisör - City",
    "Uppsala boutique_salon",
  ],
  brandColors: {
    primary: "#6B4C6E",
    secondary: "#D4AF37",
    accent: "#FFF8F0",
    dark: "#3D2B3F",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
