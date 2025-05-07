import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing, SignIn } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
