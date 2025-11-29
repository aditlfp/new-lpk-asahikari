import { useState, useEffect } from "react";
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
import WorkInfo from "./WorkInfo";
import KegiatanCaraousel from "./KegiatanCarousel"

const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
  };
  
  useEffect(() => {
	  const container = document.getElementById("page-container");
	  container?.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);

  

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroSection />
            <AboutSection />
            <KegiatanCaraousel />
            <ClientSection />
            <ScheduleSection navigateTo={navigateTo}/>
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
      case "workinfo":
        return (
          <>
            <WorkInfo onBackClick={navigateToHome}/>
          </>
        )
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <KegiatanCaraousel />
            <ClientSection />
            <ScheduleSection navigateTo={navigateTo}/>
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
    <div id="page-container" className="h-screen max-w-[100svw] bg-white overflow-y-auto">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <div className={currentPage == 'requirement' || currentPage == 'workinfo' ? 'py-12' : 'py-0'}>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
