/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const TeamModal = ({ onClose, data }) => {
  const handleSectionclick = (e) => {
    if (e.target.classList.contains("no-doc-scroll")) {
      onClose();
    }
  };
  return (
    <section
      className="w-screen bg-black/25 fixed h-screen top-0 left-0 bottom-0 z-[11111] flex justify-center items-center no-doc-scroll"
      onClick={(e) => handleSectionclick(e)}
    >
      <div className="w-[90%] md:w-4/5 h-auto max-h-[80vh] p-6 md:p-9 bg-white overflow-y-auto flex flex-col md:flex-row rounded-xl max-w-[900px] relative">
        <div className="w-full md:w-56 lg:w-80 mt-10 md:mt-0">
          <img
            src={`/assets/images/team/${data.img}`}
            className="w-full aspect-square object-cover object-center rounded-lg"
            alt=""
          />
          <div className="mt-6">
            {data?.linkedin && (
              <div className="flex items-center mb-3">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5967 13.0893C25.5967 19.9777 19.9901 25.5655 13.0696 25.5655C6.14903 25.5655 0.542446 19.9777 0.542446 13.0893C0.542446 6.20081 6.14903 0.613003 13.0696 0.613003C19.9901 0.613003 25.5967 6.20081 25.5967 13.0893Z"
                    stroke="#C40A23"
                    strokeWidth="1.08489"
                  />
                  <path
                    d="M5.82887 9.61735H9.01025V19.1539H5.82887V9.61735ZM7.44086 5.02032C6.352 5.02032 5.64062 5.73238 5.64062 6.66698C5.64062 7.58236 6.33118 8.31512 7.39922 8.31512H7.41951C8.52918 8.31512 9.22023 7.58233 9.22023 6.66698C9.19941 5.73238 8.52921 5.02032 7.44086 5.02032ZM16.8214 9.39333C15.1327 9.39333 14.3762 10.3186 13.9541 10.9674V9.61735H10.7718C10.8139 10.512 10.7718 19.1539 10.7718 19.1539H13.9541V13.828C13.9541 13.5428 13.9749 13.2586 14.0587 13.0542C14.2891 12.4848 14.8127 11.8951 15.6909 11.8951C16.8432 11.8951 17.3034 12.7701 17.3034 14.0515V19.1539H20.4853V13.6854C20.4853 10.7563 18.9159 9.39333 16.8214 9.39333Z"
                    fill="#C40A23"
                  />
                </svg>
                <a
                  href={data?.linkedin}
                  target="_blank"
                  className="text-[#2496C4] ff-lato text-sm underline flex-1 pl-2"
                >
                  <span className="hidden lg:inline">{data?.linkedin}</span>
                  <span className="inline lg:hidden">
                    View Linkedin Profile
                  </span>
                </a>
              </div>
            )}
            {data?.twitter && (
              <div className="flex items-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5967 13.4849C25.5967 20.3733 19.9901 25.9612 13.0696 25.9612C6.14903 25.9612 0.542446 20.3733 0.542446 13.4849C0.542446 6.59644 6.14903 1.00863 13.0696 1.00863C19.9901 1.00863 25.5967 6.59644 25.5967 13.4849Z"
                    stroke="#C40A23"
                    strokeWidth="1.08489"
                  />
                  <path
                    d="M6.07582 6.57178L11.8961 14.1979L6.03906 20.3982H7.35724L12.485 14.9697L16.6282 20.3982H21.114L14.9662 12.3432L20.4179 6.57178H19.0997L14.3773 11.5713L10.5616 6.57178H6.07582ZM8.01429 7.52327H10.0751L19.1752 19.4466H17.1144L8.01429 7.52327Z"
                    fill="#C40A23"
                  />
                </svg>
                <a
                  href={data?.twitter}
                  target="_blank"
                  className="text-[#2496C4] ff-lato text-sm underline  flex-1 pl-2"
                >
                  <span className="hidden lg:inline">{data?.twitter}</span>
                  <span className="inline lg:hidden">
                    View Linkedin Profile
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-auto flex-1 mt-6 md:mt-0 md:px-6 lg:px-8 pt-3">
          <p className="text-blackone ff-raleway text-4xl font-semibold member-name">
            {data.name}
          </p>
          <p className="text-[#737373] uppercase ff-lato text-sm member-desg pt-3 pb-6">
            {data.desg}
          </p>
          <Link
            href="/contact-us"
            className="text-sm ff-lato ease-in-up inline-flex justify-center items-center rounded-md bg-red py-3 px-8 text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:px-9 lg:px-6 xl:px-9"
          >
            Book a Call{" "}
            <svg
              width="29"
              height="9"
              viewBox="0 0 29 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="pl-3 scale-[2]"
            >
              <path
                d="M28.334 5.34469C28.5458 5.13285 28.5458 4.78939 28.334 4.57756L24.8819 1.12545C24.6701 0.913611 24.3266 0.913611 24.1148 1.12545C23.9029 1.33729 23.9029 1.68075 24.1148 1.89258L27.1833 4.96112L24.1148 8.02966C23.9029 8.2415 23.9029 8.58496 24.1148 8.7968C24.3266 9.00863 24.6701 9.00863 24.8819 8.7968L28.334 5.34469ZM0.828125 5.50357L27.9504 5.50357L27.9504 4.41868L0.828125 4.41867L0.828125 5.50357Z"
                fill="white"
              />
            </svg>
          </Link>
          <p className="text-blackone ff-lato mt-6">
            {data?.bio?.map((item, i) => (
              <span key={i} className="pb-0">
                {item}
                <br />
                <br />
              </span>
            ))}
          </p>
        </div>
        <div
          className="absolute cursor-pointer right-0 top-0 p-6 z-10 scale-[1.2]"
          onClick={onClose}
        >
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2674 0.99997C10.1112 0.843744 9.89923 0.755981 9.67826 0.755981C9.45729 0.755981 9.24537 0.843744 9.08909 0.99997L5.26743 4.82164L1.44576 0.99997C1.28949 0.843744 1.07756 0.755981 0.856593 0.755981C0.635623 0.755981 0.423699 0.843744 0.267426 0.99997C0.1112 1.15624 0.0234375 1.36817 0.0234375 1.58914C0.0234375 1.81011 0.1112 2.02203 0.267426 2.1783L4.08909 5.99997L0.267426 9.82164C0.1112 9.97791 0.0234375 10.1898 0.0234375 10.4108C0.0234375 10.6318 0.1112 10.8437 0.267426 11C0.423699 11.1562 0.635623 11.244 0.856593 11.244C1.07756 11.244 1.28949 11.1562 1.44576 11L5.26743 7.1783L9.08909 11C9.24537 11.1562 9.45729 11.244 9.67826 11.244C9.89923 11.244 10.1112 11.1562 10.2674 11C10.4237 10.8437 10.5114 10.6318 10.5114 10.4108C10.5114 10.1898 10.4237 9.97791 10.2674 9.82164L6.44576 5.99997L10.2674 2.1783C10.4237 2.02203 10.5114 1.81011 10.5114 1.58914C10.5114 1.36817 10.4237 1.15624 10.2674 0.99997Z"
              fill="#BAB3B4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TeamModal;
