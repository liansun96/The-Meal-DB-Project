import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import SearchByName from "./pages/SearchByName";
import RandomMeal from "./pages/RandomMeal";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import Bookmarks from "./pages/Bookmarks";

const App = () => {
  return (
    <div className="w-[1200px] mx-auto relative">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/searchbyname" element={<SearchByName />} />
        <Route path="/randommeal" element={<RandomMeal />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
};

export default App;
