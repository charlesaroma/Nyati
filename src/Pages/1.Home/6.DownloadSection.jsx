import React from 'react'
import Icons from "../../assets/icons.png";
import Pixcel from "../../assets/Pixel 7 Pro Mockup 1.png";
import Ipad from "../../assets/iPad Pro Right View Mockup 1.png";
import Iphone from "../../assets/iPhone X Horizontal Mockup 1.png"

const DownloadSection = () => {
  return (
    <div className="w-full h-screen flex-col bg-[#141118]">
      <div className="w-full h-full flex md:flex-row flex-col justify-around items-center">
        {/* image stack */}
        <div className="relative md:max-w-[567.11px] mt-20">            
            <img src={Ipad} alt="" className=""/>
            <img src={Pixcel} alt="" className="absolute left-[-20%] top-[-20%]" />
            <img src={Iphone} alt="" className="absolute right-[-20%] bottom-[-15%]"/>
        </div>

        {/* text stack */}
        <div className="w-[80%] md:max-w-[418px] flex flex-col justify-center items-center gap-5">
            {/* main title */}
            <div>
                <h1 className="text-[#F2F2F2] text-[50px] font-bold leading-[62.22px]">
                    Watch Anytime. Anywhere. 
                </h1>
            </div>
            {/* paragraph */}
            <div>
                <p className="text-[18px] text-justify text-[#FFFAF6B2]">
                Our app is the home of Local ‘Authentic’ stories that amplify Ugandan Culture. You can watch full episodes, Send Donations to fund future seasons of shows You love.
                </p>
            </div>
            {/* download text */}
            <div>
                <p className="text-[19.74px] text-justify font-bold text-[#FFFAF6B2]">
                Download the app below for free.
                </p>
            </div>
            {/* image */}
            <div>
                <img src={Icons} alt="" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default DownloadSection
