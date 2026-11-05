import {
  CheckCircle2,
  MessageCircle,
  Clock,
  ShieldCheck,
  Bike,
  Car,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES_MENU, buildWhatsAppUrl } from "@/data/siteData";

export default function ServicesBentoSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5"
    >
      {/* Brilho ambiental discreto */}
      <div
        className="pointer-events-none absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <span>CARDÁPIO DE SOLUÇÕES • CARROS E MOTOS</span>
            </div>
            <h2
              id="servicos-heading"
              className="mt-4 font-display text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-tight text-white leading-[1.08] text-balance"
            >
              Serviços Especializados de Estética Automotiva
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#A1A1AA] leading-relaxed reveal-up">
            Processos minuciosos com insumos de tecnologia avançada — de lavagens técnicas de chassis e motor à blindagem cerâmica de longa duração.
          </p>
        </div>

        {/* Bento Grid Editorial (4 Serviços Principais) */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          {SERVICES_MENU.map((service) => (
            <article
              key={service.id}
              className={`service-bento-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${
                service.featured
                  ? "border-red-500/35 bg-[#121215]"
                  : "border-white/10 bg-[#121215]/90"
              } backdrop-blur-sm surface-studio-hover ${service.spanClass}`}
            >
              {/* Cabeçalho Visual com Fotografia de Estúdio */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-950">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={900}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/45 to-transparent"
                  aria-hidden="true"
                />

                {/* Badges Superiores */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-zinc-950/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E4E4E7] backdrop-blur-md">
                    <span className="text-[#EF4444] font-mono">#{service.number}</span>
                    <span>•</span>
                    <span>{service.tag}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full border border-red-500/30 bg-zinc-950/90 px-3 py-1 text-[11px] font-semibold text-[#E4E4E7] backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#EF4444]" aria-hidden="true" />
                    <span>{service.vehicleScope}</span>
                  </span>
                </div>
              </div>

              {/* Corpo Editorial do Card */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 pt-3 sm:pt-4">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] tabular-nums">
                      <Clock className="h-3.5 w-3.5 text-[#EF4444]" aria-hidden="true" />
                      <span>{service.durationEstimate}</span>
                    </span>
                  </div>

                  <p className="mt-1 text-xs sm:text-sm font-semibold text-[#EF4444]">
                    {service.shortSubtitle}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                    {service.description}
                  </p>

                  {/* Lista de Entregáveis Técnicos */}
                  <ul className="mt-5 grid grid-cols-1 gap-2 border-t border-white/10 pt-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#E4E4E7]/90"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 text-[#EF4444] mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Contextual Obrigatório do Card */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex w-full items-center justify-between rounded-2xl bg-[#DC2626] hover:bg-[#EF4444] px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_25px_-6px_rgba(220,38,38,0.55)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                      <span>Consultar orçamento deste serviço</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Faixa Editorial Complementar: Carros & Motos (Personalização no Balcão ou WhatsApp) */}
        <div className="mt-8 reveal-up rounded-3xl border border-white/10 bg-gradient-to-r from-[#121215] via-[#16161B] to-[#121215] p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 p-3.5 text-[#EF4444]">
                <Car className="h-6 w-6 stroke-[1.9]" aria-hidden="true" />
                <Bike className="h-6 w-6 stroke-[1.9]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF4444]">
                  ATENDIMENTO PARA AUTOMÓVEIS & MOTOCICLETAS
                </span>
                <h3 className="mt-1 font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                  Tem uma moto ou busca um pacote completo para o seu carro?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA] max-w-2xl">
                  Montamos protocolos sob medida combinando lavagem detalhada, descontaminação, polimento e vitrificação cerâmica. Alinhe seu orçamento direto pelo WhatsApp ou presencialmente na Av. Bento Munhoz da Rocha Neto.
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl(
                "Olá! Visitei o site da JJ’s Prime e quero montar um orçamento personalizado para o meu veículo (carro/moto)."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full border border-red-500/40 bg-red-600/15 hover:bg-[#DC2626] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-200"
            >
              <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
              <span>Orçamento para Carro ou Moto</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
