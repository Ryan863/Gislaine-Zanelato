import { Quote, Star } from "lucide-react";
import { SITE_CONFIG, TESTIMONIALS } from "@/config/site-data";

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="bg-[#E8DDD0] py-14 sm:py-20 lg:py-28 border-b border-[#B8925A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-section flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9C7844] font-semibold mb-3">
              <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
              <span>PROVA SOCIAL VERIFICADA</span>
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1C1917] text-balance">
              Experiências reais de quem confia na{" "}
              <em className="italic text-[#9C7844] font-normal">Dra. Gislaine</em>.
            </h2>
          </div>

          <div className="inline-flex items-center gap-3.5 rounded-2xl border border-[#B8925A]/35 bg-[#1C1917] text-[#FAF7F2] px-5 py-3.5 shrink-0 self-start md:self-auto">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B8925A] text-[#B8925A]" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold tabular-nums leading-none">
                {SITE_CONFIG.googleRating} no Google
              </p>
              <p className="text-[11px] text-[#D8BC8E] mt-1 tabular-nums">
                {SITE_CONFIG.googleReviewCount} avaliações reais
              </p>
            </div>
          </div>
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <article
              key={item.name}
              className={`reveal-card rounded-2xl border border-stone-900/[0.08] bg-[#FAF6F0]/92 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between shadow-[0_14px_34px_-22px_rgba(28,25,23,0.16)] ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" aria-label="5 de 5 estrelas">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B8925A] text-[#B8925A]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#B8925A]/50" />
                </div>

                <p className="text-sm sm:text-[15px] text-[#2E2925] leading-relaxed text-pretty mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#B8925A]/20">
                <p className="font-display text-lg font-semibold text-[#1C1917]">{item.name}</p>
                <p className="text-[11px] tracking-wide uppercase text-[#9C7844] font-medium">
                  {item.context}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
