/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const TalkToExpert = () => {
  return (
    <section className="container mx-auto text-center mt-28 px-6 lg:px-28">
      <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3">
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-block rounded-xl">
            <img
              src="/assets/images/talktoexpert.png"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
          <h3 className="ff-raleway text-3xl text-blackone mt-4 mb-4 font-bold leading-tight">
            Talk to Our Experts
          </h3>
          <p className="ff-lato text-base text-blackone mt-4 mb-8">
            Book a session with our experts to explore customized CRM solutions
            for your business growth
          </p>
          <Link
            href="/contact-us"
            className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
          >
            Schedule an appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TalkToExpert;
