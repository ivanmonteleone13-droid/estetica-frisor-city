export const business = {
  name: "Estetica Frisör - City",
  tagline: "Salon & boutique since 1996",
  description: "Etablerad city-salong på Vaksalagatan 26 sedan 1996 — klippning, färg, balayage och boutique med accessoarer mitt i centrala Uppsala.",
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
  websiteUrl: "https://www.esteticafrisor.se/" as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-3.jpg",
  facebookUrl: "https://www.facebook.com/esteticafrisor" as string | null,
  instagramUrl: "https://instagram.com/esteticafrisor" as string | null,
  owner: "Estetica Frisör",
  rating: 4.9,
  reviewCount: 715,
  foundedYear: 1996,
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
    { label: "715+ omdömen", icon: "reviews" },
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
      priceFrom: 710,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "f-rgning-och-slingor",
      name: "Färgning och slingor",
      icon: "💇",
      description: "Professionell färgning och slingor med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 2750,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "balayage",
      name: "Balayage",
      icon: "⭐",
      description: "Professionell balayage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 3000,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-sh-r",
      name: "Löshår",
      icon: "🎯",
      description: "Professionell löshår med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 1650,
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
    { id: 1, label: "Salongen", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Styling", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Färg & slingor", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Resultat", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Boutique", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Alltid lika nöjd  ⭐️ \nTack Linda!",
      author: "Ulla J.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/estetica-frisor-city-132383",
      rating: 5,
      date: "2026-06-22",
    },
    {
      text: "Helt fantastisk på alla sätt! Mer än nöjd! ",
      author: "Annelie N.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/estetica-frisor-city-132383",
      rating: 5,
      date: "2026-06-19",
    },
    {
      text: "Duktig och trevlig ",
      author: "Hovik",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/estetica-frisor-city-132383",
      rating: 5,
      date: "2026-06-20",
    },
    {
      text: "En jättegullig elev som knappt toppade mitt hår fast jag bokat en klipptid.",
      author: "Maria N.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/estetica-frisor-city-132383",
      rating: 3,
      date: "2026-06-22",
    },
  ],
  about: {
    headline: "Om Estetica Frisör - City",
    paragraphs: [
      "Vi har funnits i hjärtat av Uppsala sedan 1996. På Vaksalagatan 26 möts du av en trygg miljö där kvalitet, stil och personligt mötande står i centrum — plus en egen boutique med kläder, accessoarer och presenter.",
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
