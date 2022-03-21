import React from "react";
import Banner from "../Includes/banner";
import Getstarted from "../Includes/Getstarted";
import GYB from "../Includes/GYB";
import Ehpsfc from "../Container/Ehpsfc/Ehpsfc";
import PackageCard from "../Container/Package/PackageCard"
import FormSection from "../Container/Form/Form"
import Appbanner from "../Container/App-template/App-button"
export default function Home() {
  return (
    <>
      <Banner />
      {/* header-complete */}
      <Getstarted animation="flip-down"/>

      {/* box-Get-found-complete */}
      <GYB animation="fade-up"/>
      {/* GBS-complete */}
      <Ehpsfc />

      <PackageCard animation="fade-up"/>

      <FormSection  animation="fade-up"/>

      <Appbanner animation="fade-up"/>

      {/* fragmant */}
    </>
  );
}
