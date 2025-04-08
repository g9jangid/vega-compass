import { Lato, Raleway } from "next/font/google";
import "./globals.css";
import getSEOTags from "@/utils/getSeoTags";
import { GoogleAnalytics } from "@next/third-parties/google";

const latoSans = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Specify available weights
  variable: "--font-lato",
});

const ralewaySans = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Available weights
  variable: "--font-raleway",
});
export const viewport = {
  themeColor: "#c40a23",
};

export const metadata = getSEOTags(
  "Vegacompass | CRM - Consulting and Tech Services",
  "Vegacompass is a CRM-focused consulting firm enabling organizations globally transform their Marketing, Sales, and Customer Support operations through process excellence and technology enablement."
);

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "Vegacompass",
  url: "https://vegacompass.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Passing font variables to used in tailwind classes */}
      <body
        className={`${ralewaySans.variable} ${latoSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-7QJ5RNT0TE" />
    </html>
  );
}
