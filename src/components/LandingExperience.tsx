"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FilmGrainOverlay } from "@/components/FilmGrainOverlay";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ImperiumLiftSection } from "@/components/ImperiumLiftSection";
import { SpecialtiesSection } from "@/components/SpecialtiesSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { LocationSection } from "@/components/LocationSection";
import { FooterCtaSection } from "@/components/FooterCtaSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function LandingExperience() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-stagger", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

        gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".reveal-grid").forEach((grid) => {
          const cards = grid.querySelectorAll(".reveal-card");
          if (cards.length === 0) return;

          gsap.from(cards, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: grid,
              start: "top 90%",
              once: true,
            },
          });
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="relative min-h-screen overflow-x-clip bg-[#F2EAE0]">
      <FilmGrainOverlay />
      <Navbar />
      <main>
        <HeroSection />
        <ImperiumLiftSection />
        <SpecialtiesSection />
        <AuthoritySection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
      </main>
      <FooterCtaSection />
      <FloatingWhatsApp />
    </div>
  );
}
