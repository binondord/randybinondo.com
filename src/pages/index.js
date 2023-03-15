import React, { useState } from "react";

import IndexNavbar from "@/components/Navbars/IndexNavbar.js";
import Footer from "@/components/Footers/Footer.js";
import RandyAndSkills from "@/components/IndexSections/RandyAndSkills";
import MyInterests from "@/components/IndexSections/MyInterests";
import Profile from "@/components/Profile";
import LoginBtn from "@/components/LoginBtn";
import FirebaseAuth from "@/components/Firebase/Auth";



export default function Index() {
  const [ID, setID] = useState(null);
  const getSingleNote = (id) => {
    setID(id)
  }
  return (
    <>
      <IndexNavbar fixed />
      <RandyAndSkills/>
      
      <MyInterests showSvgPolygon={true}/>

      <FirebaseAuth getSingleNote={getSingleNote}/>

      <br/><br/><br/>
      <Footer />

    </>
  );
}
