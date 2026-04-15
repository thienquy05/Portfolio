"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDatabase, FaBrain, FaServer, FaCogs, FaNetworkWired, FaCode } from "react-icons/fa";

const pipelineSteps = [
  {
    icon: FaDatabase,
    title: "Data Ingestion & Embeddings",
    description: "Personal resume, projects, and skills data are processed and converted into dense vector embeddings using high-dimensional embedding models, mapping semantic meaning into mathematical space.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    codeLabel: "generate-embeddings.ts",
    codeSnippet: `[
  {
    "id": "doc_resume_01",
    "type": "experience_chunk",
    "content": "Manage 1,000+ enterprise devices via Active Directory...",
    "vector": [0.0123, -0.0451, 0.1128, ... 1533 more dimensions]
  },
  {
    "id": "doc_skills_04",
    "type": "technical_skills",
    "content": "Languages: Java, Python, TypeScript...",
    "vector": [0.8124, 0.1110, -0.0991, ... 1533 more dimensions]
  }
]`
  },
  {
    icon: FaNetworkWired,
    title: "Vector Search & Retrieval",
    description: "When a user asks a question, the system computes the cosine similarity between the query embedding and the stored document vectors to retrieve the most relevant context dynamically.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    codeLabel: "vector-math.ts",
    codeSnippet: `export function cosineSimilarity(query: number[], doc: number[]) {
  let dotProduct = 0;
  let normQuery = 0;
  let normDoc = 0;
  
  for (let i = 0; i < query.length; i++) {
    dotProduct += query[i] * doc[i];
    normQuery += query[i] * query[i];
    normDoc += doc[i] * doc[i];
  }
  
  return dotProduct / (Math.sqrt(normQuery) * Math.sqrt(normDoc));
}`
  },
  {
    icon: FaServer,
    title: "Next.js Edge API",
    description: "A fast, serverless route acts as the orchestration layer, handling the incoming query, performing the vector math operations locally, and constructing an augmented prompt.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    codeLabel: "api/chat/route.ts",
    codeSnippet: `export async function POST(req: Request) {
  const { messages } = await req.json();
  const latestQuery = messages[messages.length - 1].content;
  
  // 1. Convert query to vector
  const queryVector = await getQueryEmbedding(latestQuery);
  
  // 2. Perform similarity search across local database
  const relevantContext = await retrieveKnowledge(queryVector, 3);
  
  // 3. Inject context into prompt
  const augmentedMessages = buildPrompt(messages, relevantContext);
  
  return streamLLMResponse(augmentedMessages);
}`
  },
  {
    icon: FaBrain,
    title: "LLM Generation",
    description: "The augmented prompt containing the retrieved context is sent to a Large Language Model (LLM), which generates a highly accurate, context-aware answer grounded in my actual background.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    codeLabel: "llm-payload.json",
    codeSnippet: `{
  "model": "gpt-4o-mini",
  "temperature": 0.2,
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful AI assistant representing Quy's portfolio. Use the following context to answer the user's question: [RETRIEVED RESUME CONTEXT: ...] If you don't know the answer based on the context, say so."
    },
    {
      "role": "user",
      "content": "Tell me about his experience with Active Directory."
    }
  ]
}`
  }
];

export default function ArchitectureSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  // Helper to render the specific visualization graphic based on the active index
  const renderVisualization = (index: number | null) => {
    switch(index) {
      case 0:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative">
             <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
             <div className="flex items-center gap-12 mb-8 relative z-10">
                <div className="w-20 h-24 bg-[#111] border border-blue-400/50 rounded shadow-[0_0_25px_rgba(96,165,250,0.3)] flex flex-col justify-center items-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-400/10 animate-pulse"></div>
                   <div className="w-3/4 h-px bg-blue-400/40 mb-2"></div>
                   <div className="w-1/2 h-px bg-blue-400/40 mb-2"></div>
                   <div className="w-3/4 h-px bg-blue-400/40 mb-2"></div>
                   <div className="text-xs text-blue-400 font-mono mt-2 font-bold">.md</div>
                </div>
                <div className="relative">
                   <motion.div animate={{ x: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"></motion.div>
                   <motion.div animate={{ x: [0, 20], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></motion.div>
                </div>
                <div className="bg-[#050505] border border-emerald-500/30 p-4 rounded-xl shadow-[0_0_30px_rgba(52,211,153,0.15)] flex flex-col gap-1.5 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/20 blur-xl"></div>
                   {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex gap-2 items-center text-[10px] font-mono text-emerald-400/70">
                         <span>[</span>
                         <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: Math.random() + 1, repeat: Infinity }}>{Math.random().toFixed(4)}</motion.span>
                         <span>...</span>
                         <span>]</span>
                      </div>
                   ))}
                </div>
             </div>
             <p className="text-white/60 font-mono text-sm tracking-widest uppercase">Document Parsing & Vector Generation</p>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative">
             <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
             <div className="relative w-56 h-56 flex items-center justify-center">
                {/* Radar Sweep */}
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="absolute inset-0 rounded-full border border-emerald-500/20 shadow-[inset_0_0_20px_rgba(52,211,153,0.1)]">
                   <div className="w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-tl-full origin-bottom-right" />
                </motion.div>
                
                {/* Concentric Rings */}
                <div className="absolute inset-4 rounded-full border border-emerald-500/20"></div>
                <div className="absolute inset-10 rounded-full border border-emerald-500/30 border-dashed"></div>
                
                {/* Center Query Node */}
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-5 bg-white rounded-full z-10 shadow-[0_0_20px_white] flex items-center justify-center">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                </motion.div>
                
                {/* Relevant Result Nodes */}
                <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }} className="absolute top-12 left-16 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_var(--emerald-400)]"></motion.div>
                <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.7 }} className="absolute bottom-16 right-12 w-4 h-4 bg-emerald-300 rounded-full shadow-[0_0_15px_var(--emerald-300)]"></motion.div>
                <motion.div animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.1, delay: 0.5 }} className="absolute top-1/2 right-6 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_10px_var(--emerald-400)]"></motion.div>
                
                {/* Irrelevant Nodes */}
                <div className="absolute top-8 right-12 w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                
                {/* Connecting paths */}
                <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
                   <line x1="50%" y1="50%" x2="35%" y2="25%" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                   <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                   <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="rgba(52,211,153,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
             </div>
             <p className="text-white/60 font-mono text-sm tracking-widest uppercase mt-8">Nearest Neighbor Search Space</p>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative">
            <motion.div animate={{ opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
            <div className="relative flex justify-center items-center w-72 h-40">
              <div className="w-20 h-24 bg-[#0a0a0a] border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] rounded-xl flex flex-col items-center justify-center z-10 relative overflow-hidden">
                 <div className="absolute top-0 w-full h-1 bg-purple-500/80"></div>
                 <FaServer className="text-3xl text-purple-400 mb-2" />
                 <div className="flex gap-1.5">
                    <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-emerald-400"></motion.div>
                    <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-purple-400"></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-blue-400"></motion.div>
                 </div>
              </div>
              
              {/* Context Injection Lines */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8">
                 <div className="flex items-center gap-2">
                    <div className="text-[9px] font-mono text-emerald-400 uppercase">Context</div>
                    <motion.div animate={{ x: [0, 40] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400" />
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="text-[9px] font-mono text-blue-400 uppercase">Query</div>
                    <motion.div animate={{ x: [0, 40] }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }} className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400" />
                 </div>
              </div>
              
              {/* Output Line */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                 <motion.div animate={{ x: [0, 40], opacity: [1, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-transparent" />
                 <div className="text-[9px] font-mono text-purple-400 uppercase ml-2 border border-purple-500/30 px-2 py-1 rounded bg-purple-500/10">Augmented Prompt</div>
              </div>
            </div>
            <p className="text-white/60 font-mono text-sm tracking-widest uppercase mt-4">Edge Route Orchestration</p>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full relative">
            <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
            <div className="flex items-center justify-center gap-8 w-full max-w-sm">
               
               <div className="relative w-24 h-24 bg-[#050505] border border-orange-500/30 rounded-2xl flex justify-center items-center shadow-[0_0_25px_rgba(249,115,22,0.2)] z-10">
                  <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-2xl bg-orange-500/20"></motion.div>
                  <FaBrain className="text-5xl text-orange-400 z-10" />
                  
                  {/* Aura rings */}
                  <motion.div animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 border border-orange-500/50 rounded-2xl"></motion.div>
               </div>
               
               <div className="flex-1 flex flex-col gap-3 relative">
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-orange-500/50 to-transparent" />
                  
                  <div className="bg-[#111] border border-white/10 rounded-lg p-3 relative overflow-hidden shadow-[inset_0_0_10px_black]">
                     <motion.div animate={{ left: ['-10%', '110%'] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                     <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 bg-orange-400/80 rounded w-full mb-2"></motion.div>
                     <motion.div animate={{ width: ['0%', '85%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="h-1.5 bg-orange-400/60 rounded w-5/6 mb-2"></motion.div>
                     <motion.div animate={{ width: ['0%', '40%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="h-1.5 bg-orange-400/40 rounded w-2/5"></motion.div>
                     <motion.div animate={{ width: ['0%', '70%'] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="h-1.5 bg-orange-400/20 rounded w-3/4"></motion.div>
                  </div>
               </div>
            </div>
            <p className="text-white/60 font-mono text-sm tracking-widest uppercase mt-8">LLM Grounded Response Generation</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="architecture" className="py-24 px-6 md:px-12 flex flex-col items-center bg-[#0a0a0a] relative z-10 overflow-hidden border-t border-white/5">
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 relative">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
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
              className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-6"
            >
              System <span className="text-secondary font-serif italic drop-shadow-[0_0_15px_rgba(255,210,0,0.5)]">Architecture</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 max-w-2xl font-mono text-sm md:text-base leading-relaxed"
            >
              This portfolio features a <span className="text-white font-bold">Retrieval-Augmented Generation (RAG)</span> pipeline built from scratch. Click through the architecture nodes below to inspect the simulated telemetry and data flow.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] w-[80%] h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 z-0">
             <div className="w-full h-full bg-white/20 animate-pulse" />
          </div>

          {pipelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex flex-col relative z-10"
              >
                <div 
                  onClick={() => setSelectedStep(idx)}
                  className={`w-24 h-24 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-secondary hover:shadow-[0_0_20px_rgba(255,210,0,0.3)] hover:scale-105 flex items-center justify-center mb-6 mx-auto cursor-pointer transition-all duration-300 relative group`}
                >
                  {/* Redesigned Pipeline Number Badge */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#111] border border-white/10 group-hover:border-secondary group-hover:text-secondary group-hover:shadow-[0_0_10px_rgba(255,210,0,0.3)] flex items-center justify-center text-xs font-mono font-bold text-white/30 transition-all`}>
                    0{idx + 1}
                  </div>
                  
                  <div className={`absolute inset-0 rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-20 ${step.bg}`} />
                  <step.icon className={`text-4xl ${step.color} transform group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                <div 
                  onClick={() => setSelectedStep(idx)}
                  className={`bg-[#050505] border border-white/10 hover:border-secondary/50 p-6 rounded-xl flex-1 cursor-pointer transition-colors shadow-lg relative overflow-hidden group`}
                >
                   <div className={`absolute top-0 left-0 w-full h-1 ${step.bg}`} />
                   <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-secondary transition-colors">{step.title}</h3>
                   <p className={`text-white/60 text-sm font-mono leading-relaxed transition-all group-hover:text-white/90`}>{step.description}</p>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Modal Virtualization / Visualizer */}
        <AnimatePresence>
          {selectedStep !== null && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pt-20">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedStep(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/20 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,1)] overflow-hidden z-[101]"
              >
                {/* Modal Header */}
                <div className={`p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-black to-[#0d0d0d] relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-full h-1 ${pipelineSteps[selectedStep].bg}`} />
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center ${pipelineSteps[selectedStep].bg}`}>
                      {(() => {
                        const Icon = pipelineSteps[selectedStep].icon;
                        return <Icon className={`text-2xl ${pipelineSteps[selectedStep].color}`} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{pipelineSteps[selectedStep].title}</h3>
                      <div className="text-xs font-mono text-secondary uppercase tracking-widest mt-1">NODE // 0{selectedStep + 1}</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedStep(null)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all shadow-lg text-xl"
                  >
                    ×
                  </button>
                </div>
                
                {/* Modal Content - The Virtualization Canvas */}
                <div className="md:p-12 relative min-h-[350px] flex items-center justify-center overflow-hidden bg-black/50">
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    {renderVisualization(selectedStep)}
                  </div>
                </div>
                
                {/* Explanation text */}
                <div className="p-6 bg-[#050505] border-t border-white/10">
                  <p className="text-white/80 font-mono leading-relaxed text-sm border-l-2 border-secondary pl-4 py-2">
                    {pipelineSteps[selectedStep].description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Call to action for the chat widget */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
           <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-sm animate-pulse">
              <FaCogs className="text-secondary" /> System Online & Ready for Queries
           </div>
        </motion.div>
      </div>
    </section>
  );
}