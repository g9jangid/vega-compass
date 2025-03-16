/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="accordion-item transition-all duration-200 border-b border-gray-200">
      <div className="w-full flex justify-between items-center h-12">
        <span
          className={`${
            isOpen ? "text-red" : "text-blackone"
          } ff-raleway text-xl font-semibold`}
        >
          {item.title}
        </span>
        <span className="block cursor-pointer w-5 h-5" onClick={onToggle}>
          {isOpen ? (
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1331_1046)">
                <path
                  d="M8.00005 16.4999C3.58875 16.4999 0 12.9111 0 8.49995C0 4.08875 3.58875 0.5 8.00005 0.5C12.4112 0.5 16 4.08875 16 8.49995C16 12.9111 12.4112 16.4999 8.00005 16.4999ZM8.00005 1.81147C4.31195 1.81147 1.31147 4.81189 1.31147 8.49995C1.31147 12.1881 4.31195 15.1884 8.00005 15.1884C11.6881 15.1884 14.6885 12.1881 14.6885 8.49995C14.6885 4.81189 11.6881 1.81147 8.00005 1.81147Z"
                  fill="#BAB3B4"
                />
                <path
                  d="M11.855 9.15571H4.14401C3.78189 9.15571 3.48828 8.86204 3.48828 8.49997C3.48828 8.13785 3.78189 7.84424 4.14401 7.84424H11.855C12.2171 7.84424 12.5108 8.13785 12.5108 8.49997C12.5108 8.86204 12.2171 9.15571 11.855 9.15571Z"
                  fill="#BAB3B4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1331_1046">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1331_1096)">
                <path
                  d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.7273 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.728 14.7607 8 14.7607Z"
                  fill="#BAB3B4"
                />
                <path
                  d="M11.0977 7.32457H8.619V4.84588C8.619 4.50382 8.342 4.2262 7.99931 4.2262C7.65662 4.2262 7.37962 4.50382 7.37962 4.84588V7.32457H4.90094C4.55825 7.32457 4.28125 7.6022 4.28125 7.94426C4.28125 8.28632 4.55825 8.56395 4.90094 8.56395H7.37962V11.0426C7.37962 11.3847 7.65662 11.6623 7.99931 11.6623C8.342 11.6623 8.619 11.3847 8.619 11.0426V8.56395H11.0977C11.4404 8.56395 11.7174 8.28632 11.7174 7.94426C11.7174 7.6022 11.4404 7.32457 11.0977 7.32457Z"
                  fill="#BAB3B4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1331_1096">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
      </div>

      {isOpen && (
        <div className="accordion-content text-left py-4">{item.content}</div>
      )}
    </div>
  );
};

const Accordian = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = data;

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="w-full lg:w-1/2 p-6">
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-6">
        <img
          src={accordionItems[openIndex]?.img || accordionItems[0]?.img}
          alt=""
          className="p-5"
        />
      </div>
    </div>
  );
};

export default Accordian;
