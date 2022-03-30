import React, { useState, useRef, useEffect } from "react";

const ProfileCards = () => {
  const [profiles, setProfiles] = useState([]);

  const observerRef = useRef();
  const boxRef = useRef();

  var cnt = 1;

  const getProfiles = () => {
    setProfiles(() => [...profiles, cnt]);
    cnt = cnt + 1;
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
      className="bg-red-500"
      style={{
        height: "1000px",
        width: "300px",
        backgroundColor: "skyblue",
        marginBottom: "10px",
      }}
      ref={boxRef}
    >
      {profile}
    </li>
  ));
  return <ul>{profileCards}</ul>;
};


export default function RecruitPage() {
  

  return (
    <div>
      <ProfileCards />
    </div>
  );
}
