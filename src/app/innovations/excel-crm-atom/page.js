import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "Excel CRM – Atom | Smart CRM for Small Businesses",
  "Leverage Atom, an Excel-based CRM solution, to simplify customer management and drive business efficiency."
);

export default function Home() {
  return <CPage />;
}
