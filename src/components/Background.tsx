"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Noodle = ({ index }: { index: number }) => {
  const [settings, setSettings] = useState<{ 
    x: number, 
    y: number, 
    rotate: number,
    duration: number
  } | null>(null);

  useEffect(() => {
    setSettings({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotate: Math.random() * 360,
      duration: 3 + Math.random() * 4
    });
  }, [index]);

  if (!settings) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ 
        opacity: [0, 0.4, 0],
        scaleX: [0, 1.5, 0],
        x: ["-20%", "120%"],
      }}
      transition={{ 
        duration: settings.duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: index * 2 
      }}
      className="absolute h-[1px] w-[300px] bg-linear-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none"
      style={{
        left: `${settings.x}%`,
        top: `${settings.y}%`,
        transform: `rotate(${settings.rotate}deg)`,
      }}
    />
  );
};

const WavyNoodle = ({ index }: { index: number }) => {
  const [settings, setSettings] = useState<{
    left: string,
    top: string,
    duration: number,
    yVariation: number
  } | null>(null);

  useEffect(() => {
    setSettings({
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 5,
      yVariation: (Math.random() - 0.5) * 50
    });
  }, []);

  if (!settings) return null;

  return (
    <motion.div
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ 
        opacity: [0, 0.2, 0],
        pathLength: [0, 1, 0],
        x: [0, 100],
        y: [0, settings.yVariation]
      }}
      transition={{ 
        duration: settings.duration, 
        repeat: Infinity, 
        ease: "linear",
        delay: index * 3
      }}
      className="absolute pointer-events-none"
      style={{ left: settings.left, top: settings.top }}
    >
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
        <motion.path
          d="M0 50 Q 50 0, 100 50 T 200 50"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
};

const Particle = ({ delay }: { delay: number }) => {
  const [settings, setSettings] = useState<{
    left: string,
    top: string,
    duration: number,
    xVariation: number
  } | null>(null);

  useEffect(() => {
    setSettings({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 5,
      xVariation: (Math.random() - 0.5) * 30
    });
  }, []);

  if (!settings) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.4, 0],
        y: [0, -60],
        x: [0, settings.xVariation],
        scale: [0, 1, 0],
      }}
      transition={{ 
        duration: settings.duration, 
        repeat: Infinity, 
        ease: "easeOut",
        delay: delay 
      }}
      className="absolute w-[2px] h-[2px] bg-blue-300/40 rounded-full blur-[1px]"
      style={{ left: settings.left, top: settings.top }}
    />
  );
};

export const Background = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Mesh Gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <motion.div 
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -100, 150, 0],
            scale: [1, 1.5, 0.7, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-25%] left-[-25%] w-[90%] h-[90%] bg-blue-600/35 rounded-full blur-[100px]" 
        />
        
        <motion.div 
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 150, -100, 0],
            scale: [1, 0.6, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-25%] right-[-25%] w-[80%] h-[80%] bg-indigo-600/30 rounded-full blur-[100px]" 
        />
      </motion.div>

      {/* Shooting Noodles and Particles - Render them always, but only animate when mounted */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && (
          <>
            {[...Array(6)].map((_, i) => (
              <Noodle key={`noodle-${i}`} index={i} />
            ))}
            {[...Array(4)].map((_, i) => (
              <WavyNoodle key={`wavy-${i}`} index={i} />
            ))}
            {[...Array(15)].map((_, i) => (
              <Particle key={`particle-${i}`} delay={i * 0.5} />
            ))}
          </>
        )}
      </div>

      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f60f_1px,transparent_1px),linear-gradient(to_bottom,#3b82f60f_1px,transparent_1px)] bg-[size:48px_48px] mix-blend-screen" />
      
      {/* Deep Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_85%)] opacity-70 pointer-events-none" />
    </div>
  );
};
