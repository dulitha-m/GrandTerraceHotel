import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Dining from "./pages/Dining.jsx";
import Venue from "./pages/Venue.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Bar from './pages/Bar';
import Shisha from "./pages/Shisha.jsx";
import TapBar from "./pages/TapBar.jsx";
import Karaoke from "./pages/Karaoke.jsx";
export default function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/dining/:id" element={<Venue />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/shisha" element={<Shisha />} />
          <Route path="/tap-bar" element={<TapBar />} />
          <Route path="/karaoke" element={<Karaoke />} />
        </Route>
      </Routes>
    </ScrollToTop>
  ); // Added missing closing tag and brace
}