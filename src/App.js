import React from "react";
import {
  Blog,
  Footer,
  Header,
  Possiblity,
  WhatGPT3,
} from "./containers";
import { Brand, CTA, Featuriess, Navbar,} from "./components";
import "./App.css";
import "./index.css";
const App = () => {
  return (
    <div className="gradient_bg App">
      <div className="ab">
        <Navbar />
      </div>
        <Header />
      <Brand />
      <WhatGPT3 />
      <Featuriess />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
