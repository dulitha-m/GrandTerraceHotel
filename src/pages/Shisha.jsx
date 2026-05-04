import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, Wind, BookOpen, Clock, MapPin } from 'lucide-react';
import nigImg from "../assets/shi.jpeg";
import niLogo from "../assets/ni.png";

const Shisha = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif selection:bg-[#D4A574]">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={nigImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#D4A574] text-[10px] uppercase tracking-widest mb-8 font-bold hover:translate-x-[-5px] transition-transform">
            <ArrowLeft size={16} /> Back
          </Link>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl uppercase tracking-tight"
          >
            Istanbul Nights
          </motion.h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic">
            Shisha and hookah on the terrace

          </h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">
            "Transport yourself to the heart of Turkey mocktails, fresh juice with Mediterranean bites, and starlit views of the city."
          </p>

          {/* Time and Location moved below the logo */}


          {/* --- SHISHA MENU DOWNLOAD BUTTON --- */}
          <div className="pt-8">
            <h3 className="text-[#D4A574] text-[10px] uppercase tracking-[0.2em] font-bold mb-4 font-sans">View Our Selection</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/menus/istanbul-nights-menu.pdf"
                target="_blank"
                rel="noreferrer"
                download="Istanbul_Nights_Menu.pdf"
                className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-8 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full font-sans"
              >
                <BookOpen size={14} /> Shisha Menu
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 border border-[#D4A574]/15 rounded-[40px] transition-all duration-700 group-hover:scale-105"></div>
          <div className="relative overflow-hidden rounded-[30px] z-10 shadow-3xl bg-stone-900/50 border border-white/5 flex items-center justify-center p-8 md:p-12">
            <img
              src={niLogo}
              alt="Istanbul Nights Logo"
              className="w-full h-full object-contain transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Info Badges */}
          <div className="flex justify-center gap-10 mt-10">
            <div className="flex items-center gap-3">
              <Clock className="text-[#D4A574]" size={18} />
              <span className="text-[10px] tracking-widest uppercase font-bold">2pm to midnight</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Shisha;