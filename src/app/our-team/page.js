import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "Meet the Vegacompass Team | Experts in CRM & Business Transformation",
  "Get to know the experts behind Vegacompass. Our experienced team specializes in CRM consulting, process optimization, and digital transformation to drive your business success."
);

export default function Home() {
  return <CPage />;
}
