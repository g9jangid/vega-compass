/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const DownloadModal = ({ heading, filename, handleClose }) => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
  }

  const submitForm = async () => {
    let isFormValid = true;

    if (fname?.length < 2 || !fname) {
      isFormValid = false;
      setError("Enter valid name.");
      return;
    }

    if (!isValidEmail(email) || !email) {
      isFormValid = false;
      setError("Enter valid email address.");
      return;
    }

    let name_arr = fname.split(" ");
    let firstname = name_arr[0];
    let lastname = name_arr.slice(1).join(" ") || "";

    if (isFormValid) {
      setError("");
      //submit form
      window.open("/downloads/" + filename, "_blank");
      handleClose();

      const response = await axios.post(
        "https://api.vegacompass.com/contact-us",
        {
          fname: firstname,
          lname: lastname,
          company: "n/a",
          email: email,
          message:
            "System generated message: User downloaded file: " + filename,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 w-screen h-screen z-[1000] bg-black/70">
      <section className="w-full max-w-[620px] p-6 fixed z-[1000] top-[20vh] left-1/2 -translate-x-1/2">
        <div className="w-full border border-[#DCDCE3] py-10 px-6 lg:px-10 bg-white shadow-lg rounded-lg relative">
          <span
            onClick={handleClose}
            className="inline-block cursor-pointer p-2 border-2 border-black/15 absolute -top-2 lg:-top-4 -right-2 lg:-right-4 rounded-lg bg-white"
          >
            <IoCloseSharp color="#000" size={20} />
          </span>

          <h4 className="text-blackone ff-raleway font-semibold text-2xl">
            {heading}
          </h4>
          <div className="w-full mt-8">
            <div className="">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-blackone ff-lato pb-1 pt-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email address"
                className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              onClick={(e) => submitForm(e)}
              className="w-full mt-8 mb-6 text-sm ff-lato ease-in-up rounded-md bg-red py-3 px-8 text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp lg:block md:px-9 lg:px-6 xl:px-9"
            >
              Verify and download
            </button>
            {!!error && (
              <p className="text-rose-800 text-sm mt-0 mb-3">{error}</p>
            )}
            <p className="ff-lato text-xs text-[#585858] italic">
              We respect your privacy. Your information is safe with us.
            </p>
          </div>
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default DownloadModal;
