import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Beer } from 'lucide-react';
import tapImg from "../assets/tap.png";

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
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic">Crafted & Chilled</h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">"The city's heartbeat. 10+ craft beers on tap, live sports, and the ultimate pub atmosphere for the modern explorer."</p>
        </div>
        <div className="bg-stone-900/30 p-10 rounded-[40px] border border-white/5 backdrop-blur-xl">
           <Beer className="text-[#D4A574] mb-8" size={32}/>
           <h3 className="text-xs uppercase tracking-[0.5em] mb-8">On the Tap</h3>
           <ul className="space-y-4 text-sm opacity-70 tracking-widest uppercase">
              <li>• Island Craft Lager</li>
              <li>• Spicy Pork Black Curry</li>
              <li>• Tap Bar Signature Wings</li>
           </ul>
           <button className="w-full mt-12 bg-[#D4A574] text-black py-4 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">Check Table Availability</button>
        </div>
      </section>
    </div>
  );
};
export default TapBar;