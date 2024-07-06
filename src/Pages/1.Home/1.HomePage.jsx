import React from 'react';
import Navbar from "../../components/1.Navigation/Navbar.jsx";
import Hero from "./2.HeroSection.jsx";
import DiscoverSection from "./3.DiscoverSection.jsx";
import MovieSliderSection from './4.MovieSliderSection.jsx';
import DonationSection from './5.DonationSection.jsx';
import DownloadSection from './6.DownloadSection.jsx';
import Connect from './7.Connect.jsx';
// import Footer from '../../components/2.Footer/Footer.jsx';


const Home = () => {
  let nextRef = React.useRef(null);

  const handleScrollTo = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({behaviour:"smooth", block: "start"})
    }
  }
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <Navbar />

      {/* page sections */}
      <div className="h-full w-full flex flex-col space-y-0">
        <Hero scrollFunc={handleScrollTo} />       
        <DiscoverSection nRef={nextRef} />
        <MovieSliderSection />
        <DonationSection /> 
        <DownloadSection />
        <Connect />     
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
