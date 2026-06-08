import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Разработка сайтов, интеграции и техническое сопровождение бизнеса",
    template: "%s | Цифровая мастерская"
  },
  description:
    "Создание лендингов, бизнес-сайтов и интернет-магазинов, настройка МойСклад, CRM, оплат, серверов, SEO и техническое сопровождение.",
  keywords: [
    "разработка сайтов",
    "создание сайта",
    "лендинг",
    "бизнес сайт",
    "интернет магазин",
    "настройка МойСклад",
    "интеграция CRM",
    "техническое сопровождение сайта",
    "настройка сервера",
    "SEO настройка сайта"
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
    title: "Разработка сайтов и автоматизация бизнеса",
    description:
      "Сайты, интернет-магазины, МойСклад, CRM, оплаты, серверы, SEO и поддержка в одном месте.",
    siteName: "Цифровая мастерская"
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка сайтов и автоматизация бизнеса",
    description:
      "Премиальные сайты, интеграции, серверы, SEO и техническое сопровождение."
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
  themeColor: "#0c111d",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
