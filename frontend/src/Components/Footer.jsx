import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/bloomlogo.png';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Logo & Contact */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img src={logo} alt="Bloom ERP" className="h-12 w-auto object-contain bg-white rounded-lg p-2" />
              <span className="text-2xl font-bold tracking-tight">Bloom ERP</span>
            </div>

            <div className="flex items-center gap-3 mb-3 text-gray-300">
              <FaEnvelope className="text-[#00cba9]" />
              <span>info@bloomtech.lk</span>
            </div>
            <div className="flex items-center gap-3 mb-6 text-gray-300">
              <FaPhoneAlt className="text-[#00cba9]" />
              <span>+94 72 670 0243</span>
            </div>

            <div className="flex gap-3">
              <Link to="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaFacebookF /></Link>
              <Link to="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaInstagram /></Link>
              <Link to="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaTwitter /></Link>
              <Link to="#" className="bg-white text-[#0e3b5e] p-2 rounded hover:bg-[#00cba9] hover:text-white transition-colors"><FaYoutube /></Link>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="#" className="hover:text-[#00cba9] transition-colors">Audit & Reporting</Link></li>
              <li><Link to="#" className="hover:text-[#00cba9] transition-colors">Strategic Advisory</Link></li>
              <li><Link to="#" className="hover:text-[#00cba9] transition-colors">Management Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Small Business */}
          <div>
            <h4 className="font-bold text-xl mb-6">Small Business</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/small-business/accounting-software" className="hover:text-[#00cba9] transition-colors">Accounting Software</Link></li>
              <li><Link to="/small-business/smart-accounting" className="hover:text-[#00cba9] transition-colors">Smart Accounting</Link></li>
              <li><Link to="/small-business/bloom-by-industry" className="hover:text-[#00cba9] transition-colors">Industry Solutions</Link></li>
              <li><Link to="/small-business/business-recovery" className="hover:text-[#00cba9] transition-colors">Business Recovery</Link></li>
              <li><Link to="/small-business/data-security" className="hover:text-[#00cba9] transition-colors">Data Security</Link></li>
              <li><Link to="/pricing" className="hover:text-[#00cba9] transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>

          {/* Column 4: For Accountants */}
          <div>
            <h4 className="font-bold text-xl mb-6">For Accountants</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/accountants/hq" className="hover:text-[#00cba9] transition-colors">Bloom ERP HQ</Link></li>
              <li><Link to="/accountants/practice-manager" className="hover:text-[#00cba9] transition-colors">Practice Manager</Link></li>
              <li><Link to="/accountants/workpapers" className="hover:text-[#00cba9] transition-colors">Workpapers</Link></li>
              <li><Link to="/accountants/cashbook-ledger" className="hover:text-[#00cba9] transition-colors">Cashbook & Ledger</Link></li>
              <li><Link to="/accountants/syft-analytics" className="hover:text-[#00cba9] transition-colors">Syft Analytics</Link></li>
            </ul>
          </div>

          {/* Column 5: Support & Resources */}
          <div>
            <h4 className="font-bold text-xl mb-6">Support & Resources</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/support/get-support" className="hover:text-[#00cba9] transition-colors">Help Center</Link></li>
              <li><Link to="/support/onboarding" className="hover:text-[#00cba9] transition-colors">Onboarding Support</Link></li>
              <li><Link to="/support/community" className="hover:text-[#00cba9] transition-colors">Community</Link></li>
              <li><Link to="/resources/guides" className="hover:text-[#00cba9] transition-colors">Guides</Link></li>
              <li><Link to="/support/end-of-fiscal-year" className="hover:text-[#00cba9] transition-colors">End of Fiscal Year</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>Copyright © 2026 Bloom ERP, All rights reserved. Powered by Bloom Tech.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Term of use</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
