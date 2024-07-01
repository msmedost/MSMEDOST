import ServicesAndTeam from "./ServicesAndTeam/ServicesAndTeam"
import About from "./About/About"
import Faq from "./Faq/Faq"
import Hero from "./Hero/Hero"
import WhyToJoin from "./WhyToJoin/WhyToJoin"
import React, { useEffect } from 'react';
import Testimonial from "../Testimonial/Testimonial"


function HomePage() {
 
  return (
    <div>
      
        <Hero />
  
        <section id="about-section">
      <About />
        </section>
  
    <section id="whytojoin">
      <WhyToJoin />
    </section>

      <ServicesAndTeam />

      <Testimonial />
      
      <section id="faq-section">
      <Faq />
      </section>

      
    </div>
  )
}
export default HomePage