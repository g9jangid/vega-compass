import React from "react";
import CPage from "./CPage.js";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "Contact Us | Get in Touch with Vegacompass CRM Experts",
  "Have questions or need CRM consulting? Contact Vegacompass today for expert guidance on CRM strategy, implementation, and optimization. We're here to help!"
);

export default function Home() {
  return <CPage />;
}
