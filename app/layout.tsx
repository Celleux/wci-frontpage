import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Cup Inu — Paul Picks. You Profit.",
  description:
    "The only meme coin with a Chainlink-verified oracle. 3/3 tax. 0% house edge. 104 matches. 39 days. 1 octopus. $WCI26 — pari-mutuel betting on FIFA World Cup 2026.",
  metadataBase: new URL("https://wci26.com"),
  openGraph: {
    title: "World Cup Inu — Paul Picks. You Profit.",
    description: "Pari-mutuel betting · Paul-the-Octopus oracle · FIFA WC26",
    url: "https://wci26.com",
    siteName: "World Cup Inu",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Cup Inu — Paul Picks. You Profit.",
    description: "Pari-mutuel betting · Paul-the-Octopus oracle · FIFA WC26",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0615",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#0A0615]`}
    >
      <body>{children}</body>
    </html>
  );
}
