"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 700 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section 
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Beam Animation Overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      
      {/* The actual beam/ring around the mouse */}
      <motion.div
        className="pointer-events-none absolute z-10 w-64 h-64 rounded-full border border-blue-500/30 blur-2xl"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Available for Internships
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 text-5xl md:text-8xl font-bold mb-6 tracking-tighter group/name"
      >
        <span className="relative inline-block">
          {/* Unicorn Studio dynamic glow effect */}
          <motion.span 
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -inset-8 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none z-[-1]" 
          />
          <span className="bg-linear-to-b from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
            Hein Kyaw Soe
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 text-lg md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
      >
        Aspiring <span className="text-white font-medium">Software Engineer</span>. 
        Specializing in <span className="text-blue-400/80">Business Analytics</span> & <span className="text-blue-400/80">Digital Cloud Solutions</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 flex flex-wrap justify-center gap-4"
      >
        <a 
          href="mailto:henryleehks@gmail.com"
          className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold flex items-center gap-2 hover:bg-blue-500 transition-all active:scale-95 group shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        >
          Work with me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="flex items-center gap-3">
          <a href="https://github.com/henryleehks" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/hein-kyaw-soe" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

