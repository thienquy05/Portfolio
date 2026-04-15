"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaServer, FaUserShield, FaBoxes, FaMicrochip, FaMicroscope } from "react-icons/fa";

const experiences = [
  {
    title: "IT System Admin II",
    date: "Jan 2025 - Present",
    company: "University of Toledo - Dept. Dean-Engineering",
    img: "/images/engineering-logo.png",
    icon: FaServer,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    details: [
      "Provide technical support for 250+ classrooms and offices, troubleshooting desktops, printers, mobile devices, network, and peripheral connectivity.",
      "Manage 1,000+ devices via Active Directory and Intune, triaging security alerts and ensuring policy enforcement.",
      "Diagnose hardware/software issues and assist with machine imaging, deployment, patching, and system refreshes."
    ]
  },
  {
    title: "Undergrad Research Assistant",
    date: "Dec 2025 - Present",
    company: "University of Toledo - Toledo, OH",
    img: "/images/UT-logo-web.jpg",
    icon: FaMicroscope,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    details: [
      "Project: AI in Healthcare - bridging computer science and clinical research.",
      "Develop an automated analysis pipeline to track and classify zebrafish motor behaviors following controlled pharmacological drug exposure using video-based data.",
      "Collaborate with the Medical Department to curate and validate datasets and processed model outputs to generate statistical insights on drug toxicity."
    ]
  },
  {
    title: "IT Support Technician",
    date: "Dec 2025 - Present", 
    company: "University of Toledo - IT",
    img: "/images/UT-logo-web.jpg",
    icon: FaUserShield,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    details: [
      "Diagnose and resolve hardware, software, and network connectivity issues for university faculty and students.",
      "Manage support tickets using UToledo ITHelp, accurately documenting issues and escalating complex incidents.",
      "Provide timely and professional technical support across broad university networks."
    ]
  },
  {
    title: "Sales Associate",
    date: "Mar 2025 - Feb 2026",
    company: "Harbor Freight",
    img: "/images/harbor-freight.png",
    icon: FaBoxes,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    details: [
      "Effectively manage multiple tasks while staying attentive to customers and adapting to business needs.",
      "Collaborate with team members while also taking initiative without constant supervision.",
      "Interpret instructions, reports, and on-screen information, and accurately input data into computer daily."
    ]
  },
  {
    title: "Summer Camp Tutor",
    date: "Summer 2025",
    company: "Explorers Academy",
    img: "/images/explorers-academy.png",
    icon: FaMicrochip,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    details: [
      "Delivered hands-on instruction in mathematics and introduced campers to engineering concepts, with a focus on computer science and programming fundamentals.",
      "Led interactive workshops demonstrating the real-world application of algorithms, logical reasoning, and problem-solving.",
      "Mentored student projects to foster creativity, collaboration, and curiosity in STEM fields."
    ]
  },
  {
    title: "Sales Advisor",
    date: "Sep 2024 - Jan 2025",
    company: "Best Buy",
    img: "/images/best-buy.png",
    icon: FaBoxes,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    details: [
      "Served as a brand ambassador by bringing together your passion for people and technology to serve customers.",
      "Recommended products and solutions that met customers’ needs.",
      "Applied the appropriate knowledge and expertise through ongoing learning and development."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 flex flex-col items-center bg-[#050505] relative z-10 overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }}></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full z-10 relative">
        <div className="flex flex-col items-center mb-16 md:mb-32">
           <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-12 h-1 bg-secondary mb-4 relative"
           >
              <div className="absolute -left-2 -top-1 w-3 h-3 border-2 border-secondary rotate-45" />
              <div className="absolute -right-2 -top-1 w-3 h-3 border-2 border-secondary rotate-45" />
           </motion.div>
           <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-white tracking-tight uppercase"
            >
              Professional <span className="text-secondary font-serif italic drop-shadow-[0_0_15px_rgba(255,210,0,0.5)]">Experience</span>
            </motion.h2>
        </div>

        <div className="relative mt-12">
          {/* Main glowing continuous line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)] z-0" />
          
          <div className="flex flex-col gap-12 md:gap-0 z-10 relative">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row w-full items-center relative group md:h-[28rem]`}
                >
                  
                  {/* Timeline Connection Dot (Network Node) */}
                  <div className={`absolute left-0 md:left-1/2 -ml-3 w-14 h-14 md:w-16 md:h-16 rounded-lg rotate-45 bg-[#0a0a0a] border-2 ${exp.border} z-20 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-90 group-hover:bg-white/5 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_30px_var(--secondary)]`}>
                    <exp.icon className={`text-xl md:text-2xl ${exp.color} -rotate-45 group-hover:-rotate-90 transition-transform duration-500`} />
                  </div>

                  {/* Connecting Line (Horizontal Data Link) */}
                  <div className={`hidden md:block absolute top-1/2 w-[calc(50%-4rem)] h-px bg-gradient-to-r ${isEven ? 'from-transparent to-secondary/30 left-0' : 'from-secondary/30 to-transparent right-0'} z-0 group-hover:h-[2px] transition-all`} />

                  {/* Operational Log Card */}
                  <div className={`w-[calc(100%-4.5rem)] ml-auto md:w-[calc(50%-4rem)] md:ml-0 md:absolute md:top-1/2 md:-translate-y-1/2 ${isEven ? 'md:left-0 md:pr-8' : 'md:right-0 md:pl-8'} group-hover:z-50 transition-all duration-300`}>
                    <div className={`relative w-full bg-[#0d0d0d] border border-white/10 p-1 rounded-2xl hover:border-secondary/30 transition-colors shadow-2xl`}>
                      
                      <div className="bg-black/90 rounded-xl p-6 md:p-8 relative overflow-hidden backdrop-blur-xl border-t border-secondary/50/50">
                        {/* Top Secret Stamp Background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] z-0">
                          <span className="text-secondary font-serif font-black text-6xl uppercase tracking-widest rotate-[-30deg] border-8 border-secondary p-4 rounded-sm">DECLASSIFIED</span>
                        </div>
                        
                        {/* Terminal Header */}
                        <div className="absolute top-0 left-0 right-0 bg-black/60 border-b border-secondary/30 px-4 py-2 flex justify-between items-center backdrop-blur-md z-20 overflow-hidden">
                          <span className={`font-mono text-[10px] uppercase tracking-widest text-white/70 flex items-center gap-2 shrink-0`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> RECORD_{idx + 10}
                          </span>
                          <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/50 shadow-[0_0_8px_rgba(255,210,0,0.2)] whitespace-nowrap shrink-0 ml-2`}>
                            {exp.date}
                          </span>
                        </div>

                        {/* Background Alert Map Glow */}
                        <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full blur-[80px] pointer-events-none opacity-10 group-hover:opacity-30 transition-opacity ${exp.bg}`} />
                        
                        <div className="flex flex-col md:flex-row gap-6 relative z-10 pt-6">
                          
                          {/* Company Shield Badge */}
                          <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 p-2 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                            <Image src={exp.img} alt={exp.company} width={64} height={64} className="w-full h-full object-contain filter grayscale-[30%] contrast-125" />
                          </div>

                          <div className="flex-1">
                            <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1 border-l border-white/20 pl-2">
                              ORGANIZATION: {exp.company}
                            </p>
                            <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors tracking-tight mb-4 tracking-tighter uppercase">
                              {exp.title}
                            </h3>
                            
                            <ul className="space-y-4">
                              {exp.details.map((detail, dIdx) => (
                                <li key={dIdx} className="text-white/70 text-sm md:text-base font-mono leading-relaxed flex items-start gap-3">
                                  <span className="text-secondary opacity-70 mt-1 text-[10px]">■</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
