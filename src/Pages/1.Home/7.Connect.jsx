import React from 'react';
import { Icon } from "@iconify/react";

const LetsConnect = () => {
  return (
    <div className="w-full min-h-[50vh] bg-[#141118] p-8">
      <div className="w-full h-full px-[10%]" spacing={5}>
        {/* Title */}
        <div>
          <h1 className="text-[#F2F2F2] font-2xl md:font-4xl font-bold text-center md:text-left">
            Let's Connect
          </h1>
        </div>

        {/* flex layout */}
        <div className="w-full">
        {/* Flex Layout */}
        <div className="flex flex-wrap justify-around">
          {/* First Row: 3 Columns */}
          <div className="flex-1 md:flex-[0_0_30%] border-b md:border-b-0 md:border-r border-[#F2F2F2] p-2">
            <p className="text-lg text-[#F2F2F2] text-center md:text-left">
              nyatimotionpictures@gmail.com
            </p>
          </div>
          <div className="flex-1 md:flex-[0_0_30%] border-b md:border-b-0 md:border-r border-[#F2F2F2] p-2">
            <p className="text-lg text-[#F2F2F2] text-center md:text-left">
              <span className="text-pink-500">Call.</span> +256 774 828701
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Icon icon="ic:baseline-whatsapp" width="20px" height="20px" style={{ color: "#EE5070" }} />
              <p className="text-lg text-[#F2F2F2]">+256 77 8787660</p>
            </div>
          </div>
          <div className="flex-1 md:flex-[0_0_30%] p-2">
            <p className="text-lg text-[#F2F2F2] text-center md:text-left flex gap-2 items-center justify-center md:justify-start">
              <Icon icon="prime:twitter" width="20px" height="20px" style={{ color: "#EE5070" }} />
              @NyatiMPictures
            </p>
            <p className="text-lg text-[#F2F2F2] text-center md:text-left flex gap-2 items-center justify-center md:justify-start">
              <Icon icon="mdi:youtube" width="20px" height="20px" style={{ color: "#EE5070" }} />
              @YTNyatiMPictures
            </p>
          </div>

          {/* Second Row: Spans Across All Columns */}
          <div className="w-full p-4 border-t border-[#F2F2F2] text-center md:text-left">
            <p className="text-lg text-[#F2F2F2]">
              P.O. Box 74733 Kampala, Uganda
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default LetsConnect;
