"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, SITE_CONFIG } from "@/data/siteData";

export default function FaqAccordionSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna Esquerda Editorial */}
          <div className="lg:col-span-5 reveal-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EF4444]">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>DÚVIDAS FREQUENTES • TRANSPARÊNCIA</span>
            </div>

            <h2
              id="faq-heading"
              className="mt-4 font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-[1.1] text-balance"
            >
              Perguntas sobre prazos, horários e cuidados técnicos.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Reunimos as principais dúvidas sobre nossos protocolos de polimento técnico, vitrificação cerâmica, atendimento para motocicletas e horários estendidos na Avenida Bento Munhoz da Rocha Neto.
            </p>

            {/* Card Auxiliar de Atendimento Rápido */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-[#121215] p-5 sm:p-6">
              <p className="font-display text-sm sm:text-base font-bold uppercase text-white">
                Prefere tirar uma dúvida rápida agora?
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Nossa equipe responde diretamente pelo WhatsApp no número{" "}
                <span className="text-[#E4E4E7] font-semibold tabular-nums">
                  {SITE_CONFIG.phoneDisplay}
                </span>
                .
              </p>
              <a
                href={SITE_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#DC2626] hover:bg-[#EF4444] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Accordion Estruturado */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-btn-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`faq-item rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-red-500/40 bg-[#121215]"
                      : "border-white/10 bg-[#121215]/75 hover:border-white/20"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-2xl"
                    >
                      <div className="space-y-1">
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF4444]">
                          0{idx + 1} // {item.category}
                        </span>
                        <span className="block font-display text-base sm:text-lg font-bold text-white leading-snug">
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? "border-red-500 bg-[#DC2626] text-white rotate-180"
                            : "border-white/15 bg-zinc-950 text-[#A1A1AA]"
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-4 w-4 stroke-[2.2]" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0"
                  >
                    <div className="border-t border-white/10 pt-4 text-sm leading-relaxed text-[#A1A1AA]">
                      {item.answer}
                    </div>
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
