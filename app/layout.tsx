import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tymchuk-digital.com"),
  alternates: {
    canonical: "/",
  },
  title: "TYMCHUK.DIGITAL — Digital Agency for Web, Branding & Growth",
  description:
    "Premium digital agency crafting landing pages, web apps, branding, print design, Google Ads and interactive gift-surprise websites. Modern, fast and unforgettable.",
  generator: "TYMCHUK",
  keywords: [
    "digital agency",
    "landing pages",
    "web apps",
    "branding",
    "google ads",
    "web design",
  ],
  icons: {
    icon: "/favicon.svg",
  },

  verification: {
    google: "19o2OlRrK2uWMquOD8I0fhxTcvP_SPj_oX_eiOR6YLA",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f1a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable}`}
    >
      <body className="font-sans antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9S6HQG2BFM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9S6HQG2BFM');
      `}
        </Script>

        <LanguageProvider>{children}</LanguageProvider>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
