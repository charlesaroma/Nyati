import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/image 1.png';
import image2 from '../../assets/image 2.png';
import image3 from '../../assets/image 3.png';
import image4 from '../../assets/image 4.png';

const MovieSliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const movies = [
    { id: 1, title: 'Window of hope', imageUrl: image1 },
    { id: 2, title: 'Fair Play', imageUrl: image2 },
    { id: 3, title: 'Fate', imageUrl: image3 },
    { id: 4, title: 'Tuko Pamoja', imageUrl: image4 },
  ];

  return (
    <div className="w-full h-full lg:h-screen flex flex-col bg-[#141118] py-16">
      <div className="w-full flex flex-col justify-between space-y-[2%] pl-[10%] my-auto">
        {/* Movie Slider heading */}
        <h1 className="text-[#F2F2F2] text-[26px] text-center lg:text-left">
          Featured Movies
        </h1>

        {/* Slider */}
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="outline-none text-center lg:text-left">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="rounded-md min-w-[295px] h-[370px] mx-auto"
              />
              <h3 className="text-[19px] font-light mt-2 text-[#F2F2F2]">
                {movie.title}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieSliderSection;
