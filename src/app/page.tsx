"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StudioStandardSection from "@/components/StudioStandardSection";
import ServicesBentoSection from "@/components/ServicesBentoSection";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import LocationHoursSection from "@/components/LocationHoursSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

import {
  SITE_CONFIG,
  NAV_ITEMS,
  HERO_CREDIBILITY_BAR,
  STUDIO_PILLARS,
  SERVICES_MENU,
  TECHNICAL_PROCESS_STEPS,
  FAQ_ITEMS,
} from "@/data/siteData";

// Constantes tipadas no início do ficheiro para manutenção ágil
export const JJS_PRIME_BRIEFING = {
  config: SITE_CONFIG,
  navigation: NAV_ITEMS,
  heroBadges: HERO_CREDIBILITY_BAR,
  pillars: STUDIO_PILLARS,
  services: SERVICES_MENU,
  processSteps: TECHNICAL_PROCESS_STEPS,
  faq: FAQ_ITEMS,
} as const;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Entrada suave da Hero Section
        gsap.from(".hero-reveal", {
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });

        // 2. Pilares do Padrão JJ's Prime (Stagger 0.1)
        gsap.from(".pillar-card", {
          scrollTrigger: {
            trigger: "#diferenciais",
            start: "top 88%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });

        // 3. Cardápio de Serviços Bento Grid (Stagger 0.1)
        gsap.from(".service-bento-card", {
          scrollTrigger: {
            trigger: "#servicos",
            start: "top 88%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });

        // 4. Itens do FAQ Estruturado (Stagger 0.1)
        gsap.from(".faq-item", {
          scrollTrigger: {
            trigger: "#faq",
            start: "top 88%",
            once: true,
          },
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        });

        // 5. Blocos Editoriais individuais (.reveal-up)
        const revealBlocks = gsap.utils.toArray<HTMLElement>(".reveal-up");
        revealBlocks.forEach((block) => {
          gsap.from(block, {
            scrollTrigger: {
              trigger: block,
              start: "top 88%",
              once: true,
            },
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
            clearProps: "all",
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".hero-reveal, .pillar-card, .service-bento-card, .faq-item, .reveal-up",
          {
            opacity: 1,
            y: 0,
          }
        );
      });
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="min-h-screen bg-[#09090B] text-[#E4E4E7]">
      <Navbar />
      <main>
        <HeroSection />
        <StudioStandardSection />
        <ServicesBentoSection />
        <FaqAccordionSection />
        <LocationHoursSection />
      </main>
      <FooterSection />
      <FloatingWhatsAppButton />
    </div>
  );
}
