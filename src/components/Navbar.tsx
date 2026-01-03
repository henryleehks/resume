"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-lg"
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            // Changed hover colors to match name (Blue-400 text, Blue-500/10 bg)
            className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-blue-400 transition-colors rounded-full hover:bg-blue-500/10"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};