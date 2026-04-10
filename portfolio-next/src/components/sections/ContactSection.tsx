"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook, FaSatelliteDish } from "react-icons/fa";

const socialLinks = [
  { name: "[LINKEDIN_DOSSIER]", desc: "Professional Records", href: "https://www.linkedin.com/in/thien-quy-pham-744678329/", icon: FaLinkedin, color: "text-[#007AB5]", border: "hover:border-[#007AB5]", bgHover: "hover:bg-[#007AB5]/10" },
  { name: "[GITHUB_EVIDENCE]", desc: "Codebase Archive", href: "https://github.com/thienquy05", icon: FaGithub, color: "text-white", border: "hover:border-white", bgHover: "hover:bg-white/10" },
  { name: "[FACEBOOK_ALIAS]", desc: "Social Network", href: "https://www.facebook.com/pham.thien.quy.2025", icon: FaFacebook, color: "text-[#0539BC]", border: "hover:border-[#0539BC]", bgHover: "hover:bg-[#0539BC]/10" },
];

export default function ContactSection() {
  return (
    <section id="contacts" className="min-h-[70vh] py-32 px-6 md:px-12 flex justify-center items-center bg-[#050505] relative overflow-hidden z-10 border-t border-white/5">
      
      {/* Radar rings background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] border border-secondary rounded-full" />
        <div className="absolute w-[600px] h-[600px] border border-white/30 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[800px] h-[800px] border border-secondary/50 rounded-full" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
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
              className="text-5xl md:text-6xl font-black text-white tracking-tight flex items-center gap-4 justify-center"
            >
              Secure <span className="text-secondary font-serif italic drop-shadow-[0_0_15px_rgba(255,210,0,0.5)]">Comms</span>
            </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 font-mono text-sm md:text-base text-center mb-20 max-w-2xl mx-auto bg-white/5 p-4 border border-white/10 relative"
        >
          {/* Edges marker corner lines */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-secondary" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-secondary" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-secondary" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-secondary" />

          <FaSatelliteDish className="inline-block text-secondary mr-2 mb-1 animate-[ping_3s_ease-in-out_infinite]" />
          ESTABLISHING SECURE HANDSHAKE...<br/>
          <span className="text-emerald-500 uppercase tracking-widest text-xs mt-2 block font-bold">STATUS: RELAY NODES ONLINE</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Vertical connecting line in middle (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-secondary/30 to-transparent -translate-x-1/2 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-1 before:h-16 before:bg-secondary/50" />

          {/* Secure Intel - Email Form Button */}
          <motion.a
            href="mailto:ThienQuy.Pham@rockets.utoledo.edu"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className={`group text-left w-full flex items-center justify-between p-6 bg-black border border-white/20 transition-all duration-300 hover:border-secondary hover:bg-secondary/5 relative overflow-hidden`}
          >
            <div className="absolute top-0 bottom-0 left-[-100%] w-10 bg-white/5 blur-[10px] skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-in-out" />
            
            <div className="flex flex-col gap-1 relative z-10">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Direct Transmission</span>
              <span className="font-mono font-bold text-white group-hover:text-secondary transition-colors text-sm md:text-base tracking-wide">
                [SECURE_INTEL]
              </span>
            </div>

            <div className={`p-4 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform text-secondary shadow-lg relative z-10`}>
              <FaEnvelope className="text-2xl md:text-3xl" />
            </div>
          </motion.a>

          {socialLinks.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: (idx + 1) % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group flex items-center justify-between p-6 bg-black border border-white/20 transition-all duration-300 hover:border-secondary hover:bg-secondary/5 relative overflow-hidden`}
            >
              {/* Scanline hover effect */}
              <div className="absolute top-0 bottom-0 left-[-100%] w-10 bg-white/5 blur-[10px] skew-x-12 group-hover:left-[200%] transition-all duration-700 ease-in-out" />
              
              <div className="flex flex-col gap-1 relative z-10">
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest">{contact.desc}</span>
                <span className="font-mono font-bold text-white group-hover:text-secondary transition-colors text-sm md:text-base tracking-wide">
                  {contact.name}
                </span>
              </div>
              <div className={`p-4 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform ${contact.color} group-hover:text-secondary shadow-lg relative z-10`}>
                <contact.icon className="text-2xl md:text-3xl" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
