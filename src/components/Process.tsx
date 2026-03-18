"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "We discuss your financial goals and risk tolerance in detail.",
  },
  {
    number: "02",
    title: "Strategy Planning",
    desc: "Developing a bespoke investment strategy based on market analysis.",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Meticulous execution of the planned strategy in the markets.",
  },
  {
    number: "04",
    title: "Monitoring",
    desc: "Continuous oversight and periodic rebalancing of your portfolio.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mt-4 mb-6">
            Our Investment Journey
          </h2>
          <p className="text-slate-400 text-lg">
            A structured approach to managing your wealth, ensuring clarity and performance at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-0.5 bg-white/10"></div>
          
          <div className="grid lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center group"
              >
                <div className="w-10 h-10 bg-primary rounded-full mx-auto flex items-center justify-center text-white font-bold mb-8 relative z-10 transition-transform group-hover:scale-110 shadow-lg shadow-primary/40">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
