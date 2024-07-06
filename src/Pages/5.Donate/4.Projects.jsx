import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/service section1.png";
import Image2 from "../../assets/service section.png";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    className: "my-slider", // Custom class for the Slider component
  };

  return (
    <section className="py-16 bg-[#141118]">
      <div className="container mx-auto text-center">
        {/* Subheading */}
        <h2 className="text-xl text-[#F2F2F2] mb-2">
          Sponsoring opportunities..
        </h2>
        {/* Main heading */}
        <h1 className="capitalize text-4xl font-bold text-[#F2F2F2] mb-8">
          Upcoming Projects You can support
        </h1>
        <div className="flex justify-center items-center">
          <div className="max-w-[502px] w-full">
            <Slider {...settings}>
              {/* First image */}
              <div className="outline-none px-1">
                <img
                  src={Image1}
                  alt="Tuko Pamoja"
                  className="w-full h-auto lg:max-w-full lg:max-h-[359.11px] object-contain"
                />
              </div>
              {/* Second image */}
              <div className="outline-none px-1">
                <img
                  src={Image2}
                  alt="Conquer or Die"
                  className="w-full h-auto lg:max-w-full lg:max-h-[359.11px] object-contain"
                />
              </div>
            </Slider>
          </div>
        </div>
        {/* button */}
        <button
          className="bg-[#EE5170] w-[190.34px] h-[41.38px] rounded-[49.66px]
          font-inter font-semibold text-16 leading-19.36 text-[#FFFAF6] cursor-pointer mt-8"
          type="button"
        >
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default Projects;
