import './globals.css';
import { ReactNode } from 'react';
import { Inter,Dosis } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dosis = Dosis({ subsets: ['latin'] });

export const metadata = {
  title: "Shipra Realtors | Real Estate Consultants in Pune",
  description:
    "Looking to buy, sell, or rent property in Pune? Shipra Realtors offers verified listings, expert guidance, and transparent real estate services and more.",
  keywords: [
    "Shipra Realtors",
    "Real estate Pune",
    "Buy house Pune",
    "Sell property Pune",
    "Flats in Kharadi",
    "Property in Mundhwa",
    "Koregaon Park real estate",
    "Commercial property Pune",
    "Rent flat in Pune",
    "Pune real estate agent",
  ],
  metadataBase: new URL("https://www.shiprarealtors.com"),
  alternates: {
    canonical: "https://www.shiprarealtors.com",
  },
  openGraph: {
    title: "Shipra Realtors | Trusted Real Estate in Pune",
    description:
      "Explore verified residential and commercial properties in Pune with Shipra Realtors. Transparent deals, expert advice, and local expertise.",
    url: "https://www.shiprarealtors.com",
    siteName: "Shipra Realtors",
    images: [
      {
        url: "/og-img.png", // Replace with your real OG image
        width: 1024,
        height: 1024,
        alt: "Shipra Realtors - Buy/Sell/Rent in Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "real estate",
};
export const viewport = {
  themeColor: "#e1c08d",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-[#ededd9] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}