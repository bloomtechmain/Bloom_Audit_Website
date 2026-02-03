import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { smallBizPlans, plans } from '../config/pricingData';
import { FaBoxOpen, FaCheckCircle, FaHourglassHalf, FaEdit, FaCheck, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MyPackage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePackage = async (plan) => {
    if (!window.confirm(`Are you sure you want to switch to the ${plan.name} plan?`)) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/user/update-package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          package_name: plan.name,
          package_price: plan.price
        })
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser); // Update local state
        setIsEditing(false);
        // Force a re-fetch or manual update to ensure status is pending if backend didn't return it perfectly
        // But backend returns rows[0] which should be correct.
        alert('Package updated successfully! Please wait for admin confirmation.');
      } else {
        alert('Failed to update package');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#00cba9]"></div>
    </div>
  );

  const availablePlans = user?.company_type === 'small_business' ? smallBizPlans : plans;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar solid />
      <div className="flex-grow container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">My Subscription</h1>
          <p className="text-gray-600 mt-2">Manage your current plan and billing details</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isEditing ? (
            <motion.div
              key="view-mode"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${user.package_status === 'expired' ? 'from-red-600 to-red-500' : 'from-[#0e3b5e] to-[#00cba9]'} p-10 text-white flex justify-between items-center relative overflow-hidden`}>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold">Current Plan</h2>
                  {user.package_end_date && (
                    <p className="opacity-90 mt-1">
                      {user.package_status === 'expired' ? 'Expired on: ' : 'Expires on: '}
                      {new Date(user.package_end_date).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <FaBoxOpen size={120} className="absolute -right-10 -bottom-10 opacity-10 rotate-12" />
                <div className="relative z-10 bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                  <div className="text-xs uppercase font-bold tracking-wider opacity-80">Current Status</div>
                  <div className="flex items-center gap-2 font-bold text-lg mt-1">
                    {user.package_status === 'confirmed' ? (
                      <>
                        <FaCheckCircle className="text-green-300" /> Active
                      </>
                    ) : user.package_status === 'expired' ? (
                      <>
                        <FaExclamationTriangle className="text-yellow-300" /> Expired
                      </>
                    ) : (
                      <>
                        <FaHourglassHalf className="text-yellow-300" /> Pending
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-gray-100">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Package Name</label>
                      <div className="text-3xl font-bold text-gray-800 mt-1">{user.package_name || 'No Package Selected'}</div>
                    </div>
                    <div className="pb-6 border-b border-gray-100">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Monthly Price</label>
                      <div className="text-2xl text-gray-700 mt-1">LKR {user.package_price ? user.package_price.toLocaleString() : '0'} <span className="text-sm text-gray-400">/mo</span></div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Business Category</label>
                      <div className="text-xl text-gray-700 mt-1 capitalize flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {user.company_type?.replace('_', ' ')}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-center items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                      <FaEdit size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Want to upgrade?</h3>
                    <p className="text-gray-600 text-sm">Unlock more features and capabilities by upgrading your plan today.</p>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all w-full"
                    >
                      Change Plan
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="edit-mode"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium transition-colors"
                >
                  <FaArrowLeft /> Back to Overview
                </button>
                <h2 className="text-2xl font-bold text-gray-800">Select a New Plan</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {availablePlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className={`bg-white rounded-2xl overflow-hidden shadow-xl border cursor-pointer transition-all flex flex-col ${user.package_name === plan.name ? 'ring-4 ring-[#00cba9] ring-offset-2 opacity-80 pointer-events-none grayscale' : 'border-gray-100 hover:border-blue-200'}`}
                  >
                    <div className={`p-8 ${plan.headerBg || plan.headerColor} text-white relative overflow-hidden`}>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-4xl font-bold">LKR {plan.price.toLocaleString()}</span>
                          <span className="text-sm opacity-80 ml-1">/mo</span>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black opacity-10 rounded-full -ml-12 -mb-12"></div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.slice(0, 6).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <FaCheck className="text-[#00cba9] mt-1 mr-3 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {user.package_name === plan.name ? (
                        <div className="w-full py-3 rounded-xl font-bold bg-gray-100 text-gray-500 text-center cursor-not-allowed">
                          Current Plan
                        </div>
                      ) : (
                        <button
                          onClick={() => handleUpdatePackage(plan)}
                          className="w-full py-3 rounded-xl font-bold bg-gray-900 text-white hover:bg-blue-600 transition-colors shadow-md"
                        >
                          Switch to {plan.name}
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default MyPackage;
