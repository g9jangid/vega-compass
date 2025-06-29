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
  "Vegacompass is a customer-focused firm specializing in CRM process and technology enablement."
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var $zoho = $zoho || {};
  $zoho.salesiq = $zoho.salesiq || {
    widgetcode:
      "siqcd8700c140cc25c3ef7afbea895c9dcc42c66f995df67157ad5c6f7f62cfb9c5",
    values: {},
    ready: function () {},
  };
  var d = document;
  s = d.createElement("script");
  s.type = "text/javascript";
  s.id = "zsiqscript";
  s.defer = true;
  s.src = "https://salesiq.zoho.com/widget";
  t = d.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);`,
          }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-7QJ5RNT0TE" />
    </html>
  );
}
