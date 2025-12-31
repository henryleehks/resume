"use client";

import { useAudio } from "@/hooks/AudioContext";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MusicToggle = () => {
  const { isMusicPlaying, toggleMusic, playClick } = useAudio();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        playClick();
        toggleMusic();
      }}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-black/40 border border-white/10 backdrop-blur-2xl text-zinc-400 hover:text-white hover:border-white/20 shadow-2xl transition-all group"
      title={isMusicPlaying ? "Pause Lofi" : "Play Lofi"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isMusicPlaying ? "playing" : "paused"}
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 20 }}
          transition={{ duration: 0.2 }}
        >
          {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </motion.div>
      </AnimatePresence>
      
      {isMusicPlaying && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
      )}
    </motion.button>
  );
};

