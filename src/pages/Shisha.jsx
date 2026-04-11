import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, Wind, BookOpen } from 'lucide-react';
import nigImg from "../assets/nig.png";

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
            Exotic Rooftop Lounge
          </h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">
            "Transport yourself to the heart of Turkey. Premium shisha blends, Mediterranean bites, and starlit views of the city."
          </p>

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

      </section>
    </div>
  );
};

export default Shisha;