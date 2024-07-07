import React from 'react'
import image from "../../assets/iPhone 15 Pro Mockup.png"

const AboutDonation = () => {
  return (
    <div className="w-full h-full lg:h-screen bg-[#21151d] flex flex-col lg:justify-center py-16">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center px-[5%] lg:px-[10%]">
        {/* main text, paragraph and button */}
        <div className="w-full lg:max-w-[370px] flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="max-w-[350px] text-3xl lg:text-4xl text-[#F2F2F2] font-bold">
            Help Us Tell Amazing Stories: <span className="block italic">Crowdfund Now</span>
          </h1>
          <p className="text-[#F2F2F2] font-light text-base lg:text-lg">
            We are building a community of thousands of investors to finance creative projects that will be created, funded, and distributed. We are a team of passionate creators using our visual media to engage the Easter African and audience.
          </p>
          <button className="bg-[#EE5170] text-[#F2F2F2] w-[190px] h-[41px] text-[15.96px] font-extralight px-4 py-2 rounded-full">
            Send Us A Donation
          </button>
        </div>

        {/* image container */}
        <div className="w-full lg:w-[40%] lg:h-full flex justify-center items-center">
          <img src={image} alt="" className="w-[60%] md:w-[50%] lg:w-auto object-cover" />
        </div>
      </div>
    </div>
  )
}

export default AboutDonation
