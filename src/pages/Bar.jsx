import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wine, Clock, MapPin, Beer as BeerIcon, Utensils } from 'lucide-react';
import baImg from "../assets/tt.jpeg";
import barPromo from "../assets/bar.png";

const Bar = () => {
  return (
    // font-serif eka ehemama thibbada
    <div className="bg-[#0c0a09] min-h-screen text-[#E6D5C3] font-serif selection:bg-[#D4A574] overflow-x-hidden">
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
            className="text-6xl md:text-8xl uppercase tracking-tight"
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
            "Collection of Arrack, Malts, Signature Cocktails, Shooters, Superb Sri Lankan Bar Bites, Live Music, Dj Music, Amazing Lighting, Live Sporting Events on Giant Screens while You Party on the Grand Terrace"
            <br></br> 
            This is an Out door Smoking Friendly area !
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
          <div className="relative overflow-hidden rounded-[30px] z-10 shadow-3xl bg-stone-900/50 border border-white/5 flex items-center justify-center p-8 md:p-0">
            <img 
              src={barPromo} 
              alt="The Grand Terrace Bar" 
              className="w-full h-full object-contain transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Info Badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-10">
            <div className="flex items-center gap-3">
              <Clock className="text-[#D4A574]" size={18}/>
              <span className="text-[10px] tracking-widest uppercase font-bold">two pm to midnight</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#D4A574]" size={18}/>
              <span className="text-[10px] tracking-widest uppercase font-bold">terrace</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- MAP SECTION --- */}
<section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
  <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl h-[450px] w-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6065117942817!2d79.84249267581792!3d6.937542018211763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25904b784b367%3A0xb47b69896ffbb59c!2sGOVERNOR&#39;S%20BAR!5e0!3m2!1sen!2slk!4v1779396495671!5m2!1sen!2slk" 
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

export default Bar;