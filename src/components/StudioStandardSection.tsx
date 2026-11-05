"use client";

import { useState } from "react";
import {
  Sparkles,
  Droplets,
  Shield,
  Bike,
  CheckCircle2,
  SlidersHorizontal,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import {
  STUDIO_PILLARS,
  TECHNICAL_PROCESS_STEPS,
  buildWhatsAppUrl,
} from "@/data/siteData";

const PILLAR_ICONS = {
  Sparkles,
  Droplets,
  Shield,
  Bike,
} as const;

export default function StudioStandardSection() {
  const [sliderPos, setSliderPos] = useState<number>(52);

  return (
    <section
      id="diferenciais"
      aria-labelledby="padrao-jjs-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5 overflow-hidden"
    >
      {/* Luz de fundo sutil */}
      <div
        className="pointer-events-none absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-red-600/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial da Seção */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <span>ENGENHARIA DO DETALHAMENTO • ALÉM DA LAVAGEM COMUM</span>
            </div>
            <h2
              id="padrao-jjs-heading"
              className="mt-4 font-display text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-tight text-white leading-[1.1] text-balance"
            >
              O Padrão JJ’s Prime: preservação cirúrgica para verniz, metais e cabines.
            </h2>
          </div>

          <div className="lg:col-span-5 reveal-up">
            <p className="text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
              Lavagens convencionais utilizam produtos cáusticos e panos contaminados que criam milhares de micro-riscos (swirls) e apagam o brilho do veículo. Na{" "}
              <strong className="text-[#E4E4E7] font-semibold">
                JJ’s Prime
              </strong>
              , cada carro ou moto recebe diagnóstico sob iluminação técnica, química de{" "}
              <strong className="text-[#E4E4E7] font-semibold">
                pH neutro
              </strong>{" "}
              e vitrificadores cerâmicos que blindam o seu patrimônio.
            </p>
          </div>
        </div>

        {/* Grid dos 4 Pilares Técnicos */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STUDIO_PILLARS.map((pillar) => {
            const IconComponent = PILLAR_ICONS[pillar.iconName];
            return (
              <article
                key={pillar.id}
                className="pillar-card group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#121215]/90 p-6 backdrop-blur-sm surface-studio-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#A1A1AA]">
                      {pillar.code}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/25 bg-red-500/10 text-[#EF4444] transition-colors group-hover:bg-[#DC2626] group-hover:text-white">
                      <IconComponent className="h-5 w-5 stroke-[1.9]" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#EF4444]">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <span className="font-display text-2xl font-extrabold text-white tabular-nums">
                    {pillar.metric}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                    {pillar.metricLabel}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bloco de Autoridade: Comparador Visual Antes/Depois 50/50 + Protocolo de Bancada */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Comparador Interativo Antes/Depois */}
          <div className="lg:col-span-7 reveal-up flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121215] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF4444]">
                  DIAGNÓSTICO DE CORREÇÃO 50/50
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-0.5">
                  Antes & Depois: Resgate de Reflexo Espelhado
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/90 px-3 py-1.5 text-xs text-[#E4E4E7]">
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#EF4444]" aria-hidden="true" />
                <span>Arraste o controle ({sliderPos}%)</span>
              </div>
            </div>

            {/* Janela Visual Antes/Depois */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 select-none">
              {/* Camada DEPOIS (Fundo total: Pintura corrigida e espelhada) */}
              <img
                src="/images/espelhamento.jpg"
                alt="Depois do Polimento Técnico e Vitrificação na JJ’s Prime: verniz espelhado sem micro-riscos"
                width={960}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <span className="absolute bottom-3 right-3 z-20 rounded-full border border-emerald-500/40 bg-zinc-950/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 backdrop-blur-md">
                Depois • Verniz Corrigido & Vitrificado
              </span>

              {/* Camada ANTES (Recorte dinâmico: Verniz opaco com marcas de lavagem/hologramas) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src="/images/polimento.jpg"
                  alt="Antes do Polimento Técnico: verniz com oxidação, swirls e marcas de lavagem convencional"
                  width={960}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-right contrast-90 brightness-90"
                />
                <span className="absolute bottom-3 left-3 z-20 rounded-full border border-white/20 bg-zinc-950/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E4E4E7] backdrop-blur-md">
                  Antes • Verniz com Swirls & Opacidade
                </span>
              </div>

              {/* Linha divisória vertical */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 z-20 w-0.5 bg-[#DC2626] shadow-[0_0_15px_#EF4444]"
                style={{ left: `${sliderPos}%` }}
                aria-hidden="true"
              >
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#DC2626] text-white shadow-lg">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
              </div>

              {/* Input range nativo acessível sobreposto */}
              <label htmlFor="before-after-range" className="sr-only">
                Comparar pintura antes e depois do polimento técnico
              </label>
              <input
                id="before-after-range"
                type="range"
                min={10}
                max={90}
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#EF4444]" aria-hidden="true" />
                <span>
                  Remoção segura de até 90% dos defeitos superficiais preservando a espessura do verniz.
                </span>
              </div>
              <a
                href={buildWhatsAppUrl(
                  "Olá, vi a comparação de correção de pintura no site da JJ’s Prime e gostaria de avaliar o verniz do meu veículo."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#EF4444] transition-colors shrink-0"
              >
                <span>Avaliar pintura no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Protocolo de Execução em 4 Etapas + Chamada de Alinhamento no Balcão */}
          <div className="lg:col-span-5 reveal-up flex flex-col justify-between rounded-3xl border border-white/10 bg-[#121215] p-6 sm:p-7">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF4444]">
                METODOLOGIA DE ESTÚDIO
              </span>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Rigor Técnico em Cada Etapa
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Cada veículo possui histórico e verniz únicos. Por isso, trabalhamos com alinhamento técnico transparente para entregar resultado de vitrine.
              </p>

              <ol className="mt-6 space-y-4">
                {TECHNICAL_PROCESS_STEPS.map((item) => (
                  <li
                    key={item.step}
                    className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#EF4444]">
                        {item.step}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#E4E4E7]">
                        {item.spec}
                      </span>
                    </div>
                    <h4 className="mt-1.5 font-display text-sm sm:text-base font-bold uppercase text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#A1A1AA]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href={buildWhatsAppUrl(
                  "Olá, visitei o site da JJ’s Prime e gostaria de alinhar um orçamento personalizado para o meu veículo."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#DC2626] hover:bg-[#EF4444] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_25px_-5px_rgba(220,38,38,0.55)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4 stroke-[2.2]" aria-hidden="true" />
                <span>Solicitar Avaliação Personalizada</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
