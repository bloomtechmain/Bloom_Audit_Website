import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaBuilding, FaUser, FaEnvelope, FaPhone, FaClipboardList } from 'react-icons/fa';
import API_URL from '../api';

const EnterpriseInquiryModal = ({ isOpen, onClose, user }) => {
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        companyName: '',
        requirements: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

    // Reset form when user prop changes or modal opens
    React.useEffect(() => {
        if (isOpen && user) {
            setFormData(prev => ({
                ...prev,
                name: user.name || '',
                email: user.email || ''
            }));
        }
    }, [isOpen, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            let url = `${API_URL}/api/inquiries/enterprise`;
            let body = formData;

            if (user) {
                url = `${API_URL}/api/upgrades/request`;
                body = {
                    userId: user.id,
                    userName: user.name,
                    userEmail: user.email,
                    requestedPlan: 'Enterprise',
                    currentPlan: user.package_name || 'None',
                    requirements: `Company: ${formData.companyName}, Phone: ${formData.phone}, Requirements: ${formData.requirements}`
                };
            }

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                    setFormData({
                        name: user?.name || '',
                        email: user?.email || '',
                        phone: '',
                        companyName: '',
                        requirements: ''
                    });
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="bg-[#0e3b5e] p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold">Enterprise Inquiry</h3>
                                <p className="text-blue-200 text-sm">Tell us about your organization's needs.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            {submitStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                                        <FaPaperPlane />
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#0e3b5e] mb-2">Inquiry Sent!</h4>
                                    <p className="text-gray-600">Our enterprise team will contact you shortly to discuss your custom solution.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <FaUser className="text-[#00cba9]" /> Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                disabled={!!user}
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00cba9] focus:ring-2 focus:ring-[#00cba9]/20 outline-none transition-all ${user ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <FaEnvelope className="text-[#00cba9]" /> Work Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                disabled={!!user}
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00cba9] focus:ring-2 focus:ring-[#00cba9]/20 outline-none transition-all ${user ? 'opacity-70 cursor-not-allowed' : ''}`}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <FaPhone className="text-[#00cba9]" /> Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00cba9] focus:ring-2 focus:ring-[#00cba9]/20 outline-none transition-all"
                                                placeholder="+94 77 123 4567"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                                <FaBuilding className="text-[#00cba9]" /> Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                required
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00cba9] focus:ring-2 focus:ring-[#00cba9]/20 outline-none transition-all"
                                                placeholder="Acme Corp"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                            <FaClipboardList className="text-[#00cba9]" /> Specific Requirements / Additional Details
                                        </label>
                                        <textarea
                                            name="requirements"
                                            rows="4"
                                            required
                                            value={formData.requirements}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00cba9] focus:ring-2 focus:ring-[#00cba9]/20 outline-none transition-all resize-none"
                                            placeholder="Please describe your user count, expected volume, custom integrations needed, etc."
                                        ></textarea>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center">
                                            Something went wrong. Please try again later.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-[#0e3b5e] hover:bg-[#1c4b7e] text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnterpriseInquiryModal;
