import "./globals.css";
import { Inter } from "next/font/google";
import { generalData } from "@/data/general";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://theoarcher.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${generalData.name} - ${generalData.jobTitle}`,
  description: generalData.about[0],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${generalData.name} - ${generalData.jobTitle}`,
    title: `${generalData.name} - ${generalData.jobTitle}`,
    description: generalData.about[0],
    images: [
      {
        url: "/images/profile.jpg",
        alt: `${generalData.name} - ${generalData.jobTitle}`,
      },
    ],
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-900 leading-relaxed text-neutral-400 antialiased selection:bg-emerald-300 selection:text-emerald-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
