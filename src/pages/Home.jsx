import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, animate } from 'framer-motion';
import baImg from "../assets/tt.jpeg";
import kerImg from "../assets/ka.jpeg";
import tapImg from "../assets/taptap.png";
import nigImg from "../assets/shi.png";


const outlets = [
  { id: "01", title: "Governor's Bar", subtitle: "FINE SPIRITS", img: baImg, path: "/bar" },
  { id: "02", title: "Istanbul Nights", subtitle: "Shisha Lounge", img: nigImg, path: "/shisha" },
  { id: "03", title: "Tap Bar", subtitle: "CRAFT BREWS", img: tapImg, path: "/tap-bar" },
  { id: "04", title: "Governor's Mic Karaoke", subtitle: "EXCLUSIVE DINING", img: kerImg, path: "/karaoke" },
];

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    // --- FRAMER MOTION POWERED AUTO-SCROLL ---
    // Laptop & Mobile dekema ekama widiyata smooth yanna animate use karamu
    let controls;

    const startAutoScroll = (fromProgress = 0) => {
      if (controls) controls.stop();
      
      const remainingDuration = 30 * (1 - fromProgress);

      controls = animate(fromProgress, 1, {
        duration: remainingDuration > 0 ? remainingDuration : 30,
        ease: "linear",
        onUpdate: (latest) => {
          if (slider) {
            const max = slider.scrollWidth - slider.offsetWidth;
            slider.scrollLeft = latest * max;
          }
        },
        onComplete: () => startAutoScroll(0)
      });
    };

    const timeoutId = setTimeout(() => startAutoScroll(0), 200);

    const stop = () => {
      if (controls) controls.stop();
    };

    const play = () => {
      if (!slider) return;
      const max = slider.scrollWidth - slider.offsetWidth;
      if (max <= 0) {
        startAutoScroll(0);
        return;
      }
      const currentProgress = slider.scrollLeft / max;
      startAutoScroll(currentProgress >= 1 ? 0 : currentProgress);
    };

    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', play);
    slider.addEventListener('touchstart', stop);
    slider.addEventListener('touchend', play);

    return () => {
      clearTimeout(timeoutId);
      if (controls) controls.stop();
      slider.removeEventListener('mouseenter', stop);
      slider.removeEventListener('mouseleave', play);
      slider.removeEventListener('touchstart', stop);
      slider.removeEventListener('touchend', play);
    };
  }, []);

  return (
    <div className="bg-[#0c0a09] min-h-screen pt-24 md:pt-64 overflow-hidden selection:bg-[#D4A574]">
      
      {/* Header */}
      <section className="text-center mb-12 px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-[#E6D5C3] text-4xl md:text-8xl font-serif uppercase tracking-[0.1em]">
            Stay Happy <span className="italic font-light lowercase text-[#D4A574]">with</span> Us
          </h2>
        </motion.div>
      </section>

      {/* --- MOBILE OPTIMIZED SLIDER --- */}
      <main 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar h-[65vh] md:h-[75vh] items-center touch-pan-x cursor-grab active:cursor-grabbing"
      >
        <div className="flex flex-nowrap gap-5 md:gap-12 px-6 md:px-[20vw]">
          {outlets.map((item) => (
            <section key={item.id} className="w-[85vw] md:w-[480px] flex-shrink-0">
              <div className="relative aspect-[9/14] md:aspect-[9/15] overflow-hidden rounded-[40px] md:rounded-[60px] border border-white/5 shadow-2xl group">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <p className="text-[#D4A574] text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">{item.subtitle}</p>
                  <h3 className="text-white text-3xl md:text-5xl font-serif mb-8">{item.title}</h3>
                  <Link to={item.path}>
                    <button className="text-[10px] text-white border border-white/40 px-10 py-3 rounded-full uppercase tracking-[0.2em] font-bold active:scale-95 transition-all">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          ))}
          {/* Spacer for seamless loop */}
          <div className="w-[20vw] flex-shrink-0"></div>
        </div>
      </main>

      {/* Progress */}
      <footer className="mt-10 flex flex-col items-center gap-4 pb-10 opacity-30">
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div style={{ scaleX }} className="absolute inset-0 bg-[#D4A574] origin-left" />
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;