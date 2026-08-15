import React from 'react'
import AboutHero from "./components/AboutHero/AboutHero.jsx";
import aboutHeroData from "./data/aboutHeroData.js"
import FeaturesSection2 from "./components/Features2/FeatersSection2.jsx";


const Nosotros = () => {
  return (
    <main>
      <AboutHero data={aboutHeroData}/>
      <FeaturesSection2/>

    </main>
    
  )
}

export default Nosotros