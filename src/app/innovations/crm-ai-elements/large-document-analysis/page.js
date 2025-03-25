/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation/Navigation";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import Link from "next/link";
import menuData from "@/components/Navigation/menuData";
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "AI-powered large document processing for efficient insights",
  "AI-powered large document processing for efficient insights"
);
export default function Home() {
  const consultancyTiles = menuData.find((item) => item.id === 3).submenu;

  const funtionality = [
    "It automates the process of reading and understanding document content and extracting valuable information, such as summaries, core requirements, pain points, and areas of improvement from a file/document using an AI language model provided by the OpenAI API.",
    "The Apex class with the OpenAI API integration offers significant benefits in terms of efficiency, data insights, and automation, empowering Salesforce users to make informed decisions based on the content of documents related to their clients.",
    "This automation reduces the manual effort required to analyze documents, making the process more efficient and scalable.",
  ];

  const benefits = [
    "Automated file summarization and info extraction helps decision-makers grasp key points from client docs, leading to data-driven decisions.",
    "The class aids in compliance-related information extraction from documents, ensuring adherence to regulations for some industries.",
    "Automating document analysis saves time, reduces manual processing effort, cuts costs, and lets employees focus on strategic tasks.",
    "Summarizing client requirements helps marketing and sales teams target efforts better, crafting relevant pitches and proposals.",
    "The automated class enables scalable data analysis, handling large document volumes accurately without a significant workforce increase.",
    "Extracted information fosters collaboration across departments, deepening the understanding of client needs.",
    "Quick understanding of clients’ needs enables personalized services, strengthening relationships and satisfaction levels.",
    "Insights, combined with data analytics, generate predictive models for client behavior and needs.",
    "Efficiently extracting insights from documents gives organizations a competitive edge, enabling faster decisions and client responsiveness.",
    "Understanding client needs informs product development for better alignment with customer expectations.",
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <section
        className={`w-full mt-[115px] min-h-[500px] flex items-center`}
        style={{ backgroundColor: "#F3FFFF" }}
      >
        <div className="container mx-auto flex py-6 px-6 items-center lg:flex-row flex-col">
          <div className="w-full text-center">
            <div className="mb-2 text-center">
              <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
                Large Document Analysis
              </p>
              <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2 inline-block relative top-[-7px]"></div>
            </div>

            <h1 className="ff-raleway font-semibold text-3xl lg:text-4xl xl:text-5xl text-blackone leading-tight lg:leading-tight xl:leading-tight text-center pt-10 lg:pt-0">
              AI-powered large document
              <br className="hidden lg:block" /> processing for efficient
              insights
            </h1>
            <p className="ff-lato text-blackone mt-3 max-w-[800px] mx-auto">
              Analyze, extract, and summarize key insights from vast amounts of
              documents with AI automation. Reduce manual effort, enhance
              compliance, and improve decision-making.
            </p>
            <Link
              href="/contact-us"
              className="text-base mt-5 capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-28 px-6">
        <div className="text-center flex flex-col items-center">
          <h2 className="ff-raleway font-semibold text-3xl lg:text-4xl text-blackone">
            Functionality
          </h2>
        </div>
        <div className="w-full flex lg:flex-row flex-col mt-8">
          {funtionality.map((item, i) => (
            <div className="w-full lg:w-1/3 p-2 h-auto" key={i}>
              <div className="bg-[#FFF7F0] p-6 rounded-lg h-full">
                <p className="ff-raleway font-semibold text-3xl text-[#D2833F]">
                  0{i + 1}
                </p>
                <p className="ff-lato text-blackone mt-3">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-[#FFF7F0] px-6">
        <section className="container mx-auto flex justify-center flex-col items-center mt-28 py-24">
          <div className="text-center flex flex-col items-center">
            <h2 className="ff-raleway font-semibold text-3xl lg:text-4xl text-blackone">
              Potential Benefits
            </h2>
          </div>
          <div className="w-full flex mt-8 flex-wrap max-w-[980px]">
            {benefits.map((item, i) => (
              <div key={i} className="w-full lg:w-1/2 p-2">
                <div className="flex mb-5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-1"
                  >
                    <g clipPath="url(#clip0_1470_4585)">
                      <path
                        d="M11 0C4.93436 0 0 4.93436 0 11C0 17.0656 4.93436 22 11 22C17.0656 22 22 17.0656 22 11C22 4.93436 17.0656 0 11 0Z"
                        fill="#D2833F"
                      />
                      <path
                        d="M16.5767 8.66901L10.6183 14.6272C10.4396 14.806 10.2049 14.896 9.97028 14.896C9.73563 14.896 9.50098 14.806 9.32222 14.6272L6.34311 11.6481C5.98459 11.2898 5.98459 10.7104 6.34311 10.352C6.70146 9.99348 7.2807 9.99348 7.63922 10.352L9.97028 12.6831L15.2806 7.37289C15.639 7.01437 16.2182 7.01437 16.5767 7.37289C16.9351 7.73125 16.9351 8.31049 16.5767 8.66901Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1470_4585">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-1 ff-lato text-blackone pl-4">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="container mx-auto flex justify-center flex-col items-center mt-28 px-6">
        <div className="text-center flex flex-col items-center">
          <h2 className="ff-raleway font-semibold text-3xl lg:text-4xl text-blackone">
            Technical Specifications
          </h2>
        </div>
        <div className="w-full flex lg:flex-row flex-col mt-8 items-stretch">
          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#FFF7F0] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#D2833F]">
                Objects Used
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Client Analysis
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#F8F0FF] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#8744C3]">
                Custom Fields
              </p>

              <ul className="list-disc ml-4">
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Client Analysis: Concise overview.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Client Analysis: Essential needs.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Client Analysis: Challenges.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Client Analysis: Opportunities for enhancement.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Client Analysis: Main expectations.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#F3FFFF] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#37ADAD]">
                APIs Used
              </p>
              <p className="text-sm ff-lato text-blackone">
                OpenAI (Services: Completions)
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#F0FFF1] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#317F37]">
                Lightning Web Components developed
              </p>
              <p className="text-sm ff-lato text-blackone">
                clientFileAnalysisCompo
              </p>
            </div>
          </div>
        </div>
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
