import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site-data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "Dra. Gislaine Zanelato",
    "Harmonização Facial Lages",
    "Peles Maduras Lages SC",
    "Protocolo Imperium Lift",
    "Bioestimuladores de Colágeno Lages",
    "Fios de PDO Lages",
    "Ultraformer Lages",
    "Botox Lages SC",
    "Biomédica Esteta Lages",
  ],
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: "/hero-desktop.webp",
        width: 1280,
        height: 720,
        alt: "Dra. Gislaine Zanelato — Harmonização Facial e Peles Maduras em Lages - SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/hero-desktop.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  name: "Dra. Gislaine Zanelato Estética Lages",
  description: SITE_CONFIG.description,
  image: "/hero-desktop.webp",
  telephone: SITE_CONFIG.phoneInternational,
  priceRange: "$$$",
  sameAs: [SITE_CONFIG.instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "13:30",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE_CONFIG.googleRating,
    reviewCount: String(SITE_CONFIG.googleReviewCount),
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#F2EAE0] text-[#1C1917] font-sans antialiased selection:bg-[#B8925A]/25">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
