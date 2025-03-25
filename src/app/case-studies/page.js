import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "Case Studies | Vegacompass - Real CRM Success Stories",
  "Discover how Vegacompass has transformed businesses with cutting-edge CRM solutions. Explore our case studies showcasing successful CRM implementations, process optimizations, and AI-driven innovations that drive growth and efficiency."
);

export default function Home() {
  return <CPage />;
}
