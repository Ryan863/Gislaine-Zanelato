"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/config/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F2EAE0]/92 backdrop-blur-md border-b border-[#B8925A]/20 py-3 shadow-[0_6px_28px_-14px_rgba(28,25,23,0.18)]"
            : "bg-gradient-to-b from-[#F2EAE0]/75 via-[#F2EAE0]/35 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <a
            href="#topo"
            className="flex items-center gap-3 group min-w-0"
            aria-label="Dra. Gislaine Zanelato — Início"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#B8925A]/55 bg-[#1C1917] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <span className="font-display italic text-sm sm:text-base font-semibold tracking-tight text-[#D8BC8E]">
                GZ
              </span>
            </span>
            <span className="flex flex-col min-w-0">
              <span className="font-display text-sm sm:text-base lg:text-lg font-semibold tracking-[0.06em] uppercase text-[#1C1917] truncate">
                DRA. GISLAINE ZANELATO
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#9C7844] font-semibold truncate">
                {SITE_CONFIG.brandTagline}
              </span>
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-[#1C1917]/85 hover:text-[#1C1917] transition-colors py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-[#B8925A] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#B8925A] hover:bg-[#9C7844] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Agendar Avaliação</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu de navegação"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#B8925A]/35 bg-[#FAF6F0]/80 text-[#1C1917] hover:bg-[#FAF6F0] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 z-50 bg-[#1C1917] text-[#FAF7F2] flex flex-col justify-between px-6 py-6"
        >
          <div className="flex items-center justify-between border-b border-[#B8925A]/20 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full border border-[#B8925A]/60 bg-[#26221F] flex items-center justify-center">
                <span className="font-display italic text-sm font-semibold text-[#D8BC8E]">
                  GZ
                </span>
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold tracking-[0.06em] uppercase text-[#FAF7F2]">
                  DRA. GISLAINE ZANELATO
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#B8925A]">
                  Lages • SC
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#B8925A]/35 text-[#FAF7F2] hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 my-auto py-8">
            {NAV_LINKS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-[52px] flex items-center justify-between border-b border-white/10 py-3 font-display text-3xl text-[#FAF7F2] hover:text-[#D8BC8E] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans tracking-[0.2em] text-[#B8925A] tabular-nums">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-4 border-t border-[#B8925A]/20">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="min-h-[52px] w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B8925A] hover:bg-[#9C7844] text-white font-semibold text-base px-6 py-3.5 shadow-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar Avaliação no WhatsApp</span>
            </a>
            <p className="text-center text-xs text-[#FAF7F2]/65">
              {SITE_CONFIG.address.street} • {SITE_CONFIG.address.neighborhood}, {SITE_CONFIG.address.city}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
