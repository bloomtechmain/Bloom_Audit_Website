import React from 'react';
import { FaPaperPlane, FaRocket, FaGem, FaSeedling, FaStore, FaChartPie } from 'react-icons/fa';

export const plans = [
    {
        name: "Basic",
        tagline: "For individuals",
        price: 7499,
        icon: <FaSeedling className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-green-400 to-teal-500",
        headerColor: "bg-gradient-to-br from-green-400 to-teal-500",
        backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
        cta: "Select Plan",
        features: [
            "1 User",
            "Send invoices and quotes",
            "Expense tracking",
            "Bank reconciliation (Manual)",
            "Basic reports"
        ],
        unavailable: [
            "Automated bank feeds",
            "GST/VAT reports",
            "Inventory management",
            "Payroll"
        ]
    },
    {
        name: "Starter",
        tagline: "For small teams",
        price: 14499,
        icon: <FaPaperPlane className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-blue-400 to-blue-600",
        headerColor: "bg-gradient-to-br from-blue-400 to-blue-600",
        backgroundImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Select Plan",
        features: [
            "3 Users",
            "Everything in Basic",
            "Automated bank feeds",
            "GST/VAT reports",
            "Inventory (Basic)"
        ],
        unavailable: [
            "Payroll",
            "Advanced Analytics",
            "Multi-currency"
        ]
    },
    {
        name: "Standard",
        tagline: "For growing businesses",
        price: 25499,
        popular: true,
        recommended: true,
        icon: <FaRocket className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-[#00cba9] to-[#008f7a]",
        headerColor: "bg-gradient-to-br from-[#00cba9] to-[#008f7a]",
        backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Select Plan",
        features: [
            "5 Users",
            "Everything in Starter",
            "Bulk reconcile transactions",
            "Manage multiple currencies",
            "Short-term cash flow"
        ],
        unavailable: [
            "Project tracking",
            "Advanced Analytics",
            "Payroll"
        ]
    },
    {
        name: "Premium",
        tagline: "For established companies",
        price: 39499,
        icon: <FaGem className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-purple-500 to-indigo-600",
        headerColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
        backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Select Plan",
        features: [
            "20 Users",
            "Everything in Standard",
            "Project tracking",
            "Advanced Analytics",
            "Payroll for 5 employees",
            "Priority support"
        ]
    },
    {
        name: "Enterprise",
        tagline: "For large scale operations",
        price: 0, // 0 indicates custom pricing
        displayPrice: "Custom",
        icon: <FaStore className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-gray-700 to-gray-900",
        headerColor: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Contact Us",
        features: [
            "Unlimited Users",
            "Custom implementation",
            "Dedicated account manager",
            "SLA support",
            "Custom integrations"
        ]
    }
];

export const smallBizPlans = plans;
