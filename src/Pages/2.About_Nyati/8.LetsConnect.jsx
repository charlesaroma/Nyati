import React from 'react'

const LetsConnect = () => {
  return (
    <div className="w-full h-[40vh] bg-[#141118]">
        <div className="w-[80%] h-full flex flex-col justify-center mx-auto">
            {/* heading */}
            <h2 className="text-[#F2F2F2] text-[30px] text-center md:text-start font-bold">Let's Connect</h2>
            {/* contacts */}
            <div className="w-full text-[#F2F2F2] flex flex-col md:flex-row items-center ">
                <div className="w-[450px] text-center md:text-start md:border-r md:border-r-[#F2F2F2] p-2">
                    <span>nyatimotionpictures@gmail.com </span>
                </div>
                <div className="w-[480px] text-center p-2">
                    <span>Call.  +256 774 828 701</span>
                    <span className="block">+256 778 787 660</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LetsConnect