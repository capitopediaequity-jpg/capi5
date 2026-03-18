"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, PieChart, Activity } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
        
        {/* Particle Overlay (Simple CSS implementation) */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Secure & Professional Financial Advisory
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-tight mb-6">
              Smart Financial <br />
              <span className="text-primary italic">Solutions</span> for <br />
              Modern Investors
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
              Experience professional account handling, institutional-grade research, and bespoke investment consulting tailored for your financial growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-gold">
                Contact Us
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6 grayscale opacity-50">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Trusted By</span>
              <div className="flex gap-8">
                {/* Placeholder logo icons */}
                <div className="h-6 w-24 bg-slate-800 rounded"></div>
                <div className="h-6 w-24 bg-slate-800 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Right side: 3D-ish visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 animate-float">
              <div className="glass-card p-8 w-[400px] border-primary/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                   <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-slate-400 text-sm mb-2">Portfolio Performance</h3>
                <div className="text-3xl font-bold mb-6">+24.8%</div>
                
                <div className="flex items-end gap-2 h-32 mb-4">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="flex-1 bg-primary rounded-t-sm"
                    ></motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>MON</span><span>WED</span><span>FRI</span><span>SUN</span>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card p-4 border-accent-gold/30"
              >
                <PieChart className="text-accent-gold w-8 h-8" />
              </motion.div>
              
              <div className="absolute -bottom-10 -left-10 glass-card p-6 shadow-2xl shadow-primary/40 border-primary/20">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Live Market Access</span>
                 </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
