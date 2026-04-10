import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wine, Clock, MapPin } from 'lucide-react';
import baImg from "../assets/ba.png";

const Bar = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif selection:bg-[#D4A574]">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ duration: 1.5 }}
          src={baImg} className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#D4A574] text-[10px] uppercase tracking-widest mb-8 hover:translate-x-[-5px] transition-transform font-bold">
            <ArrowLeft size={16} /> Back to Collection
          </Link>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-9xl uppercase tracking-tight">Governor's Bar</motion.h1>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black italic">The Spirit of Heritage</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-80 italic">
            "Colombo's most refined sanctuary for connoisseurs. Experience an unrivaled collection of rare malts and master-crafted signature cocktails."
          </p>
          <div className="flex gap-10 pt-10 border-t border-white/5">
            <div className="flex items-center gap-3"><Clock className="text-[#D4A574]" size={18}/><span className="text-xs tracking-widest uppercase">5PM - 2AM</span></div>
            <div className="flex items-center gap-3"><MapPin className="text-[#D4A574]" size={18}/><span className="text-xs tracking-widest uppercase">Lobby Level</span></div>
          </div>
        </div>
        <div className="bg-stone-900/30 p-10 rounded-[40px] border border-white/5 backdrop-blur-xl">
           <Wine className="text-[#D4A574] mb-8" size={32}/>
           <h3 className="text-xs uppercase tracking-[0.5em] mb-8">House Specialties</h3>
           <ul className="space-y-4 text-sm opacity-70 tracking-widest uppercase">
              <li>• Vintage Old Fashioned</li>
              <li>• Highland Single Malt Selection</li>
              <li>• Governor's Signature Arrack Sour</li>
           </ul>
           <button className="w-full mt-12 bg-[#D4A574] text-black py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">Make a Reservation</button>
        </div>
      </section>
    </div>
  );
};
export default Bar;