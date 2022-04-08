import React, { useState, useRef, useEffect } from "react";
import {BiTime} from 'react-icons/bi'
import ProfileCard from "./ProfileCard";

//media query 설정하기

export default function ProfileCards({profiles,setProfiles}) {

  const observerRef = useRef();
  const boxRef = useRef();

  //Profile 데이터 가져오기 한번에 16개의 데이터 가져올 것.
  const getProfiles = () => {
    var cnt = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
    setProfiles(() => [...profiles, ...cnt]);
  };

  useEffect(() => {
    getProfiles();
    console.log("처음만?");
  }, []);

  //profiles 가 변경되면, ref를 새로 설정해라
  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [profiles]);

  const intersectionObserver = (
    entries, io
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
    <ProfileCard index={index} boxRef={boxRef} name={profile}/>
  ));
  return <ul className="grid grid-cols-4 ">{profileCards}</ul>;
};
