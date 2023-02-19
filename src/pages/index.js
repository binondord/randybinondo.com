import React from "react";

import IndexNavbar from "@/components/Navbars/IndexNavbar.js";
import Footer from "@/components/Footers/Footer.js";
import RandyAndSkills from "@/components/IndexSections/RandyAndSkills";
import MyInterests from "@/components/IndexSections/MyInterests";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <RandyAndSkills/>
      
      <MyInterests/>
      <Footer />

      
    </>
  );
}
