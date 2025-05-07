import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
