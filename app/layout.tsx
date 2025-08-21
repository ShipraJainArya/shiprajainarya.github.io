import "./globals.css";
import { ReactNode } from "react";
import { Inter, Dosis } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });

export const metadata = {
  title: "Shipra Realtors | Real Estate Consultants in Pune",
  description:
    "Looking to buy, sell, or rent property in Pune? Shipra Realtors offers verified listings, expert guidance, and transparent real estate services in Pune.",
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
        url: "https://www.shiprarealtors.com/og-wide.png", // ✅ replace with final OG image
        width: 1200,
        height: 630,
        alt: "Shipra Realtors - Verified & Premium Properties",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@shiprarealtors", // ✅ replace if you create Twitter
    title: "Shipra Realtors | Real Estate Consultants in Pune",
    description:
      "Buy, sell, or rent property in Pune with Shipra Realtors. Verified listings, expert guidance, and transparent service.",
    images: ["https://www.shiprarealtors.com/og-wide.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "real estate",
  keywords: [
  // Brand
  "Shipra Realtors",
  "Shipra Realtors Pune",
  "Shipra Realtors Keshav Nagar",
  
  // Core service intent
  "real estate agents Pune",
  "real estate agents Keshav Nagar",
  "real estate agents Mundhwa",
  "property consultants Pune",
  "property dealers Pune",
  "trusted real estate agency Pune",
  
  // Buyer intent (transactional)
  "buy flat in Pune",
  "buy 2 BHK in Keshav Nagar",
  "buy 3 BHK in Mundhwa",
  "flats for sale in Keshav Nagar",
  "apartments for sale in Mundhwa",
  "residential property Pune",
  "luxury flats Pune",
  
  // Hyper-local
  "flats near Godrej Infinity Pune",
  "apartments near Godrej Infinity",
  "property for sale Keshav Nagar",
  "real estate Mundhwa Pune",
  "flats near Kharadi IT Park",
  
  // Long-tail high-conversion
  "RERA approved flats in Pune",
  "affordable flats in Keshav Nagar",
  "ready possession flats in Mundhwa",
  "new residential projects Keshav Nagar",
  "investment property Pune",
  
  // Trust & credibility
  "best real estate agent Pune",
  "top property consultants Keshav Nagar",
  "experienced realtors Pune",
],
};

export const viewport = {
  themeColor: "#e1c08d",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Shipra Realtors" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="https://www.shiprarealtors.com/og-wide.png" // ✅ preload OG image
          as="image"
        />

        {/* ✅ Structured Data: RealEstateAgent + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                name: "Shipra Realtors",
                image: "https://www.shiprarealtors.com/og-wide.png", // ✅ replace with final logo
                url: "https://www.shiprarealtors.com",
                logo: "https://www.shiprarealtors.com/og-img.png", // ✅ replace with final logo
                telephone: "+91-9711909677",
                email: "shiprajainarya@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Godrej Infinity, Keshav Nagar Road, Keshav Nagar",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  postalCode: "411036",
                  addressCountry: "IN",
                },
                openingHours: "Mo-Su 10:00-22:00",
                sameAs: [
                  "https://instagram.com/shiprajainarya", // ✅ add FB, LinkedIn, GMB if available
                ],
                foundingDate: "2020",
                founder: {
                  "@type": "Person",
                  name: "Shipra Jain Arya",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "18.5379",
                  longitude: "73.9344",
                },
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target:
                      "https://www.shiprarealtors.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                  {
                    "@type": "ContactAction",
                    target: "tel:+91-9711909677",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Shipra Realtors",
                url: "https://www.shiprarealtors.com",
                telephone: "+91-9711909677",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Godrej Infinity, Keshav Nagar Road, Keshav Nagar",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  postalCode: "411036",
                  addressCountry: "IN",
                },
                priceRange: "₹₹₹",
                image: "https://www.shiprarealtors.com/og-img.png",
                sameAs: [
                  "https://instagram.com/shiprajainarya", // ✅ add more socials
                ],
                foundingDate: "2010",
                founder: {
                  "@type": "Person",
                  name: "Shipra Jain Arya",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "18.5379",
                  longitude: "73.9344",
                },
              },
            ]),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#ededd9] text-gray-800`}>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}