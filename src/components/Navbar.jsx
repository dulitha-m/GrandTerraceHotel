import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import MainLogo from "../assets/logoo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dining", label: "Menus" },
  { to: "/About", label: "About" },
  { to: "/Contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] w-full transition-all duration-500 ${
        scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.8)]" : ""
      }`}
    >
      {/* ── TOP STRIP ── */}
      <div className="hidden lg:block bg-[#0a0908] border-b border-[#D4A574]/10">
        <div className="max-w-[1600px] mx-auto px-8 py-[7px] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[9px] tracking-[0.32em] text-[#6b6560] font-bold uppercase">
              Grand Terrace Hotels & Resorts
            </span>
            <span className="text-[#2a2520]">|</span>
            <span className="font-serif italic text-[12px] text-[#8a7a6a]">
              Heritage Excellence since 1947
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a7a6a] hover:text-[#D4A574] transition-colors">
              <Globe size={11} className="text-[#D4A574]" />
              English <ChevronDown size={11} />
            </div>
            
          </div>
        </div>
      </div>

      {/* ── MAIN NAV (Logo Overlap Logic) ── */}
      <div className="hidden lg:block bg-[#0c0a08]/95 backdrop-blur-sm border-b border-[#D4A574]/10 relative">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col items-center pt-10 pb-4">
          
          {/* --- THE LOGO: PAHALATA GATHTHA & DIK KALA --- */}
          <div className="relative h-10 w-full flex justify-center items-center">
            <Link to="/" className="absolute top-[-18px] z-[1001] group">
              <img
                src={MainLogo}
                alt="Grand Terrace Logo"
                className="w-60 h-auto object-contain brightness-125 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
              />
            </Link>
          </div>

          {/* ── NAVIGATION LINKS ── */}
          <nav className="flex items-center gap-2 mt-10">
            {NAV_LINKS.map((link, idx) => (
              <React.Fragment key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-sans text-[10.5px] font-bold uppercase tracking-[0.32em] px-6 py-2 transition-all duration-300 ${
                      isActive ? "text-[#D4A574]" : "text-[#8a7a6a] hover:text-[#D4A574]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {idx !== NAV_LINKS.length - 1 && (
                  <span className="text-[#D4A574]/20 text-[8px] mx-1">✦</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* ── BOTTOM INFO BAR ── */}
      <div className="hidden lg:flex bg-[#080705] border-t border-[#D4A574]/5 h-[45px]">
        <div className="max-w-[1600px] mx-auto w-full flex text-[9px] tracking-[0.2em] font-bold uppercase">
          <div className="flex-1 flex items-center px-8 border-r border-[#D4A574]/5 text-[#4a4440]">
            Grand Terrace <span className="text-[#D4A574] ml-2">Colombo</span>
          </div>
          <div className="flex-1 flex items-center justify-center border-r border-[#D4A574]/5 text-[#c8b8a8] font-serif lowercase italic text-[13px] tracking-normal">
            {currentDate}
          </div>
          <div className="flex-1 flex items-center justify-center border-r border-[#D4A574]/5 text-[#6b6560]">
            <Phone size={10} className="text-[#D4A574] mr-2" /> +94 11 499 8998
          </div>
         
        </div>
      </div>

      {/* ── MOBILE NAVBAR ── */}
      <div className="lg:hidden bg-[#0c0a08] border-b border-[#D4A574]/10 px-5 py-3 flex items-center justify-between">
        <button onClick={() => setOpen(!open)} className="text-[#D4A574]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link to="/">
          <img src={MainLogo} alt="Logo" className="h-10 w-auto brightness-110" />
        </Link>
        <button className="bg-[#D4A574] text-black px-4 py-2 text-[8px] font-black uppercase">Book</button>
      </div>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            className="fixed inset-0 top-[60px] bg-[#0a0908] z-[998] flex flex-col px-10 pt-10 pb-8 lg:hidden"
          >
            <nav className="flex flex-col gap-7">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-[22px] tracking-[0.15em] uppercase transition-colors ${
                      isActive ? "text-[#D4A574]" : "text-[#c8b8a8] hover:text-[#D4A574]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <button className="w-full bg-[#D4A574] text-black py-4 font-sans font-black uppercase tracking-[0.25em] text-[11px]">
                Book Now
              </button>
              <div className="flex items-center justify-center gap-2">
                <Phone size={10} className="text-[#D4A574]" />
                <p className="text-[10px] tracking-[0.3em] text-[#4a4440] uppercase">+94 11 499 8998</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}