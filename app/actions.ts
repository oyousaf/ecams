"use server";

import { Resend } from "resend";
import { z } from "zod";
import { allServices } from "@/lib/services";
import { site } from "@/lib/site";

const schema = z.object({
  intent: z.enum(["quote", "booking"]),
  name: z.string().trim().min(2, "Please tell us your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().min(1, "Please choose a service."),
  postcode: z.string().trim().min(2, "Please add your postcode or area."),
  date: z.string().trim().max(20).optional(),
  details: z.string().trim().min(5, "A few words about the job helps us price it.").max(4000),
});

type Fields = z.infer<typeof schema>;

export type QuoteState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof Fields, string>>;
  values?: Record<string, string>;
};

export async function sendQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  // Honeypot: bots fill every field.
  if (formData.get("company")) return { status: "success" };

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const fieldErrors: QuoteState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof Fields;
      fieldErrors[key] ??= issue.message;
    }
    const values = Object.fromEntries([...formData].map(([k, v]) => [k, String(v)]));
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const d = parsed.data;
  const service = allServices.find((s) => s.id === d.service)?.name ?? d.service;
  const kind = d.intent === "booking" ? "Booking request" : "Quote request";
  const text = [
    `${kind}: ${service}`,
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : null,
    `Postcode / area: ${d.postcode}`,
    d.date ? `Preferred date: ${d.date}` : null,
    "",
    d.details,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[quote] RESEND_API_KEY not set, request logged only\n" + text);
      return { status: "success" };
    }
    return { status: "error", message: `Online requests aren’t switched on yet. Please call ${site.phone}.` };
  }

  const { error } = await new Resend(key).emails.send({
    from: process.env.QUOTE_FROM ?? "ECAMS website <quotes@legxcysol.dev>",
    to: process.env.QUOTE_TO ?? site.email,
    replyTo: d.email,
    subject: `${kind}: ${service} (${d.postcode})`,
    text,
  });

  if (error) {
    console.error("[quote]", error);
    return { status: "error", message: `We couldn’t send your request. Please call ${site.phone}.` };
  }
  return { status: "success" };
}
