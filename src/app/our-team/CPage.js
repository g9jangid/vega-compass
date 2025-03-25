/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation/Navigation";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import team from "@/constants/team.json";
import TeamModal from "@/components/TeamModal";

export default function Home() {
  const [teamData, setTeamData] = useState(team);
  const [activeTab, setActiveTab] = useState("");
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeTab == "") {
      setTeamData(team);
    } else {
      setTeamData(team.filter((item) => item.categories.includes(activeTab)));
    }
  }, [activeTab]);

  const openModalWithData = (teamMemberData) => {
    setIsModalOpen(true);
    setActiveTeamMember(teamMemberData);
  };

  const categories = [
    {
      label: "View All",
      value: "",
    },
    {
      label: "Core Team",
      value: "core-team",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="container mx-auto flex justify-center px-6 flex-col items-center mt-32 lg:mt-48">
        <div className="text-center flex flex-col items-center">
          <h1 className="ff-raleway text-2xl md:text-3xl lg:text-4xl text-blackone font-semibold">
            Meet the Vegacompass team
          </h1>
          <p className="text-blackone ff-lato mt-4">
            Turning challenges into opportunities with a team committed to your
            business’s success.
          </p>
        </div>
      </section>

      <section className="container mx-auto text-left mt-16 px-6 justify-center flex flex-col items-center max-w-[1200px]">
        <div className="w-full text-center overflow-x-auto lg:overflow-x-hidden flex lg:block max-h-[54px] lg:max-h-max">
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(item.value)}
              className={`whitespace-nowrap ${
                activeTab === item.value
                  ? "inline-block cursor-pointer m-2 bg-red capitalize border border-red text-white ff-lato text-sm py-2 px-8 rounded-full font-medium"
                  : "inline-block cursor-pointer m-2 bg-white hover:bg-rose-50 capitalize border border-[#DCDCE3] text-[#585858] ff-lato text-sm py-2 px-8 rounded-full font-medium"
              } `}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="w-full mt-10 flex flex-wrap">
          {teamData?.length ? (
            teamData.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div
                  className="w-full relative aspect-square rounded-lg cursor-pointer hover-effect-team-card"
                  onClick={() => openModalWithData(item)}
                >
                  <img
                    src={`/assets/images/team/${item.img}`}
                    className="w-full aspect-square object-cover object-center rounded-lg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                  />
                  <div className="bg-white rounded-lg w-[calc(100%-32px)] p-3 absolute bottom-4 left-4 text-center ">
                    <p className="text-blackone ff-raleway text-lg font-semibold member-name">
                      {item.name}
                    </p>
                    <p className="text-[#737373] uppercase ff-lato text-sm member-desg">
                      {item.desg}
                    </p>
                    <p className="text-blackone ff-raleway text-lg font-semibold read-more-btn hidden">
                      Know More
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full py-10 flex justify-center items-center">
              <p>No profiles found.</p>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <TeamModal
          onClose={() => setIsModalOpen(false)}
          data={activeTeamMember}
        />
      )}

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
