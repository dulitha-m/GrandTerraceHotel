import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import MainLogo from "../assets/glogo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dining", label: "Lounges & Bars" },
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
      className={`fixed inset-x-0 top-0 z-[999] w-full transition-shadow duration-500 ${
        scrolled ? "shadow-[0_4px_40px_rgba(0,0,0,0.6)]" : ""
      }`}
    >
      {/* ── TOP STRIP (Desktop) ── */}
      <div className="hidden lg:block bg-[#0a0908] border-b border-[#D4A574]/10">
        <div className="max-w-[1600px] mx-auto px-8 py-[7px] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[9px] tracking-[0.32em] text-[#6b6560] font-bold uppercase font-sans">
              Grand Terrace Hotels & Resorts
            </span>
            <span className="text-[#2a2520]">|</span>
            <span className="font-serif italic text-[12px] text-[#8a7a6a] tracking-wide">
              Heritage Excellence since 1947
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a7a6a] cursor-pointer hover:text-[#D4A574] transition-colors">
              <Globe size={11} className="text-[#D4A574]" />
              English
              <ChevronDown size={11} />
            </div>
            {/* Angled clip-path Book button */}
            <button
              className="bg-[#D4A574] text-[#0a0908] px-5 py-[7px] text-[9px] font-black uppercase tracking-[0.22em] hover:bg-white transition-colors"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 68%, 82% 100%, 0 100%)" }}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN LOGO + NAV (Desktop) ── */}
      <div className="hidden lg:block bg-gradient-to-b from-[#0f0d0b] to-[#0c0a08] border-b border-[#D4A574]/8 relative">
        {/* Subtle gold glow line at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[55%] h-px bg-gradient-to-r from-transparent via-[#D4A574]/25 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-8 flex flex-col items-center pt-5 pb-3">

          {/* ── LOGO LOCKUP ── */}
          <div className="flex flex-col items-center mb-3">
            {/* Ornament row: line — diamond — crest — diamond — line */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-[#D4A574]" />
              <div className="w-[5px] h-[5px] bg-[#D4A574] rotate-45" />

              {/* Crest circle — wraps the logo image */}
              <div className="relative w-[60px] h-[60px] rounded-full border border-[#D4A574] flex items-center justify-center">
                {/* Inner ring */}
                <div className="absolute inset-[3px] rounded-full border border-[#D4A574]/25" />
                <img
                  src={MainLogo}
                  alt="Grand Terrace crest"
                  className="w-9 h-9 object-contain brightness-125 relative z-10"
                />
              </div>

              <div className="w-[5px] h-[5px] bg-[#D4A574] rotate-45" />
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-[#D4A574]" />
            </div>

            {/* Wordmark */}
            <p className="font-serif text-[20px] tracking-[0.18em] text-[#e8ddd4] uppercase leading-none">
              Grand{" "}
              <span className="text-[#D4A574]">Terrace</span>
            </p>

            {/* Sub-brand line */}
            <p className="font-sans text-[7.5px] tracking-[0.45em] text-[#6b6560] uppercase font-bold mt-1">
              Hotels & Resorts · Colombo
            </p>

            {/* Divider */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-12 h-px bg-[#D4A574]/25" />
              <div className="w-1 h-1 bg-[#D4A574] rotate-45" />
              <div className="w-12 h-px bg-[#D4A574]/25" />
            </div>
          </div>

          {/* ── NAV LINKS ── */}
          <nav className="flex items-center gap-0">
            {NAV_LINKS.map((link, idx) => (
              <React.Fragment key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-sans text-[9.5px] font-bold uppercase tracking-[0.28em] px-5 py-1.5 transition-colors duration-200 ${
                      isActive
                        ? "text-[#D4A574]"
                        : "text-[#7a6e64] hover:text-[#D4A574]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {idx !== NAV_LINKS.length - 1 && (
                  <span className="text-[#D4A574]/25 text-[6px]">✦</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* ── BOTTOM INFO BAR (Desktop) ── */}
      <div className="hidden lg:flex bg-[#080705] border-t border-[#D4A574]/8 h-[50px]">
        <div className="max-w-[1600px] mx-auto w-full flex">

          <div className="flex-1 flex items-center px-8 border-r border-[#D4A574]/7">
            <span className="font-sans text-[9px] tracking-[0.25em] text-[#4a4440] uppercase font-bold">
              Grand Terrace{" "}
              <span className="text-[#D4A574]">Colombo</span>
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center px-8 border-r border-[#D4A574]/7">
            <span className="font-serif text-[13px] text-[#c8b8a8] tracking-[0.06em]">
              {currentDate || "—"}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center px-8 border-r border-[#D4A574]/7">
            <Phone size={10} className="text-[#D4A574] mr-2" />
            <span className="font-sans text-[9px] tracking-[0.1em] text-[#6b6560]">
              +94 11 499 8998
            </span>
          </div>

          <button className="w-[140px] bg-[#D4A574] text-[#080705] font-sans text-[9.5px] font-black uppercase tracking-[0.25em] hover:bg-white transition-colors duration-300 shrink-0">
            Book Now
          </button>
        </div>
      </div>

      {/* ── MOBILE NAV BAR ── */}
      <div className="lg:hidden bg-[#0c0a08] border-b border-[#D4A574]/10 px-5 py-3 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          {open ? (
            <X size={24} className="text-[#D4A574]" />
          ) : (
            <Menu size={24} className="text-[#e8ddd4]" />
          )}
        </button>

        {/* Mobile logo — horizontal compact */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-[#D4A574] flex items-center justify-center">
            <img
              src={MainLogo}
              alt="Grand Terrace"
              className="w-5 h-5 object-contain brightness-125"
            />
          </div>
          <div className="leading-none">
            <p className="font-serif text-[13px] tracking-[0.12em] text-[#e8ddd4] uppercase">
              Grand <span className="text-[#D4A574]">Terrace</span>
            </p>
            <p className="font-sans text-[7px] tracking-[0.3em] text-[#6b6560] uppercase font-bold">
              Colombo
            </p>
          </div>
        </Link>

        <button className="bg-[#D4A574] text-[#080705] px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em]">
          Book
        </button>
      </div>

      {/* ── MOBILE OVERLAY MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 top-[60px] bg-[#0a0908] z-[998] flex flex-col px-10 pt-10 pb-8 lg:hidden"
          >
            {/* Decorative top rule */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-[#D4A574]/20" />
              <div className="w-1 h-1 bg-[#D4A574] rotate-45" />
              <div className="h-px flex-1 bg-[#D4A574]/20" />
            </div>

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
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-[#D4A574]/20" />
                <div className="w-1 h-1 bg-[#D4A574] rotate-45" />
                <div className="h-px flex-1 bg-[#D4A574]/20" />
              </div>
              <button className="w-full bg-[#D4A574] text-[#080705] py-4 font-sans font-black uppercase tracking-[0.25em] text-[11px]">
                Book Now
              </button>
              <div className="flex items-center justify-center gap-2">
                <Phone size={10} className="text-[#D4A574]" />
                <p className="text-center font-sans text-[10px] tracking-[0.3em] text-[#4a4440] uppercase">
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