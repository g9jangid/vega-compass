import { Lato, Raleway } from "next/font/google";
import "./globals.css";
import getSEOTags from "@/utils/getSeoTags";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Passing font variables to used in tailwind classes */}
      <body
        className={`${ralewaySans.variable} ${latoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
