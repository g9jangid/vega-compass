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
  "Customer Data Optimization & Cleanup | Improve CRM Accuracy",
  "Ensure data integrity and improve decision-making with expert CRM data optimization and cleanup services."
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Clean data, better decisions, stronger growth"
        img="/assets/images/tech-services/hero-9.png"
        bg="#FFF7F0"
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
          Customer data <br className="hidden lg:block" />
          optimization and clean-up
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            In today&apos;s data-driven world, businesses rely on accurate,
            well-organized customer data to drive decision-making, create
            targeted marketing strategies, and improve customer experiences. At
            VegaCompass, we offer Customer Data Optimization & Cleanup Services
            to help businesses make the most of their valuable customer
            information. By ensuring your data is accurate, consistent, and
            accessible, we enable your organization to operate more efficiently,
            enhance customer relationships, and make data-backed decisions that
            fuel growth.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F3FFFF] py-20 mt-32 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              SERVICES
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            Data optimization & clean-up solutions
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Standardization
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Inconsistent formats and redundant entries can clutter your
                customer data and make it difficult to use. We standardize your
                data to ensure uniformity, making it easier to analyze and
                utilize across various business processes.
              </p>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/9-1.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/9-2.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Cleansing & Validation
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Our team identifies and removes incomplete, inaccurate, and
                duplicated records to ensure your data is clean and reliable. By
                validating data sources and performing integrity checks, we help
                you maintain a trusted and accurate customer database.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Deduplication
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Duplicate records can lead to inefficient workflows and
                inaccurate insights. We utilize advanced algorithms and tools to
                identify and eliminate duplicate entries, streamlining your data
                to enhance accuracy and usability.
              </p>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/9-3.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/9-4.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Enrichment
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Raw customer data often lacks the depth necessary for
                comprehensive analysis. We enrich your data by supplementing it
                with additional relevant information, enabling deeper insights
                and more personalized customer interactions.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Segmentation
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Effective marketing and customer engagement strategies rely on
                segmented data. Our team organizes your customer data into
                meaningful segments, allowing you to target specific customer
                groups with precision, improving your marketing efforts and
                maximizing ROI.
              </p>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/9-5.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/tech-services/9-6.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Data Integration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                If your customer data is spread across multiple platforms or
                systems, we offer seamless data integration services. We
                consolidate your data into a single, unified database that
                enhances accessibility and usability across departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 flex flex-col mt-24">
        <div className="text-center">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              BENEFITS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-4 mt-4">
            Benefits of optimized and clean data
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center mt-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-6  flex flex-col bg-[#FBF9F8] rounded-2xl border-[8px] border-white box-border">
            <span className="mt-1">
              <svg
                width="78"
                height="77"
                viewBox="0 0 78 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="77" height="77" rx="5" fill="#F1E5FF" />
                <g clipPath="url(#clip0_889_2689)">
                  <path
                    d="M65.8044 30.4187L60.0466 40.9942C59.7426 41.555 59.1356 41.8816 58.4997 41.8301C57.8638 41.7774 57.3191 41.3553 57.1097 40.7525L56.2224 38.2C55.03 38.9606 53.5336 40.081 52.0684 41.6324C50.7825 42.9936 48.9123 45.3753 47.2344 48.1051L47.2483 31.0376C49.2625 29.4015 51.1768 28.2433 52.7602 27.4397L51.8127 24.4457C51.6161 23.8247 51.8127 23.1468 52.3101 22.7268C52.8074 22.3079 53.5078 22.2284 54.0868 22.527L65.1276 28.2165C65.5133 28.4152 65.8022 28.76 65.9301 29.1748C66.0568 29.5893 66.0117 30.0385 65.8044 30.4187Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M46.663 23.0273H44.0311L44.0118 46.2259C41.9781 40.5334 38.8172 35.3562 34.8401 31.3253C34.2321 30.7055 33.6069 30.1102 32.9667 29.542V23.0274H30.3348C28.9717 23.0725 28.1918 21.2913 29.1532 20.3201L37.3173 11.5108C37.922 10.8297 39.0758 10.8297 39.6805 11.5108L47.8446 20.3201C48.806 21.2902 48.0272 23.0724 46.663 23.0273Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M40.5545 46.1842C38.7168 41.4935 36.048 37.156 32.5407 33.5836C29.5467 30.5283 26.5432 28.6084 24.239 27.4396L25.1865 24.4455C25.65 23.1338 24.1277 21.8479 22.9124 22.5269L11.8724 28.2163C11.082 28.6027 10.7594 29.6554 11.1956 30.4187L16.9525 40.9942C17.5611 42.208 19.4871 42.0484 19.8894 40.7525L20.7767 38.1999C21.9691 38.9606 23.4644 40.081 24.9296 41.6324C29.8135 46.8052 32.0967 54.042 32.8306 61.3996C32.923 62.3397 32.9671 63.3173 32.9671 64.3883C32.9671 65.2779 33.6889 65.9997 34.5784 65.9997H42.387C43.2699 66.0183 44.043 65.2224 43.9972 64.34C43.7932 57.6041 42.6352 51.4966 40.5545 46.1842Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_889_2689">
                    <rect
                      width="55"
                      height="55"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Enhanced Decision-Making
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                Clean and organized data provides the foundation for making
                informed, data-driven decisions that benefit your business and
                your customers.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-6  flex flex-col bg-[#FBF9F8] rounded-2xl border-[8px] border-white box-border">
            <span className="mt-1">
              <svg
                width="78"
                height="77"
                viewBox="0 0 78 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="77" height="77" rx="5" fill="#F1E5FF" />
                <g clipPath="url(#clip0_889_2705)">
                  <path
                    d="M38.502 33.1968C43.6634 33.1968 47.8477 29.0126 47.8477 23.8511C47.8477 18.6896 43.6634 14.5054 38.502 14.5054C33.3405 14.5054 29.1562 18.6896 29.1562 23.8511C29.1562 29.0126 33.3405 33.1968 38.502 33.1968Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M57.4082 33.1968C60.6712 33.1968 63.3164 30.5516 63.3164 27.2886C63.3164 24.0256 60.6712 21.3804 57.4082 21.3804C54.1452 21.3804 51.5 24.0256 51.5 27.2886C51.5 30.5516 54.1452 33.1968 57.4082 33.1968Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M19.5957 33.1968C22.8587 33.1968 25.5039 30.5516 25.5039 27.2886C25.5039 24.0256 22.8587 21.3804 19.5957 21.3804C16.3327 21.3804 13.6875 24.0256 13.6875 27.2886C13.6875 30.5516 16.3327 33.1968 19.5957 33.1968Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M25.4149 38.5022C23.0893 36.5967 20.983 36.8489 18.2939 36.8489C14.2721 36.8489 11 40.1017 11 44.0988V55.8304C11 57.5663 12.4169 58.9779 14.1593 58.9779C21.6816 58.9779 20.7754 59.114 20.7754 58.6534C20.7754 50.3405 19.7908 44.2442 25.4149 38.5022Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M41.0574 36.8919C36.3605 36.5001 32.2779 36.8964 28.7565 39.803C22.8637 44.5231 23.9978 50.8785 23.9978 58.6534C23.9978 60.7104 25.6714 62.4153 27.7597 62.4153C50.4345 62.4153 51.3369 63.1468 52.6815 60.1691C53.1225 59.1622 53.0017 59.4822 53.0017 49.8491C53.0017 42.1979 46.3766 36.8919 41.0574 36.8919Z"
                    fill="#BD90F4"
                  />
                  <path
                    d="M58.7069 36.8492C56.0031 36.8492 53.9085 36.5995 51.5859 38.5024C57.1681 44.2018 56.2255 49.8821 56.2255 58.6537C56.2255 59.1171 55.4732 58.9781 62.7288 58.9781C64.5335 58.9781 66.0009 57.5161 66.0009 55.7189V44.0991C66.0009 40.1019 62.7288 36.8492 58.7069 36.8492Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_889_2705">
                    <rect
                      width="55"
                      height="55"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Improved Customer Experience
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                With accurate customer information at your fingertips, you can
                create more personalized, relevant interactions with your
                customers.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-6  flex flex-col bg-[#FBF9F8] rounded-2xl border-[8px] border-white box-border">
            <span className="mt-1">
              <svg
                width="78"
                height="77"
                viewBox="0 0 78 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="77" height="77" rx="5" fill="#F1E5FF" />
                <g clipPath="url(#clip0_889_2723)">
                  <path
                    d="M38.5 11C23.3128 11 11 23.3128 11 38.5C11 53.6872 23.3128 66 38.5 66C53.6872 66 66 53.6872 66 38.5C66 23.3128 53.6872 11 38.5 11ZM46.3992 49.3416C45.1996 50.8014 43.6379 51.786 41.8158 52.284C41.0237 52.499 40.6615 52.9177 40.7068 53.7438C40.7407 54.5586 40.7068 55.3621 40.6955 56.177C40.6955 56.9012 40.322 57.286 39.6091 57.3086C39.1451 57.32 38.6811 57.3313 38.2171 57.3313C37.8097 57.3313 37.4023 57.3313 36.9949 57.32C36.2253 57.3086 35.8632 56.8673 35.8632 56.1204C35.8519 55.5319 35.8519 54.9321 35.8519 54.3436C35.8405 53.0309 35.7953 52.9856 34.5391 52.7819C32.9321 52.5216 31.3477 52.1595 29.8765 51.4465C28.7222 50.8807 28.5977 50.5977 28.9259 49.3755C29.1749 48.4702 29.4239 47.5648 29.7068 46.6708C29.9105 46.0144 30.1029 45.7202 30.4537 45.7202C30.6574 45.7202 30.9177 45.822 31.2685 46.0031C32.8981 46.8518 34.6296 47.3272 36.4516 47.5535C36.7572 47.5874 37.0628 47.6101 37.3683 47.6101C38.2171 47.6101 39.0432 47.4516 39.8467 47.1008C41.8724 46.2181 42.1893 43.8755 40.4805 42.4722C39.9033 41.9969 39.2356 41.6461 38.5453 41.3405C36.7685 40.5597 34.9239 39.9712 33.249 38.964C30.5329 37.3344 28.8128 35.1049 29.0165 31.8004C29.2428 28.0658 31.3591 25.7346 34.7881 24.4897C36.2027 23.9805 36.214 23.9918 36.214 22.5206C36.214 22.0226 36.2027 21.5247 36.2253 21.0154C36.2593 19.9064 36.4403 19.714 37.5494 19.68C37.6739 19.68 37.8097 19.68 37.9342 19.68C38.1492 19.68 38.3642 19.68 38.5792 19.68C38.6698 19.68 38.7603 19.68 38.8395 19.68C40.9444 19.68 40.9444 19.7706 40.9558 22.0453C40.9671 23.7202 40.9671 23.7202 42.6307 23.9805C43.9095 24.1842 45.1204 24.5576 46.2973 25.0782C46.9424 25.3611 47.1914 25.8138 46.9877 26.5041C46.6934 27.5226 46.4105 28.5525 46.0936 29.5597C45.8899 30.1708 45.6975 30.4537 45.3354 30.4537C45.1317 30.4537 44.8827 30.3745 44.5658 30.216C42.9362 29.4239 41.2274 29.0391 39.4393 29.0391C39.213 29.0391 38.9753 29.0504 38.749 29.0617C38.2171 29.0957 37.6965 29.1636 37.1986 29.3786C35.4331 30.1481 35.1502 32.0947 36.6553 33.2942C37.4136 33.9053 38.285 34.3354 39.179 34.7088C40.7407 35.3539 42.3025 35.9763 43.785 36.7912C48.4475 39.394 49.715 45.3128 46.3992 49.3416Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_889_2723">
                    <rect
                      width="55"
                      height="55"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Cost Savings
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                Data cleanup reduces the overhead associated with storing and
                managing redundant or inaccurate data, helping you save on IT
                and operational costs.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-6  flex flex-col bg-[#FBF9F8] rounded-2xl border-[8px] border-white box-border">
            <span className="mt-1">
              <svg
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="77" height="77" rx="5" fill="#F1E5FF" />
                <path
                  d="M62.3843 18.6975C62.2855 17.9884 61.7753 17.405 61.0856 17.2133L38.9802 11.0658C38.665 10.9781 38.3321 10.9781 38.0168 11.0658L15.9113 17.2133C15.2216 17.405 14.7114 17.9881 14.6126 18.6975C14.4844 19.6194 11.5595 41.4028 19.0618 52.2393C26.5552 63.063 37.6096 65.8367 38.0764 65.9496C38.2152 65.9831 38.3566 65.9996 38.4985 65.9996C38.6403 65.9996 38.7817 65.9829 38.9205 65.9496C39.3876 65.8367 50.442 63.063 57.9351 52.2393C65.4374 41.403 62.5125 19.6197 62.3843 18.6975ZM52.7536 31.4148L37.6755 46.493C37.3246 46.8438 36.8645 47.0195 36.4046 47.0195C35.9447 47.0195 35.4846 46.8441 35.1337 46.493L25.8111 37.1703C25.4739 36.8333 25.2846 36.3761 25.2846 35.8994C25.2846 35.4228 25.4741 34.9655 25.8111 34.6285L27.6621 32.7775C28.3641 32.0758 29.5022 32.0755 30.2039 32.7775L36.4046 38.9782L48.3608 27.0218C48.6978 26.6846 49.155 26.4953 49.6317 26.4953C50.1084 26.4953 50.5656 26.6846 50.9026 27.0218L52.7536 28.8728C53.4556 29.5748 53.4556 30.7129 52.7536 31.4148Z"
                  fill="#BD90F4"
                />
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Regulatory Compliance
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                Maintain compliance with data privacy regulations such as GDPR,
                CCPA, and HIPAA by ensuring that your data is accurate and up to
                date.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-6  flex flex-col bg-[#FBF9F8] rounded-2xl border-[8px] border-white box-border">
            <span className="mt-1">
              <svg
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="77" height="77" rx="5" fill="#F1E5FF" />
                <path
                  d="M61.2047 31.3501C60.2018 31.2044 59.2447 30.8344 58.4046 30.2675C57.5645 29.7006 56.8632 28.9515 56.3527 28.076C55.8423 27.2005 55.5359 26.2211 55.4565 25.2108C55.377 24.2005 55.5265 23.1853 55.8938 22.2407C56.1273 21.6232 56.1617 20.9481 55.9921 20.3101C55.8226 19.6721 55.4577 19.1031 54.9485 18.6829C52.7004 16.7951 50.1415 15.3122 47.386 14.3001C46.7585 14.067 46.0735 14.0379 45.4285 14.2169C44.7835 14.3959 44.2114 14.7738 43.7938 15.297C43.1652 16.1007 42.3618 16.7508 41.4446 17.1979C40.5274 17.645 39.5204 17.8774 38.5 17.8774C37.4797 17.8774 36.4727 17.645 35.5555 17.1979C34.6382 16.7508 33.8349 16.1007 33.2063 15.297C32.7887 14.7738 32.2166 14.3959 31.5716 14.2169C30.9266 14.0379 30.2416 14.067 29.6141 14.3001C27.0698 15.2345 24.6909 16.569 22.5672 18.2532C22.0319 18.677 21.6463 19.261 21.4669 19.9198C21.2876 20.5786 21.3238 21.2775 21.5703 21.9141C21.967 22.8837 22.1308 23.9327 22.0488 24.977C21.9668 26.0213 21.6412 27.0318 21.098 27.9275C20.5549 28.8232 19.8094 29.5792 18.9214 30.1348C18.0334 30.6903 17.0275 31.03 15.9844 31.1266C15.3072 31.1991 14.6712 31.487 14.1699 31.948C13.6687 32.409 13.3287 33.0188 13.2 33.6876C12.88 35.2718 12.7188 36.8839 12.7188 38.5001C12.7164 39.8531 12.8257 41.2041 13.0453 42.5392C13.1547 43.2293 13.4884 43.8643 13.9948 44.3459C14.5012 44.8274 15.1521 45.1287 15.8469 45.2032C16.9129 45.3032 17.9394 45.6572 18.8405 46.2353C19.7416 46.8135 20.4911 47.5991 21.0262 48.5264C21.5614 49.4537 21.8667 50.4957 21.9165 51.5652C21.9663 52.6347 21.7592 53.7005 21.3125 54.6735C21.0202 55.3064 20.9477 56.0189 21.1065 56.6977C21.2653 57.3765 21.6464 57.9828 22.1891 58.4204C24.4237 60.2739 26.9579 61.7328 29.6829 62.7345C30.0313 62.8552 30.3969 62.919 30.7657 62.9235C31.2713 62.9224 31.7692 62.8001 32.2178 62.5669C32.6664 62.3336 33.0525 61.9962 33.3438 61.5829C33.9564 60.6904 34.7775 59.9609 35.736 59.4577C36.6945 58.9545 37.7613 58.6928 38.8438 58.6954C39.8927 58.6967 40.9267 58.9429 41.8637 59.4144C42.8006 59.8858 43.6146 60.5695 44.2407 61.411C44.6571 61.9708 45.2471 62.3772 45.9185 62.5669C46.59 62.7565 47.3054 62.7187 47.9532 62.4595C50.4448 61.4567 52.7645 60.0707 54.8282 58.3516C55.3466 57.923 55.7157 57.3411 55.8825 56.6894C56.0492 56.0378 56.0051 55.35 55.7563 54.7251C55.352 53.7681 55.1758 52.7302 55.2414 51.6933C55.307 50.6565 55.6128 49.6491 56.1345 48.7507C56.6562 47.8523 57.3796 47.0874 58.2476 46.5165C59.1156 45.9456 60.1044 45.5843 61.136 45.461C61.8049 45.3685 62.427 45.0655 62.9121 44.5958C63.3973 44.1261 63.7203 43.5141 63.8344 42.8485C64.1105 41.4149 64.26 39.9599 64.2813 38.5001C64.2816 36.9603 64.1378 35.4239 63.8516 33.911C63.7356 33.2601 63.4173 32.6624 62.9422 32.2026C62.467 31.7429 61.8591 31.4446 61.2047 31.3501ZM47.0938 38.5001C47.0938 40.1998 46.5898 41.8613 45.6455 43.2745C44.7012 44.6878 43.359 45.7892 41.7887 46.4397C40.2184 47.0901 38.4905 47.2603 36.8235 46.9287C35.1565 46.5971 33.6252 45.7786 32.4233 44.5768C31.2215 43.3749 30.403 41.8437 30.0714 40.1766C29.7398 38.5096 29.91 36.7817 30.5604 35.2114C31.2109 33.6411 32.3124 32.2989 33.7256 31.3546C35.1388 30.4104 36.8004 29.9063 38.5 29.9063C40.7792 29.9063 42.9651 30.8117 44.5767 32.4234C46.1884 34.035 47.0938 36.2209 47.0938 38.5001Z"
                  fill="#BD90F4"
                />
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Streamlined Operations
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                Eliminate inefficiencies in your workflows by removing
                unnecessary or incorrect data, improving productivity across
                your organization.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFF7F0] py-20 mt-32 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              PROCESS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            Our proven process for data excellence
          </h2>
          <div className="w-full flex flex-wrap justify-center mt-8 max-w-[900px]">
            <div className="w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col">
              <span className="mt-1 text-[#D7975F] ff-raleway font-semibold text-4xl">
                01
              </span>
              <div className="flex-1 pt-4">
                <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                  Data Assessment
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  We begin by performing a thorough audit of your customer data
                  to identify issues such as incomplete or inaccurate records,
                  duplicates, and inconsistencies.
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col">
              <span className="mt-1 text-[#D7975F] ff-raleway font-semibold text-4xl">
                02
              </span>
              <div className="flex-1 pt-4">
                <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                  Clean-up & Optimization
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Our team utilizes cutting-edge tools and industry-leading
                  techniques to clean, standardize, and enrich your data while
                  eliminating duplicates and redundant information.
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col">
              <span className="mt-1 text-[#D7975F] ff-raleway font-semibold text-4xl">
                03
              </span>
              <div className="flex-1 pt-4">
                <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                  Ongoing Maintenance
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Data clean-up isn’t a one-time task. We offer ongoing data
                  management services to ensure your data remains clean,
                  organized, and optimized as your business grows.
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/2 p-6 flex flex-col">
              <span className="mt-1 text-[#D7975F] ff-raleway font-semibold text-4xl">
                04
              </span>
              <div className="flex-1 pt-4">
                <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                  Custom Solutions
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Every business is unique, and so is its data. We tailor our
                  data optimization and cleanup services to meet the specific
                  needs and objectives of your organization.
                </span>
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
