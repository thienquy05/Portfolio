"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaPython, FaCode, FaJava, FaHtml5, FaJsSquare, FaDatabase, FaGitAlt, FaGithub, FaFile, FaDownload, FaShieldAlt, FaRobot, FaNetworkWired, FaFingerprint, FaCrosshairs, FaSearch, FaAward, FaCertificate, FaMedal, FaTimes } from "react-icons/fa";
import { SiGoogle, SiComptia } from "react-icons/si";

const skills = [
  { id: "cyber", icon: FaShieldAlt, name: "Cybersecurity", color: "text-emerald-500", level: 90 },
  { id: "ai", icon: FaRobot, name: "AI & ML", color: "text-purple-500", level: 85 },
  { id: "network", icon: FaNetworkWired, name: "Network Defense", color: "text-blue-500", level: 88 },
  { id: "python", icon: FaPython, name: "Python", color: "text-yellow-500", level: 95 },
  { id: "cpp", icon: FaCode, name: "C++", color: "text-blue-700", level: 80 },
  { id: "java", icon: FaJava, name: "Java", color: "text-secondary", level: 85 },
  { id: "htmlcss", icon: FaHtml5, name: "HTML/CSS", color: "text-orange-500", level: 90 },
  { id: "js", icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400", level: 85 },
  { id: "sql", icon: FaDatabase, name: "SQL", color: "text-blue-400", level: 80 },
];

export default function AboutSection() {
  const [selectedSkill, setSelectedSkill] = useState<{ id: string, name: string, color: string, level: number } | null>(null);
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-24 px-6 md:px-12 flex justify-center items-center bg-[#0a0a0a] relative z-10 overflow-hidden">
      {/* Decorative cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full z-10 relative">
        <div className="flex flex-col items-center justify-center mb-24">
           <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-1 bg-secondary rounded-full mb-6"
           />
           <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-white tracking-tight uppercase"
            >
              Technical <span className="text-secondary font-serif italic font-light drop-shadow-[0_0_15px_rgba(255,210,0,0.5)]">Profile</span>
            </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Identity Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
              <div className="absolute inset-0 bg-secondary/10 blur-xl rounded-3xl -z-10" />
              
              <div className="relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                {/* Cyber overlay header */}
                <div className="bg-black/50 border-b border-white/5 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaFingerprint className="text-secondary text-xl" />
                    <span className="text-white/70 font-mono text-sm uppercase tracking-widest">Profile Verification</span>
                  </div>
                  <span className="text-emerald-400 text-xs font-mono bg-emerald-400/10 px-2 py-1 rounded">CLEARANCE: HIGH</span>
                </div>

                <div className="relative aspect-square">
                  {/* Hexagon scanning reticle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-30">
                    <div className="w-3/4 h-3/4 border border-secondary rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
                    <div className="absolute w-1/2 h-1/2 border border-white/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  </div>
                  
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <Image src="/images/About-photo.jpg" alt="About photo" width={600} height={600} className="w-full h-full object-cover filter contrast-125 saturate-50 grayscale-[50%]" />
                  
                  {/* Glitch scanning line */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-secondary/50 shadow-[0_0_20px_rgba(var(--secondary),0.8)] z-30" 
                  />
                </div>

                {/* Identity Details */}
                <div className="p-6 bg-gradient-to-b from-transparent to-black/80 relative">
                  {/* Top Secret Stamp */}
                  <div className="absolute top-2 right-6 rotate-[-15deg] border-4 border-secondary/60 p-2 pointer-events-none mix-blend-screen opacity-70">
                    <span className="text-secondary/60 font-black font-serif uppercase tracking-widest text-xl drop-shadow-md">Top Secret</span>
                  </div>
                  
                  <div className="flex justify-between items-end mb-4 relative z-10 pt-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">Quy</h3>
                      <p className="text-secondary font-mono text-sm uppercase tracking-wider">Cybersecurity & AI Engineer</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-xs uppercase">Status</p>
                      <p className="text-emerald-400 text-sm font-bold animate-pulse">ACTIVE</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => setShowResume(true)}
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-secondary/40 hover:bg-secondary hover:border-secondary hover:text-black text-secondary font-bold py-3 px-4 rounded-sm transition-all shadow-[0_0_10px_rgba(255,210,0,0.1)] hover:shadow-[0_0_20px_rgba(255,210,0,0.4)] group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <FaSearch className="group-hover:text-black transition-colors relative z-10" /> 
                      <span className="relative z-10 font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap">Decrypt Resume</span>
                    </button>
                    <a 
                      href="/Resume.pdf"
                      download="ThienQuy_Pham_Resume.pdf"
                      className="flex-none flex items-center justify-center gap-2 bg-black border border-secondary/40 hover:bg-secondary hover:border-secondary hover:text-black text-secondary font-bold py-3 px-5 rounded-sm transition-all shadow-[0_0_10px_rgba(255,210,0,0.1)] hover:shadow-[0_0_20px_rgba(255,210,0,0.4)] group relative overflow-hidden"
                      title="Download Resume"
                    >
                      <div className="absolute inset-0 bg-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      <FaDownload className="group-hover:text-black transition-colors relative z-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operator Vitals Panel (Enhanced Sci-Fi UI) */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden mt-6 flex-1 group">
              {/* Decorative grid background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }}></div>
              
              {/* Corner tech accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-secondary/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_10px_rgba(255,210,0,0.2)]"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-secondary/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_10px_rgba(255,210,0,0.2)]"></div>

              {/* Background Network Icon */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <FaNetworkWired className="text-6xl text-secondary animate-pulse" />
              </div>
              
              <h4 className="text-secondary font-mono text-xs tracking-[0.2em] flex items-center justify-between relative z-10 border-b border-white/10 pb-3">
                <span className="flex items-center gap-3 font-bold uppercase drop-shadow-[0_0_5px_rgba(255,210,0,0.5)]">
                  <span className="w-1 h-3 bg-secondary"></span>
                  Core Competencies
                </span>
                <span className="flex items-center gap-2 text-[9px] text-white/40 font-mono tracking-widest uppercase">
                  Sys_Online <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                </span>
              </h4>
              
              <div className="grid grid-cols-2 gap-4 font-mono z-10 relative">
                {[
                  { label: "Current Role", value: "IT ADMIN II" },
                  { label: "Systems Managed", value: "1,000+ ENDPOINTS" },
                  { label: "Focus Area", value: "AI CYBER DEFENSE" },
                  { label: "Core Stack", value: "PYTHON / SQL / INTUNE" }
                ].map((stat, idx) => (
                  <div key={idx} className="group/stat relative bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-secondary/40 hover:bg-[#111] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,210,0,0.05)] overflow-hidden">
                    {/* Hover accent slide */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary scale-y-0 group-hover/stat:scale-y-100 transition-transform origin-bottom duration-300 ease-out shadow-[0_0_10px_rgba(255,210,0,0.5)]" />
                    
                    <p className="text-white/40 uppercase mb-1 tracking-wider text-[10px] flex items-center gap-2 group-hover/stat:text-white/60 transition-colors">
                       {stat.label}
                    </p>
                    <p className="text-white font-bold text-[13px] tracking-wide group-hover/stat:text-secondary group-hover/stat:drop-shadow-[0_0_5px_rgba(255,210,0,0.5)] transition-all duration-300">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-5 border-t border-white/10 relative z-10">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-white/60 transition-colors">
                    Incident Resolution & Uptime
                  </span>
                  <span className="text-secondary font-mono font-bold text-sm tracking-wider drop-shadow-[0_0_8px_rgba(255,210,0,0.8)]">99.9%</span>
                </div>
                <div className="w-full bg-[#050505] p-0.5 rounded-full overflow-hidden relative border border-white/5 shadow-inner">
                  {/* Striped progress bar bg */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-1.5 bg-secondary rounded-full relative overflow-hidden shadow-[0_0_15px_rgba(255,210,0,0.8)]" 
                  >
                    {/* Animated diagonal stripes */}
                    <div className="absolute inset-0 opacity-30 bg-repeat-x" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.5) 4px, rgba(0,0,0,0.5) 8px)', backgroundSize: '100% 100%' }}></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Summary & Skills */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Terminal-style text block */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative group mb-8">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <FaCrosshairs className="text-4xl text-secondary" />
              </div>
              
              <h3 className="text-xl font-mono text-white mb-6 flex items-center gap-3 uppercase tracking-widest border-b border-white/10 pb-4">
                 <span className="w-2 h-2 bg-secondary rounded-full animate-ping" /> Overview
              </h3>
              
              <div className="text-white/70 leading-relaxed font-mono text-sm sm:text-base space-y-4">
                <p>
                  &gt; <strong className="text-secondary">BACKGROUND:</strong> I am a Computer Science student specializing in <span className="text-white font-bold">Cybersecurity</span>, <span className="text-white font-bold">Artificial Intelligence</span>, and IT Administration.
                </p>
                <p>
                  &gt; <strong className="text-secondary">EXPERTISE:</strong> I build secure systems and leverage AI models for proactive threat detection. My experience ranges from managing enterprise endpoint networks to designing intelligent tools that prevent digital exploits.
                </p>
                <p>
                  &gt; <strong className="text-secondary">OBJECTIVE:</strong> Seeking a Cybersecurity internship or full-time opportunity. I am eager to apply my technical skills to incident response, network defense, and scalable security architecture.
                </p>
              </div>
            </div>

            {/* Verified Credentials */}
            <div className="flex flex-col gap-4">
              <a href="https://www.coursera.org/account/accomplishments/specialization/6O9O5LP6RJFK" target="_blank" rel="noopener noreferrer" className="bg-black/40 border border-secondary/30 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group shadow-[0_0_15px_rgba(255,210,0,0.1)] block hover:border-secondary transition-colors cursor-pointer">
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-secondary/10 to-transparent group-hover:left-[200%] transition-all duration-700 ease-in-out skew-x-12" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                  <div className="w-16 h-16 shrink-0 bg-secondary/10 border border-secondary/50 rounded-xl flex items-center justify-center relative shadow-[inset_0_0_15px_rgba(255,210,0,0.3)] group-hover:bg-secondary/20 transition-all">
                    <div className="absolute inset-0 bg-secondary blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                    <SiGoogle className="text-4xl text-secondary drop-shadow-[0_0_10px_rgba(255,210,0,0.8)] group-hover:scale-110 transition-transform relative z-10" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-secondary transition-colors">Cybersecurity Certificate</h4>
                      <span className="text-[10px] font-mono text-black bg-secondary px-2 py-0.5 rounded font-bold uppercase tracking-widest">Verified</span>
                    </div>
                    <p className="text-white/60 font-mono text-xs mb-2">Issued by: Google / Coursera</p>
                    <p className="text-white/70 font-mono text-sm leading-relaxed border-l-2 border-secondary/30 pl-3">
                      Completed hands-on training in threat detection, network security, SIEM tools, and incident response. Prepared for defensive engineering and SOC operations.
                    </p>
                  </div>
                </div>
              </a>

              <div className="bg-black/40 border border-white/20 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group border-dashed">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
                  <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/20 rounded-xl flex items-center justify-center">
                    <SiComptia className="text-4xl text-white/50 group-hover:text-white transition-colors group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white/80 uppercase tracking-tight">CompTIA A+</h4>
                      <span className="text-[10px] font-mono text-white/80 bg-blue-500/30 border border-blue-500/50 px-2 py-0.5 rounded font-bold uppercase tracking-widest">Pursuing</span>
                    </div>
                    <p className="text-white/50 font-mono text-xs mb-2">Targeting: Core Network & Hardware Fundamentals</p>
                    <p className="text-white/60 font-mono text-sm leading-relaxed border-l-2 border-blue-500/30 pl-3">
                      Actively deepening knowledge in IT infrastructure, operational procedures, and troubleshooting hardware anomalies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Arsenal Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-mono text-white tracking-widest uppercase border-l-2 border-secondary pl-3">Skills & Technologies</h3>
                <span className="text-xs text-white/40 font-mono">SELECT ICON FOR DETAILS</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 hidden md:grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedSkill(skill)}
                    className="bg-black/30 border border-white/5 hover:border-secondary/50 rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer group relative overflow-hidden"
                  >
                    {/* Hover scan effect */}
                    <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:left-[200%] transition-all duration-700 ease-in-out skew-x-12" />
                    
                    <skill.icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs font-mono text-white/80 uppercase">{skill.name}</span>
                    
                    {/* Tiny stats bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className={`h-full bg-current ${skill.color}`} style={{ width: `${skill.level}%` }} />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile optimized grid */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {skills.slice(0, 8).map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className="bg-black/30 border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <skill.icon className={`text-2xl ${skill.color}`} />
                    <span className="text-[10px] font-mono text-white/80 uppercase tracking-tighter text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Database Node Inspection Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: -90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border border-secondary/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(var(--secondary),0.1)] max-w-md w-full relative overflow-hidden"
            >
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/50" />
              
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-white/40 hover:text-white font-mono text-sm"
              >
                [EXIT]
              </button>
              
              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 ${selectedSkill.color}`}>
                  <FaDatabase className="text-3xl" />
                </div>
                <div>
                  <p className="text-secondary text-xs font-mono uppercase">Node Analysis</p>
                  <h3 className="text-2xl font-bold text-white tracking-widest uppercase">{selectedSkill.name}</h3>
                </div>
              </div>
              
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs font-mono text-white/50 uppercase">
                  <span>Proficiency Level</span>
                  <span>{selectedSkill.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${selectedSkill.color} bg-current`} 
                  />
                </div>
              </div>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/5 font-mono text-sm text-white/70 leading-relaxed">
                <p className="mb-2 text-white/90">Data extraction complete.</p>
                <p>
                  Utilizing <strong className={selectedSkill.color}>{selectedSkill.name}</strong> to architect secure methodologies, identify attack vectors, and enforce system integrity. Deep technical insights are logged and available for review in standard operational reports.
                </p>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#050505] border-2 border-secondary/50 rounded-2xl shadow-[0_0_50px_rgba(255,210,0,0.2)] w-full max-w-5xl h-[85vh] relative flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b-2 border-secondary/30 bg-black/60">
                <div className="flex items-center gap-3">
                  <FaFile className="text-secondary text-xl" />
                  <h3 className="text-white font-mono uppercase tracking-widest font-bold">ThienQuy_Pham_Resume.pdf</h3>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href="/Resume.pdf"
                    download="ThienQuy_Pham_Resume.pdf"
                    className="flex items-center gap-2 text-white/70 hover:text-secondary transition-colors font-mono text-sm uppercase"
                  >
                    <FaDownload /> Download
                  </a>
                  <button 
                    onClick={() => setShowResume(false)}
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label="Close Resume"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="flex-1 w-full h-full bg-white relative">
                <iframe 
                  src="/Resume.pdf" 
                  className="w-full h-full border-none"
                  title="Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
