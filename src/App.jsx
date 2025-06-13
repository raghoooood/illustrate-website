import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Explore from "./components/design/Explore";
import CompanyLogos from "./components/CompanyLogos";
import CreatedBy from "./components/design/CreatedBy";
import About from "./components/design/About";
import World from "./components/World";
import First from "./components/home/first";
import Second from "./components/home/second";
import Pricing from "./components/Pricing";
import { Route, Routes } from "react-router-dom";
import { planetBG1, planetBG2 } from "./assets";
import Contact from "./components/Contact";
const App = () => {
  return (
    <>
      <div className="pt-[2.75rem] lg:pt-[1.25rem] overflow-hidden">
        <Header />
        <Routes>
        <Route path="/" element={
          <>
          <Hero />

            <div
           className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"  
               style={{ backgroundImage: `url(${planetBG1})` }}
    >
      {/* Optional overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content sits above background and overlay */}
      <div className="relative z-10">
        <First />
        <Second />
      </div>
    </div>
            <Benefits />
            <CreatedBy/>
            <Services />
          
            <Explore/>
        </>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Roadmap/>}/>
          <Route path="/our_clients" element={<CompanyLogos/>}/>
          <Route path="/behind_the_magic" element={<World/>}/>
          <Route path="/contact" element={<Contact/>} />



        </Routes>
        
        <Footer />

      </div>
      <ButtonGradient />

    </>

  );
};

export default App;
