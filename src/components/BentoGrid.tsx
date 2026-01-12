"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/hooks/AudioContext";

export const BentoGrid = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px] ${className}`}>
      {children}
    </div>
  );
};

export const GridItem = ({
  children,
  className = "",
  title,
  subtitle,
  icon,
}: {
  children?: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
}) => {
  const { playClick } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.01 }}
      onHoverStart={() => playClick()}
      onClick={() => playClick()}
      transition={{ duration: 0.3 }}
      // FIXED: Removed Light Mode classes, enforced Dark Mode styles
      className={`relative group overflow-hidden rounded-[2.5rem] 
        border border-white/5 
        bg-white/[0.02] 
        backdrop-blur-xl p-8 flex flex-col justify-between transition-all 
        hover:bg-white/[0.04] 
        hover:border-white/10 
        cursor-pointer shadow-none ${className}`}
    >
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          {icon && (
            // FIXED: Icon container styles enforced to dark mode
            <div className="p-3 rounded-2xl bg-white/5 text-zinc-300 group-hover:text-white transition-colors duration-300 border border-white/5">
              {icon}
            </div>
          )}
          <div>
            {/* FIXED: Title color enforced to White */}
            {title && <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>}
            {subtitle && <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};