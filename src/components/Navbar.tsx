"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  MessageCircle,
  MapPin,
  Clock,
  Camera,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "backdrop-blur-md bg-zinc-950/90 border-b border-white/5 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.65)]"
          : "bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logótipo à esquerda */}
          <a
            href="#topo"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg"
            aria-label="Estética Automotiva JJ’s Prime - Voltar ao início"
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-[#121215] text-white shadow-inner transition-colors group-hover:border-red-600/60">
              <span className="font-display text-sm font-extrabold tracking-tighter text-white">
                JJ<span className="text-[#EF4444]">’</span>S
              </span>
              <span
                className="absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-[#DC2626]"
                aria-hidden="true"
              />
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-base sm:text-lg font-extrabold uppercase tracking-tight text-white">
                  {SITE_CONFIG.brandShort}
                </span>
                <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A1A1AA]">
                {SITE_CONFIG.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Menu Central Desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-[#121215]/85 px-2 py-1.5 backdrop-blur-sm"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#E4E4E7]/85 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop + Botão Menu Mobile */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#EF4444] px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_25px_-5px_rgba(220,38,38,0.55)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
              <span>Agendar Horário</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#121215] text-[#E4E4E7] transition-colors hover:border-red-600/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Nativo (Drawer Acessível) */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação móvel"
        className={`md:hidden fixed inset-x-0 top-[69px] bottom-0 z-40 bg-[#09090B]/98 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-5 pt-6 pb-8 overflow-y-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-3.5 py-2.5 text-xs text-[#E4E4E7]">
              <Sparkles className="h-4 w-4 shrink-0 text-[#EF4444]" aria-hidden="true" />
              <span>Estúdio de Detalhamento para Carros e Motos no São Bernardo</span>
            </div>

            <nav aria-label="Links de navegação móvel" className="flex flex-col divide-y divide-white/10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 font-display text-lg font-bold uppercase tracking-tight text-[#E4E4E7] transition-colors hover:text-[#EF4444]"
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className="h-5 w-5 text-[#A1A1AA] transition-transform group-hover:translate-x-1 group-hover:text-[#EF4444]"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>

            <div className="rounded-2xl border border-white/10 bg-[#121215] p-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#EF4444] mt-0.5" aria-hidden="true" />
                <div className="text-xs text-[#A1A1AA]">
                  <p className="font-semibold text-[#E4E4E7]">Endereço do Estúdio</p>
                  <p className="mt-0.5">{SITE_CONFIG.address.street} — {SITE_CONFIG.address.neighborhood}</p>
                  <p>{SITE_CONFIG.address.city} - {SITE_CONFIG.address.state}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 shrink-0 text-[#EF4444] mt-0.5" aria-hidden="true" />
                <div className="text-xs text-[#A1A1AA] tabular-nums">
                  <p className="font-semibold text-[#E4E4E7]">Horário Estendido</p>
                  <p className="mt-0.5">Seg a Sex: 08h às 19h • Sáb: 08h às 15h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <a
              href={SITE_CONFIG.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#DC2626] hover:bg-[#EF4444] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_30px_-5px_rgba(220,38,38,0.6)] transition-all active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
              <span>Agendar Horário no WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#121215] px-5 py-3 text-xs font-semibold text-[#E4E4E7] hover:border-white/25"
            >
              <Camera className="h-4 w-4 text-[#EF4444]" aria-hidden="true" />
              <span>{SITE_CONFIG.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
