import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import CompaniesWorkedWith from "@/components/CompaniesWorkedWith";
import Testimonials from "@/components/Testimonials";
import ChatWidget from "@/components/ChatWidget";

const CompanyAgenda = dynamic(() => import("@/components/CompanyAgenda"));
const SpecializedQuotationForm = dynamic(() => import("@/components/SpecializedQuotationForm"));
const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfter"));
const StatsSection = dynamic(() => import("@/components/StatsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const CleaningChecklist = dynamic(() => import("@/components/CleaningChecklist"));
const WhereWeOperate = dynamic(() => import("@/components/WhereWeOperate"));
const DownloadAppSection = dynamic(() => import("@/components/DownloadAppSection"));
const FaqSection = dynamic(() => import("@/components/FaqSection"));
const KeepInTouch = dynamic(() => import("@/components/KeepInTouch"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesWorkedWith />
      <CompanyAgenda />
      <SpecializedQuotationForm />
      <BeforeAfterSlider />
      <StatsSection />
      <ServicesSection />
      <Testimonials />
      <WhyChooseUs />
      <CleaningChecklist />
      <WhereWeOperate />
      <DownloadAppSection />
      <FaqSection />
      <KeepInTouch />
      <Footer />
      <ChatWidget />
    </>
  );
}
