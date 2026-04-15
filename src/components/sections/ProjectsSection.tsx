"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaServer, FaLink, FaDatabase } from "react-icons/fa";

const projects = [
  {
    title: "AI Phishing Detection System",
    img: "/images/AI_Detection.png",
    desc: "Sentra - an AI-driven phishing detection platform implementing robust input sanitization and inference rate limiting to harden the underlying model against adversarial evasion and prompt injection attacks.",
    tags: ["AI", "Python", "SQL", "Next.js"],
    link: "https://github.com/Phising-Detection-Team/phishing_detection",
    status: "ACTIVE"
  },

  {
    title: "Simulated Phishing",
    img: "/images/phishing.png",
    desc: "Clicksmart - a web application designed to help people learn about phishing attacks by simulating suspicious links and data collection.",
    tags: ["Python", "Next.js"],
    link: "https://github.com/thienquy05/phishing-awareness-pro",
    deployLink: "https://clicksmart.vercel.app/", 
    status: "DEPLOYED",
  },

  {
    title: "Port Vulnerabilities Scanner",
    img: "/images/port-scanner.png",
    desc: "Terminal-based Python vulnerability scanner to identify potential network risks, featuring multithreading & SQLite logging.",
    tags: ["Python", "SQL"],
    link: "https://github.com/thienquy05/vuln-scanner",
    status: "ACTIVE",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-12 flex justify-center items-center bg-[#0a0a0a] relative z-10 overflow-hidden">
      {/* Target Crosshair Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute w-full h-[1px] bg-white" />
        <div className="absolute h-full w-[1px] bg-white" />
      </div>

      <div className="max-w-7xl w-full z-10 relative">
        <div className="flex flex-col items-center mb-24">
           <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-12 h-1 bg-secondary mb-4 relative"
           >
              <div className="absolute -left-2 -top-1 w-3 h-3 border-2 border-secondary" />
              <div className="absolute -right-2 -top-1 w-3 h-3 border-2 border-secondary" />
           </motion.div>
           <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-white tracking-tight uppercase relative inline-block"
            >
              Featured <span className="text-secondary font-serif italic drop-shadow-[0_0_15px_rgba(255,210,0,0.5)]">Projects</span>
              <div className="absolute -top-6 -right-12 rotate-[15deg] border-4 border-secondary/50 p-1 pointer-events-none mix-blend-screen opacity-40">
                <span className="text-secondary/50 font-black font-serif uppercase tracking-widest text-lg drop-shadow-[0_0_10px_rgba(255,210,0,0.8)]">Restricted</span>
              </div>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden hover:border-secondary/50 transition-all duration-500 shadow-2xl"
            >
              {/* Top Terminal Bar */}
              <div className="bg-black/90 border-b border-white/10 px-4 py-2 flex items-center justify-between z-20 relative">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary/50 group-hover:bg-secondary transition-colors" />
                  <div className="w-1.5 h-1.5 bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors" />
                  <div className="w-1.5 h-1.5 bg-green-500/50 group-hover:bg-green-500 transition-colors" />
                  <span className="text-secondary/50 text-[9px] font-mono ml-2 uppercase tracking-[0.2em]">PROJECT_{idx + 1}</span>
                </div>
                <span className={`text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 border ${project.status === 'ACTIVE' || project.status === 'DEPLOYED' ? 'border-secondary/30 bg-secondary/10 text-secondary shadow-[0_0_5px_rgba(255,210,0,0.3)]' : 'border-white/10 bg-white/5 text-white/40'}`}>
                  {project.status}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-black">
                 <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover filter contrast-125 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10 opacity-90" />
                
                {/* Horizontal scan line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-secondary shadow-[0_0_10px_rgba(var(--secondary),1)] -translate-y-full opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] z-20" />
              </div>

              {/* Data Block */}
              <div className="p-6 relative z-20 flex flex-col h-[calc(100%-12rem-36px)]">
                <div className="flex items-center gap-2 mb-3">
                  <FaServer className="text-secondary/50 text-sm" />
                  <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-white/60 font-mono text-sm leading-relaxed mb-6 flex-grow">
                  &gt; {project.desc}
                </p>

                <div className="space-y-6 mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-black border border-white/10 text-white/50 text-[10px] font-mono font-bold uppercase tracking-widest rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 w-full">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary border border-secondary/30 hover:border-secondary text-secondary hover:text-black font-mono font-bold py-3 rounded-lg transition-all text-xs uppercase tracking-widest relative overflow-hidden"
                    >
                      <FaGithub className="text-base relative z-10" /> 
                      <span className="relative z-10">{project.deployLink ? "Source" : "GitHub Repo"}</span>
                    </motion.a>
                    
                    {project.deployLink && (
                      <motion.a 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.deployLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary border border-secondary/30 hover:border-secondary text-secondary hover:text-black font-mono font-bold py-3 rounded-lg transition-all text-xs uppercase tracking-widest relative overflow-hidden"
                      >
                        <FaLink className="text-base relative z-10" /> 
                        <span className="relative z-10">Live App</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(12rem); }
        }
      `}} />
    </section>
  );
}
