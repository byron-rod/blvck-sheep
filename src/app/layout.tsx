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

export const metadata: Metadata = {
  title: "Blvck Sheep Shuttles | Transportation Services in Guatemala",
  description:
    "Explore Guatemala in comfort with Blvck Sheep. Offering a more exclusive, reliable, and comfortable transportation to top destinations like Antigua, Lake Atitlan, Lanquin, and El Paredon. Travel differently.",
  keywords:
    "Guatemala shuttles, Black Sheep Shuttles, transportation in Guatemala, private shuttles Guatemala, shared shuttles Guatemala, Antigua to Lake Atitlan, Guatemala City transport, El Paredon shuttles, premium travel Guatemala, tourist transportation Guatemala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* SEO Meta Tags */}
        <meta
          property="og:title"
          content="Blvck Sheep Shuttles | Transportation Services in Guatemala"
        />
        <meta
          property="og:description"
          content="Explore Guatemala in comfort with Blvck Sheep. Offering a more exclusive, reliable, and comfortable transportation to top destinations like Antigua, Lake Atitlan, Lanquin, and El Paredon. Travel differently."
        />
        <meta property="og:image" content="/blvcksheeplogo.jpg" />
        <meta property="og:image:alt" content="Blvck Sheep Shuttles logo" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/blvcksheeplogo.jpg" />
        <meta name="twitter:image:alt" content="Blvck Sheep Shuttles logo" />

        {/* Structured Data */}
        <Script
          id="structured-data-transportation"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Blvck Sheep Shuttles",
              description: metadata.description,
              url: "https://www.blvck-sheep.com",
              logo: "https://www.blvck-sheep.com/blvcksheeplogo.jpg",
              sameAs: [
                "https://www.instagram.com/blvcksheepgt",
                "https://www.facebook.com/blvcksheepgt",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+50255116881",
                contactType: "Customer Service",
              },
              areaServed: "GT",
              product: {
                "@type": "Car",
                price: "15.00",
                priceCurrency: "USD",
                category: "Shuttle Service",
              },
            }),
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

        {/* Google Conversion Tracking */}
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
              gtag('config', 'AW-11538548523');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4HH8JKL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
