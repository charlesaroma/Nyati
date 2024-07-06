import React from 'react'
import Bg from "../../assets/Frame 101.png";
import BgIcon from "../../assets/Logo_About.png"
import { Icon } from "@iconify/react";

const HeroAboutSection = ({ scrollFunc }) => {
  return (
    <div className="w-full h-screen relative">
      <div className="relative min-h-[80vh] h-full xl:h-screen flex flex-col items-center justify-center">
        {/* Background image */}
        <div
          className="absolute top-0 left-0 z-[-1] w-full bg-cover bg-no-repeat h-full bg-center"
          style={{ backgroundImage: `url(${Bg})` }}>
        </div>

        {/* hero && logo */}
        <div className="box-border py-28 md:py-0 flex flex-col max-w-[80%] gap-[25px] xl:max-w-[631px] mx-auto max-h-max">
            {/* logo */}
            <div className="w-full h-[194px] md:h-[200px] 2xl:h-[200px] flex justify-center items-center">
                <img src={BgIcon} alt="Logo" className="w-[200px] h-[200px]" />
            </div>

            {/* head text */}
            <div className="flex flex-col gap-[15px]">
                <h1 className="font-bold font-sans text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl md:leading-tight text-[#F2F2F2] text-center">
                    Where Epic Stories Transcend Entertainment
                </h1>
            </div>

            {/** floating icons */}
        <div className="absolute hidden  bottom-[0px] left-[24px] w-[246px] h-[201px] rounded-[9.78px] p-[8px] lg:flex flex-col gap-[12px]">
          <Icon
            icon="prime:twitter"
            width="20px"
            height="20px"
            style={{ color: "#E8CFD2" }}
            className="flex justify-center items-center w-[32px] h-[32px] bg-gradient-to-r from-[rgba(238,80,112,0.03)] to-[rgba(238,80,112,0.30)] rounded-[10px] border-[0.79px] border-solid shadow-[0px_0.529px_5.295px_rgba(255,255,255,0.35)_inset] backdrop-blur-[3.31px]"
          />
        
          <Icon
            icon="ic:baseline-whatsapp"
            width="20px"
            height="20px"
            style={{ color: "#E8CFD2" }}
            className="flex justify-center items-center w-[32px] h-[32px] bg-gradient-to-r from-[rgba(238,80,112,0.03)] to-[rgba(238,80,112,0.30)] rounded-[10px] border-[0.79px] border-solid shadow-[0px_0.529px_5.295px_rgba(255,255,255,0.35)_inset] backdrop-blur-[3.31px]"
          />
          <hr className="border-b w-[53px] ml-[-15px] border-[#F2F2F266] my-4 -rotate-90" />
          <span className="text-[#E8CFD2]">info@nyatimotionpictures.com</span>
        </div>

        {/** floating arrow down btn */}
        <div className="absolute flex flex-col items-center text-center w-full bottom-12 left-0 right-0 mx-auto">
            <h2 className="w-full hidden md:block text-[#E8CFD2]">learn more</h2>
        </div>
        <div className="absolute w-[2rem] cursor-pointer bottom-3 left-0 right-0 mx-auto">
            <Icon
                onClick={scrollFunc}
                icon="solar:round-alt-arrow-down-broken"
                width="2rem"
                height="2rem"
                style={{ color: "#E8CFD2" }}
            />
        </div>


        </div>
      </div>
    </div>
  )
}

export default HeroAboutSection
