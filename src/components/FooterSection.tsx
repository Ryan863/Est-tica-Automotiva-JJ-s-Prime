import {
  MessageCircle,
  Camera,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/siteData";

export default function FooterSection() {
  return (
    <footer className="relative bg-[#09090B] border-t border-white/10 pt-14 pb-24 md:py-20 overflow-hidden">
      {/* Glow de fechamento */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-72 w-[680px] rounded-full bg-red-600/15 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Principal de Fechamento de Alta Conversão */}
        <div className="reveal-up relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-[#16161B] via-[#121215] to-[#09090B] p-7 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EF4444]">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>ACABAMENTO ESPELHADO • SÃO BERNARDO</span>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.06] text-balance">
                Transforme a estética do seu veículo
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                Agende sua lavagem técnica detalhada, polimento ou vitrificação cerâmica com quem trata cada detalhe de carros e motos com padrão de estúdio em União da Vitória - PR.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5">
              <a
                href={SITE_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#DC2626] hover:bg-[#EF4444] px-8 py-4 sm:py-5 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white shadow-[0_12px_40px_-6px_rgba(220,38,38,0.7)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
                <span>Agendar Agora pelo WhatsApp</span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <p className="text-center text-xs text-[#A1A1AA] tabular-nums">
                Atendimento direto: <strong className="text-[#E4E4E7]">{SITE_CONFIG.phoneDisplay}</strong> • Seg a Sex até 19h e Sáb até 15h
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé Institucional */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#121215] font-display text-xs font-extrabold text-white">
                JJ<span className="text-[#EF4444]">’</span>S
              </span>
              <div>
                <p className="font-display text-base font-extrabold uppercase tracking-tight text-white">
                  {SITE_CONFIG.businessName}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A1A1AA]">
                  {SITE_CONFIG.brandSubtitle}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              {SITE_CONFIG.valueProposition}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">
              Navegação Rápida
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA]">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-xs sm:text-sm text-[#A1A1AA] tabular-nums">
            <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-white">
              Estúdio & Contato
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#EF4444] mt-0.5" aria-hidden="true" />
              <span>{SITE_CONFIG.address.fullAddress}</span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-[#EF4444]" aria-hidden="true" />
              <span>Seg a Sex: 08h às 19h | Sáb: 08h às 15h</span>
            </p>
            <p className="flex items-center gap-2">
              <Camera className="h-4 w-4 shrink-0 text-[#EF4444]" aria-hidden="true" />
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4E4E7] hover:text-[#EF4444] transition-colors"
              >
                {SITE_CONFIG.instagramHandle}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A1A1AA]">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.businessName}. Todos os direitos reservados.
          </p>
          <p>União da Vitória - PR • Bairro São Bernardo</p>
        </div>
      </div>
    </footer>
  );
}
