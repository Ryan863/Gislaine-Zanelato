import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/config/site-data";

export function SpecialtiesSection() {
  return (
    <section
      id="procedimentos"
      className="bg-[#E8DDD0] py-14 sm:py-20 lg:py-28 border-b border-[#B8925A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-section max-w-3xl mb-10 sm:mb-14">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9C7844] font-semibold mb-3">
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
            <span>ESPECIALIDADES &amp; PROCEDIMENTOS</span>
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1C1917] text-balance mb-4">
            Protocolos desenhados para firmeza,{" "}
            <em className="italic text-[#9C7844] font-normal">contorno</em> e qualidade de pele.
          </h2>
          <p className="text-sm sm:text-base text-[#5E554D] leading-relaxed text-pretty">
            Cada procedimento pode ser realizado de forma isolada ou integrado em um plano de
            gerenciamento facial e corporal sob medida. Escolha o foco do seu interesse para falar
            diretamente com nossa equipe.
          </p>
        </div>

        <div className="reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
          {SERVICES.map((service, idx) => {
            const colSpanClass =
              idx === 0
                ? "lg:col-span-3"
                : idx === 1
                  ? "lg:col-span-3"
                  : "lg:col-span-2";

            return (
              <article
                key={service.number}
                className={`reveal-card ${colSpanClass} rounded-2xl border ${
                  service.featured
                    ? "border-[#B8925A]/45 bg-[#1C1917] text-[#FAF7F2] shadow-[0_20px_45px_-22px_rgba(28,25,23,0.45)]"
                    : "border-stone-900/[0.09] bg-[#FAF6F0]/90 text-[#1C1917] shadow-[0_14px_34px_-20px_rgba(28,25,23,0.16)]"
                } backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className={`text-[11px] tracking-[0.18em] uppercase font-semibold ${
                        service.featured ? "text-[#D8BC8E]" : "text-[#9C7844]"
                      }`}
                    >
                      {service.subtitle}
                    </span>
                    <span
                      className={`font-display italic text-2xl tabular-nums ${
                        service.featured ? "text-[#D8BC8E]" : "text-[#B8925A]"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-2xl sm:text-[1.7rem] font-medium leading-[1.15] text-balance mb-3 ${
                      service.featured ? "text-[#FAF7F2]" : "text-[#1C1917]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm sm:text-[15px] leading-relaxed text-pretty mb-6 ${
                      service.featured ? "text-[#FAF7F2]/75" : "text-[#5E554D]"
                    }`}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-7">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          service.featured ? "text-[#FAF7F2]/85" : "text-[#4A423B]"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            service.featured ? "text-[#D8BC8E]" : "text-[#9C7844]"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.whatsappText}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`min-h-[44px] w-full inline-flex items-center justify-between rounded-full px-5 py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    service.featured
                      ? "bg-[#B8925A] hover:bg-[#9C7844] text-white"
                      : "border border-[#B8925A]/35 bg-[#F2EAE0]/80 hover:bg-[#B8925A] text-[#1C1917] hover:text-white"
                  }`}
                >
                  <span>Saber mais sobre {service.title.split("&")[0].trim()}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
