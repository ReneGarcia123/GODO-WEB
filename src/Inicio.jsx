import React from "react";
import Hero from "./components/Hero/Hero.jsx"
import inicioData from "./data/inicioData.js"
import AboutPreview from "./components/AboutPreview/AboutPreview.jsx"
import aboutPreviewData from "./data/aboutPreviewData.js"
import FeaturesSection from "./components/Features/FeatersSection.jsx"
import CommunityStats from "./components/CommunityStats/CommunityStats.jsx"
import communityStatsData from "./data/communityStatsData.js"

const Inicio = () => {
  return (
    <main>
      <Hero data={inicioData.data}/>
      <FeaturesSection/>
      <CommunityStats data={communityStatsData}/>
    </main>
  );
};

export default Inicio;