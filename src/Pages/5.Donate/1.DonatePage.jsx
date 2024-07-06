import React from "react";
import Navbar from "../../components/1.Navigation/Navbar.jsx";
import HelpUs from "./2.HelpUs.jsx";
import HowItWorks from "./3.HowItWorks.jsx";
import Projects from "./4.Projects.jsx";

const DonatePage = () => {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <Navbar />
      {/* Page Sections */}
      <div className="h-full w-full flex flex-col space-y-0">
        <HelpUs />
        <HowItWorks />
        <Projects />
      </div>
    </div>
  );
};

export default DonatePage;
