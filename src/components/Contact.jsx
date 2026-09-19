import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'fouzanmuhammedkv@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#1c2438]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">05 // Contact</span>
          <div className="h-px bg-[#1c2438] flex-1"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Action Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-100 leading-tight">
              Get in touch or start a project conversation.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I am open to discuss Python backend development, full-stack web roles, internship opportunities, or technical project collaborations.
            </p>

            {/* Email Card CTA */}
            <div className="p-6 rounded-2xl bg-[#0f121d] border border-[#1c2438] space-y-4 max-w-lg shadow-xl hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DIRECT EMAIL</span>
                <span className="text-emerald-400">Response within 24h</span>
              </div>
              <div className="text-lg sm:text-xl font-mono text-slate-100 break-all select-all font-semibold">
                {email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold font-mono text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <i className={`text-lg ${copied ? 'ri-check-line text-slate-950' : 'ri-file-copy-line'}`}></i>
                <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </motion.div>

          {/* Side Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-2xl bg-[#0f121d] border border-[#1c2438] p-6 space-y-6 shadow-xl">
              
              <div>
                <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Location & Info
                </h3>
                <div className="space-y-2 text-sm font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="ri-map-pin-line text-emerald-400"></i>
                    <span>Perinthalmanna, Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-mail-send-line text-emerald-400"></i>
                    <span>fouzanmuhammedkv@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1c2438]">
                <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
                  Direct Channels
                </h3>
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/919778263326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#06080d] border border-[#1c2438] text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all group font-mono"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-whatsapp-line text-emerald-400 text-lg"></i>
                      <span>WhatsApp (+91 9778263326)</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                  </a>

                  <a
                    href="tel:+919778263326"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#06080d] border border-[#1c2438] text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all group font-mono"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-phone-line text-emerald-400 text-lg"></i>
                      <span>Phone Call</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fouzan-mhd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#06080d] border border-[#1c2438] text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all group font-mono"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-linkedin-fill text-blue-400 text-lg"></i>
                      <span>LinkedIn Profile</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                  </a>

                  <a
                    href="https://github.com/Fouzzan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#06080d] border border-[#1c2438] text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all group font-mono"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-github-fill text-slate-300 text-lg"></i>
                      <span>GitHub Repositories</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-slate-500 group-hover:text-emerald-400 transition-colors"></i>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
