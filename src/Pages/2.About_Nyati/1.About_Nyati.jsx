import React from 'react';
import Navbar from '../../components/1.Navigation/Navbar.jsx';
import HeroAboutSection from './2.HeroAboutSection.jsx';
import AboutFounder from './3.AboutFounder.jsx';
import OurVision from './4.OurVision.jsx';
import Impact from "./5.Impact.jsx";
import AboutDonation from './6.AboutDonation.jsx';
import FeaturedMovies from "./7.MovieSliderSection.jsx"
import LetsConnect from './8.LetsConnect.jsx';
 
const About_Nyati = () => {
  let nextRef = React.useRef(null);

  const handleScrollTo = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({behaviour:"smooth", block: "start"})
    }
  }
  return (
    <div className="w-full h-full overflow-x-hidden relative">
      <Navbar />
      {/* page sections */}
      <div className="h-full w-full flex flex-col space-y-0">
        <HeroAboutSection scrollFunc={handleScrollTo} />
        <AboutFounder nRef={nextRef} />
        <OurVision />
        <Impact />
        <AboutDonation />
        <FeaturedMovies />
        <LetsConnect />
      </div>

      {/* <Footer /> */}

    </div>
  )
}

export default About_Nyati