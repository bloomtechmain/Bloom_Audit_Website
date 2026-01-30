import React from 'react';
import { FaPaperPlane, FaRocket, FaGem, FaSeedling, FaStore, FaChartPie } from 'react-icons/fa';

export const smallBizPlans = [
    {
        name: "Micro",
        tagline: "For side hustles",
        price: 5000,
        icon: <FaSeedling className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-green-400 to-teal-500",
        cta: "Select Plan",
        features: [
            "Up to 5 invoices/mo",
            "Expense tracking",
            "Bank reconciliation (Manual)",
            "1 User"
        ],
        unavailable: [
            "Automated bank feeds",
            "GST/VAT reports",
            "Inventory management",
            "Payroll"
        ]
    },
    {
        name: "Growth",
        tagline: "Most popular choice",
        price: 15000,
        popular: true,
        icon: <FaStore className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-[#00cba9] to-blue-500",
        cta: "Select Plan",
        features: [
            "Unlimited invoices",
            "Automated bank feeds",
            "GST/VAT reports",
            "3 Users",
            "Inventory (Basic)",
            "Mobile App Access"
        ],
        unavailable: [
            "Payroll",
            "Advanced Analytics",
            "Multi-currency"
        ]
    },
    {
        name: "Pro",
        tagline: "Serious business",
        price: 35000,
        icon: <FaChartPie className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
        cta: "Select Plan",
        features: [
            "Everything in Growth",
            "Multi-currency",
            "Payroll for 5 staff",
            "Advanced Analytics",
            "Project Management",
            "Priority Support"
        ]
    }
];

export const plans = [
    {
        name: "Starter",
        price: 20000,
        description: "Essential tools for freelancers and solopreneurs.",
        buttonText: "Select Plan",
        headerColor: "bg-gradient-to-br from-blue-400 to-blue-600",
        icon: <FaPaperPlane size={24} />,
        features: [
            "Send invoices and quotes",
            "Enter bills",
            "Reconcile bank transactions",
            "Capture bills with Hubdoc",
            "Basic reports"
        ],
        unavailable: [
            "Bulk reconcile transactions",
            "Multi-currency",
            "Project tracking",
            "Advanced Analytics",
            "Payroll"
        ]
    },
    {
        name: "Standard",
        price: 40000,
        description: "Perfect for growing small businesses.",
        buttonText: "Select Plan",
        recommended: true,
        headerColor: "bg-gradient-to-br from-[#00cba9] to-[#008f7a]",
        icon: <FaRocket size={24} />,
        features: [
            "Everything in Starter",
            "Bulk reconcile transactions",
            "Manage multiple currencies",
            "Short-term cash flow",
            "Business snapshot"
        ],
        unavailable: [
            "Project tracking",
            "Advanced Analytics",
            "Payroll"
        ]
    },
    {
        name: "Premium",
        price: 75000,
        description: "Advanced features for established companies.",
        buttonText: "Select Plan",
        headerColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
        icon: <FaGem size={24} />,
        features: [
            "Everything in Standard",
            "Project tracking",
            "Advanced Analytics",
            "Payroll for 5 employees",
            "Expense claims",
            "Priority support"
        ]
    }
];
