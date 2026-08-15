import Hero from "./components/Hero/Hero.jsx";
import inicioData from "./data/inicioData.js";

import FeaturesSection from "./components/Features/FeatersSection.jsx";

import CommunityStats from "./components/CommunityStats/CommunityStats.jsx";
import communityStatsData from "./data/communityStatsData.js";

import Gallery from "./components/Gallery/Gallery.jsx";
import galleryData from "./data/galleryData.js";

const Inicio = () => {
  return (
    <main>

      <Hero data={inicioData.data} />

      <FeaturesSection />

      <CommunityStats data={communityStatsData} />

      <Gallery images={galleryData} />

    </main>
  );
};

export default Inicio;