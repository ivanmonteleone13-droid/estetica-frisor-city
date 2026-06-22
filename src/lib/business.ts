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
  email: "info@esteticafrisor.se",
  emailLink: "mailto:info@esteticafrisor.se",
  bookingUrl: "https://www.bokadirekt.se/places/estetica-frisor-city-132383",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Estetica Frisör",
  rating: 4.9,
  reviewCount: 714,
  foundedYear: null as number | null,
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
      description: "Professionell klippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "f-rgning-och-slingor",
      name: "Färgning och slingor",
      description: "Professionell färgning och slingor med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "balayage",
      name: "Balayage",
      description: "Professionell balayage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-sh-r",
      name: "Löshår",
      description: "Professionell löshår med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "bryn-och-fransf-rg",
      name: "Bryn och fransfärg",
      description: "Professionell bryn och fransfärg med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
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
  seoKeywords: [
    "frisör Vaksalagatan",
    "hårfärg Uppsala",
    "salong med butik Uppsala",
    "Estetica Uppsala",
  ],
  brandColors: {
    primary: "#1a1a2e",
    secondary: "#c9a227",
    accent: "#f5f0e8",
    dark: "#0f0f1a",
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
