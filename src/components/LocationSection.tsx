import { Clock, Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function LocationSection() {
  return (
    <section
      id="contato"
      className="bg-[#E8DDD0] py-14 sm:py-20 lg:py-28 border-b border-[#B8925A]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-section max-w-2xl mb-10 sm:mb-14">
          <p className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#9C7844] font-semibold mb-3">
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
            <span>LOCALIZAÇÃO, HORÁRIOS &amp; CANAIS DIRETOS</span>
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1C1917] text-balance">
            Consultório reservado no{" "}
            <em className="italic text-[#9C7844] font-normal">Centro de Lages</em>.
          </h2>
        </div>

        <div className="reveal-section grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Address & Route Card */}
          <div className="lg:col-span-7 rounded-2xl border border-[#B8925A]/28 bg-[#FAF6F0]/92 backdrop-blur-sm p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_16px_40px_-24px_rgba(28,25,23,0.18)]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#9C7844] font-semibold mb-4">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Endereço Completo</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#1C1917] text-balance mb-3">
                {SITE_CONFIG.address.street}
              </h3>
              <p className="text-sm sm:text-base text-[#5E554D] mb-2">
                {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city} -{" "}
                {SITE_CONFIG.address.state}, CEP {SITE_CONFIG.address.postalCode}
              </p>
              <p className="text-xs text-[#6B635B] tabular-nums mb-8">
                Plus Code: {SITE_CONFIG.address.plusCode}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-6 border-t border-[#B8925A]/20">
              <a
                href={SITE_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1917] hover:bg-[#2E2925] text-[#FAF7F2] text-sm font-semibold px-6 py-3 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#D8BC8E] shrink-0" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-full border border-[#B8925A]/40 bg-[#F2EAE0]/80 hover:bg-[#B8925A] text-[#1C1917] hover:text-white text-sm font-semibold px-6 py-3 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Hours & Direct WhatsApp Card */}
          <div className="lg:col-span-5 rounded-2xl border border-[#B8925A]/30 bg-[#1C1917] text-[#FAF7F2] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#D8BC8E] font-semibold mb-5">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Horário de Atendimento</span>
              </div>

              <div className="divide-y divide-white/10 mb-8">
                {SITE_CONFIG.hours.map((row) => (
                  <div
                    key={row.days}
                    className="py-3.5 flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-[#FAF7F2]/80">{row.days}</span>
                    <span className="font-semibold text-[#D8BC8E] tabular-nums shrink-0">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.16em] text-[#FAF7F2]/60 mb-2">
                Agendamento Direto via WhatsApp
              </p>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8925A] hover:bg-[#9C7844] text-white font-semibold text-sm sm:text-base px-6 py-3.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="tabular-nums">{SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
