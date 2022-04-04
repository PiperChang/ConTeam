
import React, { useState, useRef, useEffect } from "react";
import Header from "../../component/header/Header";

const ProfileCards = () => {
  const [profiles, setProfiles] = useState([]);

  const observerRef = useRef();
  const boxRef = useRef();


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
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
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
    <li
      key={index}
      className="bg-white border-neutral drop-shadow h-80 m-1 rounded-xl mb-5"
      style={{ width: "250px" }}
      ref={boxRef}
    >
      {/* <div className=""> */}
        <img className="object-cover h-3/5 m-auto " src="https://file.mk.co.kr/meet/neds/2020/07/image_readtop_2020_693310_15940817614269874.jpg" />
      {/* </div> */}
      <div className="m-2">
        <div className="flex mb-4">
          <h6 className="mr-5">rlackd</h6>
          <div className="bg-gray-300 rounded-full pl-7 px-1 text-sm ">기획자</div>
        </div>
        <div>
          경력 :  신입 위치 : 서울
        </div>
      </div>
    </li>
  ));
  return <ul className="grid grid-cols-5 md:grid-cols-3 ">{profileCards}</ul>;
  //media query 설정하기
  // return <ul className="flex flex-wrap  w-3/5 justify-between m-auto  sm:w-full  ">{profileCards}</ul>;
};


export default function RecruitPage() {


  return (
    <div className="flex flex-col my-auto items-center">
      <Header />
      <div className="pt-20 flex">
        <div className="w-60 h-20 bg-red-300 rounded-2xl p-3 mx-1 my-2">ad1</div>
        <div className="w-60 h-20 bg-red-300 rounded-2xl p-3 mx-1 my-2">ad2</div>
      </div>
      <ProfileCards />
    </div>
  );
}