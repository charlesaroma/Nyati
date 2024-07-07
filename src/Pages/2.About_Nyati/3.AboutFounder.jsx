import React from 'react';
import DrImage from "../../assets/Dr Eve.png"

const AboutFounder = ({ nRef }) => {
  return (
    <div ref={nRef} className="relative w-full h-full lg:h-screen bg-[#141118]">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly py-16 px-4">
        {/* Image with caption */}
        <div className="w-[80vw] max-w-[450px] flex flex-col items-center">
          <img src={DrImage} alt="Founder" className="w-full h-auto bg-cover"/>
          <span className="font-extralight text-[#E8CFD2] text-center mt-2">
            Founder, Dr. Evelyn Cindy Magara
          </span>
        </div>

        {/* Text */}
        <div className="max-w-[410px] flex flex-col gap-4 items-center text-center mt-8">
          {/* Sub-text */}
          <h2 className="text-[#E8CFD2] font-bold text-xl">
            About 
          </h2>
          {/* Main-text */}
          <h1 className="text-[#E8CFD2] font-bold text-2xl">
            We Are Based In Uganda
          </h1>
          {/* Paragraph-text */}
          <p className="text-[#E8CFD2] font-normal w-full text-justify">
            Nyati Motion Pictures was formed in 2005 as a Film and Video Production Company. Nyati Motion Pictures was registered as a company in February 2006. The company started operations by co-producing short documentaries and films to perfect the skills. Nyati Motion Pictures is proud to be part of the creative companies that are developing the film industry to reckon with in Uganda and Africa at large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
