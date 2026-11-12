"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site-data";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#1C1917] hover:bg-[#B8925A] text-[#FAF7F2] border border-[#B8925A]/50 px-4 sm:px-5 py-3 shadow-[0_14px_34px_-10px_rgba(28,25,23,0.45)] transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8BC8E] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B8925A]" />
      </span>
      <MessageCircle className="w-4 h-4 text-[#D8BC8E] shrink-0" />
      <span className="hidden sm:inline text-xs font-semibold tracking-wide">
        Agendar Avaliação
      </span>
    </a>
  );
}
