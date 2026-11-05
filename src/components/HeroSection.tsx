import {
  MessageCircle,
  ArrowDownRight,
  Car,
  ShieldCheck,
  MapPin,
  ChevronsRight,
  Clock,
} from "lucide-react";
import { HERO_CREDIBILITY_BAR, SITE_CONFIG } from "@/data/siteData";

const ICON_MAP = {
  Car,
  ShieldCheck,
  MapPin,
} as const;

export default function HeroSection() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#09090B] pt-24 pb-12 md:pt-32 md:pb-20 flex flex-col justify-between"
    >
      {/* Imagem Fullscreen em Estúdio Escuro (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
          <img
            src="/images/hero-mobile.jpg"
            alt="Veículo esportivo preto com pintura espelhada sob iluminação de estúdio na Estética Automotiva JJ’s Prime em União da Vitória - PR"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center md:object-[68%_center] scale-[1.01]"
          />
        </picture>

        {/* Duplo Gradiente Estratégico para Proteção de Leitura */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-transparent to-zinc-950"
          aria-hidden="true"
        />
      </div>

      {/* Marca d'água Geométrica de Estúdio (Inspirada na Referência Visual 2) */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-20 z-0 h-[360px] w-[360px] md:h-[520px] md:w-[520px] text-white/[0.03]"
      >
        <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="26" strokeDasharray="34 22" />
        <circle cx="200" cy="200" r="108" stroke="currentColor" strokeWidth="14" />
        <path d="M125 250 L200 110 L275 250 Z" stroke="currentColor" strokeWidth="16" />
      </svg>

      {/* Conteúdo Principal Editorial */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Metadados Superiores Estilo Editorial + Eyebrow */}
          <div className="hero-reveal inline-flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-[#121215]/85 px-4 py-1.5 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#DC2626] shadow-[0_0_10px_#EF4444]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E4E4E7]">
              ESTÉTICA AUTOMOTIVA DE ELITE • UNIÃO DA VITÓRIA - PR
            </span>
          </div>

          {/* H1 com text-balance e barra vermelha de acento (Inspiração Imagem 2) */}
          <h1
            id="hero-heading"
            className="hero-reveal font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.06] text-balance"
          >
            O cuidado definitivo que o seu carro merece.
            <span
              className="inline-block align-middle ml-3 sm:ml-4 h-1.5 w-12 sm:w-20 rounded-full bg-[#DC2626] shadow-[0_0_20px_rgba(220,38,38,0.8)]"
              aria-hidden="true"
            />
          </h1>

          {/* Subheadline */}
          <p className="hero-reveal mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#A1A1AA] font-normal">
            Da lavagem técnica detalhada à vitrificação cerâmica de alta
            durabilidade. Tratamento especializado para{" "}
            <strong className="font-semibold text-[#E4E4E7]">
              carros e motos no São Bernardo
            </strong>
            .
          </p>

          {/* Ação Dupla (CRO) */}
          <div className="hero-reveal mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={SITE_CONFIG.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DC2626] hover:bg-[#EF4444] px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_10px_35px_-5px_rgba(220,38,38,0.65)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            >
              <MessageCircle className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
              <span>Agendar pelo WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-[#121215]/80 hover:bg-white/10 hover:border-white/30 px-7 py-4 text-sm sm:text-base font-semibold text-[#E4E4E7] backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span>Conhecer Serviços</span>
              <ArrowDownRight
                className="h-4 w-4 text-[#EF4444] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Micro-indicador de funcionamento */}
          <div className="hero-reveal mt-5 inline-flex items-center gap-2 text-xs text-[#A1A1AA] tabular-nums">
            <Clock className="h-3.5 w-3.5 text-[#EF4444]" aria-hidden="true" />
            <span>
              Atendimento estendido:{" "}
              <strong className="text-[#E4E4E7] font-medium">
                Seg a Sex das 08h às 19h
              </strong>{" "}
              | Sáb das 08h às 15h
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Credibilidade na Hero (Inspirada nos indicadores » da Imagem 2) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-14">
        <div className="hero-reveal rounded-2xl border border-white/10 bg-[#121215]/85 backdrop-blur-md p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {HERO_CREDIBILITY_BAR.map((item) => {
              const IconComponent = ICON_MAP[item.iconName];
              return (
                <div
                  key={item.id}
                  className="flex items-start gap-3.5 pt-3.5 first:pt-0 md:pt-0 md:pl-6 first:md:pl-0"
                >
                  <div className="flex items-center gap-1 rounded-xl border border-red-500/25 bg-red-500/10 px-2.5 py-2 text-[#EF4444] shrink-0">
                    <ChevronsRight className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
                    <IconComponent className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#A1A1AA]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
