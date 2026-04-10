import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Download, ArrowRight, Clock, ShieldCheck, Flame, Zap, Beer } from 'lucide-react';
import { diningOutlets } from '../data/diningData'; 

const Dining = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen pt-32 selection:bg-[#D4A574] selection:text-black">
      
      {/* --- HERO SECTION (Cinematic Bar Vibe) --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc3b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-110 opacity-60"
            alt="Bar Hero"
          />
          {/* Luxury Moody Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/90 via-transparent to-[#0c0a09]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <motion.span 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="uppercase text-[10px] font-black mb-6 block text-[#D4A574]"
          >
            Spirits & Socials
          </motion.span>
          <h1 className="text-6xl md:text-9xl font-serif text-white leading-tight">
            The <span className="italic text-[#D4A574] font-light">Experience</span>
          </h1>
          <p className="text-stone-400 uppercase tracking-[0.4em] text-[10px] mt-6">Fine Spirits • Craft Brews • Shisha • Bites</p>
          <div className="w-20 h-[1px] bg-[#D4A574] mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* --- INTRO TEXT (Bar Focus) --- */}
      <section className="py-32 px-6 text-center max-w-5xl mx-auto relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#D4A574] to-transparent"></div>
        <h2 className="text-[#D4A574] uppercase tracking-[0.4em] text-[10px] font-black mb-8">Elevated Nightlife</h2>
        <p className="text-3xl md:text-5xl font-serif text-stone-200 italic leading-[1.4]">
          "Crafting the perfect pour, paired with <span className="text-[#D4A574]">signature bites</span> and a vibe that lasts until the <span className="text-[#D4A574]">early hours</span>."
        </p>
      </section>

      {/* --- OUTLETS GRID --- */}
      <section className="pb-40 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 gap-40">
          {diningOutlets.map((outlet, index) => (
            <motion.div 
              key={outlet.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-[55%] relative group">
                <div className="absolute -inset-4 border border-[#D4A574]/10 rounded-[40px] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                <div className="relative overflow-hidden rounded-[30px] z-10 shadow-2xl bg-stone-900">
                  <img 
                    src={outlet.image} 
                    alt={outlet.name} 
                    className="w-full h-[550px] object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80"
                  />
                  {/* Subtle Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute bottom-8 left-8 bg-[#D4A574] text-black px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-black rounded-full">
                    {outlet.cuisine === "Fine Dining" ? "Premium Lounge" : outlet.cuisine} 
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] space-y-10 lg:px-12">
                <div className="space-y-4">
                  <span className="text-[#D4A574] text-[10px] tracking-[0.4em] uppercase font-bold">Outlet {outlet.id}</span>
                  <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-none">
                    {outlet.name}
                  </h3>
                </div>

                <p className="text-stone-400 leading-relaxed font-light text-xl italic">
                  {outlet.description}
                </p>
                
                {/* Bar Specific Info */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  <div className="flex items-start gap-3">
                    <Zap className="text-[#D4A574] shrink-0" size={18} />
                    <div>
                      <span className="block text-[9px] uppercase text-stone-500 tracking-[0.2em] font-bold mb-1">Signature</span>
                      <span className="text-[13px] text-stone-200">Cocktails & Burgers</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Flame className="text-[#D4A574] shrink-0" size={18} />
                    <div>
                      <span className="block text-[9px] uppercase text-stone-500 tracking-[0.2em] font-bold mb-1">Atmosphere</span>
                      <span className="text-[13px] text-stone-200">Electric Lounge</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                  <button className="bg-[#D4A574] hover:bg-white text-black px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 rounded-full shadow-xl">
                    Book a Spot <ArrowRight size={14} />
                  </button>
                  
                  <button className="border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3 rounded-full">
                    Drink & Bite Menu <Download size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- NIGHTLIFE CTA --- */}
      <section className="relative py-32 px-6 text-center overflow-hidden border-t border-white/5 bg-stone-950/30">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Wine className="mx-auto mb-10 text-[#D4A574] opacity-50" size={50} />
            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">Plan a <span className="italic text-[#D4A574]">Night Out</span></h2>
            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto italic">
              "From private shisha sessions to VIP karaoke nights, make your Colombo nightlife legendary at Grand Terrace."
            </p>
            <div className="flex justify-center gap-8">
                <div className="text-center">
                    <Beer className="mx-auto text-[#D4A574] mb-2" />
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest">Craft Brews</p>
                </div>
                <div className="text-center">
                    <Wine className="mx-auto text-[#D4A574] mb-2" />
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest">Fine Wine</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dining;