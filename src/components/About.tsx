"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               {/* Concept visual: abstract finance representation */}
               <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-950 p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                     <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-primary"
                        ></motion.div>
                     </div>
                     <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                          className="h-full bg-accent-gold"
                        ></motion.div>
                     </div>
                     <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ duration: 1.5, delay: 0.9 }}
                          className="h-full bg-blue-400"
                        ></motion.div>
                     </div>
                  </div>
                  <div className="mt-12">
                     <div className="text-4xl font-bold text-white mb-2 italic">CAPI5</div>
                     <div className="text-slate-500 uppercase tracking-widest text-xs">Excellence in Finance</div>
                  </div>
               </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm">About CAPI5</span>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-4 mb-8">
              Reliable Partner for Your Wealth Management
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Founded on the principles of transparency and expertise, CAPI5 has emerged as a leader in the fintech space. We combine deep market knowledge with advanced technology to deliver superior financial services.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Expertise in global financial markets",
                "Advanced data-driven decision making",
                "Professional handling of institutional funds",
                "Unwavering commitment to client trust"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">Learn Our Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
