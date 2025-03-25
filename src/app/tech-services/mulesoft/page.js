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
  "MuleSoft Integration | Connect Data for Business Efficiency",
  "Seamlessly integrate data and systems with expert MuleSoft integration services to enhance business connectivity."
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="TECH SERVICES"
        title="Simplify systems, enhance agility with MuleSoft CRM solutions"
        img="/assets/images/tech-services/hero-7.png"
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
          MuleSoft CRM
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At VegaCompass, we specialize in delivering cutting-edge MuleSoft
            technical services that help businesses unlock the full potential of
            their data and systems. MuleSoft, the leading integration platform
            for connecting applications, data, and devices, empowers businesses
            to streamline operations, enhance agility, and enable faster
            innovation. Whether you’re looking to implement MuleSoft for the
            first time or optimize your existing setup, our team of certified
            MuleSoft experts is here to ensure your integration journey is
            smooth and successful.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F8F0FF] py-20 mt-32 px-6">
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
                MuleSoft Integration & Implementation
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Implementing MuleSoft correctly is key to reaping the benefits
                of seamless integration. Our expert services include:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    End-to-end MuleSoft implementation, ensuring a smooth
                    deployment aligned with your business goals.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    API-led connectivity strategy development, enabling faster,
                    more efficient connections between applications, data, and
                    devices.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Custom API design and development for your unique business
                    needs, leveraging MuleSoft’s Anypoint Platform for scalable
                    and secure integrations.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/7-1.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/7-2.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                MuleSoft API Development & Management
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                APIs are the foundation of modern digital ecosystems. We help
                you create robust, secure APIs with MuleSoft:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Custom API development tailored to integrate with your
                    internal systems, external partners, or third-party
                    services.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    API lifecycle management, including versioning, security,
                    monitoring, and governance, ensuring your APIs remain secure
                    and scalable as your business grows.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    API Gateway configuration and optimization, securing your
                    APIs with MuleSoft’s Anypoint API Manager for maximum
                    protection and performance.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                System Integration & Data Synchronization
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Connecting all your business systems is essential for unified
                data flow and operational efficiency. We specialize in:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    System integration services, connecting your CRM, ERP, and
                    other business applications to create a unified ecosystem.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Data synchronization across platforms, ensuring real-time,
                    accurate data sharing between different departments and
                    systems.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Legacy system integration, helping you modernize older
                    platforms and enable seamless communication with modern
                    cloud-based applications.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/7-3.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/7-4.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                MuleSoft Cloud & Hybrid Integration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                MuleSoft supports a variety of deployment environments, from
                cloud to on-premise to hybrid. We offer:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Cloud integration services, enabling seamless communication
                    between cloud applications like Salesforce, AWS, Microsoft
                    Azure, and more.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Hybrid integration solutions, allowing you to connect your
                    on-premise systems with cloud applications, leveraging
                    MuleSoft’s Anypoint Platform for a unified experience.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Integration strategy consultation, helping you choose the
                    best approach (cloud, on-prem, or hybrid) based on your
                    current infrastructure and future needs.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                MuleSoft Monitoring, Maintenance & Support
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Keeping your integration ecosystem running smoothly is critical
                for business continuity. Our support services include:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    24/7 monitoring of your MuleSoft integration environment to
                    detect and resolve issues before they impact your
                    operations.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Proactive system maintenance, including regular updates,
                    security patches, and performance optimizations to keep your
                    systems running at peak efficiency.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Troubleshooting and technical support, providing rapid issue
                    resolution to minimize downtime and ensure your integrations
                    perform optimally.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/7-5.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/7-6.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                MuleSoft Training & Consulting
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                We empower your team to make the most of MuleSoft with hands-on
                training and consulting services:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Custom MuleSoft training for your IT team, ensuring they
                    understand how to use, manage, and develop integrations on
                    the Anypoint Platform.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    MuleSoft consulting to evaluate your current integration
                    architecture and provide recommendations for optimization
                    and scaling.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Best practices guidance to help your team build and manage
                    integrations that are scalable, secure, and aligned with
                    your business strategy.
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
