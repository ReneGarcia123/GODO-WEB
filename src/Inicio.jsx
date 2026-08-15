import Hero from "./components/Hero/Hero.jsx";
import inicioData from "./data/inicioData.js";

import FeaturesSection from "./components/Features/FeatersSection.jsx";

import CommunityStats from "./components/CommunityStats/CommunityStats.jsx";
import communityStatsData from "./data/communityStatsData.js";

import Gallery from "./components/Gallery/Gallery.jsx";
import galleryData from "./data/galleryData.js";

import NextEvent from "./components/NextEvent/NextEvent.jsx"
import nextEventData from "./data/nextEventData.js"

const Inicio = () => {
  return (
    <main>

      <Hero data={inicioData.data} />

      <FeaturesSection />

      <CommunityStats data={communityStatsData} />

      <NextEvent data={nextEventData}/>

      <Gallery images={galleryData} />

    </main>
  );
};

export default Inicio;