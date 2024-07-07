import React from 'react'
import BG1 from "../../assets/Background.png"

const OurVision = () => {
  return (
    <div className="w-full h-full lg:h-screen relative">
        {/* Background image */}
        <div
          className="absolute top-0 left-0 z-[-1] w-full bg-cover bg-no-repeat h-full bg-center"
          style={{ backgroundImage: `url(${BG1})` }}>
        </div>

        {/* Text */}
        <div className=" h-full w-full flex flex-col gap-10 items-center justify-center">
            {/* text box 1 */}
            <div className="w-[80%] md:max-w-[350px] flex flex-col gap-2 items-start md:absolute md:top-[104px] md:left-[140px]">
                <h2 className="text-[#E8CFD2] font-md md:font-xl font-bold">Our Vision</h2>
                <h1 className="text-[#E8CFD2] font-bold text-2xl md:text-4xl text-start">We’re Creating authentic stories.</h1>
                <p className="text-[#E8CFD2] font-light">To become the leading local ‘authentic’ Film and Video Production Company in Uganda.</p>
            </div>            

            {/* text box 2 */}
            <div className="w-[80%] md:max-w-[350px] flex flex-col gap-2 items-end md:absolute md:bottom-[104px] md:right-[140px]">
                <h2 className="text-[#E8CFD2] font-md md:font-xl font-bold">Our Mission</h2>
                <h1 className="text-[#E8CFD2] font-bold text-2xl md:text-4xl text-end">Becoming a powerhouse in Eastern Africa.</h1>
                <p className="text-[#E8CFD2] font-light text-end">To be the leading high-quality Film and Video Production powerhouse in Eastern Africa capable of satisfying local and international consumer demands.</p>
            </div>
      </div>
    </div>
  )
}

export default OurVision
