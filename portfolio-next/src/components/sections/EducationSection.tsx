"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaNetworkWired, FaCheckSquare, FaHdd } from "react-icons/fa";

const inProgressCourses = [
  "Co-Op: AI in Healthcare",
  "Chinese Culture",
  "Intro to Psychology"
];

const completedCourses = [
  "Artificial Intelligence",
  "Operating System and System Programming",
  "Fundamental Cybersecurity",
  "Object Oriented Programming",
  "Digital Logic Design",
  "Data Structures",
  "Computer Architecture & Organization",
  "Discrete Structures"
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 flex justify-center items-center bg-[#0a0a0a] relative overflow-hidden z-10">
      
      {/* Cyber background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 relative">
        
        <div className="flex flex-col items-center mb-24">
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
              className="text-5xl md:text-6xl font-black text-white tracking-tight text-center"
            >
              Academic <span className="text-secondary font-serif italic font-light drop-shadow-[0_0_15px_rgba(255,210,0,0.5)]">Intelligence</span>
            </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Base Installation (University) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col h-full"
          >
            <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group flex-grow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all pointer-events-none" />
              
              <div className="w-24 h-24 bg-white p-3 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-8 relative z-10 border border-white/20">
                <img src="/images/edu-logo.png" alt="UT-Logo" className="w-full h-full object-contain filter grayscale-[20%]" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-secondary font-mono text-xs uppercase tracking-widest mb-2 border-b border-secondary/50/30 pb-2">
                  <FaGraduationCap /> Facility Training
                </div>
                <h3 className="text-3xl font-black font-serif italic text-white tracking-tight leading-tight">The University of Toledo</h3>
                <p className="text-white/60 font-mono text-sm leading-relaxed border-l-2 border-secondary/30/50 pl-3">
                  B.S. Computer Science<br/>
                  Focus: Cybersecurity & AI
                </p>
                
                <div className="mt-8 pt-6 border-t border-secondary/50/50 relative">
                  {/* Stamp */}
                  <div className="absolute right-0 top-0 rotate-12 border-2 border-green-600/60 p-1 pointer-events-none mix-blend-screen opacity-50 mt-4 mr-2">
                    <span className="text-green-600/60 font-black font-serif uppercase tracking-tighter text-sm">Valid</span>
                  </div>
                  <p className="text-xs text-white/40 font-mono uppercase mb-2">Metrics Extracted</p>
                  <div className="flex items-end gap-3 hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-black text-secondary leading-none">3.6</span>
                    <span className="text-sm font-mono text-white/60 mb-1 uppercase tracking-widest">Cumulative GPA</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Database / Coursework Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
              {/* Terminal Head */}
              <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaHdd className="text-white/40" />
                  <span className="text-white/60 font-mono text-sm uppercase tracking-widest">Knowledge Base Directory</span>
                </div>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> SYSTEM NOMINAL
                </span>
              </div>

              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-10 bg-gradient-to-br from-transparent to-white/5 flex-grow">
                
                {/* Active Synapses */}
                <div>
                  <h6 className="text-secondary font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2 border-l-2 border-secondary pl-3">
                    Active Subroutines (In Progress)
                  </h6>
                  <div className="flex flex-col gap-3">
                    {inProgressCourses.map((course, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="bg-[#0f0f0f] border border-secondary/30 p-3 rounded-lg flex items-start gap-3 group"
                      >
                        <div className="mt-1">
                          <span className="flex w-2 h-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                          </span>
                        </div>
                        <span className="font-mono text-sm text-white/80 group-hover:text-white transition-colors">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Archived Synapses */}
                <div>
                   <h6 className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6 flex items-center gap-2 border-l-2 border-emerald-400 pl-3">
                    Verified Modules (Completed)
                  </h6>
                  <div className="flex flex-col gap-2">
                    {completedCourses.map((course, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 group border-b border-white/5 pb-2 last:border-0"
                      >
                        <FaCheckSquare className="text-emerald-500/50 text-xs shrink-0 group-hover:text-emerald-400 transition-colors" />
                        <span className="font-mono text-xs text-white/60 group-hover:text-white/90 transition-colors leading-relaxed">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
