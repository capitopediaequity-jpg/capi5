"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Cpu, Headset } from "lucide-react";

const reasons = [
  {
    title: "Experienced Team",
    desc: "Market experts with over 15 years of institutional experience.",
    icon: <Users className="text-primary w-6 h-6" />,
  },
  {
    title: "Secure & Reliable",
    desc: "Bank-grade security and full compliance with financial regulations.",
    icon: <Shield className="text-primary w-6 h-6" />,
  },
  {
    title: "Data-driven Decisions",
    desc: "Advanced algorithmic models and real-time market analytics.",
    icon: <Cpu className="text-primary w-6 h-6" />,
  },
  {
    title: "Client-focused Approach",
    desc: "Personalized strategies tailored to your specific financial goals.",
    icon: <Headset className="text-primary w-6 h-6" />,
  },
];

// Re-using icon imports from react-icons/lucide
import { Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Partner With Us</span>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-4 mb-8">
              Why CAPI5 is the Trusted Choice
            </h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              We understand that trust is the foundation of any financial relationship. Our commitment to excellence is reflected in every service we provide.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <h3 className="font-bold text-lg">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="aspect-video glass-card border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent-gold/10"></div>
                <div className="relative z-10 text-center p-8">
                   <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce" />
                   <div className="text-2xl font-bold font-outfit mb-2">Proven Track Record</div>
                   <div className="text-slate-400">Delivering consistent results through market cycles.</div>
                </div>
             </div>
             {/* Decorative background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/30 rounded-full blur-[100px] -z-10 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
