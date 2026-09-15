"use client";

import { FormEvent, useState } from "react";

const inputClasses =
  "min-h-12 w-full border border-silver bg-offwhite px-4 py-2.5 text-base text-ink placeholder:text-ink/40 focus-visible:border-cobalt";

const labelClasses = "text-sm font-medium text-ink";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Statische Demo: es werden bewusst keine Daten übermittelt oder gespeichert.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 border border-silver bg-offwhite p-6 sm:p-8">
      {/* Honeypot-Feld: für echte Nutzer unsichtbar, hält einfache Bots ab */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Bitte freilassen</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClasses}>
            E-Mail-Adresse
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClasses}>
            Telefonnummer (optional)
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClasses}>
          Nachricht
        </label>
        <textarea id="message" name="message" rows={4} required className={`${inputClasses} min-h-32 resize-y py-3`} />
      </div>

      <div className="flex items-start gap-3">
        <input id="privacy" name="privacy" type="checkbox" required className="mt-1 h-4 w-4 shrink-0" />
        <label htmlFor="privacy" className="text-sm text-ink/65">
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-ink hover:text-cobalt">
            Datenschutzhinweise
          </a>{" "}
          zur Kenntnis genommen.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-6 py-3 text-base font-semibold text-offwhite transition-colors hover:bg-cobalt sm:w-auto"
      >
        Anfrage senden
      </button>

      <div role="status" aria-live="polite">
        {submitted ? (
          <p className="border border-cobalt/30 bg-ice px-4 py-3 text-sm font-medium text-ink">
            Dies ist eine Demo-Website. Das Formular übermittelt keine Daten.
          </p>
        ) : null}
      </div>
    </form>
  );
}
