"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserSecret, FaTimes, FaNetworkWired, FaPaperPlane } from "react-icons/fa";
import { useChat, UIMessage } from "@ai-sdk/react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages: chatMessages, sendMessage, status } = useChat({
    id: 'xaibo-chat',
  });

  const introMessage = {
    id: 'intro',
    role: 'assistant' as const,
    parts: [{ type: 'text' as const, text: "CLASSIFIED INTERFACE SECURED. I am Xaibo, the system's lead detective node. What intelligence are you attempting to exploit today?" }]
  };

  const messages = chatMessages.length > 0 ? chatMessages : [introMessage];

  // console.log("Chat Messages: ", messages);

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-[#0a0a0a] text-secondary rounded-xl shadow-[0_0_20px_rgba(255,210,0,0.3)] flex items-center justify-center border border-secondary/50 hover:shadow-[0_0_30px_rgba(255,210,0,0.6)] hover:bg-secondary hover:text-black transition-all relative overflow-hidden group"
          >
            {/* Scan animation */}
            <div className="absolute left-0 right-0 h-1 bg-white/30 top-0 translate-y-[-100%] group-hover:translate-y-[14rem] transition-transform duration-1000 ease-in-out blur-[2px]" />
            <FaUserSecret className="text-2xl relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="absolute bottom-0 right-0 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] flex flex-col bg-[#050505]/95 backdrop-blur-3xl border border-secondary/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black border-b border-secondary/30 px-5 py-4 flex justify-between items-center shrink-0 relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,210,0,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded border border-secondary/50 bg-secondary/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,210,0,0.2)]">
                  <FaUserSecret className="text-secondary text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-black font-mono text-white tracking-widest uppercase flex items-center gap-2">
                    X A I B O <span className="text-[10px] text-white/40">v1.0</span>
                  </h4>
                  <p className="text-[9px] text-emerald-400 font-mono tracking-widest flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse border border-emerald-300"></span> INTERROGATION LINK ACTIVE
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-secondary transition-colors relative z-10 p-2"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-transparent scroll-smooth font-mono text-sm relative">
              {/* Vertical ruler logic lines */}
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/5" />
              
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex relative z-10 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 leading-relaxed border shadow-lg ${
                      msg.role === "user"
                        ? "bg-secondary/10 border-secondary/50 text-white rounded-l-xl rounded-tr-xl"
                        : "bg-black/60 border-white/10 text-emerald-400 rounded-r-xl rounded-tl-xl ml-4"
                    }`}
                  >
                    {msg.role === "user" ? (
                       <div className="flex flex-col">
                         <span className="text-[8px] text-secondary/50 uppercase tracking-widest mb-1">&gt; USER_QUERY</span>
                         {msg.parts?.map((part, i) => part.type === 'text' ? <span key={i}>{part.text}</span> : null) || ''}
                       </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-[8px] text-white/30 uppercase tracking-widest mb-2 border-b border-white/5 pb-1">&gt; DETECTIVE_XAIBO_RESPONSE</span>
                        {msg.parts?.map((part, i) => part.type === 'text' ? <span key={i}>{part.text}</span> : null) || ''}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Suggested Queries */}
              {chatMessages.length === 0 && !isLoading && (
                <div className="flex flex-col gap-2 mt-4 items-end relative z-10">
                  <span className="text-[8px] text-white/30 uppercase tracking-widest mr-1">&gt; SUGGESTED_QUERIES</span>
                  {[
                    "Tell me about Quy's background", 
                    "What are Quy's core technical skills?", 
                    "Does Quy require visa sponsorship?"
                  ].map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage({ text: suggestion })}
                      className="text-[10px] text-right px-3 py-1.5 bg-black/40 border border-secondary/20 rounded-l-xl rounded-tr-xl text-emerald-400/80 hover:text-emerald-400 hover:bg-secondary/10 hover:border-secondary/50 transition-all uppercase max-w-[85%]"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Loading Scan */}
              {isLoading && (
                <div className="flex justify-start relative z-10 ml-4">
                  <div className="bg-black/60 text-secondary border border-secondary/20 rounded-r-xl rounded-tl-xl px-4 py-3 text-xs shadow-md flex gap-2 items-center uppercase tracking-widest">
                    <FaNetworkWired className="animate-spin" /> Fetching intel...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black border-t border-secondary/30 shrink-0 relative">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
              <form onSubmit={handleSubmit} className="relative flex items-center z-10">
                <span className="text-secondary absolute left-4 font-bold select-none">&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Initiate prompt..."
                  disabled={isLoading}
                  className="w-full bg-[#0d0d0d] border border-white/10 text-emerald-400 font-mono text-xs rounded-lg py-3 pl-8 pr-16 focus:outline-none focus:ring-1 focus:ring-secondary/50 focus:border-secondary/50 placeholder-white/20 transition-all uppercase"
                  spellCheck="false"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 text-xs font-black uppercase font-mono px-3 py-1.5 bg-secondary text-black rounded hover:bg-white transition-colors disabled:opacity-30 disabled:hover:bg-secondary cursor-crosshair"
                >
                  EXEC
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
