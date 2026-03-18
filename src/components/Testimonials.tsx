"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexander Reed",
    role: "Private Investor",
    text: "CAPI5 has completely transformed my approach to the markets. Their portfolio management services are professional and highly effective.",
  },
  {
    name: "Sarah Jenkins",
    role: "HF Consultant",
    text: "The institutional-grade research provided by CAPI5 is unparalleled. It's been a game changer for my investment decisions.",
  },
  {
    name: "Michael Chen",
    role: "Equity Trader",
    text: "Reliable, transparent, and results-driven. Their team is always available to provide expert insights when the markets get volatile.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
           <h2 className="text-4xl font-bold font-outfit">Client Success Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <div className="font-bold text-lg">{item.name}</div>
                <div className="text-primary text-sm font-medium">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
