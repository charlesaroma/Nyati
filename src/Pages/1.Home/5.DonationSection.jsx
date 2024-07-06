import React from 'react'
import image2 from '../../assets/image 2.png';
import image3 from '../../assets/image 3.png';


const DonationSection = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#141118]">
     <div className="w-[80%] h-full flex flex-col md:flex-row gap-20 justify-center items-center">
        {/* text stack */}
        <div className="max-w-[462.22px] flex flex-col gap-4">
            {/* main title */}
            <div>
            <h1 className="text-[#F2F2F2] text-[25px] md:text-[50px] font-bold">
                Contribute To <span className="block">Content Creation</span> 
            </h1>
            </div>
            {/* paragraph */}
            <div>
                <p className="text-[18px] text-justify text-[#FFFAF6B2]">
                Support stories that are authentically Ugandan and built a community of pioneers
                </p>
            </div>
            {/* button */}
            <div className="bg-[#1A171E] rounded-lg max-w-[215px] h-[64px] flex items-center justify-center">
                <button className="text-[#EE5070] text-[16px] uppercase italic font-bold">Send us a donation</button>
            </div>
        </div>

        {/* image stack */}
        <div className="relative">
            <img src={image2} alt="" />
            <img src={image3} alt="" className="absolute top-10 left-[50%]"/>
        </div>
     </div>      
    </div>
  )
}

export default DonationSection
