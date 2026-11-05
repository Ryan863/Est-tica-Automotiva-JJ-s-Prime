export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface HeroBadge {
  readonly id: string;
  readonly label: string;
  readonly detail: string;
  readonly iconName: "Car" | "ShieldCheck" | "MapPin";
}

export interface StudioPillar {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly metric: string;
  readonly metricLabel: string;
  readonly iconName: "Sparkles" | "Droplets" | "Shield" | "Bike";
}

export interface ServiceItem {
  readonly id: string;
  readonly number: string;
  readonly tag: string;
  readonly title: string;
  readonly shortSubtitle: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly durationEstimate: string;
  readonly vehicleScope: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly spanClass: string;
  readonly whatsappMessage: string;
  readonly featured?: boolean;
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly spec: string;
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category: string;
}

export interface BusinessHour {
  readonly days: string;
  readonly hours: string;
  readonly statusNote: string;
  readonly isClosed?: boolean;
}

export interface SiteConfig {
  readonly businessName: string;
  readonly brandShort: string;
  readonly brandSubtitle: string;
  readonly niche: string;
  readonly valueProposition: string;
  readonly phoneRaw: string;
  readonly phoneDisplay: string;
  readonly whatsappBaseUrl: string;
  readonly whatsappDefaultUrl: string;
  readonly instagramHandle: string;
  readonly instagramUrl: string;
  readonly address: {
    readonly street: string;
    readonly neighborhood: string;
    readonly city: string;
    readonly state: string;
    readonly zipCode: string;
    readonly fullAddress: string;
    readonly googleMapsDirectionsUrl: string;
    readonly wazeDirectionsUrl: string;
  };
  readonly openingHoursSchema: string;
  readonly businessHours: readonly BusinessHour[];
}

export const SITE_CONFIG: SiteConfig = {
  businessName: "Estética Automotiva JJ’s Prime",
  brandShort: "JJ’S PRIME",
  brandSubtitle: "ESTÉTICA AUTOMOTIVA • SÃO BERNARDO",
  niche:
    "Estética Automotiva de Alto Padrão, Polimento Técnico, Vitrificação Cerâmica e Detalhamento de Carros e Motos",
  valueProposition:
    "Elevar o padrão de cuidado do seu veículo com soluções completas de embelezamento, proteções avançadas e acabamento espelhado no São Bernardo.",
  phoneRaw: "5542999005948",
  phoneDisplay: "+55 (42) 99900-5948",
  whatsappBaseUrl: "https://wa.me/5542999005948",
  whatsappDefaultUrl:
    "https://wa.me/5542999005948?text=Ol%C3%A1%2C+visitei+o+site+da+JJ%E2%80%99s+Prime+e+gostaria+de+agendar+um+servi%C3%A7o+para+o+meu+ve%C3%ADculo.",
  instagramHandle: "@jjsprime_esteticaautomotiva",
  instagramUrl: "https://www.instagram.com/jjsprime_esteticaautomotiva/",
  address: {
    street: "Avenida Bento Munhoz da Rocha Neto",
    neighborhood: "Bairro São Bernardo",
    city: "União da Vitória",
    state: "PR",
    zipCode: "84600-000",
    fullAddress:
      "Avenida Bento Munhoz da Rocha Neto, Bairro São Bernardo, União da Vitória - PR, CEP 84600-000",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Avenida+Bento+Munhoz+da+Rocha+Neto,+S%C3%A3o+Bernardo,+Uni%C3%A3o+da+Vit%C3%B3ria+-+PR,+84600-000",
    wazeDirectionsUrl:
      "https://waze.com/ul?q=Avenida%20Bento%20Munhoz%20da%20Rocha%20Neto%20S%C3%A3o%20Bernardo%20Uni%C3%A3o%20da%20Vit%C3%B3ria%20PR&navigate=yes",
  },
  openingHoursSchema: "Mo-Fr 08:00-19:00, Sa 08:00-15:00",
  businessHours: [
    {
      days: "Segunda a Sexta-feira",
      hours: "08h00 às 19h00",
      statusNote: "Horário estendido sem fechar ao meio-dia",
    },
    {
      days: "Sábado",
      hours: "08h00 às 15h00",
      statusNote: "Atendimento especial de fim de semana",
    },
    {
      days: "Domingo",
      hours: "Fechado",
      statusNote: "Agendamentos abertos via WhatsApp",
      isClosed: true,
    },
  ],
};

export function buildWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return SITE_CONFIG.whatsappDefaultUrl;
  }
  return `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(customMessage)}`;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
  { label: "Localização", href: "#localizacao" },
];

export const HERO_CREDIBILITY_BAR: readonly HeroBadge[] = [
  {
    id: "carros-motos",
    label: "Carros e Motos",
    detail: "Protocolos específicos para carrocerias, carenagens, motores e cromados",
    iconName: "Car",
  },
  {
    id: "vitrificacao-polimento",
    label: "Vitrificação & Polimento",
    detail: "Correção óptica de verniz e blindagem cerâmica de longa duração",
    iconName: "ShieldCheck",
  },
  {
    id: "localizacao-avenida",
    label: "Av. Bento Munhoz da Rocha",
    detail: "Acesso principal no bairro São Bernardo, em União da Vitória - PR",
    iconName: "MapPin",
  },
];

export const STUDIO_PILLARS: readonly StudioPillar[] = [
  {
    id: "quimica-neutra",
    code: "STD // 01",
    title: "Química Segura de pH Neutro",
    subtitle: "Preservação absoluta de verniz, borrachas e metais",
    description:
      "Abandonamos detergentes alcalinos ou ácidos agressivos usados em lavagens convencionais. Utilizamos shampoos automotivos e flotadores de pH 7.0 balanceado que encapsulam a sujeira sem ressecar plásticos, oxidar parafusos ou remover proteções existentes.",
    metric: "pH 7.0",
    metricLabel: "Fórmula neutra certificada",
    iconName: "Droplets",
  },
  {
    id: "descontaminacao-correcao",
    code: "STD // 02",
    title: "Descontaminação & Nivelamento Óptico",
    subtitle: "Inspeção sob luz técnica dedicada antes do polimento",
    description:
      "Antes do contato com boinas de corte ou refino, a pintura passa por descontaminação ferroso-química e mecânica com Clay Bar de grau fino. O resultado é uma superfície livre de aspereza, permitindo correção precisa de micro-riscos (swirls) e hologramas.",
    metric: "CRI 95+",
    metricLabel: "Iluminação de diagnóstico",
    iconName: "Sparkles",
  },
  {
    id: "protecao-ceramica",
    code: "STD // 03",
    title: "Ancoragem Cerâmica de Alta Dureza",
    subtitle: "Vitrificantes nanotecnológicos de longa durabilidade",
    description:
      "Criamos uma película vítrea cristalina sobre o verniz que bloqueia raios UV, seiva de árvores, fezes de pássaros e chuva ácida. Além do brilho vitrificado profundo, a hidrofobia extrema repele água e lama, facilitando cada manutenção futura.",
    metric: "9H SiO₂",
    metricLabel: "Barreira nanotecnológica",
    iconName: "Shield",
  },
  {
    id: "carros-e-motos",
    code: "STD // 04",
    title: "Engenharia para Carros e Motocicletas",
    subtitle: "Ferramental de precisão para áreas nobres e delicadas",
    description:
      "De sedãs e SUVs a motocicletas esportivas, custom e big trails: empregamos micro-politrizes, pincéis de cerdas naturais ultra-macias e sopradores térmicos para detalhar aletas de motor, balanças, rodas raiadas, escapamentos e carenagens sem gerar micro-arranhões.",
    metric: "100%",
    metricLabel: "Cuidado artesanal minucioso",
    iconName: "Bike",
  },
];

export const SERVICES_MENU: readonly ServiceItem[] = [
  {
    id: "vitrificacao-ceramica",
    number: "01",
    tag: "BLINDAGEM DE VERNIZ • ALTA DURABILIDADE",
    title: "Vitrificação e Proteção Cerâmica",
    shortSubtitle: "Película líquida nanotecnológica contra intempéries e raios UV",
    description:
      "Aplicação controlada de coating cerâmico de alta concentração sobre o verniz descontaminado e corrigido. Forma uma barreira química impermeável com efeito espelhado de profundidade vítrea, toque ultra-liso, hidrofobia intensa e proteção prolongada contra oxidação precoce.",
    deliverables: [
      "Descontaminação completa de pintura e preparação química com IPA",
      "Aplicação de vitrificador cerâmico de alta resistência UV e química",
      "Hidrofobia avançada (efeito lótus) que repele água e sujidades",
      "Disponível para carroceria, plásticos externos, rodas e carenagens de motos",
    ],
    durationEstimate: "Sob avaliação técnica",
    vehicleScope: "Carros & Motos",
    image: "/images/vitrificacao.jpg",
    imageAlt:
      "Aplicação de vitrificação e proteção cerâmica com repelência de água na Estética Automotiva JJ's Prime em União da Vitória",
    spanClass: "md:col-span-7",
    featured: true,
    whatsappMessage:
      "Olá, visitei o site da JJ’s Prime e gostaria de consultar um orçamento de Vitrificação e Proteção Cerâmica para o meu veículo.",
  },
  {
    id: "polimento-tecnico",
    number: "02",
    tag: "CORREÇÃO DE PINTURA • BRILHO ESPELHADO",
    title: "Polimento Técnico e Comercial",
    shortSubtitle: "Correção de imperfeições, remoção de hologramas e resgate de brilho",
    description:
      "Processo multi-etapas (corte, refino e lustro) dimensionado conforme a dureza do verniz do seu veículo. Remove marcas de lavagens incorretas (teias de aranha/swirls), oxidação superficial e manchas d'água, devolvendo reflexo cristalino e cor profunda.",
    deliverables: [
      "Isolamento seguro de borrachas, frisos e emblemas com fita técnica",
      "Remoção de micro-riscos, swirls, hologramas e marcas de chuva ácida",
      "Nivelamento óptico preservando ao máximo a camada original de verniz",
      "Finalização com selante sintético ou preparação para vitrificação",
    ],
    durationEstimate: "1 a 2 dias úteis",
    vehicleScope: "Carros & Motos",
    image: "/images/polimento.jpg",
    imageAlt:
      "Polimento técnico e comercial com correção de verniz 50/50 na Estética Automotiva JJ's Prime",
    spanClass: "md:col-span-5",
    whatsappMessage:
      "Olá, visitei o site da JJ’s Prime e gostaria de consultar um orçamento de Polimento Técnico / Comercial para o meu veículo.",
  },
  {
    id: "lavagem-tecnica-detalhada",
    number: "03",
    tag: "DETALHAMENTO EXTERNO & TÉCNICO",
    title: "Lavagem Técnica Detalhada",
    shortSubtitle: "Limpeza minuciosa de carroceria, motor, chassis e caixas de roda",
    description:
      "Muito além da lavagem comum: pré-lavagem com espuma densa (Snow Foam) de pH neutro para soltar partículas abrasivas sem atrito, seguida de esfregação técnica com luva de microfibra premium, detalhamento com pincéis macios em emblemas, grades, caixas de roda, chassis e cofre do motor.",
    deliverables: [
      "Pré-lavagem Snow Foam pH neutro e técnica de dois baldes com separador de partículas",
      "Limpeza técnica detalhada de caixas de roda, pneus, rodas, chassis e motor",
      "Descontaminação de cantos, grades, emblemas e revitalização de plásticos externos",
      "Secagem segura com toalha de alta gramatura e ar comprimido nos frisos",
    ],
    durationEstimate: "Agendamento rápido",
    vehicleScope: "Carros & Motos",
    image: "/images/espelhamento.jpg",
    imageAlt:
      "Inspeção e acabamento de lavagem técnica detalhada na Estética Automotiva JJ's Prime",
    spanClass: "md:col-span-5",
    whatsappMessage:
      "Olá, visitei o site da JJ’s Prime e gostaria de consultar um orçamento de Lavagem Técnica Detalhada para o meu veículo.",
  },
  {
    id: "higienizacao-interna-completa",
    number: "04",
    tag: "SAÚDE & CONFORTO DE CABINE",
    title: "Higienização Interna Completa",
    shortSubtitle: "Extração profunda em bancos, teto, carpetes e painéis",
    description:
      "Renovação completa do habitáculo com extratora profissional e bactericidas homologados. Removemos manchas, odores impregnados, ácaros e resíduos orgânicos de bancos de tecido, carpetes, forro de teto e cintos de segurança, além de limpeza e hidratação acetinada de couro e painéis.",
    deliverables: [
      "Extração profunda de sujeiras em bancos de tecido, carpetes e porta-malas",
      "Limpeza delicada a seco do forro de teto e higienização de cintos de segurança",
      "Higienização e condicionamento de bancos em couro com toque fosco original",
      "Detalhamento de frestas, saídas de ar, console e proteção UV nos plásticos internos",
    ],
    durationEstimate: "1 dia útil",
    vehicleScope: "Carros & Utilitários",
    image: "/images/higienizacao-interna.png",
    imageAlt:
      "Higienização interna completa e detalhamento de cabine na Estética Automotiva JJ's Prime",
    spanClass: "md:col-span-7",
    whatsappMessage:
      "Olá, visitei o site da JJ’s Prime e gostaria de consultar um orçamento de Higienização Interna Completa para o meu veículo.",
  },
];

export const TECHNICAL_PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: "ETAPA 01",
    title: "Diagnóstico & Alinhamento no Balcão ou WhatsApp",
    description:
      "Avaliamos o estado real do verniz, plásticos, motor e interior para indicar exatamente o protocolo necessário — sem empurrar serviços desnecessários.",
    spec: "Orçamento Sob Medida",
  },
  {
    step: "ETAPA 02",
    title: "Pré-Lavagem Química & Descontaminação",
    description:
      "Remoção segura de lama, fuligem de freio, piche e contaminação ferrosa com produtos de pH neutro antes de qualquer ação mecânica na pintura.",
    spec: "Zero Atrito Abrasivo",
  },
  {
    step: "ETAPA 03",
    title: "Correção Óptica & Tratamento de Superfícies",
    description:
      "Polimento técnico calibrado, extração interna profunda ou detalhamento de chassi e motor com ferramental específico para carros e motos.",
    spec: "Precisão de Estúdio",
  },
  {
    step: "ETAPA 04",
    title: "Blindagem Cerâmica & Inspeção Final",
    description:
      "Aplicação de proteção cerâmica ou selantes de alta durabilidade e conferência minuciosa sob iluminação dedicada antes da entrega das chaves.",
    spec: "Acabamento Espelhado",
  },
];

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "tempo-polimento-vitrificacao",
    category: "PRAZOS & EXECUÇÃO",
    question: "Quanto tempo demora a execução de um polimento técnico ou vitrificação?",
    answer:
      "O tempo varia conforme o porte do veículo e a condição atual do verniz. Um Polimento Comercial ou Lavagem Técnica Detalhada pode ser concluído no mesmo dia (entre 4h e 8h). Já o Polimento Técnico de alta correção aliado à Vitrificação Cerâmica requer entre 1 e 2 dias úteis, garantindo o tempo exato para descontaminação, nivelamento óptico da pintura e cura química adequada da película protetora.",
  },
  {
    id: "horarios-bento-munhoz",
    category: "ATENDIMENTO & ROTINA",
    question: "Quais são os horários de atendimento da estreia na Bento Munhoz?",
    answer:
      "Contamos com infraestrutura e horários estendidos para facilitar a sua rotina: atendemos de Segunda a Sexta-feira das 08h às 19h (permitindo deixar ou retirar seu veículo antes ou após o expediente comercial) e aos Sábados das 08h às 15h. Aos domingos estamos fechados presencialmente, mas você pode enviar sua mensagem pelo WhatsApp a qualquer momento para garantir seu agendamento da semana.",
  },
  {
    id: "atendimento-motocicletas",
    category: "CARROS & MOTOCICLETAS",
    question: "Vocês atendem motocicletas além de automóveis?",
    answer:
      "Sim! A JJ’s Prime possui portfólio completo tanto para automóveis (hatch, sedãs, SUVs e caminhonetes) quanto para motocicletas de todas as cilindradas (esportivas, naked, custom, touring e big trails). Realizamos lavagem técnica detalhada de motor, relação e balança, polimento de tanque e carenagens, revitalização de cromados/metais e vitrificação cerâmica para proteção contra sol, chuva e insetos.",
  },
  {
    id: "orcamento-personalizado",
    category: "ORÇAMENTO & AGENDAMENTO",
    question: "Como faço para solicitar um orçamento personalizado para o meu veículo?",
    answer:
      "É simples e direto: clique em qualquer botão de WhatsApp nesta página para falar diretamente com a nossa equipe no número +55 (42) 99900-5948. Você pode informar o modelo do seu carro ou moto, enviar fotos se desejar ou agendar uma avaliação rápida presencial no nosso estúdio na Avenida Bento Munhoz da Rocha Neto, no bairro São Bernardo.",
  },
];
