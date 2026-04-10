import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, Star, Clock, MapPin, Phone, Mail, Utensils, Wine, ChefHat, Sparkles, History, Globe } from "lucide-react";
import logo from "../assets/grandterrace-logo.jpeg";

export default function About() {
  return (
    <div className="bg-[#0c0a09] min-h-screen pt-32 selection:bg-[#D4A574] selection:text-black">
      
      {/* --- HERO SECTION: THE LEGACY --- */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4A574]/10 blur-[150px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 uppercase text-[10px] text-[#D4A574] font-black mb-8 border border-[#D4A574]/20 px-6 py-2 rounded-full tracking-[0.4em]"
          >
            <History size={12} /> Since 2010
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-[0.9]">
            The Spirit of <br />
            <span className="italic text-[#D4A574] font-light">Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-light italic leading-relaxed max-w-3xl mx-auto">
            "A sanctuary where Colombo's colonial charm meets the pinnacle of global gastronomy."
          </p>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-stone-900/30 border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <StatItem icon={<ChefHat />} value="08" label="Master Culinarians" />
            <StatItem icon={<Award />} value="12" label="Culinary Awards" />
            <StatItem icon={<Globe />} value="04" label="Global Concepts" />
            <StatItem icon={<Users />} value="25K+" label="Distinguished Guests" />
          </div>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="py-40 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-[#D4A574] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">The Narrative</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
                Crafting <span className="italic">Timeless</span> <br />
                Moments
              </h2>
              <div className="space-y-8 text-lg text-stone-400 font-light leading-relaxed">

                {/* ✅ NEW CONTENT ADDED HERE */}
                <p>
                  Grand Terrace is a vibrant nightlife destination offering a premium mix of foreign and local liquor, flavorful bar bites, and a relaxed shisha experience. Designed for unforgettable nights, we bring together great drinks, music, and entertainment, including lively karaoke sessions. Whether you're here to unwind or celebrate, Grand Terrace delivers the perfect blend of energy, taste, and atmosphere.
                </p>

                <p>
                  Established in the heart of Colombo, Grand Terrace was born from a passion to revive the 
                  essence of premium nightlife while blending modern experiences with timeless hospitality.
                </p>

                <p className="text-[#D4A574] font-serif italic text-2xl">
                  "It is not just a night; it is an experience to remember."
                </p>
              </div>
            </motion.div>

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 border border-[#D4A574]/20 rounded-[60px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="bg-[#141210] p-16 rounded-[50px] border border-white/5 shadow-3xl text-center">
                <img
                  src={logo}
                  alt="Grand Terrace Logo"
                  className="w-full max-w-[300px] mx-auto mb-12 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="space-y-6">
                   <div className="h-[1px] w-20 bg-[#D4A574] mx-auto"></div>
                   <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500 font-bold">Official Seal of Excellence</p>
                   <div className="flex justify-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#D4A574] text-[#D4A574]" />
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper Components
const StatItem = ({ icon, value, label }) => (
  <motion.div whileHover={{ y: -5 }} className="text-center group">
    <div className="flex justify-center text-[#D4A574]/30 group-hover:text-[#D4A574] transition-colors mb-4">
      {React.cloneElement(icon, { size: 24, strokeWidth: 1.5 })}
    </div>
    <div className="text-4xl font-serif text-white mb-1">{value}</div>
    <div className="text-[9px] text-stone-500 uppercase tracking-[0.4em] font-bold">{label}</div>
  </motion.div>
);
