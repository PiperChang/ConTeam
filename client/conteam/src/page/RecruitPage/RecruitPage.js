
import React, { useState, useRef, useEffect } from "react";
import Header from "../../component/header/Header";
import ProfileCards from "./ProfileCards";
import AdvertisementSection from "./AdvertisementSection";
import FilterSection from "./FilterSection";

export default function RecruitPage() {
  return (
    <div className="flex flex-col my-auto items-center">
      <Header />
      <div>
        <AdvertisementSection/>
        <FilterSection/>
        <ProfileCards />
      </div>
    </div>
  );
}