import React from "react";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing, SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
