import { ArrowUpRight, Layers, Cpu, HeartHandshake } from "lucide-react";
import { IMPERIUM_PILLARS, buildServiceWhatsAppUrl } from "@/config/site-data";

const PILLAR_ICONS = [Layers, Cpu, HeartHandshake];

export function ImperiumLiftSection() {
  return (
    <section
      id="imperium-lift"
      className="relative bg-[#1C1917] text-[#FAF7F2] py-14 sm:py-20 lg:py-28 border-y border-[#B8925A]/20"
    >
      {/* Subtle radial warm gold glow — architectural depth, never flat black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,146,90,0.12),transparent_55%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#D8BC8E] font-semibold mb-4">
              <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
              <span>MÉTODO AUTORAL • DRA. GISLAINE ZANELATO</span>
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#FAF7F2] text-balance">
              <em className="italic text-[#D8BC8E] font-normal">Protocolo Imperium Lift</em>:
              sustentação e firmeza pensadas para peles maduras.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-5">
            <p className="text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed text-pretty">
              Desenvolvido ao longo de mais de cinco anos de prática clínica, o Imperium Lift
              substitui intervenções isoladas por um gerenciamento global das camadas da face —
              devolvendo densidade, contorno e frescor sem perder sua essência.
            </p>
            <a
              href={buildServiceWhatsAppUrl("Protocolo Imperium Lift")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#B8925A]/60 bg-[#B8925A]/15 hover:bg-[#B8925A] text-[#FAF7F2] text-xs sm:text-sm font-semibold px-6 py-3 transition-all duration-300"
            >
              <span>Solicitar Avaliação para o Imperium Lift</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {IMPERIUM_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index % PILLAR_ICONS.length];
            return (
              <article
                key={pillar.number}
                className="reveal-card group rounded-2xl border border-[#B8925A]/22 bg-[#25211E]/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#B8925A]/50 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display italic text-2xl text-[#D8BC8E] tabular-nums">
                      {pillar.number}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-[#B8925A]/30 bg-[#1C1917] flex items-center justify-center text-[#D8BC8E]">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#FAF7F2] text-balance mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#FAF7F2]/75 leading-relaxed text-pretty">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-[#B8925A]">
                  <span>Pilar Imperium</span>
                  <span className="tabular-nums">0{index + 1} / 03</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

