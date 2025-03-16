/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";

const AccordianBig = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Manufacturing",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Hi-Tech",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Non-Profit",
      content: (
        <p>
          Non profit ipsum dolor sit amet consectetur. Ultrices non ac massa
          molestie aliquam augue. Aliquam nisi laoreet pellentesque donec.
          Egestas tincidunt vulputate molestie viverra egestas. Enim nunc
          euismod morbi nunc ultricies. Tellus enim arcu hac pellentesque purus
          nunc at leo rutrum. Urna suspendisse proin aliquam sit fermentum
          tellus. Auctor dapibus quam lacus faucibus consequat massa eget.
          Suscipit iaculis nisl in dignissim morbi blandit amet lectus vitae.
          Feugiat nisl quisque lectus volutpat purus a tellus. Fusce sed sem
          cursus hac. Neque ante condimentum dolor nisl neque feugiat arcu.
          Purus facilisi nibh enim morbi duis dignissim. Id laoreet luctus
          malesuada odio eu faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Finance",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Software",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Education Services",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Public Sector",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
    {
      title: "Travel/Logistics",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Ultrices non ac massa molestie
          aliquam augue. Aliquam nisi laoreet pellentesque donec. Egestas
          tincidunt vulputate molestie viverra egestas. Enim nunc euismod morbi
          nunc ultricies. Tellus enim arcu hac pellentesque purus nunc at leo
          rutrum. Urna suspendisse proin aliquam sit fermentum tellus. Auctor
          dapibus quam lacus faucibus consequat massa eget. Suscipit iaculis
          nisl in dignissim morbi blandit amet lectus vitae. Feugiat nisl
          quisque lectus volutpat purus a tellus. Fusce sed sem cursus hac.
          Neque ante condimentum dolor nisl neque feugiat arcu. Purus facilisi
          nibh enim morbi duis dignissim. Id laoreet luctus malesuada odio eu
          faucibus amet nec. Nisl ullamcorper sit sem vivamus.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full flex bg-[#FFE6DC] rounded-xl md:flex-row flex-col">
      <div className="w-full md:w-52 lg:w-72">
        {accordionItems.map((item, i) => (
          <div key={i}>
            <div
              onClick={() => handleToggle(i)}
              className={`${openIndex === i ? "font-semibold" : "bg-white"} ${
                openIndex + 1 === i ? "md:rounded-tr-xl" : ""
              } ${
                openIndex - 1 === i ? "md:rounded-br-xl" : ""
              } mb-[1px] py-5 lg:py-8 cursor-pointer ff-raleway text-lg lg:text-xl font-medium text-blackone text-left md:text-center pl-10 relative`}
            >
              {item.title}
              <span
                className={`md:hidden absolute top-6 right-6 origin-center transition-all duration-200 ${
                  openIndex === i ? " rotate-180" : ""
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 7 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5226 0.787191C0.68815 0.621667 0.956555 0.621667 1.1221 0.787191L3.64845 3.31355L6.17478 0.787191C6.34033 0.621667 6.60875 0.621667 6.77431 0.787191C6.93983 0.952744 6.93983 1.22117 6.77431 1.38672L3.94821 4.21281C3.78266 4.37834 3.51424 4.37834 3.34868 4.21281L0.5226 1.38672C0.35705 1.22117 0.35705 0.952744 0.5226 0.787191Z"
                    fill="#757677"
                  />
                </svg>
              </span>
            </div>
            {openIndex === i ? (
              <div
                className={`md:hidden flex-1 py-12 px-8 text-left overflow-auto ff-lato text-blackone h-[calc(8*69px)]`}
              >
                {accordionItems[openIndex].content}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div
        className={`hidden md:block flex-1 py-12 px-8 text-left overflow-auto ff-lato text-blackone h-[calc(8*69px)]`}
      >
        {openIndex === null ? null : accordionItems[openIndex]?.content}
      </div>
    </div>
  );
};

export default AccordianBig;
