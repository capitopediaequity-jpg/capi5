"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Active Clients", value: "2,500+" },
  { label: "Years Experience", value: "15+" },
  { label: "Assets Handled", value: "$500M+" },
  { label: "Global Markets", value: "12+" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold font-outfit text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold uppercase tracking-widest text-primary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
