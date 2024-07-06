import React from 'react'
import image from "../../assets/iPhone 15 Pro Mockup.png"

const AboutDonation = () => {
  return (
    <div className="w-full h-screen bg-[#21151d] ">
      <div className="w-full h-full flex flex-col md:flex-row justify-between items-center mt-[10%] md:mt-0 px-[10%]">
        {/* main text, paragraph and button */}
        <div className="max-w-[370px] flex flex-col gap-5 justify-center space-y-4">
          <h1 className="max-w-[350px] text-4xl text-[#F2F2F2] font-bold">
            Help Us Tell Amazing Stories: <span className="block italic">Crowdfund Now</span>
          </h1>
          <p className="text-[#F2F2F2] font-light text-lg">
            We are building a community of thousands of investors to finance creative projects that will be created, funded, and distributed. We are a team of passionate creators using our visual media to engage the Easter African and audience.
          </p>
          <button className="bg-[#EE5170] text-[#F2F2F2] w-[190px] h-[41px] text-[15.96px] font-extralight px-4 py-2 rounded-full">
            Send Us A Donation
          </button>
        </div>

        {/* image container */}
        <div className="w-[40%] h-full flex justify-center items-center">
          <img src={image} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  )
}

export default AboutDonation