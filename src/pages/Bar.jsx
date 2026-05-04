import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wine, Clock, MapPin, Beer as BeerIcon, Utensils } from 'lucide-react';
import baImg from "../assets/tt.jpeg";
import barPromo from "../assets/bar.png";

const Bar = () => {
  return (
    // font-serif eka ehemama thibbada
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif selection:bg-[#D4A574]">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }} 
          animate={{ scale: 1, opacity: 0.4 }} 
          transition={{ duration: 1.5 }}
          src={baImg} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#D4A574] text-[10px] uppercase tracking-widest mb-8 hover:translate-x-[-5px] transition-transform font-bold">
            <ArrowLeft size={16} /> Back to Collection
          </Link>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-6xl md:text-9xl uppercase tracking-tight"
          >
            Governor's Bar
          </motion.h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black italic">
            Spirits of heritage on York street Colombo 01(fort)

          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-80 italic">
            "Collection of arrack ,malts ,signature cocktails, shooters, superb Sri Lankan bar bites with live music amazing lighting a live sporting events on giant screens while you party on the grand terrace 
This is an out door smoking friendly area"
          </p>
          
          {/* Time and Location Moved below the logo */}


          {/* --- MENUS ADDED HERE --- */}
          <div className="pt-8">
            <h3 className="text-[#D4A574] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">View Our Menus</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/menus/Beer_Menu.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-6 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full"
              >
                <BeerIcon size={14} /> Beer Menu
              </a>
              
              <a 
                href="/menus/Bar_Menu.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-6 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full"
              >
                <Wine size={14} /> Bar Menu
              </a>
              
              <a 
                href="/menus/Bite_Menu.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-6 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full"
              >
                <Utensils size={14} /> Bite Menu
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
              src={barPromo} 
              alt="The Grand Terrace Bar" 
              className="w-full h-full object-contain transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Info Badges */}
          <div className="flex justify-center gap-10 mt-10">
            <div className="flex items-center gap-3">
              <Clock className="text-[#D4A574]" size={18}/>
              <span className="text-[10px] tracking-widest uppercase font-bold">2pm to midnight</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A574]" size={18}/>
              <span className="text-[10px] tracking-widest uppercase font-bold">terrace</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Bar;