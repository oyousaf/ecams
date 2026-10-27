"use client";

import { useActionState, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CalendarCheck, Check, ChevronDown, LoaderCircle, MessageSquareText } from "lucide-react";
import Link from "next/link";
import { sendQuote, type QuoteState } from "@/app/actions";
import { categories } from "@/lib/services";
import { site } from "@/lib/site";

const inputClass =
  "mt-2 w-full rounded-2xl border border-forest/15 bg-paper px-4 py-3.5 text-ink placeholder:text-ink/40 transition-colors outline-none focus:border-moss focus:ring-4 focus:ring-lime/40 aria-[invalid=true]:border-red-600 dark:aria-[invalid=true]:border-red-400";

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-forest">
        {label} {optional && <span className="font-normal text-muted">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ defaultService, defaultIntent }: { defaultService?: string; defaultIntent?: "quote" | "booking" }) {
  const [state, action, pending] = useActionState<QuoteState, FormData>(sendQuote, { status: "idle" });
  const [intent, setIntent] = useState<"quote" | "booking">(defaultIntent ?? (defaultService ? "booking" : "quote"));
  const v = state.values ?? {};
  const err = state.fieldErrors ?? {};
  const a = (name: keyof typeof err) =>
    err[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[2rem] bg-deep p-10 text-cream"
        role="status"
      >
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-lime text-deep">
          <Check className="size-7" strokeWidth={3} aria-hidden />
        </span>
        <h2 className="mt-6 text-4xl font-bold">Thanks, we’ve got it.</h2>
        <p className="mt-3 max-w-md text-cream/80">
          We’ll be in touch shortly to confirm your {intent === "booking" ? "booking" : "quote"}. Need us sooner? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-lime underline-offset-4 hover:underline">
            {site.phone}
          </a>
          .
        </p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 font-semibold text-deep">
          Back to home <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </motion.div>
    );
  }

  return (
    <form action={action} noValidate className="rounded-[2rem] bg-sage-2 p-6 md:p-10">
      <fieldset>
        <legend className="text-sm font-semibold text-forest">What would you like to do?</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-full bg-paper p-1.5">
          {(
            [
              ["quote", "Get a quote", MessageSquareText],
              ["booking", "Request a booking", CalendarCheck],
            ] as const
          ).map(([value, label, Icon]) => (
            <label
              key={value}
              className="relative flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-3 text-sm font-semibold has-focus-visible:ring-4 has-focus-visible:ring-lime/50"
            >
              <input
                type="radio"
                name="intent"
                value={value}
                checked={intent === value}
                onChange={() => setIntent(value)}
                className="sr-only"
              />
              {intent === value && (
                <motion.span
                  layoutId="intent-pill"
                  className="absolute inset-0 rounded-full bg-forest"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
              <span className={`relative inline-flex items-center gap-2 ${intent === value ? "text-paper" : "text-forest"}`}>
                <Icon className="size-4" aria-hidden /> {label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={err.name}>
          <input id="name" name="name" autoComplete="name" defaultValue={v.name} className={inputClass} {...a("name")} />
        </Field>
        <Field label="Email" name="email" error={err.email}>
          <input id="email" name="email" type="email" autoComplete="email" defaultValue={v.email} className={inputClass} {...a("email")} />
        </Field>
        <Field label="Phone" name="phone" optional error={err.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone} className={inputClass} />
        </Field>
        <Field label="Postcode or area" name="postcode" error={err.postcode}>
          <input
            id="postcode"
            name="postcode"
            autoComplete="postal-code"
            defaultValue={v.postcode}
            className={inputClass}
            {...a("postcode")}
          />
        </Field>
        <Field label="Service" name="service" error={err.service}>
          <div className="relative">
          <select
            id="service"
            name="service"
            defaultValue={v.service ?? defaultService ?? ""}
            className={`${inputClass} appearance-none pr-10`}
            {...a("service")}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {categories.map((c) => (
              <optgroup key={c.slug} label={c.name}>
                {c.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Something else">Something else</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 bottom-4 size-[1.1rem] text-forest" aria-hidden />
          </div>
        </Field>
        <Field label="Preferred date" name="date" optional>
          <input id="date" name="date" type="date" defaultValue={v.date} className={inputClass} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Tell us about the job" name="details" error={err.details}>
            <textarea
              id="details"
              name="details"
              rows={5}
              defaultValue={v.details}
              placeholder="e.g. 3-bed house, end of tenancy, oven and carpets included"
              className={`${inputClass} resize-y`}
              {...a("details")}
            />
          </Field>
        </div>
      </div>

      {/* Honeypot */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <AnimatePresence>
        {state.status === "error" && state.message && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800 dark:bg-red-950/50 dark:text-red-200"
          >
            {state.message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs text-muted">
          Your information will only be used to respond to your request. See our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={pending}
          className="dark:bg-lime dark:text-deep dark:hover:bg-lime-2 dark:[&_svg]:text-deep inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 font-semibold text-paper transition-colors hover:bg-moss disabled:opacity-70"
        >
          {pending ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              {intent === "booking" ? "Send booking request" : "Send quote request"}
              <ArrowUpRight className="size-4 text-lime" aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
