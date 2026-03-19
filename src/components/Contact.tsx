"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("mqaeedoz"); // Placeholder - User should replace with their Formspree ID

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-12 max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Message Sent Successfully!</h2>
            <p className="text-slate-400 mb-8">
              Thank you for reaching out to CAPI5. Our professional team will review your message and get back to you at contact@capi5.com shortly.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 bg-primary/10">
              <h2 className="text-4xl font-bold font-outfit mb-8">Start Your Investment Journey</h2>
              <p className="text-slate-400 mb-12">
                Have questions or ready to begin? Our professional team is at your disposal for a detailed consultation. Reach out using any of the following channels.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-slate-400">contact@capi5.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-slate-400">+91 9082526465</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp Direct</h4>
                    <a 
                      href="https://wa.me/919082526465" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-[#25D366] transition-colors"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Office</h4>
                    <p className="text-slate-400">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input 
                       id="name"
                       name="name"
                       type="text" 
                       required
                       className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-white"
                       placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input 
                       id="email"
                       name="email"
                       type="email" 
                       required
                       className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-white"
                       placeholder="your@email.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">Phone</label>
                  <input 
                     id="phone"
                     name="phone"
                     type="tel" 
                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-white"
                     placeholder="+91 9082526465"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                     id="message"
                     name="message"
                     rows={4}
                     required
                     className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary transition-colors text-white resize-none"
                     placeholder="Tell us about your investment goals..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                   {state.submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
