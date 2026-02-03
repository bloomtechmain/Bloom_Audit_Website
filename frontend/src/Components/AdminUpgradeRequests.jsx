import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaSpinner, FaArrowUp } from 'react-icons/fa';
import { plans } from '../config/pricingData';

const AdminUpgradeRequests = ({ onUpdate }) => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/upgrades', {
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

    const updateStatus = async (id, status, userId, newPlan) => {
        try {
            const token = localStorage.getItem('token');

            // 1. Update the request status
            const response = await fetch(`http://localhost:5000/api/upgrades/${id}/status`, {
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
                    const newPrice = planDetails ? planDetails.price : 'Custom';

                    await fetch('http://localhost:5000/api/admin/update-package', { // We need to ensure this endpoint exists or create it
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
        <div className="p-8">
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
                                                    onClick={() => updateStatus(req.id, 'approved', req.user_id, req.requested_plan)}
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
        </div>
    );
};

export default AdminUpgradeRequests;
