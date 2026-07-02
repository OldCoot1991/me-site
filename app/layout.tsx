import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { SiteProvider } from "@/components/SiteProvider";
import { ConsentBanner } from "@/components/ConsentBanner";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ПУЛЬС — цифровое агентство полного цикла",
  description:
    "Разработка сайтов и приложений, SMM, дизайн, SEO, чат-боты и брендбуки под ключ для любого бизнеса.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-theme="dark" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>
        <SiteProvider>
          {children}
          <ConsentBanner />
        </SiteProvider>
      </body>
    </html>
  );
}
