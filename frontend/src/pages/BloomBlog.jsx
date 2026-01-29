import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaSearch, FaArrowRight, FaTag, FaClock, FaUserCircle, FaFire } from 'react-icons/fa';

const BloomBlog = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Tax Tips', 'Industry Trends', 'Product Updates', 'Success Stories', 'Security'];

  const featuredPost = {
    title: "The Future of AI in Small Business Audits",
    excerpt: "Discover how artificial intelligence is transforming the landscape of financial compliance, reducing errors, and saving precious time for entrepreneurs.",
    author: "Sarah Jenkins",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    image: "https://loremflickr.com/1200/800/artificial-intelligence,technology,neural-network",
    category: "Industry Trends"
  };

  const posts = [
    {
      id: 1,
      title: "5 Strategies to Maximize Your Tax Deductions",
      excerpt: "Don't leave money on the table. Learn the top overlooked deductions for small businesses in 2024.",
      author: "Michael Chen",
      date: "Oct 20, 2023",
      readTime: "4 min read",
      category: "Tax Tips",
      image: "https://picsum.photos/seed/tax-tips/800/600"
    },
    {
      id: 2,
      title: "Data Security: Why It Matters More Than Ever",
      excerpt: "With cyber threats on the rise, protecting your financial data is non-negotiable. Here is your checklist.",
      author: "Alex Rivera",
      date: "Oct 18, 2023",
      readTime: "6 min read",
      category: "Security",
      image: "https://picsum.photos/seed/security-checklist/800/600"
    },
    {
      id: 3,
      title: "From Garage to Global: A Bloom Success Story",
      excerpt: "How 'GreenLeaf Organics' scaled their operations 10x using Bloom ERP's automated inventory tracking.",
      author: "Jessica Wu",
      date: "Oct 15, 2023",
      readTime: "8 min read",
      category: "Success Stories",
      image: "https://picsum.photos/seed/success-story/800/600"
    },
    {
      id: 4,
      title: "New Feature Alert: One-Click Reconciliation",
      excerpt: "Say goodbye to manual matching. Our latest update automates 95% of your bank reconciliation process.",
      author: "Bloom Team",
      date: "Oct 10, 2023",
      readTime: "2 min read",
      category: "Product Updates",
      image: "https://picsum.photos/seed/product-updates/800/600"
    },
    {
      id: 5,
      title: "Navigating the New Fiscal Policies",
      excerpt: "Expert analysis on the latest government regulations and what they mean for your bottom line.",
      author: "David Smith",
      date: "Oct 05, 2023",
      readTime: "7 min read",
      category: "Industry Trends",
      image: "https://picsum.photos/seed/industry-trends/800/600"
    },
    {
      id: 6,
      title: "Remote Work Accounting Best Practices",
      excerpt: "Managing expenses and payroll for a distributed team? Here are the tools and tips you need.",
      author: "Emily White",
      date: "Oct 01, 2023",
      readTime: "5 min read",
      category: "Tax Tips",
      image: "https://picsum.photos/seed/remote-work/800/600"
    }
  ];

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(post => post.category === activeCategory);

  return (
    <div className="font-sans overflow-x-hidden bg-gray-50">
      <Navbar solid />

      {/* Creative Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0e3b5e] overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: y1 }}
            className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[#00cba9]/20 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ y: y2 }}
            className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm mb-6 backdrop-blur-md">
                <FaFire className="text-orange-500" /> INSIGHTS & INNOVATION
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
                The Bloom <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">Chronicles</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
                Expert advice, industry trends, and practical tips to help your business bloom in the digital economy.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-14 text-white placeholder-blue-200/50 focus:outline-none focus:bg-white/20 focus:border-[#00cba9] transition-all"
                />
                <button className="absolute right-2 top-2 p-2 bg-[#00cba9] rounded-full text-white hover:bg-[#00b596] transition-colors">
                  <FaSearch />
                </button>
              </div>
            </motion.div>

            {/* Featured Post Card 3D Effect */}
            <motion.div
              initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group perspective-1000"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute top-4 left-4 z-20 bg-[#00cba9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Featured
                </div>
                <div className="h-64 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt="Featured"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/1200/800";
                      e.currentTarget.onerror = null;
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><FaTag className="text-[#00cba9]" /> {featuredPost.category}</span>
                    <span className="flex items-center gap-1"><FaClock /> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0e3b5e] mb-4 group-hover:text-[#00cba9] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                        <FaUserCircle size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0e3b5e]">{featuredPost.author}</p>
                        <p className="text-xs text-gray-500">{featuredPost.date}</p>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#0e3b5e] group-hover:text-white group-hover:border-[#0e3b5e] transition-all">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              {/* Decorative Card Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00cba9] to-blue-500 rounded-[2.5rem] opacity-30 blur-xl -z-10 group-hover:opacity-50 transition-opacity"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories & Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                ? 'bg-[#0e3b5e] text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredPosts.map((post) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0e3b5e] shadow-sm">
                  {post.category}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/800/600";
                    e.currentTarget.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-[#00cba9] font-bold mb-3 uppercase tracking-wider">
                  {post.date} • {post.readTime}
                </div>
                <h3 className="text-xl font-bold text-[#0e3b5e] mb-3 group-hover:text-[#00cba9] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2">
                    <FaUserCircle className="text-gray-300 text-2xl" />
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  <span className="text-[#00cba9] font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                    Read <FaArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No articles found in this category.
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-[#00cba9] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FaUserCircle className="text-white/30 text-8xl absolute -top-12 -right-12 rotate-12" />

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">Stay Ahead of the Curve</h2>
          <p className="text-xl text-[#0e3b5e]/80 mb-10 max-w-2xl mx-auto font-medium">
            Join 50,000+ business owners receiving weekly tips, trends, and exclusive insights directly to their inbox.
          </p>

          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-2 border-[#0e3b5e]/20 focus:border-[#0e3b5e] focus:outline-none text-[#0e3b5e] placeholder-[#0e3b5e]/50 shadow-lg"
            />
            <button className="px-8 py-4 bg-[#0e3b5e] text-white font-bold rounded-full hover:bg-[#0a2a43] transition-colors shadow-lg flex items-center justify-center gap-2">
              Subscribe Now <FaArrowRight />
            </button>
          </form>
          <p className="mt-4 text-sm text-[#0e3b5e]/60">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomBlog;
