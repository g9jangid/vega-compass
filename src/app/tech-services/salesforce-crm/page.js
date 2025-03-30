/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation/Navigation";
import Team from "@/components/Team";
import TestimonialSlider from "@/components/TestimonialSlider";
import TalkToExpert from "@/components/TalkToExpert";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import HeroOne from "@/components/HeroOne";
import CaseStudiesSlides from "@/components/CaseStudiesSlides";
import Accordian from "@/components/Accordian";
import AccordianBig from "@/components/AccordianBig";
import Link from "next/link";
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "Salesforce CRM | Elevate Business with Expert Salesforce Solutions",
  "Transform your business operations with advanced Salesforce CRM solutions, tailored to enhance productivity and growth."
);

export default function Home() {
  const tiles = [
    {
      id: 2,
      img: "/assets/images/tech-services/simcase.png",
      title: "Simcase",
      desc: (
        <>
          ‘SimCase’ – It provides AI based similar cases resolution &amp;
          suggestions in CRM to help customer support agents be more proactive,
          efficient and productive when handling customer queries and cases.
          Helps improve customer service, get better insights and can make
          customer support a revenue center.
        </>
      ),
    },
    {
      id: 3,
      img: "/assets/images/tech-services/event-manage.png",
      title: "Event Management",
      desc: (
        <>
          Event management application automates end to end event planning,
          attendee management, event registration and event monitoring within
          Salesforce CRM. The event registration portal built on top of
          Salesforce community portal helps register for the event planned to
          external audience. Event planning, venue management, guest management
          and attendees handling is done end to end in Salesforce.
        </>
      ),
    },
    {
      id: 4,
      img: "/assets/images/tech-services/sales and marketing alignment.png",
      title: "Agent SalesMan",
      desc: (
        <>
          Why should Sales process be manual? We have end to end automated MQL
          to SQL ensuring Sales team focusses on their core work and do not
          worry about data entry. Sales process works automated for B2B lead
          capture, lead deduplication, lead enrichment (linkedin profile,
          company size, website, revenue, industry), lead scoring and handling,
          automated calendar meeting management, high score lead auto conversion
          to Opportunity, task and activity management, opportunity round robin
          allocation to right Sales person.
          <br />
          <br />
          It takes out unnecessary MQL steps ensuring sales get right
          opportunities to work on in real time.
          <br />
          <br />
          <Link
            href={"https://www.youtube.com/watch?v=mPZgbljL7TE"}
            target="_blank"
            className="text-blackone border-blackone ff-lato text-sm border rounded-3xl inline-flex justify-center items-center py-1.5 px-5"
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6239 2.63935C17.4169 1.85987 16.8069 1.24601 16.0325 1.03764C14.6288 0.659073 9 0.659073 9 0.659073C9 0.659073 3.37124 0.659073 1.96752 1.03764C1.19306 1.24597 0.583137 1.85987 0.376137 2.63935C0 4.05221 0 6.99999 0 6.99999C0 6.99999 0 9.94778 0.376137 11.3606C0.583137 12.1401 1.19306 12.754 1.96752 12.9624C3.37124 13.3409 9 13.3409 9 13.3409C9 13.3409 14.6288 13.3409 16.0325 12.9624C16.8069 12.754 17.4169 12.1401 17.6239 11.3606C18 9.94778 18 6.99999 18 6.99999C18 6.99999 18 4.05221 17.6239 2.63935Z"
                fill="#FF0000"
              />
              <path
                d="M7.15918 9.67637L11.8637 7.00007L7.15918 4.32362V9.67637Z"
                fill="white"
              />
            </svg>
            <span className="pl-2">Watch our AI agent Salesman</span>
          </Link>
        </>
      ),
    },
    {
      id: 5,
      img: "/assets/images/tech-services/customer support.png",
      title: "Agent Casey",
      desc: (
        <>
          The customer support process for incidents and issues handling goes
          through a series of manual steps right from case capture to
          resolution. Agent Casey automates end to end Case Creation &amp;
          Initial Processing, Case Summarization &amp; Sentiment generation,
          Similar Closed Cases Recommendation, Critical Case Alert – CTA - call
          to action Planning, Customer Notification &amp; Case Resolution
          Decision. This helps automate end to end customer support process
          taking out key manual operations, improving agent efficiency,
          improving customer satisfaction, reducing customer churn and
          ultimately making organizations highly productive.
          <br />
          <br />
          <Link
            href={"https://www.youtube.com/watch?v=t2hJH-hq8Do"}
            target="_blank"
            className="text-blackone border-blackone ff-lato text-sm border rounded-3xl inline-flex justify-center items-center py-1.5 px-5"
          >
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6239 2.63935C17.4169 1.85987 16.8069 1.24601 16.0325 1.03764C14.6288 0.659073 9 0.659073 9 0.659073C9 0.659073 3.37124 0.659073 1.96752 1.03764C1.19306 1.24597 0.583137 1.85987 0.376137 2.63935C0 4.05221 0 6.99999 0 6.99999C0 6.99999 0 9.94778 0.376137 11.3606C0.583137 12.1401 1.19306 12.754 1.96752 12.9624C3.37124 13.3409 9 13.3409 9 13.3409C9 13.3409 14.6288 13.3409 16.0325 12.9624C16.8069 12.754 17.4169 12.1401 17.6239 11.3606C18 9.94778 18 6.99999 18 6.99999C18 6.99999 18 4.05221 17.6239 2.63935Z"
                fill="#FF0000"
              />
              <path
                d="M7.15918 9.67637L11.8637 7.00007L7.15918 4.32362V9.67637Z"
                fill="white"
              />
            </svg>
            <span className="pl-2">Watch our AI agent Casey</span>
          </Link>
        </>
      ),
    },
  ];

  const accordinaData = [
    {
      title: "Advisory",
      content: (
        <div>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Business case development and cost of ownership
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Change management and planning
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Cloud strategy
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Content strategy
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Customer experience strategy
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Designing and blueprinting
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            DevSecOps
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/purple-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Data Cloud and AI
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/advisary.png",
    },
    {
      title: "Implementation",
      content: (
        <div>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            All Salesforce core products
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Salesforce industry cloud
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Salesforce Platform
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Salesforce Einstein and Data Cloud 
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            MuleSoft
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Salesforce Trailhead
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/blue-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Salesforce DevOps
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/implementaion.png",
    },
    {
      title: "Support and Scale",
      content: (
        <div>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Application optimization
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Business process efficiency audit
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Managed services
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Salesforce Lightning migration
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            Shared services
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            System evaluation and reference architecture services
          </p>
          <p className="flex items-center">
            <img
              src="/assets/images/orange-tick.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="mr-2"
            />
            User interface improvement
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/support-and-scale.png",
    },
  ];

  const accordionItems = [
    {
      title: "Manufacturing",
      content: (
        <p>
          Our CRM consulting team has partnered with leading manufacturing
          companies to streamline their sales, service, and partner management
          processes. We’ve successfully implemented Salesforce solutions
          tailored to complex supply chains and B2B operations. From automating
          quote-to-cash cycles to optimizing dealer portals, our projects have
          driven measurable efficiency and customer engagement. Our approach
          aligns CRM with ERP systems to ensure end-to-end visibility across
          production, inventory, and customer service. This has helped
          manufacturers accelerate order fulfillment and improve after-sales
          support.
        </p>
      ),
    },
    {
      title: "Hi-Tech",
      content: (
        <p>
          We have deep experience working with fast-growing Hi-Tech firms to
          create scalable CRM architectures that support rapid innovation and
          customer-centric growth. Our Salesforce deployments have empowered
          clients to manage multi-channel sales pipelines, automate renewals,
          and drive usage-based engagement. We specialize in building tech
          stacks that support product-led growth and complex account
          hierarchies. Our consulting practice includes integration with support
          systems, Quoting tools, and marketing automation platforms. Clients
          benefit from increased sales velocity and deeper customer
          intelligence.
        </p>
      ),
    },
    {
      title: "Non-Profit",
      content: (
        <p>
          For the non-profit sector, we’ve enabled mission-driven organizations
          to build stronger donor relationships and drive impact using CRM
          solutions. Our Salesforce Nonprofit Success Pack (NPSP)
          implementations have helped clients manage donations, volunteers, and
          campaigns more efficiently. We understand the need for transparency,
          engagement, and reporting in the non-profit world, and our consulting
          ensures compliance with data and fundraising regulations. We’ve also
          created donor journey maps and automated grant management workflows.
          This leads to stronger community engagement and better resource
          utilization.
        </p>
      ),
    },
    {
      title: "Finance",
      content: (
        <p>
          In the finance industry, our CRM consulting has helped firms manage
          client portfolios, ensure compliance, and deliver personalized
          services. We’ve delivered Salesforce projects for wealth management,
          lending, and insurance sectors, focusing on risk mitigation and client
          onboarding automation. Our work includes integrating CRM with KYC/AML
          systems and financial data sources. We ensure secure, role-based
          access and audit trails to meet industry regulations. The result is
          enhanced advisor productivity and a seamless client experience.
        </p>
      ),
    },
    {
      title: "Software",
      content: (
        <p>
          We assist software companies in leveraging CRM as the core of their
          customer lifecycle—from marketing to onboarding to support. Our team
          has implemented Salesforce solutions that support subscription models,
          product usage tracking, and renewals. We&#39;ve built workflows that
          align sales and customer success teams, enhancing upsell opportunities
          and customer retention. Our consulting ensures CRM systems integrate
          tightly with platforms like Jira, Slack, and usage analytics tools.
          This enables software firms to make data-driven decisions and scale
          efficiently.
        </p>
      ),
    },
    {
      title: "Education Services",
      content: (
        <p>
          In the education sector, we&#39;ve empowered institutions and EdTech
          providers with CRM solutions to manage student lifecycles, admissions,
          alumni relations, and stakeholder communication. Using Salesforce
          Cloud and customized implementations, we’ve improved
          lead-to-enrollment conversion and personalized student journeys. Our
          projects support online learning models, counselor workflows, and
          feedback management. We help clients align CRM strategy with academic
          goals and compliance needs. This results in a connected ecosystem that
          enhances student engagement and institutional effectiveness.
        </p>
      ),
    },
    {
      title: "Public Services",
      content: (
        <p>
          Our CRM expertise supports public sector organizations in citizen
          engagement, service delivery, and case management. We&#39;ve delivered
          Salesforce projects to help agencies manage requests, automate
          processes, and deliver personalized communication. Our solutions focus
          on transparency, accessibility, and performance tracking. We
          understand the unique compliance and security needs of the public
          sector. The result is more responsive governance and improved citizen
          trust.
        </p>
      ),
    },
    {
      title: "Travel/Logistics",
      content: (
        <p>
          In the travel and logistics sector, we’ve implemented CRM solutions to
          manage customer journeys, partner ecosystems, and real-time service
          updates. Our Salesforce work spans freight, passenger services, travel
          agencies, and logistics firms. We design CRM workflows that improve
          customer support, booking management, and service delivery tracking.
          Our consulting emphasizes integration with TMS, ERP, and mobile apps.
          This leads to greater operational visibility and superior customer
          experience in a highly competitive industry.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="TECH SERVICES"
        title="We make Salesforce work smarter for you"
        img="/assets/images/tech-services/salesform-crm-hero.png"
        bg="#F3FFFF"
        page="salesforce"
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
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Salesforce CRM
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            As strategic partners, VegaCompass and Salesforce provide
            experience-led business transformation rooted in contextual
            knowledge. Together, we craft unique, high-quality, impactful
            solutions that deliver differentiated business outcomes.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            SERVICES
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Our Services
        </h2>
        <Accordian data={accordinaData} />
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            Solutions
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Vegacompass solutions on <br /> Salesforce platform
        </h2>
        <div className="w-full flex flex-wrap justify-start items-center">
          {tiles.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/2 self-stretch flex">
              <div className="m-2 self-stretch">
                <div className="border rounded-md pt-2 py-2 pb-3 text-left info-card">
                  <img
                    src={item.img}
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="w-full h-72 object-contain p-4"
                  />
                  <h3 className="ff-raleway font-semibold text-2xl text-blackone mt-11 px-8">
                    {item.title}
                  </h3>
                  <p className="text-[#585858] ff-lato mt-4 mb-6 px-8">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto text-center mt-32">
        <div className="w-full bg-[#FFF7F0] p-6 md:p-10 lg:p-24 rounded-xl">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              OFFERINGS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-10 mt-4">
            Industry-specific CRM, designed for you
          </h2>
          <AccordianBig data={accordionItems} />
        </div>
      </section>

      <section className="mt-24">
        <CaseStudiesSlides />
      </section>

      <Team />
      <TalkToExpert />

      <section className="w-full mx-auto text-center mt-28 testimonial-section">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          Hear from our clients
        </h2>
        <TestimonialSlider />
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
