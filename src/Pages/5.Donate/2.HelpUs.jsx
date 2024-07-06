import React from "react";
import Icon from "../../assets/Icon.png";
import Image from "../../assets/laptop.png";

const HelpUs = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col bg-[#141118]">
      {/* container */}
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-[5%] py-16">
        {/* icon, text & button */}
        <div className="lg:max-w-[40%] flex flex-col justify-center gap-5 lg:pl-[5%]">
          {/* icon */}
          <img src={Icon} alt="icon" className="w-10 h-10" />

          {/* heading */}
          <h1 className="text-5xl  text-[#FFFFFE] font-bold">
            <span>Help us</span>
            <span className="block">share our stories</span>
          </h1>

          {/* paragraph */}
          <p className="text-[#FFFAF6B2] text-lg font-light">
            Nyati Motion Pictures is dedicated to retelling African stories with
            passion. Producing high-quality content requires millions of
            shillings, and that’s where you come in.
          </p>

          {/* button */}
          <button
            className="bg-[#EE5170] w-[190.34px] h-[41.38px] rounded-[49.66px]
          font-inter font-semibold text-16 leading-19.36 text-[#FFFAF6] cursor-pointer"
            type="button"
          >
            Send Us A Donation
          </button>
        </div>

        {/* image */}
        <div className="flex items-start">
          <img src={Image} alt="icon"  />
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
