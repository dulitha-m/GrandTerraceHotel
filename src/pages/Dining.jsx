import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Download, ArrowRight, Flame, Zap, Beer as BeerIcon, Utensils, Wind } from 'lucide-react';
import { diningOutlets } from '../data/diningData';

// PDF Imports
import governorsBarMenu from "../menus/bite menu.pdf";
import karaokeSuiteMenu from "../menus/bar menu.pdf";
import tapBarMenu from "../menus/beer menu.pdf";
import istanbulMenu from "../menus/istanbul-nights-menu.pdf";

const Dining = () => {
  return (
    <div className="bg-[#0c0a09] min-h-screen pt-32 selection:bg-[#D4A574] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc3b?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover scale-110 opacity-60"
            alt="Bar Hero"
          />
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
          <p className="text-stone-400 uppercase tracking-[0.4em] text-[10px] mt-6">
            Fine Spirits • Craft Brews • Shisha • Bites
          </p>
          <div className="w-20 h-[1px] bg-[#D4A574] mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* --- OUTLETS GRID --- */}
      <section className="py-20 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 gap-40">
          {diningOutlets.map((outlet, index) => {
            const isGovernorsBar = outlet.name === "GOVERNOR'S BAR";
            const isKaraoke = outlet.name === "KARAOKE SUITE";
            const isTapBar = outlet.name === "TAP BAR";
            const isIstanbul = outlet.name === "ISTANBUL NIGHTS";

            return (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-8 bg-[#D4A574] text-black px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-black rounded-full">
                      {outlet.cuisine}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-[45%] space-y-10 lg:px-12">
                  <div className="space-y-4">
                    <span className="text-[#D4A574] text-[10px] tracking-[0.4em] uppercase font-bold">Outlet {outlet.id}</span>
                    <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-none">{outlet.name}</h3>
                  </div>
                  <p className="text-stone-400 leading-relaxed font-light text-xl italic">{outlet.description}</p>

                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                    <div className="flex items-start gap-3">
                      <Zap className="text-[#D4A574] shrink-0" size={18} />
                      <div>
                        <span className="block text-[9px] uppercase text-stone-500 tracking-[0.2em] font-bold mb-1">Status</span>
                        <span className="text-[13px] text-stone-200">Open Daily</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Flame className="text-[#D4A574] shrink-0" size={18} />
                      <div>
                        <span className="block text-[9px] uppercase text-stone-500 tracking-[0.2em] font-bold mb-1">Timing</span>
                        <span className="text-[13px] text-stone-200">{outlet.openingHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {isGovernorsBar ? (
                      <>
                        <a href={tapBarMenu} download="Beer_Menu.pdf" className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-6 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full">
                          <BeerIcon size={14} /> Beer Menu
                        </a>
                        <a href={karaokeSuiteMenu} download="Bar_Menu.pdf" className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-6 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full">
                          <Wine size={14} /> Bar Menu
                        </a>
                        <a href={governorsBarMenu} download="Bite_Menu.pdf" className="flex-1 min-w-fit border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-6 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 rounded-full">
                          <Utensils size={14} /> Bite Menu
                        </a>
                      </>
                    ) : isIstanbul ? (
                      /* Istanbul Nights lassanata icons ekka menu eka download wenna */
                      <a href={istanbulMenu} download="Istanbul_Nights_Menu.pdf" className="flex-1 md:flex-none border border-white/10 hover:border-[#D4A574] text-stone-300 hover:text-[#D4A574] px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 rounded-full">
                        <Wind className="text-[#D4A574]" size={16} /> 
                        Shisha Menu 
                        <Download size={14} />
                      </a>
                    ) : (isKaraoke || isTapBar) ? (
                      null 
                    ) : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* --- NIGHTLIFE CTA --- */}
      <section className="relative py-32 px-6 text-center overflow-hidden border-t border-white/5 bg-stone-950/30">
        <div className="max-w-4xl mx-auto relative z-10">
          <Wine className="mx-auto mb-10 text-[#D4A574] opacity-50" size={50} />
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">
            The <span className="italic text-[#D4A574]">Night</span> is Young
          </h2>
          <p className="text-stone-400 text-lg md:text-xl font-light mb-12 italic">
            "Sip, socialize, and savor the finest moments in Colombo."
          </p>
          <div className="flex justify-center">
             <div className="w-20 h-[1px] bg-[#D4A574]/30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;