import React from 'react';
import { FaPaperPlane, FaRocket, FaGem, FaSeedling, FaStore, FaChartPie, FaFileInvoiceDollar, FaCalendarAlt, FaFileAlt, FaBoxes, FaCalculator, FaUserTie } from 'react-icons/fa';

export const plans = [
    {
        name: "Basic",
        tagline: "For individuals",
        price: 9499,
        promoPrice: 7499,
        promoText: "for the first 3 months",
        icon: <FaSeedling className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-green-400 to-teal-500",
        headerColor: "bg-gradient-to-br from-green-400 to-teal-500",
        backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
        cta: "Select Plan",
        features: [
            "1 User",
            "Advance Accounting Modules",
            "Advance Analytics",
            "Expense tracking",
            "Bank Reconciliation (Manually)",
            "Basic Report generation"
        ],
        unavailable: []
    },
    {
        name: "Starter",
        tagline: "For small teams",
        price: 19499,
        promoPrice: 14999,
        promoText: "for the first 3 months",
        icon: <FaPaperPlane className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-blue-400 to-blue-600",
        headerColor: "bg-gradient-to-br from-blue-400 to-blue-600",
        backgroundImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Select Plan",
        features: [
            "3 Users",
            "Everything in Basic",
            "Employee Data Management",
            "Vendor Data Management",
            "Project and Contract Tracking",
            "Advance Report generation"
        ],
        unavailable: []
    },
    {
        name: "Standard",
        tagline: "For growing businesses",
        price: 29499,
        promoPrice: 25499,
        promoText: "for the first 3 months",
        popular: true,
        recommended: true,
        icon: <FaRocket className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-[#00cba9] to-[#008f7a]",
        headerColor: "bg-gradient-to-br from-[#00cba9] to-[#008f7a]",
        backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Select Plan",
        features: [
            "5 Users",
            "Everything in Basic + Starter",
            "Asset Management",
            "Basic Payroll Management",
            "Inventory management",
            "Document bank"
        ],
        unavailable: []
    },
    {
        name: "Premium",
        tagline: "For established companies",
        price: 47499,
        promoPrice: 39499,
        promoText: "for the first 3 months",
        icon: <FaGem className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-purple-500 to-indigo-600",
        headerColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
        backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Select Plan",
        features: [
            "20 Users",
            "Everything in Basic + Standard + Starter",
            "Employee Access Portal",
            "Vacation time tracking",
            "EPF/ETF tracking",
            "Quote generation",
            "Priority support"
        ]
    },
    {
        name: "Enterprise",
        tagline: "For large scale operations",
        price: 0, // 0 indicates custom pricing
        displayPrice: "Contact us",
        icon: <FaStore className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-gray-700 to-gray-900",
        headerColor: "bg-gradient-to-br from-gray-700 to-gray-900",
        backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        cta: "Contact Us",
        features: [
            "Unlimited Users",
            "Custom workflow design",
            "Financial Forecasting with custom AI technology",
            "Backup and Recovery features",
            "Dedicated account manager",
            "SLA support",
            "Custom integrations"
        ]
    }
];

export const addOns = [
    {
        title: "Quote Generator",
        description: "Generate professional quotes instantly.",
        availability: "Only available for Starter, Standard",
        icon: <FaFileInvoiceDollar />
    },
    {
        title: "Monthly Subscriptions Tracker",
        description: "Track recurring payments.",
        availability: "All Plans",
        icon: <FaCalendarAlt />
    },
    {
        title: "Document Bank",
        description: "Securely store and manage documents.",
        availability: "Only available for Starter, Standard",
        icon: <FaFileAlt />
    },
    {
        title: "Asset Management and Depreciation",
        description: "Track assets and calculate depreciation.",
        availability: "Only available for Starter, Standard",
        icon: <FaBoxes />
    },
    {
        title: "Custom Estimate Generator",
        description: "Create detailed estimates.",
        availability: "Call for pricing",
        icon: <FaCalculator />
    },
    {
        title: "Custom Management",
        description: "Tailored management solutions.",
        availability: "Call for pricing",
        icon: <FaUserTie />
    },
    {
        title: "Leads Management",
        description: "Track and nurture leads.",
        availability: "Call for pricing",
        icon: <FaChartPie />
    },
    {
        title: "Proposal Tracker",
        description: "Monitor sent proposals.",
        availability: "Call for pricing",
        icon: <FaPaperPlane />
    }
];

export const smallBizPlans = plans.filter(plan => ['Basic', 'Starter', 'Standard'].includes(plan.name));
