import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaCheckCircle, FaTimes } from 'react-icons/fa';

const UpgradeConfirmationModal = ({ isOpen, onClose, onConfirm, planName, loading }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                    >
                        <div className="bg-[#0e3b5e] p-6 text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <FaArrowUp size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Upgrade Request</h3>
                            <p className="text-blue-200 mt-2 text-sm">You are requesting to upgrade to the <span className="font-bold text-white">{planName}</span> plan.</p>
                        </div>
                        
                        <div className="p-8">
                            <p className="text-gray-600 text-center mb-8">
                                Your request will be sent to our admin team for approval. You will be notified once the upgrade is processed.
                            </p>
                            
                            <div className="flex gap-4">
                                <button
                                    onClick={onClose}
                                    className="flex-1 py-3 px-4 rounded-xl border border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={onConfirm}
                                    className="flex-1 py-3 px-4 rounded-xl bg-[#00cba9] text-white font-bold hover:bg-[#00b596] shadow-lg shadow-[#00cba9]/20 transition-all flex justify-center items-center gap-2"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>Confirm <FaCheckCircle /></>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default UpgradeConfirmationModal;
