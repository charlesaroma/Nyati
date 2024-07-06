import React from 'react'

const Impact = () => {
  return (
    <div className="w-full h-[60vh] bg-[#141118]">
      <div className="w-[80%] h-full font-[18px] flex flex-col gap-4 justify-center items-center mx-auto my-5">
        {/* main title */}
        <h1 className="text-[#E8CFD2] w-full font-bold text-center text-2xl md:text-4xl">
            Our Impact
        </h1>

        {/* Paragraph */}
        <p className="w-full text-[#E8CFD2] font-light text-justify">
            Film is a very powerful and effective medium for the transmission of messages in society. In the last decade, Nyati Motion Pictures (NMP) has managed to produce educative and entertaining films that have affected our society positively.
        </p>
        <p className="w-full text-[#E8CFD2] font-light text-justify">
            The Nyati Motion Pictures is motivated by ‘art for man’s sake’. As a result, the Nyati team is committed to telling authentic African stories that bring the artistic reality close to the people. Our films are inspired by real-life experiences that are specific to the special and temporal setting, yet with universal themes. Our films represent Uganda’s culture and experience to the whole world with the primary purpose of contributing to the socio-economic development of our country and Africa at large.
        </p>
      </div>
    </div>
  )
}

export default Impact
