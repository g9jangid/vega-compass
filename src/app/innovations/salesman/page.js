/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation/Navigation";
import VideoPalyerSection from "@/components/VideoPalyerSection";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import HeroOne from "@/components/HeroOne";
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "Salesman | AI-Driven Sales Automation & Recommendations",
  "Empower your sales team with AI-driven insights, personalized product recommendations, and automated upselling strategies."
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="INNOVATIONS"
        title={
          <>
            <span className="text-[#C40A23]">Salesman AI</span> - Automate end
            to end MQL (Marketing) to SQL (Sales) process
          </>
        }
        img="/assets/images/innovations/sales-hero.png"
        bg="#FFF7F0"
        page="salesman"
        textPortion="wide"
      />

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            INTRODUCTION
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6 justify-center flex flex-col items-center">
        {/* <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          SalesMan - CRM Upsell Cross-sell <br className="hidden lg:block" />{" "}
          recommendations plugin
        </h2> */}

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            See how with Agentic Intelligence automated lead conversion from MQL
            to SQL is managed. The traditional journey from Marketing Qualified
            Leads (MQLs) to Sales Qualified Leads (SQLs) has long been manual,
            slow, and often inconsistent. But not anymore.
            <br />
            <br />
            At the cutting edge of CRM transformation, Agentic Intelligence is
            turning this process on its head — fully automating MQL to SQL
            conversion inside Salesforce using intelligent, goal-oriented
            agents.
          </p>
        </div>
      </section>

      <VideoPalyerSection
        title={"What’s Changing with Agentic Intelligence?"}
        ytcode="0sJUPqx3GVY"
        img="salesman-video.jpg"
      />

      <section className="w-full  pt-20 mt-12 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              process
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            Salesman CRM process
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Automated Lead Enrichment & Enhancement
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  AI agents assess lead information, LinkedIn details, enrich
                  and enhance the information with below on parameters based on
                  developer only Open AI APIs.
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Firmographic Data (Get Company legal details, Headquarters
                  location, Employee Count, Annual Revenue, Industry, Website,
                  Company Type, Year Founded).
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Decision Makers & Contact Information (This information is
                  taken from enrichment tools like people data labs etc to
                  provide accurate information).
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Competitors -Technographic Data (Helps provide an idea of
                  technical stack in the Organization, CRM, Database, Marketing,
                  Sales, Languages, Other).
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Similar Companies 1-2 miles radius (This helps plan better
                  utilization of reps time as they can plan meetings and
                  discussions with appropriate stakeholders).
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Strategic Events (News with M & A) -- Helps keep users up to
                  date with latest happenings in the company.
                </span>
              </p>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/marketing-1.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/cross-team.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Derive Intent-Driven Decision Making
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  Agentic systems don&apos;t just follow workflows — they
                  initiate communication with a reason. With Salesforce Sales
                  Development Representative SDRs email communication is auto
                  initiated with product interests , follow ups done and with
                  response gathered, an automated meeting setup is initiated
                  with the lead.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Event Creation
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  Based on the meeting scheduled an event is auto created
                  against the lead.
                </span>
              </p>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/marketing-1.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/sales-1.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Auto Opportunity creation and recommend upsell/ cross-sell
                products
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  Once the meeting is scheduled an Opportunity is auto created
                  with recommended upsell cross sell offerings.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFF7F0] py-20 mt-32 px-6 -mb-32">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              BENEFITS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone text-center mb-8 mt-4">
            Benefits of using Salesman AI
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[600px]">
            <p className="ff-lato text-blackone text-center">
              Faster Handoffs, Higher Conversions Leads don’t fall through the
              cracks. With intelligent prioritization and automatic routing,
              SDRs get high-quality, context-rich SQLs in their queue —
              instantly.
              <br />
              <br />
              Agentic Intelligence isn&apos;t just automating workflows —
              it&apos;s adding cognitive capability to your CRM. It&apos;s not
              just a faster pipeline — it&apos;s a smarter one.
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/10 mt-32"></div>
      </section>
      {/* 
      <section className="w-full py-20 mt-0 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              BENEFITS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4 text-center">
            Why This Matters
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[600px]">
            <p className="ff-lato text-blackone text-center">
              Agentic Intelligence isn&apos;t just automating workflows —
              it&apos;s adding cognitive capability to your CRM. It&apos;s not
              just a faster pipeline — it&apos;s a smarter one.
            </p>
          </div>
        </div>
      </section> */}

      <CRMInquiry />
      <Footer />
    </main>
  );
}
