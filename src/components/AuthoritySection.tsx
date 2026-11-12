import Image from "next/image";
import { Award, CheckCircle2, MessageCircle } from "lucide-react";
import { AUTHORITY_POINTS, SITE_CONFIG } from "@/config/site-data";

export function AuthoritySection() {
  return (
    <section
      id="sobre"
      className="bg-[#F2EAE0] py-14 sm:py-20 lg:py-28 border-b border-[#B8925A]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Framed Editorial Clinic Atmosphere + Dark Authority Card */}
          <div className="reveal-section lg:col-span-5 flex flex-col gap-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#B8925A]/30 shadow-[0_20px_50px_-24px_rgba(28,25,23,0.3)]">
              <Image
                src="/authority-clinic.jpg"
                alt="Mesa de atendimento editorial em travertino e ampolas de alta pureza na clínica da Dra. Gislaine Zanelato"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/55 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FAF7F2]">
                <span className="text-[11px] tracking-[0.18em] uppercase font-semibold bg-[#1C1917]/75 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#B8925A]/35">
                  Centro • Lages - SC
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#1C1917] text-[#FAF7F2] p-6 sm:p-7 border border-[#B8925A]/25">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-[#D8BC8E] shrink-0" />
                <span className="text-xs tracking-[0.18em] uppercase text-[#D8BC8E] font-semibold">
                  Compromisso Clínico
                </span>
              </div>
              <p className="font-display italic text-xl sm:text-2xl leading-snug text-[#FAF7F2] text-pretty">
                &ldquo;A idade é a mesma, mas a sua pele não precisa demonstrar — quando há técnica,
                ética e acompanhamento real.&rdquo;
              </p>
              <p className="mt-3 text-xs text-[#FAF7F2]/65 tracking-wide uppercase">
                Dra. Gislaine Zanelato • Biomédica Esteta
              </p>
            </div>
          </div>

          {/* Right Column: Trajectory & Differentiators */}
          <div className="reveal-section lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9C7844] font-semibold mb-3">
              <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
              <span>AUTORIDADE, ÉTICA &amp; ACOMPANHAMENTO</span>
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1C1917] text-balance mb-5">
              Mais de <span className="tabular-nums">5 anos</span> elevando o padrão da{" "}
              <em className="italic text-[#9C7844] font-normal">biomedicina estética</em> em Lages.
            </h2>

            <p className="text-sm sm:text-base text-[#5E554D] leading-relaxed text-pretty mb-8">
              Em um consultório reservado e acolhedor no Centro de Lages, a Dra. Gislaine Zanelato
              conduz cada etapa do seu tratamento — da avaliação anatômica detalhada à manutenção
              contínua dos resultados. Sem pressa, sem protocolos engessados e com foco absoluto na
              sua segurança.
            </p>

            <div className="space-y-4 mb-8">
              {AUTHORITY_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="rounded-xl border border-[#B8925A]/22 bg-[#FAF6F0]/85 p-5 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#9C7844] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#1C1917] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E554D] leading-relaxed text-pretty">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8925A] hover:bg-[#9C7844] text-white font-semibold text-sm sm:text-base px-7 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Agendar Minha Avaliação com a Dra. Gislaine</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

