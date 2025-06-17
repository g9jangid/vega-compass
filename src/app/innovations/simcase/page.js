import Navigation from "@/components/Navigation/Navigation";
import VideoPalyerSection from "@/components/VideoPalyerSection";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import HeroOne from "@/components/HeroOne";
import getSEOTags from "@/utils/getSeoTags";
export const metadata = getSEOTags(
  "SimCase | Centralized Customer Communication & Insights",
  "Optimize customer service with SimCase, a CRM tool that unifies communication channels for improved service management."
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="INNOVATIONS"
        title={
          <>
            {" "}
            <span className="text-[#C40A23]">
              VEGA CUSTOMER SUPPORT AI:
            </span>{" "}
            See Vega Agents automate end to end customer support management
          </>
        }
        img="/assets/images/innovations/simcase-hero.png"
        bg="#F3FFFF"
        page="simcase"
        textPortion="wide"
      />

      <VideoPalyerSection
        title={"Check the demo"}
        ytcode="IwppQWVx3O4"
        img="simcase-video.jpg"
      />

      <section className="container mx-auto flex flex-col mt-32 px-6 lg:px-28">
        <div className="text-left flex flex-col">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            PROCESS
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-left mt-3 px-6 flex flex-col lg:px-28">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          What these AI Agents do together
        </h2>

        <div className="w-full flex flex-wrap text-left">
          <p className="ff-lato text-blackone leading-normal">
            1. Customer audio from call center into Transcription Delivers a
            clear, concise textual representation of the customer&apos;s initial
            message, facilitating efficient review and action.{" "}
            <span className="block mb-2 clear-both"></span>
            2. Case Creation & Initial Processing A case is created when a
            customer submits a query or issue through an audio file.{" "}
            <span className="block mb-2 clear-both"></span>
            3. Case Summarization & Sentiment Analysis Automatically generates a
            concise summary of the case. Analyzes customer sentiment to
            determine the tone (positive, neutral, or negative).{" "}
            <span className="block mb-2 clear-both"></span>
            4. Similar Closed Cases Recommendation Displays relevant closed
            cases with similar issues to improve agent case resolution
            efficiency. <span className="block mb-2 clear-both"></span>
            5. Critical Case Alert – CTA Planning If a contact has created three
            or more negative sentiment cases within the last 20 days, the
            support manager receives an email notification for further action.{" "}
            <span className="block mb-2 clear-both"></span>
            6. Customer Notification & Case Resolution Decision An email
            notification is sent to the contact containing potential solutions
            from a PDF file. The email includes Yes/No options for resolution
            confirmation: Yes: The case is auto-closed based on the customer’s
            response. No: The case is automatically assigned to a new owner who
            has recently resolved similar cases.{" "}
            <span className="block mb-2 clear-both"></span>
            7. Enhancing Customer Support with AI-Powered Assistance The
            Community Portal enables public users to interact with service
            agents and receive accurate responses from uploaded PDFs in
            Salesforce, ensuring efficient and reliable support.
          </p>
        </div>
      </section>

      {/* <section className="container mx-auto flex justify-center flex-col items-center mt-24">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            SOLUTIONS
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6 justify-center flex flex-col items-center">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Support made smarter with SimCase
        </h2>

        <div className="w-full flex flex-wrap justify-start items-start text-left mt-3 max-w-[900px]">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-5 px-3">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1092_3780)">
                <rect width="35" height="35" fill="white" />
                <path
                  d="M34.3584 31.2743L27.5842 24.4972C32.653 17.7236 31.2709 8.12341 24.4972 3.05465C17.7236 -2.01411 8.12341 -0.632024 3.05465 6.14161C-2.01411 12.9152 -0.632024 22.5154 6.14161 27.5842C11.5827 31.6559 19.056 31.6559 24.4972 27.5842L31.2743 34.3612C32.1259 35.2129 33.5067 35.2129 34.3583 34.3612C35.21 33.5096 35.21 32.1288 34.3583 31.2772L34.3584 31.2743ZM15.3759 26.2762C9.35582 26.2762 4.47564 21.396 4.47564 15.3759C4.47564 9.35582 9.35582 4.47564 15.3759 4.47564C21.396 4.47564 26.2762 9.35582 26.2762 15.3759C26.2698 21.3933 21.3933 26.2698 15.3759 26.2762Z"
                  fill="#BD90F4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1092_3780">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className="ff-raleway font-semibold text-blackone text-xl pt-3">
              Quick Case Matching
            </h5>
            <p className="ff-lato text-blackone text-sm pt-2">
              SimCase identifies similar cases instantly in CRM while working on
              any query
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-5 px-3">
            <svg
              width="35"
              height="33"
              viewBox="0 0 35 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12.1118V25.25C0.00485352 29.275 3.26662 32.5368 7.29169 32.5416H27.7084C31.7334 32.5368 34.9952 29.275 35 25.25V11.95L0 12.1118Z"
                fill="#BD90F4"
              />
              <path
                d="M27.7083 3.375H18.1883C17.9628 3.3765 17.7399 3.3266 17.5364 3.22918L12.9339 0.919185C12.3264 0.616626 11.6571 0.458921 10.9783 0.458374H7.29162C3.26662 0.463159 0.00485352 3.72493 0 7.75V9.19518L34.8002 9.03331C34.0403 5.7271 31.1007 3.38176 27.7083 3.375Z"
                fill="#BD90F4"
              />
            </svg>

            <h5 className="ff-raleway font-semibold text-blackone text-xl pt-3">
              Leverage Legacy Data
            </h5>
            <p className="ff-lato text-blackone text-sm pt-2">
              Uses past data, including descriptions and images, for fast and
              accurate resolutions.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-5 px-3">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="35" height="35" fill="white" />
              <path
                d="M32.1917 18.6484C31.4945 17.8486 30.6126 16.6113 29.8607 14.7177C29.8265 14.6357 29.8539 14.5332 29.9222 14.4716C30.5443 13.8427 31.1185 13.2822 31.2074 12.4824C31.221 12.1064 31.0638 11.8193 30.9955 11.6826C30.4759 10.6982 30.599 10.1923 29.9291 8.54489C29.1224 6.56247 28.2679 4.46383 26.3539 2.95993C25.93 2.62497 25.0414 1.99606 23.3802 1.46969C20.475 0.56735 12.5863 -1.91409 6.68003 3.18551C3.21421 6.17965 1.06089 11.2451 1.9769 15.6132C2.78355 19.4619 5.44272 20.1797 6.38608 24.1923C7.31577 28.1572 5.77769 31.9238 4.3148 34.5078C5.02573 34.5283 5.73667 34.5488 6.44077 34.5693C6.44077 34.5078 6.45444 34.4463 6.48862 34.3847L8.72398 30.5224V26.8857C7.26792 26.4414 7.5687 24.2881 9.10679 24.2675C10.6449 24.2881 10.9457 26.4414 9.4896 26.8857V30.625C9.4896 30.6933 9.46909 30.7617 9.43491 30.8164L7.25425 34.5898C7.84214 34.6035 8.43003 34.624 9.01109 34.6377C8.99741 34.5556 9.00425 34.4668 9.0521 34.3847L11.2054 30.666C10.2894 29.9004 10.8841 28.3007 12.0941 28.3281C13.9876 28.4033 13.7894 31.1992 11.9095 30.9873L9.78355 34.6582C10.6585 34.6855 11.5404 34.706 12.4154 34.7334C12.3675 34.624 12.3607 34.4941 12.4291 34.3847L16.4212 27.4941C15.471 26.7422 16.0521 25.1084 17.2826 25.1357C19.1488 25.2041 18.9916 27.959 17.1322 27.8017L13.1058 34.7539C14.0834 34.7812 15.0677 34.8086 16.0453 34.8359C16.0453 34.7812 16.0589 34.7265 16.0863 34.6718L19.1351 28.7109C19.183 28.622 19.265 28.5537 19.3607 28.5195L21.6712 27.7949C21.7601 26.0586 24.3031 26.0927 24.3441 27.8359C24.3509 29.1757 22.5462 29.6748 21.8695 28.54L19.7367 29.2099L16.8451 34.8632C17.7064 34.8906 18.5746 34.9111 19.4359 34.9384C19.6478 34.1045 20.099 32.8261 21.1449 31.6162C21.596 31.1787 21.9789 30.5019 22.6625 30.6865C24.1595 31.1377 25.6566 31.5888 27.1537 32.04C28.0765 32.2246 28.6439 31.9443 28.849 31.8349C29.9564 31.2129 30.4623 29.497 29.8607 27.6855C30.8314 27.3847 31.5082 26.5371 30.9408 25.6142C31.6791 25.2519 31.9457 24.582 31.4808 23.7822C31.3783 23.5839 31.2689 23.4541 31.1527 23.1396C31.0707 22.9209 31.0296 22.8115 31.0501 22.7158C31.1117 22.3945 31.6107 22.3398 32.0892 22.0732C32.6771 21.7382 33.1351 21.123 33.224 20.6172C33.347 19.8584 32.6908 19.2226 32.1917 18.6484ZM24.5628 13.4531C24.5628 13.6172 24.433 13.747 24.2689 13.747H22.9427C22.7445 14.6904 22.3753 15.5722 21.8626 16.3515L22.7992 17.2881C22.9154 17.4043 22.9154 17.5888 22.7992 17.705L21.056 19.455C20.9398 19.5713 20.7484 19.5713 20.639 19.455L19.7025 18.5185C18.9232 19.0312 18.0414 19.4072 17.098 19.5986V20.9179C17.098 21.082 16.9681 21.2119 16.8041 21.2119H14.3431C14.1791 21.2119 14.0423 21.0752 14.0423 20.9111V19.5849C13.099 19.3935 12.2171 19.0175 11.4378 18.5048L10.5013 19.4414C10.3919 19.5576 10.2005 19.5576 10.0843 19.4414L8.34116 17.7119C8.22495 17.5957 8.22495 17.4043 8.34116 17.2949L9.27769 16.3584C8.76499 15.5791 8.39585 14.6972 8.19761 13.7539H6.87144C6.70737 13.7539 6.57749 13.624 6.57749 13.4599V10.999C6.57749 10.8349 6.70737 10.705 6.87144 10.705H8.19761C8.38901 9.77536 8.76499 8.87985 9.27769 8.10055L8.34116 7.15719C8.22495 7.04098 8.22495 6.84958 8.34116 6.7402L10.0775 5.00387C10.1937 4.88766 10.3851 4.88766 10.4945 5.00387L11.431 5.9404C12.2103 5.4277 13.1058 5.05172 14.0355 4.86032V3.52731C14.0355 3.36325 14.1654 3.23337 14.3294 3.23337H16.7904C16.9544 3.23337 17.0843 3.37008 17.0843 3.52731V4.85348C18.0277 5.05172 18.9095 5.42087 19.6888 5.93356L20.6253 4.99704C20.7416 4.88083 20.9261 4.88083 21.0423 4.99704L22.7787 6.73337C22.8949 6.84958 22.8949 7.03415 22.7787 7.15036L21.8421 8.08688C22.3548 8.86618 22.724 9.74801 22.9222 10.6914H24.2484C24.4125 10.6914 24.5492 10.8281 24.5492 10.9922V13.4531H24.5628ZM22.43 27.8291C22.4437 27.0771 23.5648 27.0771 23.5785 27.8291C23.558 28.5879 22.4437 28.5879 22.43 27.8291ZM20.181 11.4843C20.9056 17.4863 12.5589 19.0244 11.0209 13.2822C10.2142 10.042 13.2562 6.91794 16.5238 7.65622C18.4037 8.03219 19.8871 9.58395 20.181 11.4843ZM17.139 27.0088C16.4828 26.872 16.6126 25.9013 17.2757 25.9013C17.5902 25.9013 17.85 26.1611 17.85 26.4755C17.8568 26.8242 17.4671 27.1591 17.139 27.0088ZM11.5267 29.6679C11.5404 28.916 12.6615 28.916 12.6751 29.6679C12.6546 30.4199 11.5335 30.4199 11.5267 29.6679ZM8.53257 25.6074C8.54624 24.8554 9.66734 24.8554 9.68101 25.6074C9.66734 26.3593 8.54624 26.3593 8.53257 25.6074Z"
                fill="#BD90F4"
              />
            </svg>

            <h5 className="ff-raleway font-semibold text-blackone text-xl pt-3">
              NLP-Driven Suggestions
            </h5>
            <p className="ff-lato text-blackone text-sm pt-2">
              Natural Language Processing finds the best case matches and
              recommendations efficiently.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-5 px-3">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1095_3806)">
                <rect width="35" height="35" fill="white" />
                <path
                  d="M17.5013 14.5833C20.723 14.5833 23.3346 11.9716 23.3346 8.74996C23.3346 5.5283 20.723 2.91663 17.5013 2.91663C14.2796 2.91663 11.668 5.5283 11.668 8.74996C11.668 11.9716 14.2796 14.5833 17.5013 14.5833Z"
                  fill="#BD90F4"
                />
                <path
                  d="M22.2383 17.5H12.7591C8.93974 17.5 5.83203 20.6077 5.83203 24.4271V28.0729C5.83203 28.6767 6.32203 29.1667 6.92578 29.1667H28.0716C28.6754 29.1667 29.1654 28.6767 29.1654 28.0729V24.4271C29.1654 20.6077 26.0577 17.5 22.2383 17.5Z"
                  fill="#BD90F4"
                />
                <path
                  d="M7.29167 0H4.375C1.96292 0 0 1.96292 0 4.375V7.29167C0 8.09813 0.653333 8.75 1.45833 8.75C2.26333 8.75 2.91667 8.09813 2.91667 7.29167V4.375C2.91667 3.57 3.57146 2.91667 4.375 2.91667H7.29167C8.09667 2.91667 8.75 2.26479 8.75 1.45833C8.75 0.651875 8.09667 0 7.29167 0Z"
                  fill="#BD90F4"
                />
                <path
                  d="M7.29167 32.0833H4.375C3.57146 32.0833 2.91667 31.43 2.91667 30.625V27.7083C2.91667 26.9019 2.26333 26.25 1.45833 26.25C0.653333 26.25 0 26.9019 0 27.7083V30.625C0 33.0371 1.96292 35 4.375 35H7.29167C8.09667 35 8.75 34.3481 8.75 33.5417C8.75 32.7352 8.09667 32.0833 7.29167 32.0833Z"
                  fill="#BD90F4"
                />
                <path
                  d="M30.625 0H27.7083C26.9033 0 26.25 0.651875 26.25 1.45833C26.25 2.26479 26.9033 2.91667 27.7083 2.91667H30.625C31.4285 2.91667 32.0833 3.57 32.0833 4.375V7.29167C32.0833 8.09813 32.7367 8.75 33.5417 8.75C34.3467 8.75 35 8.09813 35 7.29167V4.375C35 1.96292 33.0371 0 30.625 0Z"
                  fill="#BD90F4"
                />
                <path
                  d="M33.5417 26.25C32.7367 26.25 32.0833 26.9019 32.0833 27.7083V30.625C32.0833 31.43 31.4285 32.0833 30.625 32.0833H27.7083C26.9033 32.0833 26.25 32.7352 26.25 33.5417C26.25 34.3481 26.9033 35 27.7083 35H30.625C33.0371 35 35 33.0371 35 30.625V27.7083C35 26.9019 34.3467 26.25 33.5417 26.25Z"
                  fill="#BD90F4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1095_3806">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className="ff-raleway font-semibold text-blackone text-xl pt-3">
              AI-Based Image Recognition
            </h5>
            <p className="ff-lato text-blackone text-sm pt-2">
              AI analyzes images in legacy data to predict accurate case
              solutions.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-5 px-3">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1095_3813)">
                <rect width="35" height="35" fill="white" />
                <path
                  d="M17.5 35C27.1625 35 35 27.1625 35 17.5C35 7.83748 27.1625 0 17.5 0C7.83748 0 0 7.83748 0 17.5C0 27.1625 7.83748 35 17.5 35ZM16.25 7.50001C16.25 6.81249 16.8125 6.24998 17.5 6.24998C18.1875 6.24998 18.75 6.81249 18.75 7.50001V16.9L24.5313 21.525C25.0688 21.9563 25.1563 22.7437 24.725 23.2812C24.4812 23.5875 24.1188 23.75 23.75 23.75C23.475 23.75 23.2 23.6624 22.9688 23.475L16.7188 18.475C16.425 18.2375 16.2501 17.8813 16.2501 17.5V7.50001H16.25Z"
                  fill="#BD90F4"
                />
              </g>
              <defs>
                <clipPath id="clip0_1095_3813">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h5 className="ff-raleway font-semibold text-blackone text-xl pt-3">
              Save Time & Improve Accuracy
            </h5>
            <p className="ff-lato text-blackone text-sm pt-2">
              Quickly resolve repetitive queries and ensure precise customer
              support solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full  pt-10 mt-12 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              Benefits
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            SimCase CRM benefits
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Customer Service
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Faster onboarding with reduced training time for new staff.
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Provides AI-powered similar case suggestions for efficient
                  query resolution.
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Streamlines workflows, reducing response time and offering
                  instant solutions.
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Enhances professionalism and customer experience with advanced
                  AI and NLP tools.
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Delivers actionable insights for proactive problem-solving.
                </span>
              </p>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/customer support.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/customer insights.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Better Customer Insights
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Offers detailed case reports with cross-account analysis for
                  better planning
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Provides insights to refine products, services, and workflows
                  effectively.
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Boosts productivity and reduces costs by enabling targeted
                  support strategies.
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Provides insights to refine products, services, and workflows
                  effectively.
                </span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Cross team collaboration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Better cross team collaboration to coordinate for more product
                  Sales/Marketing
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="mr-2"
                  />
                  Better trainings planning
                </span>
              </p>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img
                  src="/assets/images/innovations/cross-team.png"
                  alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="w-full bg-[#FFF7F0] py-20 mt-32 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              BENEFITS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone text-center mb-8 mt-4">
            Benefits of using SimCase AI
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[600px]">
            <p className="ff-lato text-blackone text-center">
              End to end automation of customer support processes helps ensure
              all aspects of case management are covered in detail. It improves
              agent efficiency and ensures customer is served in a best possible
              manner with right approach.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-20 mt-0 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              BENEFITS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4 text-center">
            Why This Matters
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[400px]">
            <p className="ff-lato text-blackone text-center">
              Agentic Intelligence isn&apos;t just automating workflows —
              it&apos;s adding cognitive capability to your CRM
            </p>
          </div>
        </div>
      </section>

      <CRMInquiry />
      <Footer />
    </main>
  );
}
