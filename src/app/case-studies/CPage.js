/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import caseStudiesData from "@/constants/case-studies.json";
import Link from "next/link";
import Select from "react-select";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [keywordSearch, setKeywordSearch] = useState("");
  const [selectedConsulting, setSelectedConsulting] = useState(null);
  const [selecTedtechService, setSelecTedtechService] = useState(null);
  const [data, setData] = useState(caseStudiesData);

  const handleChangeConsulting = (option) => {
    setSelectedConsulting(option);
    setSelecTedtechService(null);
    setKeywordSearch("");
    setKeyword("");
    setData((data) =>
      caseStudiesData.filter((item) => item.service_slug === option.value)
    );
  };

  const handleChangeTechService = (option) => {
    setSelecTedtechService(option);
    setSelectedConsulting(null);
    setKeywordSearch("");
    setKeyword("");
    setData((data) =>
      caseStudiesData.filter((item) => item.service_slug === option.value)
    );
  };

  const handleKeywordSearch = (keyword) => {
    setKeywordSearch(keyword);
    setSelectedConsulting(null);
    setSelecTedtechService(null);
    setData((data) =>
      caseStudiesData.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword.toLowerCase()) ||
          item.service.toLowerCase().includes(keyword.toLowerCase()) ||
          item.brief.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const resetAllFilters = () => {
    setKeywordSearch("");
    setSelectedConsulting(null);
    setSelecTedtechService(null);
    setKeyword("");
    setData(caseStudiesData);
  };

  const consultingOptions = [
    {
      label: "CRM Marketing Strategy",
      value: "crm-marketing-strategy",
    },
    {
      label: "CRM Sales Strategy",
      value: "crm-sales-strategy",
    },
    {
      label: "CRM Customer Service Strategy",
      value: "crm-customer-service-strategy",
    },
    {
      label: "CRM AI Adoption Strategy",
      value: "crm-ai-adoption-strategy",
    },
    {
      label: "CRM Growth Framework",
      value: "crm-growth-framework",
    },
    {
      label: "CRM Right Fitment Planning",
      value: "crm-right-fitment-planning",
    },
    {
      label: "CRM Audit and Technical Debt Optimization",
      value: "crm-audit-and-technical-debt-optimization",
    },
    {
      label: "CRM Customer Communities",
      value: "crm-customer-communities",
    },
    {
      label: "CRM E-Commerce",
      value: "crm-e-commerce",
    },
    {
      label: "CRM Program Management",
      value: "crm-program-management",
    },
    {
      label: "CRM Implementation and Integration",
      value: "crm-implementation-and-integration",
    },
    {
      label: "Organization-wide Multiple CRM Unification",
      value: "organization-wide-multiple-crm-unification",
    },
    {
      label: "CRM Security Planning",
      value: "crm-security-planning",
    },
    {
      label: "Customer Success Strategy",
      value: "customer-success-strategy",
    },
  ];

  const techServiceOptions = [
    {
      label: "Salesforce CRM",
      value: "salesforce-crm",
    },
    {
      label: "MS Dynamics CRM",
      value: "ms-dynamics-crm",
    },
    {
      label: "ServiceNow",
      value: "servicenow",
    },
    {
      label: "Open Source CRM",
      value: "open-source-crm",
    },
    {
      label: "Hubspot CRM",
      value: "hubspot-crm",
    },
    {
      label: "Excel CRM-Atom",
      value: "excel-crm-atom",
    },
    {
      label: "MuleSoft",
      value: "mulesoft",
    },
    {
      label: "Marketo",
      value: "marketo",
    },
    {
      label: "Customer Data Optimization & Cleanup",
      value: "customer-data-optimization-and-cleanup",
    },
    {
      label: "E-Commerce & Development",
      value: "e-commerce-and-development",
    },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "54px",
      padding: "4px 10px",
      backgroundColor: "#fff",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#e0e7ff" : "white",
      padding: 10,
      cursor: "pointer",
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      display: "none",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "#000",
      fontSize: "16px",
      fontFamily: "font-family: var(--font-lato);",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "#585858" : "#585858",
    }),
    menu: (base, state) => ({
      ...base,
      width: "min(360px, 80vw)",
    }),
  };

  const customStylesSelected = {
    control: (base, state) => ({
      ...base,
      borderRadius: "54px",
      padding: "4px 10px",
      backgroundColor: "#C40A23",
      borderColor: "#C40A23",
      boxShadow: "none",
      outline: "none",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#e0e7ff" : "white",
      padding: 10,
      cursor: "pointer",
    }),
    indicatorSeparator: (base, state) => ({
      ...base,
      display: "none",
    }),
    singleValue: (base, state) => ({
      ...base,
      color: "#fff",
      fontSize: "16px",
      fontFamily: "font-family: var(--font-lato);",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? "white" : "white",
    }),
    menu: (base, state) => ({
      ...base,
      width: "min(360px, 80vw)",
    }),
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="container mx-auto flex justify-center flex-col items-center mt-32 lg:mt-48">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            CASE STUDY
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6 justify-center flex flex-col items-center">
        <h1 className="ff-raleway text-xl md:text-2xl lg:text-5xl font-semibold text-blackone mb-8 !leading-tight">
          Success stories driven by <br className="hidden lg:block" />
          Vegacompass Solutions
        </h1>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center mt-8 px-6 relative">
          <div className="border border-gray-300 rounded-lg absolute h-12 bg-white z-[2] flex w-full">
            <div
              className="cursor-pointer absolute right-0 top-0 p-3 block z-[2]"
              onClick={() => handleKeywordSearch(keyword)}
            >
              <img
                src="/assets/images/search.svg"
                className="w-6 h-auto "
                alt="search within site"
              />
            </div>

            <input
              type="text"
              placeholder="Enter keyword to search case study"
              className="flex-1 h-full px-6 py-2 rounded-lg relative z-[1] bg-transparent outline-none"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
        </div>

        <div className="w-auto mt-14 flex flex-col md:flex-row gap-4">
          <div className="rounded-md bg-white transition-[top] duration-300 ">
            <Select
              options={consultingOptions}
              styles={!selectedConsulting ? customStyles : customStylesSelected}
              onChange={handleChangeConsulting}
              value={
                selectedConsulting ? { value: "", label: "Consulting" } : null
              }
              placeholder="Consulting"
            />
          </div>
          <div className="rounded-md bg-white transition-[top] duration-300 ">
            <Select
              options={techServiceOptions}
              styles={
                !selecTedtechService ? customStyles : customStylesSelected
              }
              onChange={handleChangeTechService}
              value={
                selecTedtechService
                  ? { value: "", label: "Tech Services" }
                  : null
              }
              placeholder="Tech Services"
            />
          </div>
        </div>

        {(selectedConsulting || selecTedtechService || keywordSearch) && (
          <div className="mt-4">
            <p
              className="cursor-pointer text-rose-700 underline"
              onClick={() => resetAllFilters()}
            >
              Reset all filters
            </p>
          </div>
        )}
      </section>

      <section className="container mx-auto px-6 mt-20">
        {keywordSearch && (
          <div className="my-4 px-4">
            <p className="text-blackone ff-raleway text-xl lg:text-3xl font-semibold">
              Searching for &quot;{keywordSearch}&quot;
            </p>
          </div>
        )}
        {(selectedConsulting || selecTedtechService) && (
          <div className="my-4 px-4">
            <p className="text-blackone ff-raleway text-xl lg:text-3xl font-semibold">
              {selectedConsulting?.label}
              {selecTedtechService?.label}
            </p>
          </div>
        )}
      </section>

      <section className="container mx-auto mt-3 px-6 justify-start flex flex-wrap items-stretch">
        {data.map((item, i) => (
          <div key={i} className="w-full md:w-1/2 p-3 mb-3">
            <div className="w-full">
              <img
                src={`/assets/images/case-studies/${item.img}`}
                className="rounded-lg aspect-video object-cover object-center"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
              <h2 className="mt-3 ff-raleway font-semibold text-xl text-blackone">
                {item.title}
              </h2>
              <p className="mt-2 ff-lato text-sm text-[#585858] line-clamp-2">
                {item.brief}
              </p>
              <Link
                href={`/case-studies/${item.url}`}
                className="text-base capitalize mt-4 inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
        {!data.length && (
          <p className="text-gray-500 text-center text-2xl font-medium ff-lato w-full px-6 py-10">
            No case studies found for this filter.
          </p>
        )}
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
