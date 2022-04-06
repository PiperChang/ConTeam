import React, { useState, useRef, useEffect } from "react";
import {BiTime} from 'react-icons/bi'
import ProfileCard from "./ProfileCard";

//media query 설정하기

export default function ProfileCards() {
  const [profiles, setProfiles] = useState([]);

  const observerRef = useRef();
  const boxRef = useRef();

  //Profile 데이터 가져오기 한번에 16개의 데이터 가져올 것.
  const getProfiles = () => {
    var cnt = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
    setProfiles(() => [...profiles, ...cnt]);
  };

  useEffect(() => {
    getProfiles();
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [profiles]);

  const intersectionObserver = (
    entries, io
    // entries: IntersectionObserverEntry[],
    // io: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      // target과 겹치면, 다음 profile을 가져와라. 
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        getProfiles();
      }
    });
  };

  const profileCards = profiles.map((profile, index) => (
    <ProfileCard index={index} boxRef={boxRef}/>
  ));
  return <ul className="grid grid-cols-4">{profileCards}</ul>;
};
