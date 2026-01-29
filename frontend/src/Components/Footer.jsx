import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0e3b5e] text-white pt-20 pb-10 font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12"
      >
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#00cba9] p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">Bloom ERP</span>
            </div>

            <p className="text-gray-300 mb-2">Jalan Cempaka Wangi No 22</p>
            <p className="text-gray-300 mb-6">Jakarta - Indonesia</p>

            <div className="flex items-center gap-3 mb-3 text-gray-300">
              <FaEnvelope className="text-[#00cba9]" />
              <span>support@yourdomain.tld</span>
            </div>
            <div className="flex items-center gap-3 mb-6 text-gray-300">
              <FaPhoneAlt className="text-[#00cba9]" />
              <span>+6221.2002.2012</span>
            </div>

            <div className="flex gap-3">
              <a href="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Consulting</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Tax Management</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Audit & Assurance</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Mergers & Acquisitions</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Risk & Financial Advisory</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-xl mb-6">Support</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Ticket Support</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-bold text-xl mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">News & Articles</a></li>
              <li><a href="#" className="hover:text-[#00cba9] transition-colors">Legal Notices</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>Copyright © 2026 Bloom ERP, All rights reserved. Powered by MoxCreative.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Term of use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
