/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import { FaHeadphones } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");

  const [isloading, setIsloading] = useState(false);

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
  }

  const submitForm = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsloading(true);

    let isFormValid = true;

    if (fname?.length < 2 || !fname) {
      isFormValid = false;
      setFnameError("Enter valid first name.");
    }

    if (lname?.length < 2 || !lname) {
      isFormValid = false;
      setLnameError("Enter valid last name.");
    }

    if (!isValidEmail(email) || !email) {
      isFormValid = false;
      setEmailError("Enter valid email address.");
    }

    if (company?.length < 3 || !company) {
      isFormValid = false;
      setCompanyError("Enter valid company name.");
    }

    if (isFormValid) {
      //submit form
      const response = await axios.post(
        "https://api.vegacompass.com/contact-us",
        {
          fname: fname,
          lname: lname,
          company: company,
          email: email,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response.data.isSubmitted == "true" ||
        response.data.isSubmitted === true
      ) {
        toast.success(
          "Thank you! We've received your details and will get back to you soon."
        );
      } else {
        toast.error("Something went wrong.");
      }
    }

    setIsloading(false);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="container mx-auto flex justify-center flex-col items-center mt-32 lg:mt-48">
        <div className="text-center flex flex-col items-center">
          <h1 className="ff-raleway text-2xl md:text-3xl lg:text-4xl text-blackone capitalize font-bold">
            Contact Us
          </h1>
          <p className="text-blackone ff-lato mt-4">
            Have a question or need assistance? Our team is ready to help
          </p>
        </div>
      </section>

      <section className="container mx-auto text-left mt-16 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-blackone ff-lato pb-1 pt-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                value={fname}
                onFocus={() => setFnameError("")}
                onChange={(e) => setFname(e.target.value)}
                placeholder="Enter your first name"
                className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {!!fnameError && (
                <p className="text-rose-800 text-sm mt-1">{fnameError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-blackone ff-lato pb-1 pt-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                value={lname}
                onFocus={() => setLnameError("")}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Enter your last name"
                className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {!!lnameError && (
                <p className="text-rose-800 text-sm mt-1">{lnameError}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-blackone ff-lato pb-1 pt-2"
            >
              Business Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onFocus={() => setEmailError("")}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email address"
              className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {!!emailError && (
              <p className="text-rose-800 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="company"
              className="block text-blackone ff-lato pb-1 pt-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              onFocus={() => setCompanyError("")}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company name"
              className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {!!companyError && (
              <p className="text-rose-800 text-sm mt-1">{companyError}</p>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-blackone ff-lato pb-1 pt-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="mt-1 ff-lato block h-52 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="mt-6">
            {isloading ? (
              <button
                type="submit"
                onClick={(e) => submitForm(e)}
                className="w-full flex justify-center items-center text-sm ff-lato ease-in-up rounded-md bg-rose-400 py-3 px-8 text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-6 xl:px-9"
              >
                <svg
                  className="w-8 h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                >
                  <circle
                    fill="#FFF"
                    stroke="#FFF"
                    strokeWidth="15"
                    r="15"
                    cx="40"
                    cy="65"
                  >
                    <animate
                      attributeName="cy"
                      calcMode="spline"
                      dur="2"
                      values="65;135;65;"
                      keySplines=".5 0 .5 1;.5 0 .5 1"
                      repeatCount="indefinite"
                      begin="-.4"
                    ></animate>
                  </circle>
                  <circle
                    fill="#FFF"
                    stroke="#FFF"
                    strokeWidth="15"
                    r="15"
                    cx="100"
                    cy="65"
                  >
                    <animate
                      attributeName="cy"
                      calcMode="spline"
                      dur="2"
                      values="65;135;65;"
                      keySplines=".5 0 .5 1;.5 0 .5 1"
                      repeatCount="indefinite"
                      begin="-.2"
                    ></animate>
                  </circle>
                  <circle
                    fill="#FFF"
                    stroke="#FFF"
                    strokeWidth="15"
                    r="15"
                    cx="160"
                    cy="65"
                  >
                    <animate
                      attributeName="cy"
                      calcMode="spline"
                      dur="2"
                      values="65;135;65;"
                      keySplines=".5 0 .5 1;.5 0 .5 1"
                      repeatCount="indefinite"
                      begin="0"
                    ></animate>
                  </circle>
                </svg>
                <span className="ml-4">Please wait...</span>
              </button>
            ) : (
              <button
                type="submit"
                onClick={(e) => submitForm(e)}
                className="w-full mt-3 text-sm ff-lato ease-in-up rounded-md bg-red py-3 px-8 text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp lg:block md:px-9 lg:px-6 xl:px-9"
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-16 lg:mt-0">
          <div className="lg:ml-5 mb-8">
            <p className="ff-lato text-blackone font-semibold py-1">
              <FaHeadphones size={18} className="inline mr-2 text-blue-500" />{" "}
              US: +1 (551) 3690 230
            </p>
            <p className="ff-lato text-blackone font-semibold py-1">
              <FaHeadphones size={18} className="inline mr-2 text-blue-500" />{" "}
              Singapore : +65 (981) 999 38
            </p>
            <p className="ff-lato text-blackone font-semibold py-1">
              <FaHeadphones size={18} className="inline mr-2 text-blue-500" />{" "}
              India : +91 20 4691 0774
            </p>
            <p className="ff-lato text-blackone font-semibold py-1">
              <FaHeadphones size={18} className="inline mr-2 text-blue-500" />{" "}
              India : +91 940 5611 758
            </p>
            <p className="mt-3">
              Write to us at{" "}
              <a
                href="mailto:connect@vegacompass.com"
                className="font-bold text-blue-900"
              >
                connect@vegacompass.com
              </a>
            </p>
          </div>
          <img
            src="/assets/images/contact-us.png"
            alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
            className="w-full h-auto p-3"
          />
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16 lg:mt-32">
        <div className="text-center flex flex-col items-center">
          <h3 className="ff-raleway text-2xl md:text-3xl lg:text-4xl text-blackone capitalize font-semibold">
            Our Locations
          </h3>
        </div>
      </section>
      <section className="container mx-auto text-left mt-8 lg:mt-16 px-6 justify-between content-between flex flex-col lg:flex-row items-start">
        <div className="w-full lg:w-1/3 xl:1/4 lg:px-3">
          <p className="ff-lato font-semibold text-blackone">Pune (India)</p>
          <p className="text-[#585858] font-medium ff-lato leading-normal pt-3">
            Vegacompass Technologies Pvt Limited,
            <br />
            406, Ambrosia Galaxy,Pancard <br />
            Club Rd, Baner, Pune, India
          </p>
        </div>
        <div className="w-full lg:w-1/3 xl:1/4 lg:px-3 mt-16 lg:mt-0">
          <p className="ff-lato font-semibold text-blackone">Palo Alto (USA)</p>
          <p className="text-[#585858] font-medium ff-lato leading-normal pt-3">
            Jeremy Joseph
            <br />
            2625 Middlefield Rd, 447, <br />
            Palo Alto, California, United States
          </p>
        </div>
        <div className="w-full lg:w-1/3 xl:1/4 lg:px-3 mt-16 lg:mt-0">
          <p className="ff-lato font-semibold text-blackone">Austin (USA)</p>
          <p className="text-[#585858] font-medium ff-lato leading-normal pt-3">
            Vegacompass Technologies LLC,
            <br />
            3040, 701 Tillery Street Unit 12,
            <br /> Austin, TX, Travis,
            <br /> US, 78702
          </p>
        </div>
        <div className="w-full lg:w-1/3 xl:1/4 lg:px-3 mt-16 lg:mt-0">
          <p className="ff-lato font-semibold text-blackone">Singapore</p>
          <p className="text-[#585858] font-medium ff-lato leading-normal pt-3">
            Michael Lin
            <br />
            30, Ghim Moh Link,
            <br /># 03-00, Singapore
          </p>
        </div>
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
      <ToastContainer position="bottom-right" />
    </main>
  );
}
