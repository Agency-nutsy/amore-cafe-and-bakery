import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0405] overflow-hidden"
        // Luxurious slow dissolve exit
        exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Soft, elegant Rose-Gold ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(244, 63, 94, 0.08) 0%, rgba(0,0,0,0) 60%)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Main Title - Elegant spacing */}
          <motion.h1
            className="font-display text-5xl sm:text-7xl font-black mb-2 text-center tracking-widest uppercase"
            initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span 
              className="text-transparent bg-clip-text"
              style={{ 
                backgroundImage: "linear-gradient(to right, #fda4af, #e11d48)",
                textShadow: "0 4px 25px rgba(225, 29, 72, 0.3)"
              }}
            >
              Amore
            </span>
          </motion.h1>

          {/* Subtitle - Crisp white/cream */}
          <motion.h2
            className="text-zinc-200 text-lg sm:text-xl font-light tracking-[0.3em] uppercase mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Cafe & Bakery
          </motion.h2>

          {/* Elite Circular SVG Loader instead of a basic bar */}
          <div className="relative w-20 h-20 flex items-center justify-center mb-8">
            <motion.svg 
              className="absolute inset-0 w-full h-full text-[#e11d48]/20" 
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </motion.svg>
            <motion.svg 
              className="absolute inset-0 w-full h-full text-[#fda4af]" 
              viewBox="0 0 100 100"
              style={{ 
                rotate: -90, 
                filter: "drop-shadow(0 0 8px rgba(253, 164, 175, 0.6))" 
              }}
            >
              <motion.circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeDasharray="283" // 2 * pi * radius (45)
                strokeDashoffset="283"
                animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.svg>
            
            {/* Center percentage text */}
            <motion.span 
              className="text-xs font-mono text-[#fda4af]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {progress}
            </motion.span>
          </div>

          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.4em] text-zinc-500 font-medium uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            Crafted with Love • Satya Niketan
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;