import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaLock, FaTimes, FaCreditCard } from 'react-icons/fa';
import API_URL from '../api';

const PayHereCheckout = ({ isOpen, onClose, plan, onSuccess }) => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [upgradedUser, setUpgradedUser] = useState(null);

    if (!plan) return null;

    const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
    const label = billingCycle === 'yearly' ? '/yr' : '/mo';
    const saving = billingCycle === 'yearly'
        ? `Save $${(plan.priceMonthly * 12 - plan.priceYearly).toFixed(0)} vs monthly`
        : null;

    const handlePay = async () => {
        // TODO: replace this block with PayHere redirect when payment keys are configured.
        // PayHere integration steps:
        //   1. POST /api/payments/create-order → get { orderId, hash, merchantId }
        //   2. Submit form to https://www.payhere.lk/pay/checkout with those values
        //   3. PayHere calls /api/payments/notify on success → that endpoint calls activateUpgrade
        // For now we bypass and activate directly:
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/user/activate-upgrade`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    packageName: plan.name,
                    packagePrice: price,
                    billingCycle,
                }),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                // Update localStorage so other pages reflect new plan immediately
                const stored = localStorage.getItem('user');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    localStorage.setItem('user', JSON.stringify({
                        ...parsed,
                        package_name: updatedUser.package_name,
                        package_price: updatedUser.package_price,
                        package_status: updatedUser.package_status,
                    }));
                }
                setUpgradedUser(updatedUser);
                setDone(true);
                if (onSuccess) onSuccess(updatedUser);
            } else {
                const err = await response.json();
                alert(err.message || 'Upgrade failed. Please try again.');
            }
        } catch {
            alert('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setDone(false);
        setUpgradedUser(null);
        setBillingCycle('monthly');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                    >
                        {done ? (
                            /* ── Success State ── */
                            <div className="p-10 text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                    <FaCheck className="text-green-500 text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Upgrade Successful!</h3>
                                <p className="text-gray-500 mb-1">
                                    You are now on the <span className="font-bold text-[#00cba9]">{upgradedUser?.package_name}</span> plan.
                                </p>
                                <p className="text-gray-400 text-sm mb-8">
                                    Your subscription is active and renews on{' '}
                                    {upgradedUser?.subscription_end_date
                                        ? new Date(upgradedUser.subscription_end_date).toLocaleDateString()
                                        : '—'}.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="px-8 py-3 bg-[#00cba9] text-white font-bold rounded-xl hover:bg-[#00b596] transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* ── Header ── */}
                                <div className="bg-[#0e3b5e] p-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-blue-200 text-xs uppercase tracking-wider font-bold mb-1">Secure Checkout</p>
                                        <h3 className="text-xl font-bold text-white">Upgrade to {plan.name}</h3>
                                    </div>
                                    <button onClick={handleClose} className="text-white/60 hover:text-white transition-colors">
                                        <FaTimes size={18} />
                                    </button>
                                </div>

                                <div className="p-6 space-y-5">
                                    {/* ── Billing toggle ── */}
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700 mb-2">Billing cycle</p>
                                        <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                                            <button
                                                onClick={() => setBillingCycle('monthly')}
                                                className={`flex-1 py-2.5 text-sm font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-[#0e3b5e] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                            >
                                                Monthly
                                            </button>
                                            <button
                                                onClick={() => setBillingCycle('yearly')}
                                                className={`flex-1 py-2.5 text-sm font-semibold transition-all ${billingCycle === 'yearly' ? 'bg-[#0e3b5e] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                            >
                                                Yearly <span className="text-[10px] font-bold ml-1 text-[#00cba9]">Save 17%</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* ── Order summary ── */}
                                    <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Order Summary</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-gray-800">{plan.name} Plan</span>
                                            <span className="font-bold text-gray-900">${price}{label}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>Up to {plan.maxUsersLabel}</span>
                                            {saving && <span className="text-[#00cba9] font-semibold text-xs">{saving}</span>}
                                        </div>
                                        <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                                            <span className="font-bold text-gray-700">Total due today</span>
                                            <span className="text-xl font-extrabold text-[#0e3b5e]">${price}{label}</span>
                                        </div>
                                    </div>

                                    {/* ── Top 3 features ── */}
                                    <ul className="space-y-1.5">
                                        {plan.tierFeatures.slice(0, 3).map((f, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaCheck className="text-[#00cba9] flex-shrink-0" size={11} />
                                                {f}
                                            </li>
                                        ))}
                                        {plan.tierFeatures.length > 3 && (
                                            <li className="text-xs text-gray-400 ml-4">+{plan.tierFeatures.length - 3} more features included</li>
                                        )}
                                    </ul>

                                    {/* ── Pay button ── */}
                                    <button
                                        onClick={handlePay}
                                        disabled={loading}
                                        className="w-full py-4 bg-[#00cba9] hover:bg-[#00b596] text-white font-bold rounded-xl shadow-lg shadow-[#00cba9]/20 transition-all flex items-center justify-center gap-2 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <span className="animate-pulse">Processing…</span>
                                        ) : (
                                            <>
                                                <FaLock size={13} />
                                                Pay ${price}{label} — Activate Now
                                            </>
                                        )}
                                    </button>

                                    {/* ── PayHere branding ── */}
                                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                        <FaCreditCard size={12} />
                                        <span>Payments powered by</span>
                                        <span className="font-bold text-[#0e3b5e]">PayHere</span>
                                        <FaLock size={10} className="text-green-500" />
                                        <span className="text-green-600 font-medium">SSL Secured</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PayHereCheckout;
