// Prices are copied exactly from the client's current Book Online page.
// Only the presentation changes; never edit an amount without Alex's say-so.

export type Price = {
  /** "From" prices are starting prices, confirmed after a quote. */
  from?: boolean;
  amount?: string;
  unit?: string;
  /** Free-text price, e.g. "Bespoke quotation". */
  label?: string;
};

export type Service = {
  id: string;
  name: string;
  blurb: string;
  price: Price;
};

export type Category = {
  slug: "vehicle" | "garden" | "domestic" | "specialist";
  name: string;
  short: string;
  tagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  services: Service[];
};

export const categories: Category[] = [
  {
    slug: "domestic",
    name: "Domestic cleaning",
    short: "Home",
    tagline: "A cleaner home, without the harsh chemicals.",
    intro:
      "Regular cleans, deep cleans and end-of-tenancy work for homes across London, carried out with eco-friendly products that are safe for children, pets and the planet.",
    image: "/images/living-room.webp",
    imageAlt: "Bright, tidy living room with a sofa, plants and a chest of drawers",
    services: [
      {
        id: "domestic-cleaning",
        name: "Domestic Cleaning",
        blurb: "Regular or one-off home cleaning, charged by the hour.",
        price: { amount: "£30", unit: "per hour" },
      },
      {
        id: "domestic-carpet",
        name: "Domestic Cleaning with Carpet Cleaning",
        blurb: "A full home clean plus a deep carpet clean in one visit.",
        price: { from: true, amount: "£165" },
      },
      {
        id: "end-of-tenancy",
        name: "End-of-Tenancy / Move-In Cleaning",
        blurb: "A top-to-bottom clean for moving out or moving in.",
        price: { from: true, amount: "£195" },
      },
      {
        id: "oven-cleaning",
        name: "Oven Cleaning",
        blurb: "Grease and carbon lifted from racks, glass and interior.",
        price: { from: true, amount: "£75" },
      },
      {
        id: "ironing",
        name: "Ironing",
        blurb: "Pressed and folded, charged by the hour.",
        price: { amount: "£25", unit: "per hour" },
      },
    ],
  },
  {
    slug: "specialist",
    name: "Carpets, windows & bins",
    short: "Specialist",
    tagline: "The jobs that make the biggest difference.",
    intro:
      "Carpet and upholstery cleaning, window cleaning, wheelie-bin cleaning and interior decorating, all bookable on their own or alongside a home clean.",
    image: "/images/carpet.webp",
    imageAlt: "Cordless vacuum cleaner lifting confetti out of a grey carpet",
    services: [
      {
        id: "carpet-upholstery",
        name: "Professional Carpet and Upholstery Cleaning",
        blurb: "Deep-cleaned carpets, rugs, sofas and armchairs.",
        price: { from: true, amount: "£95" },
      },
      {
        id: "window-cleaning",
        name: "Window Cleaning",
        blurb: "Streak-free glass, frames and sills.",
        price: { amount: "£5", unit: "per window" },
      },
      {
        id: "bin-regular",
        name: "Regular Bin Cleaning",
        blurb: "Washed, deodorised bins on a regular schedule.",
        price: { amount: "£8.50", unit: "per bin" },
      },
      {
        id: "bin-one-off",
        name: "One-Off Bin Cleaning",
        blurb: "A single deep clean for one wheelie bin.",
        price: { amount: "£15", unit: "for one bin" },
      },
      {
        id: "interior-decorating",
        name: "Interior Decorating",
        blurb: "Painting and decorating, priced to the job.",
        price: { label: "Bespoke quotation" },
      },
    ],
  },
  {
    slug: "garden",
    name: "Gardens & clear-outs",
    short: "Garden",
    tagline: "From overgrown to outdoor room.",
    intro:
      "Garden tidy-ups, front-and-back makeovers and small clear-outs. We cut back, clear and leave the space ready to enjoy.",
    image: "/images/garden.webp",
    imageAlt: "Neatly clipped hedges lining a garden path with flowering shrubs",
    services: [
      {
        id: "small-clear-out",
        name: "Small Clear-Out",
        blurb: "Unwanted items and green waste cleared away.",
        price: { from: true, amount: "£65" },
      },
      {
        id: "gardening",
        name: "Gardening",
        blurb: "Mowing, weeding, pruning and general tidying.",
        price: { from: true, amount: "£95" },
      },
      {
        id: "front-back-garden",
        name: "Front and Back Garden Service",
        blurb: "Both gardens brought back into shape in one visit.",
        price: { from: true, amount: "£150" },
      },
    ],
  },
  {
    slug: "vehicle",
    name: "Car valeting",
    short: "Vehicle",
    tagline: "Mobile valeting, right on your driveway.",
    intro:
      "Interior, exterior or both, for small and large vehicles. We come to you, so your car gets cleaned while you get on with your day.",
    image: "/images/vehicle.webp",
    imageAlt: "Person hand-washing a foam-covered black car outside a brick building",
    services: [
      {
        id: "small-in-or-out",
        name: "Regular/Small Vehicle – Interior or Exterior",
        blurb: "Choose an inside or outside valet.",
        price: { amount: "£45" },
      },
      {
        id: "small-in-and-out",
        name: "Regular/Small Vehicle – Interior and Exterior",
        blurb: "A full inside-and-out valet.",
        price: { amount: "£75" },
      },
      {
        id: "large-in-or-out",
        name: "Large Vehicle – Interior or Exterior",
        blurb: "SUVs, people carriers and vans, inside or outside.",
        price: { amount: "£65" },
      },
      {
        id: "large-in-and-out",
        name: "Large Vehicle – Interior and Exterior",
        blurb: "SUVs, people carriers and vans, inside and out.",
        price: { amount: "£95" },
      },
    ],
  },
];

export const allServices = categories.flatMap((c) => c.services.map((s) => ({ ...s, category: c })));

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/** Lowest numeric starting price in a category, for "from £X" teasers. */
export function startingPrice(category: Category) {
  const amounts = category.services
    .map((s) => s.price.amount)
    .filter((a): a is string => Boolean(a))
    .map((a) => ({ a, n: Number(a.replace(/[£,]/g, "")) }));
  return amounts.sort((x, y) => x.n - y.n)[0]?.a;
}

export const priceDisclaimer =
  "All prices shown are starting prices. The final quotation may vary depending on the size, quantity, condition and location of the property, vehicle or items; access and parking; labour requirements; materials and specialist equipment; and waste-removal or disposal costs. The final price will always be confirmed before work begins.";
