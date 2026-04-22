import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaSpinner, FaArrowUp, FaMoneyBillWave } from 'react-icons/fa';
import { plans } from '../config/pricingData';

const AdminUpgradeRequests = ({ onUpdate }) => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // Modal state for approving enterprise requests
    const [showPriceModal, setShowPriceModal] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [customPrice, setCustomPrice] = useState('');

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/upgrades`, {
                headers: {
                    'Authorization': `Bearer ${token}` // In case we add auth middleware later
                }
            });
            if (response.ok) {
                const data = await response.json();
                setRequests(data);
            }
        } catch (error) {
            console.error('Error fetching requests:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleApproveClick = (req) => {
        if (req.requested_plan === 'Enterprise' || req.requested_plan.includes('Custom')) {
            setSelectedRequest(req);
            setCustomPrice('');
            setShowPriceModal(true);
        } else {
            // Normal approval for standard plans
            updateStatus(req.id, 'approved', req.user_id, req.requested_plan);
        }
    };

    const handleCustomPriceSubmit = () => {
        if (!selectedRequest) return;
        updateStatus(selectedRequest.id, 'approved', selectedRequest.user_id, selectedRequest.requested_plan, customPrice);
        setShowPriceModal(false);
        setSelectedRequest(null);
        setCustomPrice('');
    };

    const updateStatus = async (id, status, userId, newPlan, priceOverride = null) => {
        try {
            const token = localStorage.getItem('token');

            // 1. Update the request status
            const response = await fetch(`${API_URL}/api/upgrades/${id}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status })
            });

            if (response.ok) {
                // 2. If approved, update the user's package
                if (status === 'approved' && userId) {
                    const planDetails = plans.find(p => p.name === newPlan);
                    // Use priceOverride if provided (for Enterprise), otherwise fallback to plan price, then to 'Custom'
                    const newPrice = priceOverride || (planDetails ? planDetails.price : 'Custom');

                    await fetch(`${API_URL}/api/admin/update-package`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ userId, newPackage: newPlan, newPrice })
                    });
                }

                setRequests(requests.map(req =>
                    req.id === id ? { ...req, status } : req
                ));

                if (onUpdate) onUpdate(); // Refresh parent stats
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="p-8 relative">
            <h2 className="text-2xl font-bold text-[#0e3b5e] mb-6 flex items-center gap-3">
                <FaArrowUp /> Upgrade Requests
            </h2>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-4 font-semibold text-gray-600">User</th>
                                <th className="p-4 font-semibold text-gray-600">Current Plan</th>
                                <th className="p-4 font-semibold text-gray-600">Requested Plan</th>
                                <th className="p-4 font-semibold text-gray-600">Price</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600">Date</th>
                                <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {requests.map((req) => (
                                <tr key={req.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4">
                                        <div className="font-medium text-[#0e3b5e]">{req.user_name}</div>
                                        <div className="text-sm text-gray-400">{req.user_email}</div>
                                    </td>
                                    <td className="p-4 text-gray-600">{req.current_plan}</td>
                                    <td className="p-4 font-medium text-[#00cba9]">{req.requested_plan}</td>
                                    <td className="p-4 text-gray-600">
                                        {(() => {
                                            const plan = plans.find(p => p.name === req.requested_plan);
                                            return plan ? `LKR ${plan.price}` : 'Custom';
                                        })()}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${req.status === 'approved' ? 'bg-green-100 text-green-600' :
                                            req.status === 'rejected' ? 'bg-red-100 text-red-600' :
                                                'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {req.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-400 text-sm">
                                        {new Date(req.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 text-right">
                                        {req.status === 'pending' && (
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => handleApproveClick(req)}
                                                    className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                                                    title="Approve"
                                                >
                                                    <FaCheck />
                                                </button>
                                                <button
                                                    onClick={() => updateStatus(req.id, 'rejected')}
                                                    className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                                    title="Reject"
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {requests.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="p-8 text-center text-gray-400">
                                        No upgrade requests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Custom Price Modal */}
            {showPriceModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaMoneyBillWave size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Set Enterprise Price</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Please enter the agreed monthly price for <strong>{selectedRequest?.user_name}</strong>'s Enterprise plan.
                            </p>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price (LKR)</label>
                            <input
                                type="number"
                                value={customPrice}
                                onChange={(e) => setCustomPrice(e.target.value)}
                                placeholder="e.g. 150000"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                autoFocus
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowPriceModal(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCustomPriceSubmit}
                                disabled={!customPrice}
                                className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Confirm & Approve
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUpgradeRequests;
