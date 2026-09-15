"use client";

import { useState } from "react";

export type AccordionEntry = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-silver border border-silver bg-offwhite">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-ink transition-colors hover:text-cobalt sm:px-6"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-7 w-7 shrink-0 items-center justify-center border border-silver text-ink transition-transform duration-200 ${
                    isOpen ? "rotate-45 border-cobalt text-cobalt" : ""
                  }`}
                >
                  <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            {/* Grid-Rows-Trick statt `hidden`: erlaubt eine sanfte Höhenanimation
                beim Öffnen/Schließen ohne JS-Höhenmessung. Reines Textfeld ohne
                fokussierbare Inhalte, daher ohne `hidden` weiterhin barrierefrei
                bedienbar (siehe aria-expanded am Button). */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70 sm:px-6 sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
