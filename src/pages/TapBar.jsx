import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Beer, Clock, MapPin } from 'lucide-react';
import tapImg from "../assets/taptap.jpeg";
import tapLogo from "../assets/tap-bar.png";

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
          <h2 className="text-[#D4A574] text-[10px] uppercase tracking-[0.4em] font-black mb-8 italic">Tap Bar - Established 1875</h2>
          <p className="text-2xl md:text-3xl font-light italic opacity-80 leading-relaxed">"Founded in 1875, Tap Bar stands as a Tmeless Landmark where History, Character and Tradition Come Together — Serving Craft and Draft Beers on Tap and Amazing Bar Bites with Live Sporting Events, Great Music, Creating a Lasting Experience for The Modern - Day Explorer"</p>
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
          <div className="relative overflow-hidden rounded-[30px] z-10 shadow-3xl bg-stone-900/50 border border-white/5 flex items-center justify-center p-8 md:p-0">
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
              <span className="text-[10px] tracking-widest uppercase font-bold">two pm to midnight</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
  <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl h-[450px] w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.1507626066099!2d79.84458866959709!3d6.937953530851203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25926dd07a537%3A0x719eae312e6f8529!2sGrand%20Oriental%20Hotel%20-%20Tap%20Bar!5e0!3m2!1sen!2slk!4v1778011904621!5m2!1sen!2slk"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe> 
  </div>
</section>
    </div>
  );
};
export default TapBar;