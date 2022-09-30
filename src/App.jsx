import React from "react";
import Header from "./components/header/Header";
import { app, headerHeroBg } from "./App.module.sass";

const App = () => {
  return (
    <div className={app}>
      <div className={headerHeroBg}>
        <Header />
      </div>
    </div>
  );
};

export default App;
