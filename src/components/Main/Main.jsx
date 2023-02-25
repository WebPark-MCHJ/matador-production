import React from "react";
import Our from "./Our/Our";
import Calculation from "./Calculation/Calculation";
import About from "./About/About";
import Why from "./Why/Why";
import PriceInfo from "./PriceInfo/PriceInfo";
import WillCome from "./WillCome/WillCome";
import Payment from "./Payment/Payment";
import ContactUs from "./ContactUs/ContactUs";
import Map from "./Map/Map";

function Main() {
  return (
    <main>
      <Our />
      <Calculation />
      <About />
      <Why />
      <PriceInfo />
      <WillCome />
      <Payment />
      <ContactUs />
      <Map />
    </main>
  );
}

export default Main;
