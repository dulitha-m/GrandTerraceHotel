import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Clock, MapPin, Coffee } from 'lucide-react';
import { diningOutlets } from '../data/diningData';

const Dining = () => {
  return (
    // Roasted Cocoa Base Background
    <div className="bg-[#2C1E16] min-h-screen text-[#E6D5C3] selection:bg-[#6F4E37] selection:text-white">
      
      {/* --- ELITE HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Roasted Cocoa Dining"
          />
          {/* Cocoa Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120B]/80 via-transparent to-[#2C1E16]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="uppercase tracking-[0.8em] text-[10px] font-bold mb-6 block text-[#C5A059]">The Cocoa Collection</span>
            <h1 className="text-6xl md:text-[100px] font-serif font-light leading-none mb-8">
              Savor the <br/> 
              <span className="italic font-serif text-[#D4A574]">Deep Roast</span>
            </h1>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* --- THE PHILOSOPHY --- */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">Culinary Heritage</h2>
          <p className="text-2xl md:text-4xl font-serif font-light leading-snug italic text-[#F5E6DA]">
            "Where the richness of roasted cocoa meets the finesse of modern gastronomy."
          </p>
        </motion.div>
      </section>

      {/* --- OUTLETS: THE COLLECTION --- */}
      <section className="pb-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-48">
          {diningOutlets.map((outlet, index) => (
            <div key={outlet.id} className="relative group">
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Visual Content with Cocoa Border */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 p-2 border border-[#6F4E37]/30"
                >
                  <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden shadow-2xl">
                    <img 
                      src={outlet.image} 
                      alt={outlet.name} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 space-y-8"
                >
                  <div className="space-y-2">
                    <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold italic">0{index + 1} — {outlet.cuisine}</span>
                    <h3 className="text-5xl font-serif text-[#F5E6DA] font-light leading-tight">{outlet.name}</h3>
                  </div>

                  <p className="text-[#BCA38F] text-lg leading-relaxed font-light">
                    {outlet.description}
                  </p>

                  <div className="grid grid-cols-2 gap-8 py-6 border-y border-[#6F4E37]/30">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-1 font-bold flex items-center gap-2">
                        <Clock size={12} /> Hours
                      </p>
                      <p className="text-[#E6D5C3] font-light text-sm">{outlet.openingHours}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-1 font-bold flex items-center gap-2">
                        <MapPin size={12} /> Dress Code
                      </p>
                      <p className="text-[#E6D5C3] font-light text-sm">{outlet.dressCode}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-8 pt-4">
                    <button className="bg-[#6F4E37] text-[#F5E6DA] hover:bg-[#8B5E3C] px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all flex items-center gap-3">
                      Book a Table <ArrowRight size={14} />
                    </button>
                    
                    <a href={outlet.menuLink} className="flex items-center gap-2 text-[#C5A059] hover:text-[#E6D5C3] transition-colors text-[10px] uppercase tracking-[0.3em] font-bold border-b border-transparent hover:border-[#C5A059] pb-1">
                      <Download size={14} /> Download Menu
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- COCOA PRIVATE DINING CTA --- */}
      <section className="bg-[#1A120B] py-32 px-6 border-t border-[#6F4E37]/20">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <Coffee className="mx-auto text-[#C5A059] mb-4" size={40} strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#F5E6DA]">Private Cocoa Soirées</h2>
          <p className="text-[#BCA38F] text-lg font-light leading-relaxed">
            From vintage wine pairings to chocolate-infused degustation menus, host your next event in our most exclusive dining enclaves.
          </p>
          <button className="border-2 border-[#6F4E37] text-[#C5A059] hover:bg-[#6F4E37] hover:text-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] transition-all duration-500 font-bold">
            Inquire for Events
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dining;