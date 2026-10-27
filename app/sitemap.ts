import type { MetadataRoute } from "next";
import { categories } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/pricing", "/quote", "/about", "/reviews", "/privacy-policy", "/terms-conditions", "/modern-slavery"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() })),
    ...categories.map((c) => ({ url: `${site.url}/services/${c.slug}`, lastModified: new Date() })),
  ];
}
