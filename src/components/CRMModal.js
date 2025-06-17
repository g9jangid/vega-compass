 
"use client";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const CRMModal = ({ handleClose }) => {
  return (
    <div className="fixed max-h-screen top-0 left-0 right-0 w-screen h-screen z-[100000] bg-black/70">
      <section className="w-full max-w-[1020px] p-6 fixed z-[1000] top-[10vh] h-[80vh] left-1/2 -translate-x-1/2">
        <div className="w-full max-h-full flex flex-col border border-[#DCDCE3] py-10 px-6 lg:px-10 bg-white shadow-lg rounded-lg relative">
          <span
            onClick={handleClose}
            className="inline-block cursor-pointer p-2 border-2 border-black/15 absolute -top-2 lg:-top-4 -right-2 lg:-right-4 rounded-lg bg-white"
          >
            <IoCloseSharp color="#000" size={20} />
          </span>

          <h4 className="text-blackone ff-raleway font-semibold text-2xl">
            What Is CRM?
          </h4>
          <div className="w-full mt-8 flex-1 max-h-full overflow-auto md:pr-8 scrollableDiv">
            <p className="ff-lato text-sm md:text-base text-justify text-blackone">
              CRM, or customer relationship management, is a company-wide
              business strategy designed to reduce costs and increase
              profitability by solidifying customer satisfaction, loyalty, and
              advocacy. True CRM brings together information from all data
              sources within an organization (and where appropriate, from
              outside the organization) to give one, holistic view of each
              customer in real time. This allows customer-facing employees in
              such areas as sales, customer support, and marketing to make quick
              yet informed decisions on everything from cross-selling and
              upselling opportunities to target marketing strategies to
              competitive positioning tactics.
              <br />
              <br />
              Once thought of as a type of software, CRM has evolved into a
              customer-centric philosophy that must permeate an entire
              organization. There are three key elements to a successful CRM
              initiative: people, process, and technology. The people throughout
              a company, from the CEO to each and every customer service rep,
              need to buy in to and support CRM. A company&apos;s business processes
              must be reengineered to bolster its CRM initiative, often from the
              view of how this process can better serve the customer Firms must
              select the right technology to drive these improved processes,
              provide the best data to the employees, and be easy enough to
              operate so that users won&apos;t balk. If one of these three
              foundations is not sound, the entire CRM structure will crumble.
              <br />
              <br />
              <span className="font-semibold text-blue-700">If customer relationships are the heart of business success, then
              CRM is the valve that pumps a company&apos;s life blood.</span> It&apos;s a
              strategy used to learn more about customer&apos;s needs and behaviors
              to develop stronger relationships with them. After all, good
              customer relationships are at the heart of business success. There
              are many technological components to CRM, but thinking about CRM
              in primarily technological terms is a mistake. The more useful way
              to think about CRM is as a process that will help bring together
              lots of pieces of information about customers, sales, marketing
              effectiveness, responsiveness, and market trends.
              <br />
              <br />
              As such, CRM is best suited to help businesses use people,
              processes, and technology to gain insight into the behavior and
              value of customers. This insight allows for improved customer
              service, increased call center efficiency, added cross-sell and
              upsell opportunities, improved close rates, streamlined sales and
              marketing processes, improved customer profiling and targeting,
              reduced costs, and increased share of customer and overall
              profitability.
              <br />
              <br />
              This sounds like a panacea, but CRM is not without its challenges.
              For CRM to be truly effective, an organization must convince its
              staff that change is good and that CRM will benefit them. Then it
              must analyze its business processes to decide which need to be
              re-engineered and how best to go about it. Next is to decide what
              kind of customer information is relevant and how it will be used.
              Finally, a team of carefully selected executives must choose the
              right technology to automate what needs to be automated. This
              process, depending on the size of the company and the breadth of
              data, can take anywhere from a few weeks to a year or more. And
              although some firms are using Web-based CRM technologies for less
              than $100 per month per user, large companies could spend millions
              to purchase, install, and customize the technology required to
              support their CRM initiatives.
              <br />
              <br />
              Source:{" "}
              <a
                href="https://www.destinationcrm.com/About/What_Is_CRM"
                className="text-blue-500 text-sm italic"
                target="_blank"
              >
                Destination crm
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMModal;
