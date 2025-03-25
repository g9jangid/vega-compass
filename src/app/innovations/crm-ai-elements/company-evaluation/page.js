/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation/Navigation";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import Link from "next/link";
import menuData from "@/components/Navigation/menuData";
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "AI-driven company evaluation for data-backed business insights",
  "AI-driven company evaluation for data-backed business insights"
);
export default function Home() {
  const consultancyTiles = menuData.find((item) => item.id === 3).submenu;

  const funtionality = [
    "The method constructs a prompt that includes specific evaluation criteria and information about the lead (startup) that needs to be analyzed.",
    "The prompt is a formatted string containing placeholders for the startup details such as name, website, program sector, etc. It also provides a scoring model for evaluation criteria like market attractiveness, product/technology, team, and traction.",
    "The entire prompt, along with the lead information, is prepared to be sent to the OpenAI API for text completion.",
  ];

  const benefits = [
    "TL;DR summaries offer swift overviews of lengthy content, saving time for readers lacking time to read the whole text.",
    "It helps users grasp key points in a fraction of the time needed for complete reading.",
    "TL;DR summarization aids content consumption amid information overload, letting users efficiently skim to find worthier pieces.",
    "TL;DR summaries support decision-making by quickly presenting crucial insights, without delving into full texts.",
    "Shareable summaries make passing key information to others easy and convenient.",
    "TL;DR makes information accessible to busy, disabled, or non-native speakers.",
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
                Company Evaluation
              </p>
              <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2 inline-block relative top-[-7px]"></div>
            </div>

            <h1 className="ff-raleway font-semibold text-3xl lg:text-4xl xl:text-5xl text-blackone leading-tight lg:leading-tight xl:leading-tight text-center pt-10 lg:pt-0">
              AI-driven company evaluation for
              <br className="hidden lg:block" /> data-backed business insights
            </h1>
            <p className="ff-lato text-blackone mt-3 max-w-[800px] mx-auto">
              Gain in-depth company insights with AI-powered data evaluation.
              Enhance decision-making, optimize risk assessment, and identify
              growth opportunities effortlessly.
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
          <div className="w-full lg:w-1/5 p-2 h-auto">
            <div className="w-full bg-[#FFF7F0] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#D2833F]">
                Objects Used
              </p>
              <ul className="list-disc ml-4">
                <li>
                  <p className="text-sm ff-lato text-blackone">Lead</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-2/5 p-2 h-auto">
            <div className="w-full bg-[#F8F0FF] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#8744C3]">
                Custom Fields
              </p>

              <ul className="list-disc ml-4">
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Startup_name__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Startup_Website__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Program_Sector__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Deck__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Describe_problem_you_are_solving_how__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; What_are_you_Building__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Market_Size__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; What_makes_your_team_special__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Who_are_your_co_founders_their_roles__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Product_Stage__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Next_Fundraising_Round__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Funds_Raised__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Notable_Investors__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Incubator_Accelerator__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Traction__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Your_plans_for_the_MENA_region_the_UAE__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; Headquarter__c.
                  </p>
                </li>
                <li>
                  <p className="text-sm ff-lato text-blackone">
                    Lead &gt; co_founders_will_reside_in_Abu_Dhabi_
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/5 p-2 h-auto">
            <div className="w-full bg-[#F3FFFF] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#37ADAD]">
                APIs Used
              </p>
              <p className="text-sm ff-lato text-blackone">
                OpenAI (Services: Completions)
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/5 p-2 h-auto">
            <div className="w-full bg-[#F0FFF1] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#317F37]">
                Lightning Web Components developed
              </p>
              <p className="text-sm ff-lato text-blackone">leadCompo</p>
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
