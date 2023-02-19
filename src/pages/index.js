import React from "react";

import IndexNavbar from "@/components/Navbars/IndexNavbar.js";
import Footer from "@/components/Footers/Footer.js";
import WelcomeHero from "@/components/IndexSections/WelcomeHero";
import RandyAndSkills from "@/components/IndexSections/RandyAndSkills";
import SectionThree from "@/components/IndexSections/SectionThree";
import SectionFour from "@/components/IndexSections/SectionFour";
import WhiteSection from "@/components/IndexSections/WhiteSection";
import Contact from "@/components/IndexSections/Contact";
import MyInterests from "@/components/IndexSections/MyInterests";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      {/*<WelcomeHero/>*/}
      <RandyAndSkills/>
      
      <MyInterests/>

      {/*
      <SectionThree/>
      <SectionFour/>*/}
      
      <WhiteSection/>
      <Contact/>
      <Footer />

      
    </>
  );
}
