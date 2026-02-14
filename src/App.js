import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
// import './styles/main.scss'; // global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HowItWorks />
      {/* Add more sections here */}
    </div>
  );
}

export default App;
