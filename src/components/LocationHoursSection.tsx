import {
  MapPin,
  Navigation,
  Clock,
  Camera,
  MessageCircle,
  Phone,
  ExternalLink,
  Compass,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function LocationHoursSection() {
  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-heading"
      className="relative py-14 md:py-24 bg-[#09090B] border-t border-white/5"
    >
      {/* Âncora secundária para #contato */}
      <div id="contato" className=" -top-24" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="max-w-2xl reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#EF4444]">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>LOCALIZAÇÃO ESTRATÉGICA • SÃO BERNARDO</span>
          </div>
          <h2
            id="localizacao-heading"
            className="mt-4 font-display text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-tight text-white leading-[1.08] text-balance"
          >
            Visite nosso estúdio na Av. Bento Munhoz da Rocha Neto
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Acesso rápido e amplo no bairro São Bernardo, em União da Vitória - PR, com horários estendidos até às 19h durante a semana para sua total comodidade.
          </p>
        </div>

        {/* Card Split de Alto Padrão */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 rounded-3xl border border-white/10 bg-[#121215] p-5 sm:p-8 shadow-2xl">
          {/* Coluna Esquerda: Endereço, Horários Tabulares e Canais Diretos */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 reveal-up">
            {/* Bloco Endereço + Rotas GPS */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-5 sm:p-6">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/25 bg-red-500/10 text-[#EF4444]">
                  <MapPin className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#EF4444]">
                    ENDEREÇO FÍSICO OFICIAL
                  </span>
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-bold uppercase text-white">
                    {SITE_CONFIG.businessName}
                  </h3>
                  <p className="mt-1 text-sm text-[#E4E4E7] font-medium">
                    {SITE_CONFIG.address.street}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] tabular-nums">
                    {SITE_CONFIG.address.neighborhood} • {SITE_CONFIG.address.city} -{" "}
                    {SITE_CONFIG.address.state}, CEP {SITE_CONFIG.address.zipCode}
                  </p>
                </div>
              </div>

              {/* Botões de Rota GPS (Google Maps / Waze) */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={SITE_CONFIG.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] hover:bg-[#EF4444] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200"
                >
                  <Navigation className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                  <span>Traçar Rota no Google Maps / Waze</span>
                </a>

                <a
                  href={SITE_CONFIG.address.wazeDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#121215] hover:border-white/30 hover:bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#E4E4E7] transition-all duration-200"
                >
                  <Compass className="h-4 w-4 text-[#EF4444]" aria-hidden="true" />
                  <span>Abrir Direto no Waze</span>
                </a>
              </div>
            </div>

            {/* Tabela Clara de Horários de Funcionamento */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/75 p-5 sm:p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-5 w-5 text-[#EF4444]" aria-hidden="true" />
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                    Horário de Atendimento
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Horário Estendido
                </span>
              </div>

              <div className="divide-y divide-white/10 tabular-nums">
                {SITE_CONFIG.businessHours.map((item) => (
                  <div
                    key={item.days}
                    className="py-3 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#E4E4E7]">
                        {item.days}
                      </p>
                      <p className="text-xs text-[#A1A1AA]">{item.statusNote}</p>
                    </div>
                    <span
                      className={`inline-flex self-start sm:self-auto rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        item.isClosed
                          ? "border border-white/10 bg-white/5 text-[#A1A1AA]"
                          : "border border-red-500/30 bg-red-500/10 text-white"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes Sociais & Contato Corporativo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 tabular-nums">
              <a
                href={SITE_CONFIG.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/75 hover:border-red-500/40 p-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <MessageCircle className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                      WhatsApp Corporativo
                    </span>
                    <span className="block text-sm font-bold text-white">
                      {SITE_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  className="h-4 w-4 text-[#A1A1AA] group-hover:text-white"
                  aria-hidden="true"
                />
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/75 hover:border-red-500/40 p-4 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-[#EF4444]">
                    <Camera className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                      Instagram Oficial
                    </span>
                    <span className="block text-xs sm:text-sm font-bold text-white truncate max-w-[165px]">
                      {SITE_CONFIG.instagramHandle}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  className="h-4 w-4 text-[#A1A1AA] group-hover:text-white"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Mapa Integrado + Card de Referência Local */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden min-h-[380px] reveal-up">
            <div className="relative h-full min-h-[320px] w-full flex-1">
              <iframe
                title="Mapa de Localização da Estética Automotiva JJ’s Prime na Avenida Bento Munhoz da Rocha Neto, São Bernardo, União da Vitória - PR"
                src="https://www.google.com/maps?q=Avenida+Bento+Munhoz+da+Rocha+Neto,+S%C3%A3o+Bernardo,+Uni%C3%A3o+da+Vit%C3%B3ria+-+PR,+84600-000&output=embed"
                className="h-full w-full min-h-[320px] border-0 opacity-85 contrast-125 grayscale invert-[90%] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="border-t border-white/10 bg-[#121215] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs text-[#E4E4E7] tabular-nums">
                <Phone className="h-4 w-4 text-[#EF4444]" aria-hidden="true" />
                <span>
                  Atendimento presencial ou via telefone:{" "}
                  <a
                    href={`tel:+${SITE_CONFIG.phoneRaw}`}
                    className="font-bold text-white underline decoration-red-500/60 underline-offset-4 hover:text-[#EF4444]"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </span>
              </div>

              <a
                href={SITE_CONFIG.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#EF4444] hover:text-white transition-colors"
              >
                <span>Abrir Mapa Ampliado</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
