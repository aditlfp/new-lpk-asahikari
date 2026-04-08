import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ScheduleSection from "./ScheduleSection";
import RegistrationSection from "./RegistrationSection";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import FacilitiesSection from "./FacilitiesSection";
import GallerySection from "./GallerySection";
import TestimonialSection from "./TestimonialSection";
import Requirement from "./Requirement";
import ClientSection from "./ClientSection";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (pageName) => {
    setCurrentPage(pageName);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroSection />
            <AboutSection />
            <ClientSection />
            <ScheduleSection />
            <FacilitiesSection />
            <RegistrationSection />
            <GallerySection />
            {/* <TestimonialSection /> */}
            <CallToActionSection />
            <ContactSection />
          </>
        );

      case "requirement":
        return <Requirement onBackClick={navigateToHome} />;

      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <ClientSection />
            <ScheduleSection />
            <FacilitiesSection />
            <RegistrationSection />
            <GallerySection />
            <CallToActionSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen max-w-[100svw] bg-white">
      <Header navigateTo={navigateTo} currentPage={currentPage} />
      <main className="pt-20">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default Home;
