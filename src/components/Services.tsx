"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  BarChart4, 
  LineChart, 
  ShieldAlert, 
  Zap, 
  Users 
} from "lucide-react";

const services = [
  {
    title: "Account Handling",
    description: "Professional management of trading accounts with precise risk controls and execution strategies.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Portfolio Management",
    description: "Tailored portfolio construction and rebalancing to meet your long-term financial objectives.",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
  {
    title: "Market Research",
    description: "In-depth technical and fundamental analysis to identify high-probability market opportunities.",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
  {
    title: "Investment Advisory",
    description: "Expert guidance on capital allocation across various asset classes and market segments.",
    icon: <BarChart4 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Risk Management",
    description: "Robust risk mitigation frameworks designed to protect your capital in volatile market conditions.",
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
  },
  {
    title: "Trading Assistance",
    description: "Hands-on support and training for active traders looking to sharpen their edge in the markets.",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-outfit mt-4 mb-6"
          >
            Comprehensive Financial Services
          </motion.h2>
          <p className="text-slate-400 text-lg">
            We offer a full suite of services designed to empower investors and provide professional-grade handling of financial assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-8 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors">
                Learn More <Zap className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
