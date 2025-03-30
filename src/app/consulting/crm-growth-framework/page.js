import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "CRM Growth Framework | Align CRM with Business Goals",
  "Unlock sustainable growth by aligning CRM strategies with business objectives for improved efficiency and scalability."
);

export default function Home() {
  return <CPage />;
}
