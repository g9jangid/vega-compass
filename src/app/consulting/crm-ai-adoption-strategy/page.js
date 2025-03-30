import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "CRM AI Adoption Strategy | Automate & Personalize Customer Experience",
  "Leverage AI-driven CRM to automate tasks, personalize customer interactions, and enhance business efficiency."
);

export default function Home() {
  return <CPage />;
}
