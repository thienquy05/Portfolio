"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint, FaBriefcase, FaBook, FaFolderOpen, FaSatelliteDish, FaBars, FaTimes, FaUserShield } from "react-icons/fa";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "IDENT", href: "#about", icon: FaFingerprint, id: "about" },
    { name: "EVIDENCE", href: "#education", icon: FaBook, id: "education" },
    { name: "MISSION LOGS", href: "#experience", icon: FaBriefcase, id: "experience" },
    { name: "ARCHIVES", href: "#projects", icon: FaFolderOpen, id: "projects" },
    { name: "COMMS", href: "#contacts", icon: FaSatelliteDish, id: "contacts" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = ["home", "about", "education", "experience", "projects", "contacts"];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-3 rounded-md bg-black border border-secondary text-secondary md:hidden shadow-[0_0_15px_rgba(255,210,0,0.3)] hover:bg-secondary hover:text-black transition-all"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Full Height Cyber Command Sidebar */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className={`fixed top-0 left-0 h-screen w-20 hover:w-64 bg-black/95 backdrop-blur-2xl border-r-2 border-secondary/20 transition-all duration-300 z-40 flex flex-col items-center py-10 overflow-hidden group shadow-[20px_0_40px_rgba(0,0,0,0.9)] ${isOpen ? 'translate-x-0' : '-translate-x-[150%] md:translate-x-0'}`}
      >
        {/* Agency Badge Logo */}
        <a 
          href="#home" 
          onClick={() => setActiveSection("home")}
          className="mb-16 relative w-14 h-14 rounded-full flex flex-col items-center justify-center border border-secondary/30 transition-all group-hover:shadow-[0_0_25px_rgba(255,210,0,0.5)] group-hover:border-secondary bg-black overflow-hidden group/logo shrink-0"
        >
          {/* Rotating scanner ring */}
          <div className="absolute inset-1 border border-secondary/60 rounded-full border-dashed animate-[spin_8s_linear_infinite]" />
          
          {/* Inner ring */}
          <div className="absolute inset-[6px] border border-secondary/20 rounded-full" />
          
          <FaUserShield className="text-secondary text-lg group-hover/logo:scale-110 transition-transform duration-300 z-10 drop-shadow-[0_0_8px_rgba(255,210,0,0.8)]" />
          
          {/* Scanning line across the badge */}
          <div className="absolute top-0 w-full h-[1px] bg-secondary/80 shadow-[0_0_10px_rgba(255,210,0,1)] z-20 animate-[scan_2s_ease-in-out_infinite]" />
        </a>

        {/* Central Connecting Line */}
        <div className="absolute top-36 bottom-24 left-10 w-[1px] bg-secondary/10 -translate-x-1/2 z-0" />

        <div className="flex flex-col w-full px-3 gap-6 relative z-10 flex-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.id);
                }}
                className="flex items-center text-white/50 hover:text-secondary group/link rounded-xl p-3 transition-colors relative"
              >
                <div className="w-8 flex justify-center shrink-0 relative z-10">
                  {/* Glowing border dot for active item */}
                  <div className={`absolute inset-0 rounded-full border border-secondary/50 shadow-[0_0_10px_rgba(255,210,0,0.5)] transition-all duration-500 scale-125 ${isActive ? 'opacity-100 rotate-45' : 'opacity-0 rotate-0'}`}>
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-secondary rounded-full" />
                  </div>
                  
                  <span className="relative z-20 bg-black rounded-full">
                    <link.icon className={`text-lg transition-transform ${isActive ? 'text-secondary scale-110 drop-shadow-[0_0_8px_rgba(255,210,0,0.8)]' : 'group-hover/link:scale-110 group-hover/link:text-white'}`} />
                  </span>
                </div>
                
                <span className={`opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-6 whitespace-nowrap transition-all duration-300 font-mono text-xs font-bold tracking-widest uppercase relative z-10 ${isActive ? 'text-secondary drop-shadow-[0_0_8px_rgba(255,210,0,0.8)]' : 'text-white/60 group-hover:text-white'}`}>
                  {link.name}
                </span>

                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 bottom-0 top-0 w-1 bg-secondary shadow-[0_0_15px_rgba(255,210,0,0.9)] rounded-r-md"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Decorative Footer Info */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4 flex flex-col items-center gap-1 font-mono text-[10px] text-white/30 tracking-[0.2em] mt-auto mb-4">
          <span className="text-secondary/80 drop-shadow-[0_0_5px_rgba(255,210,0,0.5)]">[SYS.OP.V9]</span>
          <span>SECURE.LINK</span>
        </div>
      </motion.nav>
    </>
  );
}
