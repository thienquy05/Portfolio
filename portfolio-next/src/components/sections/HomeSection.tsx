"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaRobot, FaNetworkWired, FaFingerprint, FaSearch, FaCubes, FaFolderOpen, FaCrosshairs } from "react-icons/fa";
import { TbRadar } from "react-icons/tb";

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505] py-24 lg:py-0">
      {/* Target Crosshair Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Radar Sweep Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[1000px] h-[1000px] border border-secondary/20 rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-secondary/30 rounded-full" />
        <div className="absolute w-[200px] h-[200px] border border-white/50 rounded-full animate-ping" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent" 
        />
      </div>

      <div className="z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text & Typography */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start bg-black/40 p-8 rounded-3xl border border-white/5 backdrop-blur-sm"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-secondary/10 border border-secondary/30 text-secondary mb-8 shadow-[0_0_20px_rgba(255,210,0,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/20 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
             <span className="text-xs font-serif font-black tracking-widest uppercase">CLASS-A OPERATIVE LOCATED</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6 uppercase">
            <span className="text-sm font-mono text-secondary tracking-widest block mb-2 opacity-80">// DIRECTIVE_ASSIGNMENT:</span>
            Cybersecurity <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200 drop-shadow-[0_0_10px_rgba(255,210,0,0.8)]">Analyst</span><br/>
            &amp; Engineer
          </h1>
          
          <div className="font-mono text-sm md:text-base text-white/50 mb-10 max-w-lg leading-relaxed border-l-2 border-secondary/50 pl-4 space-y-3 relative">
            {/* Classified Stamp */}
            <div className="absolute top-0 right-0 md:right-[-50px] rotate-12 border-4 border-secondary/50 p-1 pointer-events-none mix-blend-screen opacity-40">
              <span className="text-secondary/50 font-black font-serif uppercase tracking-widest text-2xl drop-shadow-[0_0_8px_rgba(255,210,0,0.8)]">Classified</span>
            </div>
            <p className="text-white/80">
              <strong className="text-secondary">&gt; SUBJECT_IDENT:</strong> THIEN QUY PHAM
            </p>
            <p>
              <strong className="text-secondary">&gt; MISSION_PARAMETERS:</strong> Computer Science operative specializing in predictive threat engineering, securing digital perimeters, and deploying frontier AI detection models to neutralize exploits before execution.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-4">
            <a href="#projects" className="flex-1 sm:flex-none text-center px-8 py-4 bg-secondary/10 text-secondary font-mono font-bold rounded-sm border border-secondary hover:bg-secondary hover:text-black transition-all shadow-[0_0_15px_rgba(255,210,0,0.2)] hover:shadow-[0_0_30px_rgba(255,210,0,0.6)] uppercase tracking-widest relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary/30 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2"><FaFolderOpen className="mb-0.5" /> Access Case Files</span>
            </a>
            <a href="#about" className="flex-1 sm:flex-none text-center px-8 py-4 bg-black border border-white/20 text-white font-mono font-bold rounded-sm hover:bg-white/5 hover:border-secondary/50 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              <FaSearch className="text-secondary mb-0.5" /> Decrypt Dossier
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Elements (Cyber-card/Terminal) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[550px] w-full flex items-center justify-center perspective-1000"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-md bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col relative overflow-hidden"
          >
            {/* Glitch Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-50" />
            
            {/* Terminal Header */}
            <div className="bg-black/90 border-b border-secondary/50/50 px-4 py-3 flex items-center justify-between z-20 shadow-[0_4px_10px_rgba(255,210,0,0.2)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-yellow-600 transition-colors" />
                <div className="w-3 h-3 rounded-sm bg-neutral-600 transition-colors" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-secondary font-bold uppercase tracking-widest flex items-center gap-2 drop-shadow-[0_0_5px_rgba(255,210,0,0.8)]">
                <div className="relative w-5 h-5 flex items-center justify-center mr-1">
                  <div className="absolute inset-0 border border-secondary/50 border-dashed rounded-full animate-[spin_4s_linear_infinite]" />
                  <TbRadar className="text-secondary text-lg animate-[spin_2s_linear_infinite]" />
                </div> 
                INTEL_TERMINAL_V9
              </span>
            </div>

            <div className="p-6 relative z-10 flex flex-col h-full flex-grow bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
              {/* Profile Info inside Terminal */}
              <div className="flex items-start gap-5 mb-10 bg-black/40 p-5 rounded-sm border-l-4 border-l-secondary relative overflow-hidden group shadow-[inset_0_0_20px_rgba(255,210,0,0.05)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-2xl rounded-full" />
                
                <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 border border-secondary/80 p-1 relative z-10 bg-black/80 shadow-[0_0_15px_rgba(255,210,0,0.3)]">
                  <div className="w-full h-full overflow-hidden filter grayscale contrast-150 relative">
                    {/* Scanning line for photo */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-secondary/50 z-20 animate-[scan_2s_ease-in-out_infinite]" />
                    <img src="/images/Professional.jpg" alt="Profile" className="w-full h-full object-cover mix-blend-luminosity" />
                  </div>
                  {/* Target corners */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-secondary" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-secondary" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-secondary" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-secondary" />
                </div>
                
                <div className="relative z-10 pt-2">
                  <p className="text-secondary/80 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] mb-1 border-b border-secondary/30 pb-1">Primary Operative</p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-serif mt-2 text-shadow-sm">Thien Quy</h3>
                  <p className="text-secondary font-mono text-[11px] sm:text-xs mt-3 flex items-center gap-2 font-bold tracking-widest">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-ping" />
                    STATUS: SECURING PERIMETER
                  </p>
                </div>
              </div>

              {/* Engine Status / Skill Matrix */}
              <div className="space-y-6 sm:space-y-8 flex-grow">
                <div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase mb-3">
                     <span className="text-white/60 flex items-center gap-2"><FaShieldAlt className="text-secondary text-sm" /> Cybersecurity Analysis</span>
                    <span className="text-secondary bg-secondary/50/30 px-2 py-0.5 rounded border border-secondary/30/50 shadow-[0_0_10px_rgba(255,210,0,0.2)]">Match [95%]</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-black border border-white/5 overflow-hidden rounded-r-md">
                    <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ delay: 1, duration: 1.5 }} className="h-full bg-secondary shadow-[0_0_10px_rgba(255,210,0,1)] relative"><div className="absolute top-0 right-0 w-10 h-full bg-white/40 blur-[2px]" /></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase mb-3">
                     <span className="text-white/60 flex items-center gap-2"><FaSearch className="text-amber-500 text-sm" /> AI Evidence Scanner</span>
                    <span className="text-amber-400 bg-amber-900/30 px-2 py-0.5 rounded border border-amber-800/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]">Tracing [88%]</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-black border border-white/5 overflow-hidden rounded-r-md">
                    <motion.div initial={{ width: 0 }} animate={{ width: "88%" }} transition={{ delay: 1.2, duration: 1.5 }} className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,1)] relative"><div className="absolute top-0 right-0 w-10 h-full bg-white/40 blur-[2px]" /></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase mb-3">
                    <span className="text-white/60 flex items-center gap-2"><FaNetworkWired className="text-neutral-400 text-sm" /> Perimeter Tracing</span>
                    <span className="text-neutral-400 bg-neutral-800/50 px-2 py-0.5 rounded border border-neutral-700/50">Active [92%]</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-black border border-white/5 overflow-hidden rounded-r-md">
                    <motion.div initial={{ width: 0 }} animate={{ width: "92%" }} transition={{ delay: 1.4, duration: 1.5 }} className="h-full bg-neutral-400 shadow-[0_0_10px_rgba(163,163,163,1)] relative"><div className="absolute top-0 right-0 w-10 h-full bg-white/40 blur-[2px]" /></motion.div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-end">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-white/30 font-mono tracking-widest flex items-center gap-2"><FaFolderOpen className="text-white/20"/> ENCRYPTION: AES-256</span>
                  <span className="text-[10px] text-white/30 font-mono tracking-widest flex items-center gap-2"><FaCrosshairs className="text-white/20"/> LOCATION: UTOLEDO_MAIN</span>
                </div>
                <img src="/images/logo-utoledo-horizontal.png" alt="Utoledo Logo" className="h-10 md:h-12 object-contain opacity-60 filter invert sepia" />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
