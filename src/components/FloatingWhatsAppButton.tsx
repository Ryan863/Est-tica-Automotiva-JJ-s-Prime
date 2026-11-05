"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function FloatingWhatsAppButton() {
  return (
    <aside
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={SITE_CONFIG.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário pelo WhatsApp da Estética Automotiva JJ’s Prime"
        className="group relative flex items-center gap-2.5 rounded-full border border-white/15 bg-[#DC2626] hover:bg-[#EF4444] px-4 py-3.5 sm:px-5 sm:py-3.5 text-white shadow-[0_10px_30px_rgba(220,38,38,0.55)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white" />
        </span>
        <MessageCircle className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-wider">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
}
