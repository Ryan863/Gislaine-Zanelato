import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function FooterCtaSection() {
  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-16 sm:pt-20 lg:pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final Conversion Block */}
        <div className="reveal-section rounded-3xl border border-[#B8925A]/25 bg-gradient-to-br from-[#26221F] via-[#1C1917] to-[#231E1A] p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <p className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-[#D8BC8E] font-semibold mb-4">
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
            <span>AVALIAÇÃO PERSONALIZADA EM LAGES - SC</span>
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#FAF7F2] text-balance mb-5">
            A idade é a mesma, mas a sua pele{" "}
            <em className="italic text-[#D8BC8E] font-normal">não precisa demonstrar</em>.
          </h2>

          <p className="text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed text-pretty max-w-2xl mx-auto mb-8">
            Agende sua avaliação presencial com a Dra. Gislaine Zanelato e descubra um plano
            estratégico pensado para a sua anatomia, sua rotina e a naturalidade que você valoriza.
          </p>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[52px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8925A] hover:bg-[#9C7844] text-white font-semibold text-sm sm:text-base px-8 py-4 shadow-[0_14px_34px_-12px_rgba(184,146,90,0.65)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Agendar Avaliação via WhatsApp</span>
          </a>
        </div>

        {/* Institutional Footer Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-display text-sm tracking-[0.08em] uppercase text-[#FAF7F2]">
              {SITE_CONFIG.brandName}
            </span>
            <span className="hidden sm:inline text-[#B8925A]" aria-hidden="true">
              •
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B8925A] shrink-0" />
              <span>{SITE_CONFIG.address.full}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FAF7F2]/75 hover:text-[#D8BC8E] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.instagramHandle}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FAF7F2]/75 hover:text-[#D8BC8E] transition-colors tabular-nums"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
