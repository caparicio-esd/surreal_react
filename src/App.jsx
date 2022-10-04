import React from "react";
import Header from "./components/header/Header";
import { app, headerHeroBg } from "./App.module.sass";
import Hero from "./components/sections/Hero";
import SectionWhatFor from "./components/sections/SectionWhatFor";

const App = () => {
  return (
    <div className={app}>
      <div className={headerHeroBg}>
        <Header />
        <Hero />
      </div>
      <SectionWhatFor />
    </div>
  );
};

export default App;
