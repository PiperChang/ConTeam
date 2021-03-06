
import React, { useState, useRef, useEffect } from "react";
import Header from "../../component/header/Header";
import ProfileCards from "./ProfileCards";
import AdvertisementSection from "./AdvertisementSection";
import FilterSection from "./FilterSection";

export default function TeamListPage() {
  const [profiles, setProfiles] = useState([]);

  return (
    <div className="flex flex-col my-auto items-center">
      <Header />
      <div>
        <AdvertisementSection/>
        <FilterSection profiles={profiles} setProfiles={setProfiles} />
        <ProfileCards profiles={profiles} setProfiles={setProfiles} />
      </div>
    </div>
  );
}

// db에 저장이 안되니깐, 