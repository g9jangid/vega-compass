/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation/Navigation";
import HomeSlider from "@/components/HomeSlider";
import LogoSlider from "@/components/LogoSlider";
import Footer from "@/components/Footer";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeSlider />

      <section className="container mx-auto text-center mt-28 testimonial-section">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          Hear from our clients
        </h2>
        <TestimonialSlider />
      </section>

      <section className="container mx-auto px-6 flex justify-center flex-col items-center mt-28">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          CRM engagements by our team
        </h2>
        <LogoSlider />
      </section>

      <section className="container mx-auto text-center mt-28 px-6 lg:px-28">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          Our Offerings
        </h2>

        <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3">
          <div className="w-full lg:w-1/2 text-left">
            <div className=" inline-block py-6 px-9 bg-[--off-red3] hover:bg-[--off-red4] rounded-xl">
              <img
                src="/assets/images/crm-consulting.png"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
            <h3 className="ff-raleway font-semibold text-3xl text-blackone">
              CRM Consulting
            </h3>
            <p className="ff-lato text-base text-blackone mt-4 mb-6">
              At VegaCompass, we bring decades of CRM consulting expertise to
              help businesses overcome challenges, optimize processes, and
              achieve scalable growth. We focus on improving customer
              interactions, streamlining operations, and driving long-term value
            </p>
            <Link
              href="/consulting"
              className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
            >
              learn More
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3">
          <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
            <h3 className="ff-raleway font-semibold text-3xl text-blackone">
              Technologies
            </h3>
            <p className="ff-lato text-base text-blackone mt-4 mb-6">
              VegaCompass leverages cutting-edge CRM technologies to transform
              your business processes. With expertise in leading CRM platforms,
              we provide end-to-end technical solutions, including seamless
              implementations, custom developments, and ongoing support to
              enhance your operational efficiency.
            </p>
            <Link
              href="/tech-services"
              className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
            >
              learn More
            </Link>
          </div>

          <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
            <div className="inline-block py-6 px-9 bg-[--off-red3] hover:bg-[--off-red4] rounded-xl">
              <img
                src="/assets/images/technologies.png"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3">
          <div className="w-full lg:w-1/2 text-left">
            <div className=" inline-block py-6 px-9 bg-[--off-red3] hover:bg-[--off-red4] rounded-xl">
              <img
                src="/assets/images/innovation.png"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
            <h3 className="ff-raleway font-semibold text-3xl text-blackone">
              Innovation
            </h3>
            <p className="ff-lato text-base text-blackone mt-4 mb-6">
              Our innovative CRM solutions, powered by advanced AI-driven tools,
              are designed to optimize customer engagement, streamline
              workflows, and provide actionable insights. At VegaCompass, we
              blend creativity and technology to deliver futuristic solutions
              that set your business apart.
            </p>
            <Link
              href="/innovations"
              className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
            >
              learn More
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#FFF7F0] w-full py-24 mt-28">
        <section className="container mx-auto px-6 flex justify-center flex-col items-center text-center ">
          <h2 className="ff-raleway text-2xl md:text-3xl lg:text-4xl font-bold text-blackone mb-2">
            If our{" "}
            <span className="text-red">CRM process or technical work</span>
            <br className="hidden lg:block" />
            doesn&apos;t meet your needs,
            <br className="hidden lg:block" />
            <span className="text-red">we’ll</span> remake it until it does.
          </h2>
          <p className="text-blackone ff-lato text-lg mt-3">
            (Again+ again as long as it takes)
          </p>
          <p className="text-blackone ff-lato text-lg mt-2">
            Your satisfaction is our priority :)
          </p>
        </section>
      </div>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
