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
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "MS Dynamics CRM | Streamline Operations with Microsoft Dynamics",
  "Optimize your business processes with Microsoft Dynamics CRM to enhance efficiency and maximize ROI."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/tech-services/2-1.png",
      title: "Sales",
      desc: "Attract & engage potential customer base and connect & serve them in real-time with omnichannel efficiency. With Dynamics 365 Sales.",
    },
    {
      id: 2,
      img: "/assets/images/tech-services/2-2.png",
      title: "Customer Service",
      desc: "Uplift Your Customer Experience And Strengthen Your Workforce Capability With Dynamics 365 Customer Service.",
    },
  ];

  const accordinaData = [
    {
      title: "Implementation Services",
      content: (
        <div>
          <p className="flex items-center">
            We empower your organization to adopt a standard and most modern
            approach while implementing Microsoft’s sophisticated technology.
            Our Innovative implementation services help you derive high business
            values and growth opportunities.
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/2-slide-1.png",
    },
    {
      title: "Upgrade Services",
      content: (
        <div>
          <p className="flex items-center">
            Upgrade your legacy system capabilities, automate process flows,
            adapt to change, and understand your employees and customers with
            our highly integrated and requirement-specific Dynamics 365 upgrade
            services.
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/2-slide-2.png",
    },
    {
      title: "Support and Scale",
      content: (
        <div>
          <p className="flex items-center">
            Drive business continuity, monitor your system and processes
            continuously, and ensure sustainability to attain long-term success
            with our personalized support services.
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/2-slide-3.png",
    },
  ];

  const accordionItems = [
    {
      title: "Finance",
      content: (
        <p>
          We help financial institutions transform client management and
          compliance processes using Microsoft Dynamics 365 and strategic CRM
          consulting. Our implementations span wealth management, lending, and
          insurance domains, with tailored solutions for onboarding,
          relationship management, and case handling. We build secure, scalable
          systems that support regulatory needs like KYC, AML, and audit
          tracking.
          <br />
          <br />
          Our consulting team understands the nuances of financial workflows,
          from portfolio management to loan servicing. We’ve integrated CRM
          platforms with core banking systems, document management tools, and
          communication platforms to create a seamless advisor and client
          experience. Dynamics CRM also enables segmentation, predictive
          insights, and personalized service offerings.
          <br />
          <br />
          With enhanced automation and analytics, financial institutions can
          deliver faster service, improve retention, and make more informed
          decisions. Our solutions ensure teams stay compliant while staying
          agile in a highly regulated and competitive environment. From digital
          onboarding to proactive customer engagement, we help finance clients
          lead with trust and technology.
        </p>
      ),
    },
    {
      title: "Manufacturing",
      content: (
        <p>
          In the manufacturing sector, we’ve helped clients modernize their
          customer engagement and partner management processes through tailored
          Microsoft Dynamics 365 solutions. Our work includes building CRM
          systems that integrate seamlessly with ERP platforms to support end-
          to-end order management, dealer onboarding, and field service
          automation. By optimizing lead-to-order workflows and enabling
          real-time visibility across sales and service teams, we&#39;ve
          empowered manufacturers to scale operations with greater efficiency.
          <br />
          <br />
          Our consulting team brings a deep understanding of
          manufacturing-specific needs, such as multi-tier distribution, complex
          pricing models, and compliance tracking. Our Dynamics implementations
          support predictive maintenance, warranty tracking, and seamless
          collaboration between engineering, sales, and service functions.
          <br />
          <br />
          Clients have seen improved productivity, faster order cycles, and
          better coordination across production and sales teams. Our data-driven
          CRM approach enables accurate forecasting, better customer insights,
          and stronger channel partner relationships. We ensure every solution
          is adaptable to evolving market demands and aligned with the client’s
          digital transformation goals.
        </p>
      ),
    },
    {
      title: "Hi-Tech",
      content: (
        <p>
          We work with high-tech companies to implement CRM strategies that
          support rapid growth, global expansion, and complex customer journeys.
          Using Microsoft Dynamics 365, we&#39;ve delivered scalable solutions
          that unify customer data across marketing, sales, product, and support
          functions. Our projects often focus on automating renewals, managing
          software licensing, and enabling cross-team collaboration for
          enterprise and SMB sales models.
          <br />
          <br />
          Our consulting team is experienced in designing CRM architectures for
          SaaS, hardware, and hybrid business models. Our Dynamics solutions
          integrate with customer support tools, and partner ecosystems,
          ensuring a 360-degree view of customers and products.
          <br />
          <br />
          We help high-tech clients stay ahead with tailored dashboards,
          advanced analytics, and automation that reduce manual effort and
          improve decision-making. Our CRM consulting empowers clients to
          deliver personalized, data-driven experiences and foster long-term
          customer loyalty in competitive markets. With scalable and secure
          solutions, we support your innovation journey from lead to renewal.
        </p>
      ),
    },
    {
      title: "Non-Profit",
      content: (
        <p>
          For non-profits, we deliver Microsoft Dynamics 365 solutions designed
          to manage donors, volunteers, programs, and beneficiaries in one
          unified platform. Our consulting focuses on building CRM systems that
          support mission delivery while ensuring data transparency and donor
          engagement. We’ve helped organizations improve fundraising efficiency,
          automate outreach, and centralize reporting to meet regulatory and
          board requirements.
          <br />
          <br />
          Our Dynamics implementations have empowered teams to manage campaigns,
          track grant funding, and streamline event planning. We tailor CRM
          features to handle recurring donations, volunteer scheduling, and
          constituent communications with ease. Our solutions align with the
          specific operational goals of non-profits—maximizing impact while
          minimizing administrative burden.
          <br />
          <br />
          We bring a consultative approach, helping non-profits build CRM
          strategies that scale with their mission and community reach. With
          improved data quality and process automation, organizations are better
          equipped to measure outcomes, improve stakeholder relationships, and
          drive engagement through personalized, impactful experiences.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="TECH SERVICES"
        title="Unlock the full potential of MS Dynamics CRM"
        img="/assets/images/tech-services/hero-2.png"
        bg="#F8F0FF"
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
          MS Dynamics CRM
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Simplify your end-to-end business processes and maximize outcomes
            with business applications from your trusted Microsoft Dynamics 365
            Expert. Together, we craft unique, high-quality, impactful solutions
            that deliver differentiated business outcomes.
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
          Vegacompass solutions on <br /> MS Dynamics platform
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
          Hear about our work
        </h2>
        <TestimonialSlider />
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
