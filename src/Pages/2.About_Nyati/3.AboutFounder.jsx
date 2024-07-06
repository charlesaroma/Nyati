import React from 'react';
import DrImage from "../../assets/Dr Eve.png"

const AboutFounder = ({ nRef }) => {
  return (
    <div ref={nRef} className="relative w-full h-screen bg-[#141118]">
      <div className="w-full h-screen flex flex-col  md:flex-row items-center justify-evenly">
        {/* Image with caption */}
        <div className="w-[80%] md:max-w-[450px] " >
          <img src={DrImage} alt="Founder" className="bg-cover"/>
          <span className="font-extralight md:font-light text-[#E8CFD2]">
            Founder, Dr. Evelyn Cindy Magara
          </span>
        </div>

        {/* Text */}
        <div className="max-w-[410px] flex flex-col gap-2 items-center justify-center md:items-start ">
          {/* Sub-text */}
          <h2 className="text-[#E8CFD2] font-bold">
            About 
          </h2>
          {/* Main-text */}
          <h1 className="text-[#E8CFD2] font-bold text-2xl md:text-4xl">
            We Are Based In Uganda
          </h1>
          {/* Paragraph-text */}
          <p className="text-[#E8CFD2] font-normal w-[80%] md:w-[483px] text-justify">
            Nyati Motion Pictures was formed in 2005 as a Film and Video Production Company. Nyati Motion Pictures was registered as a company in February 2006. The company started operations by co-producing short documentaries and films to perfect the skills. Nyati Motion Pictures is proud to be part of the creative companies that are developing the film industry to reckon with in Uganda and Africa at large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
