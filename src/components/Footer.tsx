"use client";

import React from "react";
import { TrendingUp, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded bg-primary flex items-center justify-center">
                <TrendingUp className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-outfit tracking-tight">CAPI5</span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              Providing professional-grade financial solutions for the modern investor. Expert handling, institutional research, and tailored strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6">Services</h4>
             <ul className="space-y-4 text-sm text-slate-500">
               <li><a href="#" className="hover:text-primary transition-colors">Account Handling</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Portfolio Management</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Market Analysis</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Risk Management</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-slate-500">
               <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
               <li><a href="#process" className="hover:text-primary transition-colors">Our Process</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Legal Disclosure</a></li>
               <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Trust & Reliability</h4>
             <p className="text-sm text-slate-500 mb-6">
               Join over 2,500 active investors who trust CAPI5 with their assets. Secure, transparent, and performance-driven.
             </p>
             <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-10 h-10 bg-green-500/10 rounded flex items-center justify-center text-green-500">
                   <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                   <div className="text-xs font-bold text-white uppercase">Compliance Check</div>
                   <div className="text-[10px] text-slate-500">Fully licensed and secure</div>
                </div>
             </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-lg mb-12">
           <h5 className="text-red-400 text-xs font-bold uppercase mb-2 tracking-widest">Risk Disclosure</h5>
           <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed uppercase tracking-tight">
             Investments in global financial markets carry inherent risks. Past performance does not guarantee future results. 
             Financial markets are highly volatile and subject to global economic conditions. Always consult with a licensed 
             financial advisor before making any significant allocation of capital. CAPI5 is committed to professional 
             handling, but market outcomes are never guaranteed.
           </p>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 CAPI5 Financial Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
