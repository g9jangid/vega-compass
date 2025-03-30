import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "CRM Audit & Technical Debt Optimization | Maximize Performance",
  "Optimize your CRM system to minimize costs, eliminate inefficiencies, and enhance overall business performance."
);

export default function Home() {
  return <CPage />;
}
