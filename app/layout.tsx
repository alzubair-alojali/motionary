import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StarField } from "@/components/StarField";
import { CornerTelemetry } from "@/components/CornerTelemetry";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://motionary.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Motionary — An Observational Field Guide to Interface Motion",
    template: "%s · Motionary",
  },
  description:
    "A long-exposure catalogue of interface motion patterns. Eighteen specimens, observed at the limits of sensitivity, with the prompts that produce each one preserved as field notes.",
  openGraph: {
    type: "website",
    siteName: "Motionary",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <StarField />
        <CornerTelemetry />
        <main className="relative flex-1">{children}</main>
      </body>
    </html>
  );
}
