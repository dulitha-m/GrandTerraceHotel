import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music } from 'lucide-react';
import kerImg from "../assets/ka.jpeg";

const Karaoke = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif">
      <section className="relative h-[65vh] flex items-end pb-16 px-6 md:px-20 overflow-hidden">
        <motion.img initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} transition={{ duration: 1.5 }} src={kerImg} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] to-transparent"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#D4A574] text-[10px] uppercase tracking-widest mb-8 font-bold"><ArrowLeft size={16} /> Back</Link>
          <h1 className="text-6xl md:text-9xl uppercase tracking-tight">Governor's Mic Karaoke</h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic">Sing in Luxury</h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">"Private suites for your inner rockstar. High-end sound systems, personalized service, and memories that last a lifetime."</p>
        </div>

      </section>
    </div>
  );
};
export default Karaoke;