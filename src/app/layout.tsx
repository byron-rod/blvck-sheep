import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// 1. OPTIMIZACIÓN SEO: Movimos los meta tags manuales al objeto nativo de Next.js
export const metadata: Metadata = {
  metadataBase: new URL("https://www.blvck-sheep.com"), // <-- ESTA ES LA LÍNEA MÁGICA
  title: "Blvck Sheep | Tourist Services in Guatemala",
  description:
    "Explore Guatemala in comfort. Blvck Sheep offers a more exclusive, reliable, and comfortable transportation to top destinations like Antigua, Lake Atitlan, Lanquin, and El Paredon. Redefining travel in Guatemala with custom itineraries, and exclusive services. Travel differently.",
  keywords:
    "Guatemala travel, luxury shuttles Guatemala, custom itineraries Guatemala, itinerary planning Guatemala, private transfers Lake Atitlan, premium transit Antigua, hybrid transport Guatemala, VIP travel Guatemala, Guatemala vacation planning, tourist transportation Guatemala, Blvck Sheep",
  openGraph: {
    title: "Blvck Sheep | Tourist Services in Guatemala",
    description: "Explore Guatemala in comfort. Blvck Sheep offers a more exclusive, reliable, and comfortable transportation to top destinations like Antigua, Lake Atitlan, Lanquin, and El Paredon.",
    url: "https://www.blvck-sheep.com",
    siteName: "Blvck Sheep",
    images: [
      {
        url: "/blvcksheeplogo.jpg", // Ahora Next.js sabe que esto es https://www.blvck-sheep.com/blvcksheeplogo.jpg
        width: 500,
        height: 500,
        alt: "Blvck Sheep Shuttles logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blvck Sheep | Tourist Services in Guatemala",
    description: "Explore Guatemala in comfort. Blvck Sheep offers a more exclusive, reliable, and comfortable transportation to top destinations like Antigua, Lake Atitlan, Lanquin, and El Paredon.",
    images: ["/blvcksheeplogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data (Local Business) */}
        <Script
          id="structured-data-transportation"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Blvck Sheep Shuttles",
              description: "Explore Guatemala in comfort. Blvck Sheep offers a more exclusive, reliable, and comfortable transportation to top destinations like Antigua, Lake Atitlan, Lanquin, and El Paredon.",
              url: "https://www.blvck-sheep.com",
              logo: "https://www.blvck-sheep.com/blvcksheeplogo.jpg",
              sameAs: [
                "https://www.instagram.com/blvcksheepgt",
                "https://www.facebook.com/blvcksheepgt",
                "https://www.tiktok.com/@blvcksheepgt",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+50255116881",
                contactType: "Customer Service",
              },
              areaServed: "GT",
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Shuttle Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Antigua to Lake Atitlan",
                      description: "Shuttle services from Antigua to Panajachel",
                      category: "Shuttle Service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Guatemala City to Lake Atitlan",
                      description: "Shuttle services from Guatemala City to Panajachel",
                      category: "Shuttle Service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Antigua to El Paredon",
                      description: "Shuttle services from Antigua to El Paredon",
                      category: "Shuttle Service",
                    },
                  },
                ],
              },
            }),
          }}
        />
        
        {/* Travelpayouts Verification */}
        <Script
          id="travelpayouts-verification"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = 'https://emrldtp.cc/NTE3NjUz.js?t=517653';
                document.head.appendChild(script);
              })();
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4HH8JKL')`,
          }}
        />

        {/* Google Tags (Conversion Tracking & Analytics) */}
        <Script
          id="google-tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11538548523"
        />
        <Script
          id="google-tag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              /* Google Ads Conversion */
              gtag('config', 'AW-11538548523');
              
              /* Google Analytics 4 (NUEVO) */
              gtag('config', 'G-GK9FX1JPWS');
            `,
          }}
        />
      </head>
      
      {/* 2. OPTIMIZACIÓN ACCESIBILIDAD/UI: Agregamos flexbox para el footer sticky y la etiqueta <main> */}
      <body className={`${inter.variable} font-sans antialiased bg-black text-white flex flex-col min-h-screen`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4HH8JKL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}