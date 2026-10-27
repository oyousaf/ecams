export const site = {
  name: "ECAMS",
  legalName: "Environmental Cleaning and Maintenance Services Ltd",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecams.legxcysol.dev",
  description:
    "Eco-friendly cleaning and maintenance across London: domestic and end-of-tenancy cleaning, carpets, windows, ovens, gardens, clear-outs and car valeting.",
  phone: "07401 694259",
  phoneHref: "tel:+447401694259",
  email: "alex@ecamservices.co.uk",
  area: "London",
  director: "Alex Kargbo",
  socials: {
    instagram: "https://www.instagram.com/ecamservices/",
    facebook: "https://www.facebook.com/environmentalcleaningandmaintenanceservices",
  },
  googleReviews:
    "https://www.google.com/maps/place/ECAMS+LTD/@51.5281798,-0.4312316,10z/data=!4m18!1m9!3m8!1s0x21883136af43adef:0x4b42c0b19fec0b0f!2sECAMS+LTD!8m2!3d51.5286416!4d-0.1015987!9m1!1b1!16s%2Fg%2F11rxwpb0l0",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
];
