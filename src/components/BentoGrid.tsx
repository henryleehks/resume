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
      // UPDATED: Backgrounds, Borders, and Text Colors for Light/Dark
      className={`relative group overflow-hidden rounded-[2.5rem] 
        border border-zinc-200 dark:border-white/5 
        bg-white/50 dark:bg-white/[0.02] 
        backdrop-blur-xl p-8 flex flex-col justify-between transition-all 
        hover:bg-white/80 dark:hover:bg-white/[0.04] 
        hover:border-zinc-300 dark:hover:border-white/10 
        cursor-pointer shadow-sm dark:shadow-none ${className}`}
    >
      {/* Gradient overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          {icon && (
            <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 group-hover:text-blue-500 dark:group-hover:text-white transition-colors duration-300 border border-zinc-200 dark:border-white/5">
              {icon}
            </div>
          )}
          <div>
            {title && <h3 className="text-xl font-bold text-zinc-800 dark:text-white tracking-tight">{title}</h3>}
            {subtitle && <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium uppercase tracking-wider">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};