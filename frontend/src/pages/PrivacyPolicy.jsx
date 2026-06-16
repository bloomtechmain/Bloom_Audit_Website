import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import {
  FaShieldAlt, FaLock, FaUserCheck, FaDatabase,
  FaTrashAlt, FaEdit, FaHandPaper, FaUndo, FaCheckCircle
} from 'react-icons/fa';

const sections = [
  {
    id: 'purpose-limitation',
    icon: <FaShieldAlt />,
    title: 'Strict Purpose Limitation & Data Use Restriction',
    badge: 'Our Data Pledge',
    content: [
      {
        label: 'Our Data Pledge',
        text: 'BloomAudit strictly adheres to the principle of purpose limitation. We only collect and process personal data that is strictly necessary to perform our auditing services and maintain your platform subscription.',
      },
      {
        label: 'No Secondary Processing',
        text: 'Your data will never be used, processed, shared, or analyzed for any secondary purposes, including but not limited to commercial profiling, data monetization, behavioral advertising, or third-party marketing.',
      },
      {
        label: 'Scope of Use',
        text: 'Once the specific purpose for which your data was collected is fulfilled (e.g., a completed audit report or a closed account), processing will cease immediately, and data will be scheduled for secure deletion.',
      },
    ],
  },
  {
    id: 'information-collected',
    icon: <FaDatabase />,
    title: 'Information We Collect',
    badge: 'Data Minimization',
    content: [
      {
        label: 'Account Information',
        text: 'Name, corporate email address, phone number, and designation.',
      },
      {
        label: 'Audit & Uploaded Data',
        text: 'Proprietary data and documents uploaded directly by you to execute automated or manual audits.',
      },
      {
        label: 'Billing Details',
        text: 'Payment information processed securely via PCI-DSS compliant third-party payment gateways.',
      },
    ],
  },
  {
    id: 'data-security',
    icon: <FaLock />,
    title: 'Data Security & Retention',
    badge: 'State-of-the-Art Protection',
    content: [
      {
        label: 'Security Measures',
        text: 'BloomAudit applies state-of-the-art administrative, technical, and physical security measures, including end-to-end encryption, to protect data against unauthorized access or accidental loss.',
      },
      {
        label: 'Retention Policy',
        text: 'Data is retained only for the duration required to service your account or as mandated by Sri Lankan statutory financial retention periods.',
      },
    ],
  },
];

const rights = [
  {
    icon: <FaUserCheck />,
    title: 'Right of Access',
    desc: 'Request a complete copy of all your personal data processed by BloomAudit.',
  },
  {
    icon: <FaEdit />,
    title: 'Right to Rectification',
    desc: 'Request immediate correction of inaccurate or incomplete data.',
  },
  {
    icon: <FaTrashAlt />,
    title: 'Right to Erasure',
    desc: 'Request the permanent deletion of your personal data when it is no longer required for the purpose it was collected. ("Right to be Forgotten")',
  },
  {
    icon: <FaHandPaper />,
    title: 'Right to Object to Processing',
    desc: 'Object to your data being processed on legitimate grounds.',
  },
  {
    icon: <FaUndo />,
    title: 'Right to Withdraw Consent',
    desc: 'Withdraw your consent to data processing at any time, without penalty.',
  },
];

const PrivacyPolicy = () => {
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
            <FaShieldAlt /> Sri Lanka PDPA Compliant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            BloomAudit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">
              Privacy Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-100/80 leading-relaxed max-w-3xl"
          >
            At BloomAudit, we are committed to protecting the privacy, security, and confidentiality of our
            customers' and corporate clients' information in accordance with the{' '}
            <span className="text-[#00cba9] font-semibold">
              Sri Lanka Personal Data Protection Act (PDPA), No. 9 of 2022
            </span>
            . This Privacy Policy outlines how we, acting as a Data Controller, collect, process, and
            safeguard your personal and business data.
          </motion.p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              {/* Section Header */}
              <div className="bg-[#0e3b5e] px-8 py-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00cba9]/20 rounded-xl flex items-center justify-center text-[#00cba9] text-2xl flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <span className="text-[#00cba9] text-xs font-bold uppercase tracking-widest block mb-1">
                    {section.badge}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{section.title}</h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="px-8 py-8 space-y-6">
                {section.content.map((item, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <FaCheckCircle className="text-[#00cba9] text-lg mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#0e3b5e]">{item.label}: </span>
                      <span className="text-gray-600 leading-relaxed">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rights of Data Subjects */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#00cba9]/10 text-[#00cba9] text-sm font-bold uppercase tracking-widest mb-4">
              Under the PDPA
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-4">
              Rights of Data Subjects
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              As a data subject in Sri Lanka, you hold the following statutory rights under the PDPA,
              which you may exercise at any time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-[#00cba9]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#0e3b5e]/5 rounded-xl flex items-center justify-center text-2xl text-[#00cba9] mb-5 group-hover:bg-[#00cba9] group-hover:text-white transition-colors duration-300">
                  {right.icon}
                </div>
                <h3 className="font-bold text-[#0e3b5e] text-lg mb-2">{right.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{right.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Exercise Rights CTA */}
      <section className="py-20 bg-[#0e3b5e] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaShieldAlt className="text-5xl text-[#00cba9] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Exercise Your Rights</h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              To exercise any of your rights under the PDPA, or to raise a data privacy concern,
              please contact our Data Protection Officer directly.
            </p>
            <a
              href="mailto:info@bloomtech.lk"
              className="inline-flex items-center gap-2 bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded-full text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Contact Our DPO — info@bloomtech.lk
            </a>
            <p className="text-blue-300/60 text-sm mt-8">
              Last updated: June 2026 · Governed by the Sri Lanka Personal Data Protection Act, No. 9 of 2022
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
