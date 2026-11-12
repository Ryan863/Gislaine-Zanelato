"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/config/site-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="bg-[#F2EAE0] py-14 sm:py-20 lg:py-28 border-b border-[#B8925A]/15"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-section text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9C7844] font-semibold mb-3">
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
            <span>DÚVIDAS FREQUENTES</span>
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1C1917] text-balance">
            Transparência antes do seu{" "}
            <em className="italic text-[#9C7844] font-normal">primeiro atendimento</em>.
          </h2>
        </div>

        <div className="reveal-section space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#B8925A]/45 bg-[#FAF6F0] shadow-[0_12px_30px_-18px_rgba(28,25,23,0.16)]"
                    : "border-stone-900/[0.08] bg-[#FAF6F0]/75 hover:border-[#B8925A]/30"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full min-h-[60px] flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-[#1C1917] text-balance">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "border-[#B8925A] bg-[#B8925A] text-white rotate-45"
                        : "border-[#B8925A]/35 text-[#9C7844] rotate-0"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-7 pb-6 text-sm sm:text-[15px] text-[#5E554D] leading-relaxed text-pretty border-t border-[#B8925A]/15 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
