/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const CRMInquiry = () => {
  return (
    <section className="mt-28 bg-[--off-red5] w-full">
      <div className="container mx-auto text-center px-4 lg:px-28 py-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3">
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
            <h3 className="ff-raleway font-semibold text-3xl text-blackone mb-6">
              Got a CRM challenge or inquiry? Reach out to us
            </h3>

            <Link
              href="/contact-us"
              className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-right lg:pl-5 order-1 lg:order-none">
            <div className="inline-block rounded-xl">
              <img
                src="/assets/images/integration.svg"
                alt=""
                className="p-6 lg:p-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMInquiry;
