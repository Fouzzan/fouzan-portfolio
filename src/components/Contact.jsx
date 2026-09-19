import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'fouzanmuhammedkv@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#1a1d2b]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">05 // Contact</span>
          <div className="h-px bg-[#232738] flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Action Block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-100 leading-tight">
              Get in touch or start a project conversation.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I am open to discuss Python backend development, full-stack web roles, internship opportunities, or technical project collaborations.
            </p>

            {/* Email Card CTA */}
            <div className="p-6 rounded-2xl bg-[#12141d] border border-[#232738] space-y-4 max-w-lg">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span>DIRECT EMAIL</span>
                <span className="text-purple-400">Response within 24h</span>
              </div>
              <div className="text-lg sm:text-xl font-mono text-gray-200 break-all select-all font-semibold">
                {email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <i className={`text-lg ${copied ? 'ri-check-line text-emerald-300' : 'ri-file-copy-line'}`}></i>
                <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

          {/* Side Contact Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#12141d] border border-[#232738] p-6 space-y-6">
              
              <div>
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                  Location & Info
                </h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <i className="ri-map-pin-line text-purple-400"></i>
                    <span>Perinthalmanna, Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-[#12141d] ri-mail-send-line text-purple-400"></i>
                    <span>fouzanmuhammedkv@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1a1d2b]">
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                  Direct Channels
                </h3>
                <div className="space-y-2.5">
                  <a
                    href="https://wa.me/919778263326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0b0c10] border border-[#232738] text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-whatsapp-line text-emerald-400 text-lg"></i>
                      <span>WhatsApp (+91 9778263326)</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-gray-500 group-hover:text-purple-400 transition-colors"></i>
                  </a>

                  <a
                    href="tel:+919778263326"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0b0c10] border border-[#232738] text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-phone-line text-purple-400 text-lg"></i>
                      <span>Phone Call</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-gray-500 group-hover:text-purple-400 transition-colors"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fouzan-mhd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0b0c10] border border-[#232738] text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-linkedin-fill text-blue-400 text-lg"></i>
                      <span>LinkedIn Profile</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-gray-500 group-hover:text-purple-400 transition-colors"></i>
                  </a>

                  <a
                    href="https://github.com/Fouzzan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#0b0c10] border border-[#232738] text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <i className="ri-github-fill text-gray-300 text-lg"></i>
                      <span>GitHub Repositories</span>
                    </span>
                    <i className="ri-arrow-right-up-line text-gray-500 group-hover:text-purple-400 transition-colors"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
