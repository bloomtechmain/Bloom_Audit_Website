import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChartLine, FaShieldAlt, FaLightbulb, FaRobot, FaBriefcase, FaUniversity, FaUsers, FaBook, FaGlobe, FaTag, FaFileAlt, FaGraduationCap, FaHeadset, FaChalkboardTeacher, FaCertificate, FaComments, FaBookOpen, FaSortAlphaDown, FaCalculator, FaUserCircle, FaSignOutAlt, FaTachometerAlt, FaBoxOpen, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/bloomlogo.png';

const Navbar = ({ solid = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for logged in user
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:5000/api/auth/me', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          }
        } catch (error) {
          console.error("Auth check failed", error);
        }
      }
    };
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const solidMode = solid || isScrolled;
  const navBg = solidMode ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';
  const textColor = solidMode ? 'text-gray-800' : 'text-white';
  const logoColor = solidMode ? 'text-[#0e3b5e]' : 'text-white';
  const loginBtnStyle = solidMode
    ? 'border-gray-300 text-gray-800 hover:bg-gray-100'
    : 'border-white text-white hover:bg-white/10';

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  const menuLinkStyle = "flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group";
  const iconStyle = "bg-white/20 p-2 rounded-full text-white group-hover:bg-[#00cba9] group-hover:text-white transition-colors duration-300";

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 transition-all duration-300 font-sans ${navBg}`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src={logo} alt="Bloom ERP" className="h-12 w-auto object-contain" />
          <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}>Bloom ERP</span>
        </Link>
        <ul className="hidden lg:flex gap-6 list-none m-0 p-0 h-full items-center">
          <li className={`flex items-center gap-1 text-sm cursor-pointer font-medium hover:opacity-80 transition-colors duration-300 ${textColor}`}>
            <Link to="/features" className="flex items-center gap-1 text-inherit no-underline">
              Features
            </Link>
          </li>
          <li className={`flex items-center gap-1 text-sm cursor-pointer font-medium hover:opacity-80 transition-colors duration-300 ${textColor}`}>
            <Link to="/pricing" className="text-inherit no-underline">
              Pricing
            </Link>
          </li>
          <li
            className={`flex items-center gap-1 text-sm cursor-pointer font-medium hover:opacity-80 transition-colors duration-300 ${textColor} relative h-full py-4`}
            onMouseEnter={() => setActiveDropdown('small-business')}
          >
            For small business <FaChevronDown size={10} />
          </li>
          <li
            className={`flex items-center gap-1 text-sm cursor-pointer font-medium hover:opacity-80 transition-colors duration-300 ${textColor} relative h-full py-4`}
            onMouseEnter={() => setActiveDropdown('accountants')}
          >
            For accountants & bookkeepers <FaChevronDown size={10} />
          </li>
          <li
            className={`flex items-center gap-1 text-sm cursor-pointer font-medium hover:opacity-80 transition-colors duration-300 ${textColor} relative h-full py-4`}
            onMouseEnter={() => setActiveDropdown('support')}
          >
            Support <FaChevronDown size={10} />
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${solidMode ? 'text-[#0e3b5e] hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Auth/User Actions */}
        <div className="hidden lg:flex gap-4 items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${solidMode ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                <FaUserCircle size={24} />
                <span className="hidden md:inline">{user.name}</span>
                <FaChevronDown size={12} />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 text-gray-800 border border-gray-100"
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>

                    {user.role === 'admin' ? (
                      <Link to="/admin" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-sm">
                        <FaTachometerAlt className="text-blue-500" /> Admin Dashboard
                      </Link>
                    ) : (
                      <Link to="/my-package" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-sm">
                        <FaBoxOpen className="text-green-500" /> My Package
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 transition-colors text-sm border-t border-gray-100"
                    >
                      <FaSignOutAlt /> Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="px-6 py-2.5 rounded font-bold text-xs tracking-wider cursor-pointer border-none transition-all duration-200 bg-[#00cba9] text-white hover:bg-[#00b596] shadow-lg inline-block text-center no-underline"
              >
                Get started
              </Link>
              <Link
                to="/login"
                className={`px-4 py-2 rounded font-semibold text-sm cursor-pointer transition-all duration-200 bg-transparent border inline-block text-center no-underline ${loginBtnStyle}`}
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {activeDropdown === 'small-business' && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-gradient-to-b from-[#0e3b5e] to-[#0a2a43] shadow-2xl border-t border-white/10 overflow-hidden"
            onMouseEnter={() => setActiveDropdown('small-business')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00cba9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c3bd8]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-12 text-white relative z-10">
              {/* Column 1: Main Focus (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Empowering Small Businesses
                </h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Discover how Bloom ERP simplifies your financial world, giving you more time to focus on what you love.
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/small-business/accounting-software" className={menuLinkStyle}>
                      <div className={iconStyle}><FaChartLine size={16} /></div>
                      <span className="font-semibold text-lg">Accounting Software</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/small-business/bloom-by-industry" className={menuLinkStyle}>
                      <div className={iconStyle}><FaGlobe size={16} /></div>
                      <span className="font-semibold text-lg">Bloom by Industry</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Features (4 cols) */}
              <div className="md:col-span-4 bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#00cba9] flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#00cba9]"></span> Why Bloom ERP
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/small-business/data-security" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaShieldAlt className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">Data & Security</span>
                        <span className="text-sm text-blue-200/70">Bank-grade encryption</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/small-business/smart-accounting" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaLightbulb className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">Smart Accounting</span>
                        <span className="text-sm text-blue-200/70">Automated workflows</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/small-business/pricing" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaTag className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">Small Pricing Packages</span>
                        <span className="text-sm text-blue-200/70">Affordable plans for growth</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Local & Support (4 cols) */}
              <div className="md:col-span-4 pl-4">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#00cba9] flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#00cba9]"></span> For Sri Lanka
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <Link to="/small-business/business-recovery" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                    <FaUniversity className="text-[#00cba9]" />
                    <span className="font-semibold">Business Recovery</span>
                  </Link>
                  <Link to="/support/onboarding" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
                    <FaUsers className="text-[#00cba9]" />
                    <span className="font-semibold">Onboarding Support</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeDropdown === 'accountants' && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-gradient-to-b from-[#0e3b5e] to-[#0a2a43] shadow-2xl border-t border-white/10 overflow-hidden"
            onMouseEnter={() => setActiveDropdown('accountants')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00cba9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c3bd8]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-12 text-white relative z-10">
              {/* Column 1: Main Focus (6 cols) */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  See what Bloom ERP can do for accountants and bookkeepers
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link to="/accountants/hq" className={menuLinkStyle}>
                      <div className={iconStyle}><FaBriefcase size={16} /></div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">Bloom ERP HQ</span>
                        <span className="text-sm text-blue-200/70">Manage clients and staff</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/accountants/practice-manager" className={menuLinkStyle}>
                      <div className={iconStyle}><FaUsers size={16} /></div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">Bloom ERP Practice Manager</span>
                        <span className="text-sm text-blue-200/70">Manage your practice efficiently</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Tools (6 cols) */}
              <div className="md:col-span-6 bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#00cba9] flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#00cba9]"></span> Practice Tools
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/accountants/cashbook-ledger" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaBook className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">Bloom ERP Cashbook, Bloom Ledger</span>
                        <span className="text-sm text-blue-200/70">Starter plans for smaller clients</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/accountants/workpapers" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaFileAlt className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">New workpapers</span>
                        <span className="text-sm text-blue-200/70">Faster, more accurate compliance</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/accountants/syft-analytics" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaChartLine className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">Syft Analytics</span>
                        <span className="text-sm text-blue-200/70">Advanced reporting & insights</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
        {activeDropdown === 'support' && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-gradient-to-b from-[#0e3b5e] to-[#0a2a43] shadow-2xl border-t border-white/10 overflow-hidden"
            onMouseEnter={() => setActiveDropdown('support')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00cba9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c3bd8]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-12 text-white relative z-10">
              {/* Column 1: Support & Learning (6 cols) */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold mb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Get support or learn how to use Bloom
                </h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Support to set up or use Bloom
                </p>
                <ul className="space-y-4">
                  <li>
                    <Link to="/support/get-support" className={menuLinkStyle}>
                      <div className={iconStyle}><FaHeadset size={16} /></div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">Get support</span>
                        <span className="text-sm text-blue-200/70">Expert help when you need it</span>
                      </div>
                    </Link>
                  </li>

                  <li>
                    <Link to="/support/community" className={menuLinkStyle}>
                      <div className={iconStyle}><FaComments size={16} /></div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">Bloom Community</span>
                        <span className="text-sm text-blue-200/70">Connect with other users</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Resources (6 cols) */}
              <div className="md:col-span-6 bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-[#00cba9] flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#00cba9]"></span> Small business resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link to="/resources/guides" className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <FaBookOpen className="mt-1 text-blue-300 group-hover:text-[#00cba9] transition-colors" />
                      <div>
                        <span className="block font-bold text-lg group-hover:text-[#00cba9] transition-colors">Guides</span>
                        <span className="text-sm text-blue-200/70">Helpful tips and tricks</span>
                      </div>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#0e3b5e] z-[60] flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 no-underline">
                <img src={logo} alt="Bloom ERP" className="h-10 w-auto bg-white rounded-lg p-1" />
                <span className="text-xl font-bold text-white">Bloom ERP</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="p-6 flex flex-col gap-6 text-white">
              <Link to="/features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium no-underline text-white">Features</Link>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium no-underline text-white">Pricing</Link>

              {/* Accordion for Small Business */}
              <div>
                <button
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'small' ? null : 'small')}
                  className="flex items-center justify-between w-full text-lg font-medium bg-transparent border-none text-white p-0"
                >
                  For Small Business <FaChevronDown className={`transition-transform ${activeMobileDropdown === 'small' ? 'rotate-180' : ''}`} size={14} />
                </button>
                <AnimatePresence>
                  {activeMobileDropdown === 'small' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-4 mt-4 border-l-2 border-[#00cba9]/30"
                    >
                      <Link to="/small-business/accounting-software" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Accounting Software</Link>
                      <Link to="/small-business/smart-accounting" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Smart Accounting</Link>
                      <Link to="/small-business/bloom-by-industry" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Industry Solutions</Link>
                      <Link to="/small-business/data-security" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Data Security</Link>
                      <Link to="/small-business/pricing" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Pricing Packages</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion for Accountants */}
              <div>
                <button
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'accountants' ? null : 'accountants')}
                  className="flex items-center justify-between w-full text-lg font-medium bg-transparent border-none text-white p-0"
                >
                  For Accountants <FaChevronDown className={`transition-transform ${activeMobileDropdown === 'accountants' ? 'rotate-180' : ''}`} size={14} />
                </button>
                <AnimatePresence>
                  {activeMobileDropdown === 'accountants' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-4 mt-4 border-l-2 border-[#00cba9]/30"
                    >
                      <Link to="/accountants/hq" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Bloom ERP HQ</Link>
                      <Link to="/accountants/practice-manager" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Practice Manager</Link>
                      <Link to="/accountants/workpapers" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Workpapers</Link>
                      <Link to="/accountants/cashbook-ledger" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Cashbook & Ledger</Link>
                      <Link to="/accountants/syft-analytics" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Syft Analytics</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion for Support */}
              <div>
                <button
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'support' ? null : 'support')}
                  className="flex items-center justify-between w-full text-lg font-medium bg-transparent border-none text-white p-0"
                >
                  Support <FaChevronDown className={`transition-transform ${activeMobileDropdown === 'support' ? 'rotate-180' : ''}`} size={14} />
                </button>
                <AnimatePresence>
                  {activeMobileDropdown === 'support' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col gap-4 mt-4 border-l-2 border-[#00cba9]/30"
                    >
                      <Link to="/support/get-support" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Get Support</Link>
                      <Link to="/support/community" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Community</Link>
                      <Link to="/resources/guides" onClick={() => setMobileMenuOpen(false)} className="text-blue-200 block no-underline">Guides</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 mt-auto border-t border-white/10">
              {user ? (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-white mb-2">
                    <FaUserCircle size={32} />
                    <div>
                      <p className="font-bold">{user.name}</p>
                      <p className="text-xs text-blue-200">{user.email}</p>
                    </div>
                  </div>
                  {user.role === 'admin' ? (
                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 bg-blue-600 rounded-lg text-white font-bold text-center no-underline">Admin Dashboard</Link>
                  ) : (
                    <Link to="/my-package" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 bg-green-600 rounded-lg text-white font-bold text-center no-underline">My Package</Link>
                  )}
                  <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="w-full py-3 border border-red-500 text-red-400 rounded-lg font-bold bg-transparent">Sign Out</button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 bg-[#00cba9] text-white rounded-lg font-bold text-center no-underline">Get Started</Link>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 border border-white text-white rounded-lg font-bold text-center no-underline">Log In</Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
