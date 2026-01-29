import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaTasks, FaClock, FaFileInvoiceDollar, FaUserTie, FaCheckDouble, FaArrowRight, FaMagic, FaQuoteLeft, FaPlug, FaChartBar, FaEnvelopeOpenText, FaCalendarCheck, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const BloomPracticeManager = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const workflowSteps = [
    {
      title: "Capture",
      desc: "Automatically capture client data and documents.",
      icon: <FaMagic />,
      color: "bg-purple-500"
    },
    {
      title: "Organize",
      desc: "AI-driven sorting and categorization of tasks.",
      icon: <FaTasks />,
      color: "bg-blue-500"
    },
    {
      title: "Execute",
      desc: "Team collaboration with real-time status updates.",
      icon: <FaCheckDouble />,
      color: "bg-[#00cba9]"
    },
    {
      title: "Bill",
      desc: "Seamless conversion of time to invoices.",
      icon: <FaFileInvoiceDollar />,
      color: "bg-green-500"
    }
  ];

  const detailedFeatures = [
    {
      title: "Capacity Planning",
      desc: "Visualize your team's workload. Prevent burnout and ensure deadlines are met with intelligent resource allocation.",
      icon: <FaChartBar />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Client Portal",
      desc: "A secure branded space for clients to upload documents, sign papers, and communicate safely.",
      icon: <FaUserTie />,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Email Integration",
      desc: "Sync emails directly to client jobs. Turn requests into tasks with one click.",
      icon: <FaEnvelopeOpenText />,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Smart Scheduling",
      desc: "Automated recurring jobs for BAS, tax returns, and payroll. Set it and forget it.",
      icon: <FaCalendarCheck />,
      color: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const testimonials = [
    {
      quote: "Bloom Practice Manager cut our admin time by 40%. We finally have visibility over every single job.",
      author: "Sarah Jenkins",
      role: "Partner, Jenkins & Co.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    {
      quote: "The best investment we made this year. The client portal alone has saved us endless email back-and-forth.",
      author: "David Chen",
      role: "Director, Summit Financial",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      quote: "Finally, a practice management tool that actually looks good and is easy to use. The team loves it.",
      author: "Emily Ross",
      role: "Practice Manager, Ross Accounting",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "How easy is it to migrate from our current system?",
      answer: "Seamless. Our dedicated onboarding team handles the data migration for you, ensuring all your client data, history, and documents are transferred securely within 48 hours."
    },
    {
      question: "Does it integrate with Xero and QuickBooks?",
      answer: "Yes! We have deep two-way integrations with Xero, QuickBooks Online, and MYOB. Your client data and invoices sync in real-time."
    },
    {
      question: "Is there a limit on the number of clients?",
      answer: "No limits. Whether you have 10 clients or 10,000, Bloom Practice Manager scales with your firm. You only pay for the features you need."
    },
    {
      question: "Can I customize the workflow steps?",
      answer: "Absolutely. You can create custom job templates and workflow stages to match your firm's specific processes perfectly."
    }
  ];

  return (
    <div className="font-sans overflow-x-hidden bg-gray-50">
      <Navbar solid={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e3b5e] pt-20">
        <div className="absolute inset-0">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Modern Office Background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e3b5e]/90 via-[#0e3b5e]/70 to-[#0e3b5e]"></div>
          </div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
          {/* Animated Background Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00cba9] rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, -45, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: yHero, opacity: opacityHero }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm mb-6 backdrop-blur-md">
                Practice Management Reimagined
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                From Chaos to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">Total Clarity</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
                The all-in-one operating system designed to streamline workflows, boost team productivity, and delight your clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#00cba9] text-white font-bold rounded-xl shadow-lg hover:bg-[#00b596] transition-all hover:-translate-y-1 flex items-center gap-2">
                  Start Free Trial <FaArrowRight />
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Floating Cards Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block perspective-1000"
          >
            {/* Base Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-white rounded-2xl shadow-2xl p-6 z-10 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">On Track</div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-[#00cba9] rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 right-10 w-48 bg-white rounded-xl shadow-xl p-4 z-20 border-l-4 border-purple-500"
            >
              <div className="text-xs text-gray-400 mb-1">New Task Assigned</div>
              <div className="font-bold text-gray-800 text-sm">Quarterly Audit Review</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 left-0 w-56 bg-white rounded-xl shadow-xl p-4 z-20 flex items-center gap-3 border-l-4 border-blue-500"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">JD</div>
              <div>
                <div className="font-bold text-gray-800 text-sm">John Doe</div>
                <div className="text-xs text-gray-400">Completed 3 tasks</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-4">Master Your Workflow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A seamless flow from client intake to final invoice. No bottlenecks, no lost data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-0"></div>

            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group text-center"
              >
                <div className={`w-20 h-20 mx-auto rounded-2xl ${step.color} text-white flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: The Dashboard */}
      <section className="py-24 px-6 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">
                Your Practice, <br />
                <span className="text-[#00cba9]">At a Glance</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stop digging through emails and spreadsheets. The Practice Manager dashboard gives you a bird's-eye view of every job, deadline, and staff member.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Real-time job status tracking",
                  "Automated deadline alerts",
                  "Staff capacity planning",
                  "Profitability analysis per client"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <FaCheckDouble className="text-[#00cba9]" /> {item}
                  </li>
                ))}
              </ul>
              <button className="text-[#00cba9] font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                Explore Features <FaArrowRight />
              </button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, rotateY: 30, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="perspective-1000"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-2 border border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="Practice Manager Dashboard"
                  className="rounded-xl w-full"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://picsum.photos/seed/dashboard/800/600";
                  }}
                />
                {/* Overlay Floating Stats */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -bottom-6 -left-6 bg-[#0e3b5e] text-white p-6 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm text-blue-200">On-Time Delivery</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00cba9] font-bold tracking-widest uppercase text-sm">Beyond the Basics</span>
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mt-2">Tools for the Modern Firm</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow bg-white group"
              >
                <div className={`w-16 h-16 shrink-0 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 bg-[#0e3b5e] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-blue-200 font-bold mb-10 tracking-widest uppercase">Works seamlessly with your favorite tools</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders for logos for simplicity, or generic icons */}
            <div className="text-white text-2xl font-bold flex items-center gap-2"><FaPlug /> Xero</div>
            <div className="text-white text-2xl font-bold flex items-center gap-2"><FaPlug /> QuickBooks</div>
            <div className="text-white text-2xl font-bold flex items-center gap-2"><FaPlug /> MYOB</div>
            <div className="text-white text-2xl font-bold flex items-center gap-2"><FaPlug /> Stripe</div>
            <div className="text-white text-2xl font-bold flex items-center gap-2"><FaPlug /> Slack</div>
            <div className="text-white text-2xl font-bold flex items-center gap-2"><FaPlug /> Office 365</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-16 text-center">Trusted by Forward-Thinking Firms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative"
              >
                <FaQuoteLeft className="text-4xl text-[#00cba9]/20 absolute top-6 left-6" />
                <p className="text-gray-600 italic mb-8 relative z-10 pt-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://picsum.photos/seed/${index}/100/100`; }}
                  />
                  <div>
                    <div className="font-bold text-[#0e3b5e]">{t.author}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none">
                    <span className="font-bold text-lg text-[#0e3b5e]">{faq.question}</span>
                    <span className="text-[#00cba9] transition-transform group-open:rotate-180">
                      <FaChevronDown />
                    </span>
                  </summary>
                  <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#0e3b5e] to-[#0a2a43] text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to regain control?</h2>
          <p className="text-xl text-blue-200 mb-10">
            Join thousands of accountants who have transformed their practice with Bloom ERP.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-10 py-4 bg-[#00cba9] text-white font-bold rounded-full shadow-lg hover:bg-[#00b596] transition-all transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomPracticeManager;
