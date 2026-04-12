"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFingerprint, FaBriefcase, FaBook, FaFolderOpen, FaSatelliteDish, FaBars, FaTimes } from "react-icons/fa";

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
        {/* UNWANTED Dossier Logo */}
        <a 
          href="#home" 
          onClick={() => setActiveSection("home")}
          className="mb-16 relative w-14 h-[72px] flex flex-col items-center justify-start border border-secondary/40 bg-[#0a0a0a] transition-all group-hover:shadow-[0_0_20px_rgba(255,210,0,0.5)] group-hover:border-secondary group/logo shrink-0"
          style={{
            // Torn bottom edge akin to a bounty poster/dossier
            clipPath: 'polygon(0 0, 100% 0, 100% 92%, 92% 100%, 82% 95%, 70% 100%, 55% 92%, 40% 100%, 25% 95%, 15% 100%, 7% 93%, 0 100%)',
          }}
        >
          {/* Paper texture overlay / aging */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-black pointer-events-none" />

          {/* Header - UNWANTED */}
          <div className="w-full mt-1 flex flex-col items-center justify-center px-1">
            <div className="w-full border-y border-secondary/60 py-[1.5px] flex justify-center items-center bg-secondary/5">
              <span className="text-[7.5px] font-serif font-black tracking-tighter text-secondary scale-y-[1.15] drop-shadow-[0_1px_3px_rgba(255,210,0,0.6)]">
                UNWANTED
              </span>
            </div>
          </div>

          {/* Picture Frame */}
          <div className="relative w-[44px] h-[36px] mt-1 border border-secondary/50 bg-black overflow-hidden flex items-end justify-center rounded-sm">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,210,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,210,0,0.05)_1px,transparent_1px)] bg-[size:4px_4px]" />
            
            {/* Custom SVG Detective/Operator Silhouette */}
            <svg viewBox="0 0 100 100" className="absolute bottom-0 w-[110%] h-[110%] text-secondary/90 group-hover/logo:text-secondary group-hover/logo:scale-110 transition-transform duration-500 will-change-transform z-10 filter drop-shadow-[0_0_2px_rgba(255,210,0,0.4)]" fill="currentColor">
              {/* Coat Shoulders */}
              <path d="M20 100 C 20 70, 30 65, 50 65 C 70 65, 80 70, 80 100 Z" />
              {/* Collar high */}
              <path d="M35 65 L 45 85 L 50 80 L 55 85 L 65 65 Z" fill="#000" stroke="currentColor" strokeWidth="2" />
              {/* Head Silhouette */}
              <circle cx="50" cy="45" r="16" />
              {/* Fedora Brim */}
              <path d="M25 40 Q 50 25 75 40" stroke="currentColor" strokeWidth="4" fill="none" className="drop-shadow-md" />
              {/* Fedora Top */}
              <path d="M35 38 L 40 18 L 60 18 L 65 38 Z" />
              {/* Cybernetic glowing eye/visor */}
              <rect x="52" y="40" width="7" height="3" fill="#FFD200" className="animate-pulse" />
              <rect x="54" y="45" width="3" height="1" fill="#FFD200" className="animate-pulse" />
            </svg>

            {/* Subtle scanline inside the photo for operator theme */}
            <div className="absolute top-0 w-full h-[1px] bg-secondary/80 shadow-[0_0_8px_rgba(255,210,0,1)] z-20 animate-[scan_2s_ease-in-out_infinite]" />
          </div>

          {/* Footer - Target ID / Tag */}
          <div className="w-full flex-1 flex flex-col justify-start items-center pt-0.5">
            <span className="text-[3.5px] font-mono text-secondary/60 tracking-[0.2em] leading-tight">DOSSIER NO.</span>
            <span className="text-[6px] font-mono font-bold text-secondary tracking-tighter drop-shadow-[0_0_2px_rgba(255,210,0,0.8)] mt-[0px]">
              OP-0X99
            </span>
          </div>
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
