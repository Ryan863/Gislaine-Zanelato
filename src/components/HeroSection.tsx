import Image from "next/image";
import { ArrowDownRight, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative min-h-[88dvh] sm:min-h-[95dvh] flex flex-col justify-end md:justify-center overflow-hidden bg-[#E8DDD0]"
    >
      {/* Desktop Editorial Image */}
      <div className="hidden sm:block absolute inset-0">
        <Image
          src="/hero-desktop.webp"
          alt="Consultório editorial da Dra. Gislaine Zanelato em Lages - SC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Editorial Image */}
      <div className="sm:hidden absolute inset-0">
        <Image
          src="/hero-mobile.webp"
          alt="Ambiente clínico acolhedor da Dra. Gislaine Zanelato em Lages - SC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Strategic Readability Gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#F2EAE0] via-[#F2EAE0]/90 to-[#F2EAE0]/15 md:bg-gradient-to-r md:from-[#F2EAE0] md:via-[#F2EAE0]/88 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#F2EAE0]/70 via-transparent to-[#F2EAE0]/25"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="hero-stagger inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#9C7844] font-semibold mb-4">
            <span className="w-6 h-px bg-[#B8925A]" aria-hidden="true" />
            <span>BIOMEDICINA ESTÉTICA AVANÇADA • CENTRO, LAGES - SC</span>
          </p>

          <h1 className="hero-stagger font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.08] text-[#1C1917] text-balance mb-5">
            Gerenciamento inteligente do envelhecimento para{" "}
            <em className="italic text-[#9C7844] font-normal">peles maduras</em> e exigentes.
          </h1>

          <p className="hero-stagger text-base sm:text-lg text-[#4A423B] leading-relaxed text-pretty max-w-xl mb-8">
            Criadora do{" "}
            <strong className="font-semibold text-[#1C1917]">Protocolo Imperium Lift</strong>. Mais
            de <span className="tabular-nums font-medium text-[#1C1917]">5 anos</span> unindo
            injetáveis de alta pureza e tecnologias avançadas em Lages para devolver firmeza,
            contorno e <em className="font-display italic text-xl text-[#9C7844]">naturalidade</em>{" "}
            ao seu rosto.
          </p>

          <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-9">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[50px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8925A] hover:bg-[#9C7844] text-white font-semibold text-sm sm:text-base px-7 py-3.5 shadow-[0_12px_28px_-10px_rgba(156,120,68,0.65)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Agendar Avaliação Personalizada</span>
            </a>

            <a
              href="#imperium-lift"
              className="min-h-[50px] inline-flex items-center justify-center gap-2 rounded-full border border-[#1C1917]/20 bg-[#FAF6F0]/80 hover:bg-[#FAF6F0] backdrop-blur-sm text-[#1C1917] font-medium text-sm sm:text-base px-6 py-3.5 transition-all duration-300"
            >
              <span>Conhecer o Protocolo Imperium Lift</span>
              <ArrowDownRight className="w-4 h-4 text-[#9C7844] shrink-0" />
            </a>
          </div>

          {/* Credibility Bar */}
          <div className="hero-stagger flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-5 border-t border-[#B8925A]/25 text-xs sm:text-sm text-[#4A423B]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#1C1917]">
              <Star className="w-4 h-4 fill-[#B8925A] text-[#B8925A] shrink-0" />
              <span className="tabular-nums">5.0</span> no Google (Avaliações Reais)
            </span>
            <span className="hidden sm:inline text-[#B8925A]" aria-hidden="true">
              •
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#9C7844] shrink-0" />
              Especialista em Peles Maduras (+5 Anos)
            </span>
            <span className="hidden sm:inline text-[#B8925A]" aria-hidden="true">
              •
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#9C7844] shrink-0" />
              Criadora do Protocolo Imperium Lift
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
