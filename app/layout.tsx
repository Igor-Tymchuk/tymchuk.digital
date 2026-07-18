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
  alternates: {
    canonical: "/",
  },

  title: "TYMCHUK.DIGITAL — Digital Agency for Web, Branding & Growth",

  description:
    "Digital agency crafting landing pages, web apps, branding, print design, Google Ads and interactive gift-surprise websites.",

  openGraph: {
    title: "TYMCHUK.DIGITAL",
    description:
      "Digital agency crafting landing pages, web apps, branding, print design, Google Ads and interactive gift-surprise websites.",
    url: "https://tymchuk-digital.com",
    siteName: "TYMCHUK.DIGITAL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TYMCHUK.DIGITAL",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TYMCHUK.DIGITAL",
    description:
      "Digital agency crafting landing pages, web apps, branding and digital solutions.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
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
