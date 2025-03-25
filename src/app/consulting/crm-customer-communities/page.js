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
  "CRM Customer Communities | Build Stronger Connections",
  "Foster engagement and brand loyalty by creating CRM-powered customer communities for meaningful interactions."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/8-1.png",
      title: "CRM-Integrated Community Platforms",
      desc: "We create and manage communities within your CRM, seamlessly connecting Salesforce, HubSpot, or Microsoft Dynamics with your customer data to personalize marketing, sales, and support interactions.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/8-2.png",
      title: "Community Design & Customization",
      desc: "Our team designs communities that align with your brand’s identity, adding forums, user groups, and feedback channels to foster meaningful customer engagement.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/8-3.png",
      title: "Self-Service & Knowledge Sharing",
      desc: "We integrate self-service tools like FAQs and knowledge bases, helping customers find answers on their own and improving their experience while reducing support needs.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/8-4.png",
      title: "Peer-to-Peer Interaction & Collaboration",
      desc: "We build spaces for customers to share experiences and support one another, enriching customer relationships and creating a collaborative brand community.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/8-5.png",
      title: "Gamification & Incentives",
      desc: "We drive engagement through gamification, adding badges, leader-boards, and rewards to make participation rewarding and encourage continuous interaction.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/8-6.png",
      title: "Feedback & Insight Collection",
      desc: "Our CRM integration includes tools for collecting feedback, such as surveys and polls, to gain insights on products, services, and customer sentiment.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/8-7.png",
      title: "Community Management & Moderation",
      desc: "We offer community management services, including moderation and conflict resolution, to ensure a productive and welcoming space for all members.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Build stronger connections with customer communities"
        img="/assets/images/consulting/hero-8.png"
        bg="#FFF7F0"
      />

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            our approach
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6 justify-center flex flex-col items-center">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Our CRM Customer Communities
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            In today’s digital landscape, customers crave more than just
            products and services—they want meaningful connections and a sense
            of belonging. Creating a customer community offers a powerful way to
            nurture those relationships. A CRM-powered community provides a
            centralized space for customers to connect, access resources, and
            engage with your business, all while giving you valuable insights
            into their needs and preferences. We help you leverage CRM platforms
            to create online communities where customers can interact with your
            brand, share experiences, seek support, and collaborate with
            peers—all within an ecosystem tailored to their needs.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-24">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            OFFERINGS
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          What we offer
        </h2>
        <div className="w-full flex flex-wrap justify-center items-center">
          {tiles.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 self-stretch flex">
              <div className="m-2 self-stretch">
                <div className="border rounded-md pt-2 py-2 pb-3 text-left info-card">
                  <img
                    src={item.img}
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="w-full h-72 object-contain p-4"
                  />
                  <h3 className="ff-raleway font-semibold text-2xl text-blackone mt-11 px-8">
                    {item.title}
                  </h3>
                  <p className="text-[#585858] ff-lato mt-4 mb-6 px-8">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
