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
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "Open Source CRM | Cost-Effective Solutions for Businesses",
  "Streamline sales, marketing, and customer service with open-source CRM solutions tailored for small and medium businesses."
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="TECH SERVICES"
        title="Optimize your sales, marketing, and service with Open source CRM"
        img="/assets/images/tech-services/hero-4.png"
        bg="#F3FFFF"
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
          Open Source for small business
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At VegaCompass, we are dedicated to helping small and medium
            businesses streamline their sales, marketing, and customer service
            operations using Open Source CRM. This helps optimize costs. Our
            expert CRM team provides a full range of Open Source CRM technical
            services, from initial setup and customization to complex
            integrations and ongoing support. Whether you&apos;re new to Open
            Source CRM or looking to improve your existing setup, we ensure a
            seamless, optimized experience.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#FFF7F0] py-20 mt-32 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              SERVICES
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            Our Services
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Open Source CRM Implementation & Setup
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                We take the complexity out of Open Source CRM setup by offering:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Complete Open Source CRM implementation, ensuring it aligns
                    with your business structure and objectives.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Configuration of essential modules and tools, including
                    leads, deals, contacts, and automation workflows.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Migration of data from legacy systems or other CRMs,
                    ensuring a smooth and hassle-free transition to Open Source
                    CRM.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/4-1.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/4-2.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Open Source CRM Configuration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Open Source CRM is incredibly flexible, but its true power comes
                with proper customization. Our team will:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Customize the CRM to fit your unique business processes,
                    including custom fields, modules, and layouts.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Build tailored automation workflows, alerts, and approval
                    processes to improve efficiency and reduce manual tasks.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Create custom reports and dashboards for data-driven
                    decision-making, giving you full visibility into your sales
                    and marketing performance.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Management & Migration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Data is key to CRM success. We offer comprehensive services to
                manage and protect your data:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Migrating your customer and business data from other CRMs or
                    legacy systems to Open Source CRM without data loss.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Cleaning and organizing your data for better reporting and
                    more effective sales tracking.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Ongoing data maintenance services, ensuring your CRM data
                    remains accurate, secure, and accessible.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/4-3.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/4-4.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Open Source CRM Automation & Workflow Design
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Streamline your business processes with powerful automation. Our
                services include:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Setting up advanced workflows to automate repetitive tasks,
                    saving time for your sales and support teams.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Automating lead scoring, follow-ups, and notifications to
                    enhance team productivity and boost customer engagement.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Open Source CRM Support & Troubleshooting
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Even the best CRM systems require ongoing support. We provide:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Dedicated technical support for resolving any Open Source
                    CRM issues, bugs, or errors.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Regular system audits to ensure your CRM is running at peak
                    performance.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Maintenance services to keep your CRM updated and optimized
                    as your business grows.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/4-5.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/4-6.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Open Source CRM Training & Consulting
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Empower your team to make the most of Open Source CRM with our
                expert training and consulting services:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Personalized training sessions for your sales, marketing,
                    and customer support teams, tailored to your workflows.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Best practices guidance on optimizing your CRM and improving
                    team adoption rates.
                  </span>
                </p>
              </div>
            </div>
          </div>
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
