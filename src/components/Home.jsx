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

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <RegistrationSection />
      <CallToActionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
