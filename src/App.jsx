import React from "react";
import Header from "./components/header/Header";
import { app, headerHeroBg } from "./App.module.sass";
import Hero from "./components/sections/Hero";
import SectionWhatFor from "./components/sections/SectionWhatFor";
import { HeaderContextProvider } from "./contexts/HeaderContext";

const App = () => {
  return (
    <div className={app}>
      <div className={headerHeroBg}>
        <HeaderContextProvider>
          <Header />
        </HeaderContextProvider>
        <Hero />
      </div>
      <SectionWhatFor />
    </div>
  );
};

export default App;
