
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/1.Home/1.HomePage.jsx";
import About_Nyati from "./Pages/2.About_Nyati/1.About_Nyati.jsx";
import Services from "./Pages/3.Services/Services.jsx";
import Contact from "./Pages/4.Contact/Contact.jsx";
import Donate from "./Pages/5.Donate/1.DonatePage.jsx"


function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About_Nyati />} />
        <Route path="/services" element={<Services />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
