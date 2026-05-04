import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Beer, Clock, MapPin } from 'lucide-react';
import tapImg from "../assets/taptap.jpeg";
import tapLogo from "../assets/tapbar.png";

const TapBar = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif">
      <section className="relative h-[65vh] flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <motion.img initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ duration: 1.5 }} src={tapImg} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#D4A574] text-[10px] uppercase tracking-widest mb-8 font-bold"><ArrowLeft size={16} /> Back</Link>
          <h1 className="text-6xl md:text-9xl uppercase tracking-tight">Tap Bar</h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic">Tap Bar – Established 1875</h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">"Founded in 1875, Tap Bar stands as a timeless landmark where history, character, and tradition come together—serving craft and draft beers on tap and amazing bar bites with live sporting events and great music, creating lasting experiences for the modern-day explorer."</p>
          {/* Time badge moved below the logo */}

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
              src={tapLogo} 
              alt="Tap Bar Logo" 
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
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default TapBar;