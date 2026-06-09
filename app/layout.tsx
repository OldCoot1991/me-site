import type { Metadata, Viewport } from "next";
import AutoTranslate from "./components/AutoTranslate";
import TranslationGate from "./components/TranslationGate";
import { region, regionalKeywords } from "./services/data";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Разработка сайтов в Нальчике и КБР",
    template: "%s | Цифровая мастерская"
  },
  description:
    "Разработка сайтов в Нальчике и Кабардино-Балкарской Республике: лендинги, бизнес-сайты, интернет-магазины, МойСклад, CRM, оплаты, серверы, SEO и сопровождение.",
  keywords: [
    ...regionalKeywords,
    "разработка сайтов",
    "создание сайта",
    "лендинг",
    "бизнес сайт",
    "интернет магазин",
    "настройка МойСклад",
    "интеграция CRM",
    "техническое сопровождение сайта",
    "настройка сервера",
    "SEO настройка сайта",
    "Нальчик",
    "КБР",
    "Кабардино-Балкария"
  ],
  authors: [{ name: "Цифровой мастер" }],
  creator: "Цифровой мастер",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title: "Разработка сайтов и автоматизация бизнеса в Нальчике",
    description:
      "Сайты, интернет-магазины, МойСклад, CRM, оплаты, серверы, SEO и поддержка для бизнеса в Нальчике и КБР.",
    siteName: "Цифровая мастерская"
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка сайтов в Нальчике и КБР",
    description:
      "Сайты, интеграции, серверы, SEO и техническое сопровождение для бизнеса в Нальчике."
  },
  other: {
    "geo.region": region.geoRegion,
    "geo.placename": `${region.city}, ${region.republic}`,
    "business:contact_data:locality": region.city,
    "business:contact_data:region": region.republic,
    "business:contact_data:country_name": region.country
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f7f7f4"
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#090d16"
    }
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" dir="ltr" translate="yes" suppressHydrationWarning>
      <body>
        <TranslationGate>{children}</TranslationGate>
        <AutoTranslate />
      </body>
    </html>
  );
}
