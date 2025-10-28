import { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ScheduleSection from "./ScheduleSection";
import RegistrationSection from "./RegistrationSection";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import ClientSection from "./ClientSection";
import FacilitySection from "./FacilitySection";
import GalerrySection from "./GalerrySection";
import Requirement from "./Requirement";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroSection />
            <AboutSection />
            <ClientSection />
            <ScheduleSection />
            <FacilitySection />
            <RegistrationSection />
            <GalerrySection />
            <CallToActionSection />
            <ContactSection />
          </>
        );
      case "requirement":
        return (
          <>
            <Requirement onBackClick={navigateToHome} />
          </>
        );
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <ClientSection />
            <ScheduleSection />
            <FacilitySection />
            <RegistrationSection />
            <GalerrySection />
            <CallToActionSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen max-w-[100svw] bg-white">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <div className={currentPage == 'requirement' ? 'py-12' : 'py-0'}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
