import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/siteData";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jjsprime.com.br"),
  title: {
    default:
      "Estética Automotiva JJ’s Prime | Polimento e Vitrificação em União da Vitória - PR",
    template: "%s | Estética Automotiva JJ’s Prime",
  },
  description:
    "Eleve o padrão de cuidado do seu veículo no bairro São Bernardo, em União da Vitória - PR. Lavagem Técnica Detalhada, Polimento Técnico, Vitrificação Cerâmica e Higienização Interna para carros e motos.",
  keywords: [
    "Estética Automotiva JJ’s Prime",
    "estética automotiva união da vitória",
    "polimento técnico união da vitória",
    "vitrificação cerâmica união da vitória",
    "lavagem detalhada são bernardo",
    "higienização interna automotiva",
    "detalhamento de motos união da vitória",
    "avenida bento munhoz da rocha neto",
  ],
  authors: [{ name: SITE_CONFIG.businessName }],
  creator: SITE_CONFIG.businessName,
  publisher: SITE_CONFIG.businessName,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jjsprime.com.br",
    title:
      "Estética Automotiva JJ’s Prime | Polimento e Vitrificação em União da Vitória - PR",
    description:
      "Da lavagem técnica detalhada à vitrificação cerâmica de alta durabilidade. Tratamento especializado para carros e motos na Av. Bento Munhoz da Rocha Neto, São Bernardo.",
    siteName: SITE_CONFIG.businessName,
    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Estética Automotiva JJ’s Prime - Polimento Técnico e Vitrificação em União da Vitória - PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Estética Automotiva JJ’s Prime | Polimento e Vitrificação em União da Vitória - PR",
    description:
      "Detalhamento profissional de carros e motos, polimento técnico e proteção cerâmica no bairro São Bernardo, União da Vitória - PR.",
    images: ["/images/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "LocalBusiness"],
    "@id": "https://jjsprime.com.br/#localbusiness",
    name: "Estética Automotiva JJ’s Prime",
    description: SITE_CONFIG.valueProposition,
    telephone: "+5542999005948",
    url: "https://jjsprime.com.br",
    image: "https://jjsprime.com.br/images/hero-desktop.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Bento Munhoz da Rocha Neto, São Bernardo",
      addressLocality: "União da Vitória",
      addressRegion: "PR",
      postalCode: "84600-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.2245,
      longitude: -51.0815,
    },
    openingHours: "Mo-Fr 08:00-19:00, Sa 08:00-15:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: [SITE_CONFIG.instagramUrl],
    areaServed: {
      "@type": "City",
      name: "União da Vitória - PR",
    },
  };

  return (
    <html lang="pt-BR" className={`${syne.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090B] text-[#E4E4E7] antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Granulação Cinematográfica: Camada SVG noise com opacidade de 0.03 */}
        <div
          className="pointer-events-none fixed inset-0 z-50 bg-cinematic-noise opacity-[0.03]"
          aria-hidden="true"
        />
        {children}
      </body>
    </html>
  );
}
