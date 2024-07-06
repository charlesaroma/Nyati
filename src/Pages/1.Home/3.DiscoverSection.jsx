import React from 'react'
import BG from "../../assets/Logo 1.png"

const DiscoverSection = ({ nRef }) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#141118]">
      <div className="py-16 pl-[10%] flex flex-row justify-between items-center " ref={nRef}>
        {/* text stack */}
        <div className="max-w-[650px] flex flex-col gap-5">
          {/* main title */}
          <h1 className="text-[#F2F2F2] text-[50px] font-bold leading-[62.22px]">
            We are <span className="block">Nyati Motion Pictures</span> 
          </h1>
          
          {/* paragraph */}
          <div className="text-[18px] text-justify text-[#FFFAF6B2]">
            <p>
              Nyati (<span className="text-[#EE5070]">Buffalo in Kiswahili</span>) Motion Pictures (NMP) is a leading
              film and video production powerhouse in Uganda, East Africa,
              established in 2005.
            </p>
            <p>
              NMP has produced several notable films: Fate (2006), Fair Play
              (2010), and Windows of Hope(2011) in the feature film category,
              and A Book for Every Child (2013) in the documentary category.
              Currently, NMP is producing Tuko Pamoja, an exciting docuseries
              exploring Uganda’s 19th century.
            </p>
          </div>

          {/* button */}
          <div className="bg-[#1A171E] rounded-lg max-w-[347px] h-[64px] flex items-center justify-center">
            <button className="text-[#EE5070] text-[16px] uppercase italic font-bold">Discover more about  Company</button>
          </div>
          
        </div>
        {/* image stack */}
        <div  className="hidden md:flex">
            <img src={BG} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection
