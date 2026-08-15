import React from "react";
import Hero from "./components/Hero/Hero.jsx"
import inicioData from "./data/inicioData.js"

const Inicio = () => {
  return (
    <main>
      <Hero data={inicioData.data}/>
    </main>
  );
};

export default Inicio;