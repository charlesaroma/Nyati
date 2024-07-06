import React from "react";
import Icon from "../../assets/Icon.png";
import Image from "../../assets/laptop.png";

const HelpUs = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col bg-[#141118]">
      {/* container */}
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-[5%] py-16">
        {/* icon, text & button */}
        <div className="w-full lg:max-w-[41%] flex flex-col justify-center gap-5 lg:pl-[5%] lg:text-left text-center">
          {/* icon */}
          <img src={Icon} alt="icon" className="w-10 h-10 mx-auto lg:mx-0" />

          {/* heading */}
          <h1 className="text-3xl lg:text-5xl text-[#FFFFFE] font-bold">
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
          <div className="flex justify-center lg:justify-start">
            <button
              className="bg-[#EE5170] w-[190.34px] h-[41.38px] rounded-[49.66px]
              font-inter font-semibold text-16 leading-19.36 text-[#FFFAF6] cursor-pointer"
              type="button"
            >
              Send Us A Donation
            </button>
          </div>
        </div>

        {/* image */}
        <div className="w-full lg:w-auto flex justify-center mt-8 lg:mt-0">
          <img src={Image} alt="icon" className="max-w-[80%] lg:max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default HelpUs;
