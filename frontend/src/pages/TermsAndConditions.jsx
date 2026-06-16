import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import {
  FaFileContract, FaUserShield, FaBan, FaDatabase,
  FaExclamationTriangle, FaGavel, FaTimesCircle, FaUndo,
  FaTrashAlt, FaCheckCircle
} from 'react-icons/fa';

const termsSections = [
  {
    id: 'account-security',
    icon: <FaUserShield />,
    badge: 'Account & Eligibility',
    title: 'Account Security & Statutory Eligibility',
    items: [
      {
        text: 'You must possess the proper corporate authority or legal capacity under Sri Lankan law to bind your organization to these terms.',
      },
      {
        text: 'You are entirely responsible for protecting your account credentials. Any data breaches resulting from poor local password management are the sole responsibility of the user.',
      },
    ],
  },
  {
    id: 'lawful-use',
    icon: <FaBan />,
    badge: 'Permitted Use',
    title: 'Lawful Use & Prohibitions',
    items: [
      {
        text: 'You agree to use BloomAudit solely for internal compliance and auditing. You are strictly prohibited from using this platform to process data obtained via unlawful means, or in any manner that violates the Computer Crimes Act, No. 24 of 2007 or the Personal Data Protection Act, No. 9 of 2022 of Sri Lanka.',
      },
    ],
  },
  {
    id: 'data-ownership',
    icon: <FaDatabase />,
    badge: 'Intellectual Property',
    title: 'Data Ownership & Intellectual Property',
    items: [
      {
        label: 'Your Data',
        text: 'All audit data, system configurations, and reports uploaded to BloomAudit remain your exclusive property. BloomAudit claims no intellectual property rights over your data.',
      },
      {
        label: 'Processing Authorization',
        text: 'You grant BloomAudit a strict, non-transferable license to process your data solely to execute the requested audit features. We are contractually prohibited from utilizing this data for any other operational or commercial intent.',
      },
    ],
  },
  {
    id: 'liability',
    icon: <FaExclamationTriangle />,
    badge: 'Liability Cap',
    title: 'Limitation of Liability',
    items: [
      {
        text: "BloomAudit provides automated auditing frameworks to assist with compliance. However, our services do not constitute formal legal or regulatory certification.",
      },
      {
        text: "To the maximum extent permitted under Sri Lankan law, BloomAudit's total liability for any service failure, data error, or system downtime shall be strictly capped at the total amount paid by you for the service subscription within the preceding months.",
      },
    ],
  },
  {
    id: 'dispute',
    icon: <FaGavel />,
    badge: 'Jurisdiction',
    title: 'Dispute Resolution & Jurisdiction',
    items: [
      {
        text: 'Any disputes, claims, or controversies arising out of these Terms or the breach thereof shall be subject to the exclusive jurisdiction of the Courts of Colombo, Sri Lanka.',
      },
    ],
  },
];

const refundSections = [
  {
    icon: <FaTimesCircle />,
    title: 'Subscription Cancellations',
    items: [
      'Subscriptions can be canceled at any time through your account control panel.',
      'To avoid automated billing for the subsequent cycle, cancellation requests must be processed at least the required number of days prior to your renewal date.',
    ],
  },
  {
    icon: <FaUndo />,
    title: 'Refund Rules for Digital Services',
    note: 'Because BloomAudit provides immediate access to digital infrastructure and proprietary audit frameworks:',
    items: [
      'Initial Sign-ups: We offer a cooling-off period from your first initial purchase. If you are entirely unsatisfied with the platform setup, a full refund can be requested, subject to account usage evaluation.',
      'Service Non-Performance: If BloomAudit fails to deliver an audit report due to a critical, unresolved system defect, a full or prorated refund for that billing cycle will be credited back to your original payment method within the agreed business days.',
      'Usage Adjustments: No refunds or credits will be issued for partial months of service or for unused accounts under an active subscription tier.',
    ],
  },
  {
    icon: <FaTrashAlt />,
    title: 'Secure Data Disposition Upon Cancellation',
    items: [
      "Immediately upon the termination or non-renewal of your subscription, BloomAudit will halt all processing of your data.",
      "In alignment with our strict Purpose Limitation Policy, all corporate data and completed audit historical logs will be systematically scrubbed and permanently purged from our active cloud environments within the agreed number of days of account closure, unless a shorter erasure timeline is explicitly requested by your Data Protection Officer under the PDPA.",
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Navbar solid />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-36 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0e3b5e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00cba9]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00cba9]/10 border border-[#00cba9]/30 text-[#00cba9] font-bold text-sm mb-8 tracking-wide uppercase backdrop-blur-md"
          >
            <FaFileContract /> Sri Lanka Compliant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Terms &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">
              Conditions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100/80 leading-relaxed max-w-3xl"
          >
            Welcome to BloomAudit. These Terms and Conditions govern your use of our platform and
            services. By accessing or using BloomAudit, you agree to comply with these terms, which
            are governed by and construed in accordance with the laws of the{' '}
            <span className="text-[#00cba9] font-semibold">
              Democratic Socialist Republic of Sri Lanka
            </span>
            .
          </motion.p>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-[#0e3b5e] mb-2"
          >
            Terms and Conditions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-[#00cba9] rounded-full mb-8"
          />

          {termsSections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="bg-[#0e3b5e] px-8 py-5 flex items-center gap-4">
                <div className="w-11 h-11 bg-[#00cba9]/20 rounded-xl flex items-center justify-center text-[#00cba9] text-xl flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <span className="text-[#00cba9] text-xs font-bold uppercase tracking-widest block">
                    {section.badge}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{section.title}</h3>
                </div>
              </div>
              <div className="px-8 py-7 space-y-5">
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#00cba9] text-lg mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed">
                      {item.label && (
                        <span className="font-bold text-[#0e3b5e]">{item.label}: </span>
                      )}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Refund & Cancellation Policy */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#00cba9]/10 text-[#00cba9] text-sm font-bold uppercase tracking-widest mb-4">
              Cancellations & Refunds
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0e3b5e] mb-3">
              Refund & Cancellation Policy
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
              BloomAudit operates as a digital enterprise platform providing software-as-a-service
              (SaaS) and automated auditing solutions.
            </p>
          </motion.div>

          <div className="space-y-8">
            {refundSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="px-8 py-5 border-b border-gray-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0e3b5e]/5 rounded-xl flex items-center justify-center text-[#00cba9] text-xl flex-shrink-0">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0e3b5e]">{section.title}</h3>
                </div>
                <div className="px-8 py-7">
                  {section.note && (
                    <p className="text-gray-500 italic mb-5 text-sm">{section.note}</p>
                  )}
                  <ul className="space-y-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <FaCheckCircle className="text-[#00cba9] text-lg mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#0e3b5e] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaGavel className="text-5xl text-[#00cba9] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Questions About These Terms?</h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              If you have any questions regarding these Terms and Conditions, or wish to raise a
              formal concern, please reach out to our legal team.
            </p>
            <a
              href="mailto:info@bloomtech.lk"
              className="inline-flex items-center gap-2 bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded-full text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Contact Us — info@bloomtech.lk
            </a>
            <p className="text-blue-300/60 text-sm mt-8">
              Last updated: June 2026 · Governed by the laws of the Democratic Socialist Republic of Sri Lanka
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
