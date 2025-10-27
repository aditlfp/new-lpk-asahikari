import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CountdownSection from "./CountdownSection";
import AboutSection from "./AboutSection";
import EventMapSection from "./EventMapSection";
import ScheduleSection from "./ScheduleSection";
import RegistrationSection from "./RegistrationSection";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import ClientSection from "./ClientSection";
import FacilitySection from "./FacilitySection";
import GalerrySection from "./GalerrySection";

const Home = () => {
  return (
    <div className="min-h-screen max-w-[100svw] bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ClientSection />
      <ScheduleSection />
      <FacilitySection />
      <RegistrationSection />
      <GalerrySection />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
