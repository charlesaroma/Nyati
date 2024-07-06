import React from "react";
import MockUp from "../../assets/MacBook Pro and iPhone 15 Pro Mockup.png";

const HowItWorks = () => {
  return (
    <div className="w-full h-full bg-[#221f26]">
      {/* container */}
      <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-center lg:justify-evenly px-3 py-16">
        {/* Image */}
        <div>
          <img src={MockUp} alt="mockup" />
        </div>

        {/* text */}
        <div className="flex flex-col gap-5">
          {/* heading */}
          <h1 className="text-[#FFFFFE] font-bold text-3xl lg:text-5xl">How does it work?</h1>

          {/* paragraph */}
          <p className="max-w-[540px] text-[#FFFAF6B2] text-lg lg:text-xl font-light flex flex-col gap-5">
            <span>
              Whether you're watching a movie on the Nyati Streaming app or
              binging new episodes on your phone, you'll find a 'Donation'
              button. Simply select your preferred payment option, and voila!
            </span>
            <span className="block">
              Your shillings go toward content the whole family can enjoy. After
              you donate, you can track the positive impact you've made on
              others.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
