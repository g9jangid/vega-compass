/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import team from "@/constants/team.json";
import { usePathname } from "next/navigation";
import TeamModal from "@/components/TeamModal";

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments.pop();

  const _team = team.filter((item) => item.categories.includes(lastSegment));

  let data = _team.map((item, i) => ({
    id: i + 1,
    name: item.name,
    img: "/assets/images/team/" + item.img,
    position: item.desg,
  }));

  const openModalWithData = (teamMemberData) => {
    setIsModalOpen(true);
    setActiveTeamMember(teamMemberData);
  };

  return !!data?.length ? (
    <section className="container mx-auto px-6 py-8 flex justify-center flex-col items-center mt-16">
      <div className="text-center flex flex-col items-center">
        <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
          OUR TEAM
        </p>
        <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
      </div>
      <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-10 mt-4">
        Meet our experts
      </h2>
      <div className="w-full flex flex-wrap justify-center max-w-[900px]">
        {data.map((item) => (
          <div key={item.id} className="text-left w-full md:w-1/2 lg:w-1/3">
            <div className="p-4">
              <div className="rounded-2xl w-full mb-4 aspect-square">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-xl font-medium text-blackone ff-raleway flex justify-between">
                <span>{item.name}</span>
                <span
                  className=" cursor-pointer"
                  onClick={() => openModalWithData(_team[item.id - 1])}
                >
                  <img
                    src="/assets/images/icons/arrow-round.svg"
                    alt=""
                    className="w-7 h-7"
                  />
                </span>
              </h2>
              <p className="text-sm text-[#858796] font-medium ff-lato">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <TeamModal
          onClose={() => setIsModalOpen(false)}
          data={activeTeamMember}
        />
      )}
    </section>
  ) : null;
};

export default Team;
