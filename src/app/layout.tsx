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
