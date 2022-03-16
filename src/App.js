import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Playgame from "./routes/PlayNow";
import GamePage from "./routes/Mogul";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Playgame />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
