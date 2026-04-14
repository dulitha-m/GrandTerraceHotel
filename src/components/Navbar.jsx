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
      className={`fixed top-0 left-0 right-0 z-[999] w-full transition-all duration-500 bg-[#0a0908] ${scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.8)]" : ""
        }`}
    >
      {/* ── TOP STRIP (Poddakwath hidasak nathi wenna border-top reset kala) ── */}
      <div className="hidden lg:block bg-[#0a0908] border-b border-[#D4A574]/10 m-0 p-0">
        <div className="max-w-[1600px] mx-auto px-8 py-[10px] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.25em] text-[#8a7a6a] font-bold uppercase">
              Grand Terrace Hotels & Resorts
            </span>
            <span className="text-[#2a2520]">|</span>
            <span className="font-serif italic text-[13px] text-[#8a7a6a]">
              Heritage Excellence
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#c8b8a8] hover:text-[#D4A574] transition-colors cursor-pointer">
              <Globe size={12} className="text-[#D4A574]" />
              English <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div className="hidden lg:block bg-[#0c0a08]/95 backdrop-blur-sm border-b border-[#D4A574]/10 relative">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col items-center pt-10 pb-6">
          <div className="relative h-10 w-full flex justify-center items-center">
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 top-[-22px] z-[1001] group">
              <img
                src={MainLogo}
                alt="Grand Terrace Logo"
                className="w-64 h-auto object-contain brightness-125 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
              />
            </Link>
          </div>

          <nav className="flex items-center gap-4 mt-12">
            {NAV_LINKS.map((link, idx) => (
              <React.Fragment key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-sans text-[13px] font-extrabold uppercase tracking-[0.18em] px-6 py-2 transition-all duration-300 ${isActive ? "text-[#D4A574]" : "text-[#c8b8a8] hover:text-[#D4A574]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {idx !== NAV_LINKS.length - 1 && (
                  <span className="text-[#D4A574]/30 text-[10px] mx-1">✦</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* ── BOTTOM INFO BAR ── */}
      <div className="hidden lg:flex bg-[#080705] border-t border-[#D4A574]/5 h-[45px]">
        <div className="max-w-[1600px] mx-auto w-full flex text-[10px] tracking-[0.15em] font-bold uppercase">
          <div className="flex-1 flex items-center px-8 border-r border-[#D4A574]/5 text-[#6b6560]">
            Grand Terrace <span className="text-[#D4A574] ml-2">Colombo</span>
          </div>
          <div className="flex-1 flex items-center justify-center border-r border-[#D4A574]/5 text-[#c8b8a8] font-serif lowercase italic text-[14px] tracking-normal">
            {currentDate}
          </div>
          <div className="flex-1 flex items-center justify-center border-r border-[#D4A574]/5 text-[#c8b8a8]">
            <Phone size={12} className="text-[#D4A574] mr-2" /> +94 11 499 8998
          </div>
        </div>
      </div>

      {/* ── MOBILE NAVBAR ── */}
      <div className="lg:hidden bg-[#0c0a08] border-b border-[#D4A574]/10 px-8 py-7 flex items-center justify-between relative">
        <button onClick={() => setOpen(!open)} className="text-[#D4A574]">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={MainLogo} alt="Logo" className="h-10 w-auto brightness-110" />
        </Link>
        {/* Spacer to keep flex layout balanced */}
        <div className="w-14" />
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
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-[26px] tracking-[0.1em] uppercase transition-colors ${isActive ? "text-[#D4A574]" : "text-[#c8b8a8] hover:text-[#D4A574]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-6">
              <button className="w-full bg-[#D4A574] text-black py-5 font-sans font-black uppercase tracking-[0.2em] text-[13px]">
                Book Your Stay
              </button>
              <div className="flex items-center justify-center gap-3 py-4 border-t border-[#D4A574]/10">
                <Phone size={14} className="text-[#D4A574]" />
                <p className="text-[11px] tracking-[0.2em] text-[#8a7a6a] uppercase font-bold">
                  +94 11 499 8998
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}