import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import io from 'socket.io-client';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaUserCircle, FaLock, FaHashtag, FaUsers, FaSearch, FaEllipsisV, FaCircle } from 'react-icons/fa';

const Community = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState(null);
  const [activeChannel, setActiveChannel] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const socketRef = useRef();
  const messagesEndRef = useRef(null);

  // Simulated channels data
  const channels = [
    { id: 'general', name: 'General Discussion', description: 'Talk about anything related to Bloom' }
  ];

  useEffect(() => {
    // Check for logged in user
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Connect to Socket.io
    socketRef.current = io(`${API_URL}`);

    // Listen for initial messages
    socketRef.current.on('initial_messages', (initialMessages) => {
      setMessages(initialMessages);
      scrollToBottom();
    });

    // Listen for new messages
    socketRef.current.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && user) {
      const messageData = {
        userId: user.id,
        userName: user.name,
        message: newMessage,
        channel: activeChannel // In a real app, we'd filter by channel
      };
      socketRef.current.emit('send_message', messageData);
      setNewMessage('');
    }
  };

  // Extract unique users from messages for "Recent Contributors"
  const recentContributors = [...new Set([...messages]
    .filter(m => (m.channel || 'general') === activeChannel)
    .reverse()
    .map(m => m.user_name)
  )].slice(0, 5);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col overflow-hidden">
      <Navbar solid={true} />

      {/* Enhanced Hero Section - Compact */}
      <div className="relative bg-[#0e3b5e] text-white pt-24 pb-12 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00cba9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Bloom <span className="text-[#00cba9]">Community Hub</span>
            </h1>
            <p className="text-blue-200 text-lg max-w-xl">
              Connect, share, and grow with fellow accounting professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 h-[calc(100vh-250px)] min-h-[600px]">
        <div className="grid grid-cols-12 gap-6 h-full">

          {/* Left Sidebar - Channels */}
          <div className="hidden lg:flex col-span-3 flex-col bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-full">
            <div className="p-5 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <FaHashtag className="text-[#00cba9]" /> Channels
              </h3>
            </div>
            <div className="flex-grow overflow-y-auto p-3 space-y-1">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${activeChannel === channel.id
                    ? 'bg-[#00cba9]/10 text-[#0e3b5e] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${activeChannel === channel.id ? 'bg-[#00cba9]' : 'bg-gray-300 group-hover:bg-[#00cba9]'}`}></span>
                    {channel.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Center - Chat Area */}
          <div className="col-span-12 lg:col-span-6 flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-full relative">
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white z-20 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <FaHashtag className="text-gray-400" />
                  {channels.find(c => c.id === activeChannel)?.name}
                </h2>
                <p className="text-xs text-gray-500 truncate max-w-xs">
                  {channels.find(c => c.id === activeChannel)?.description}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-8 pr-4 py-1.5 bg-gray-100 rounded-full text-xs focus:outline-none focus:ring-1 focus:ring-[#00cba9] w-32 focus:w-48 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                </div>
                <button className="text-gray-400 hover:text-gray-600"><FaEllipsisV /></button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-grow p-6 overflow-y-auto bg-[#f8fafc] space-y-6 custom-scrollbar">
              <AnimatePresence initial={false}>
                {messages
                  .filter(msg => (msg.channel || 'general') === activeChannel)
                  .map((msg, index, filteredMsgs) => {
                    const isCurrentUser = user && msg.user_id === user.id;
                    const isSequential = index > 0 && filteredMsgs[index - 1].user_id === msg.user_id;

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} group`}
                      >
                        <div className={`max-w-[80%] flex gap-3 ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                          {/* Avatar */}
                          {!isSequential ? (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 shadow-sm border border-white flex-shrink-0 mt-1">
                              <FaUserCircle />
                            </div>
                          ) : (
                            <div className="w-8 h-8 flex-shrink-0" /> // Spacer for sequential messages
                          )}

                          <div className="flex flex-col">
                            {/* Name & Time (Only for first in sequence) */}
                            {!isSequential && (
                              <div className={`flex items-center gap-2 mb-1 ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
                                <span className="text-xs font-bold text-gray-700">{msg.user_name}</span>
                                <span className="text-[10px] text-gray-400">{new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                              </div>
                            )}

                            {/* Bubble */}
                            <div className={`px-4 py-2.5 shadow-sm text-sm leading-relaxed relative ${isCurrentUser
                              ? 'bg-[#0e3b5e] text-white rounded-2xl rounded-tr-sm'
                              : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-sm'
                              }`}>
                              {msg.message}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              {user ? (
                <form onSubmit={handleSendMessage} className="relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder={`Message #${channels.find(c => c.id === activeChannel)?.name}`}
                    className="w-full pl-6 pr-14 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00cba9]/50 focus:border-[#00cba9] transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-[#00cba9] text-white rounded-lg hover:bg-[#00b596] transition-all disabled:opacity-50 disabled:scale-95 shadow-md transform active:scale-90"
                  >
                    <FaPaperPlane size={14} />
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-200 rounded-full text-gray-500"><FaLock size={12} /></div>
                    <span className="text-sm font-medium text-gray-600">Join the conversation</span>
                  </div>
                  <div className="flex gap-2">
                    <Link to="/login" className="text-xs font-bold text-[#0e3b5e] hover:underline px-3 py-1.5">Log in</Link>
                    <Link to="/register" className="text-xs font-bold bg-[#0e3b5e] text-white px-3 py-1.5 rounded-md hover:bg-[#0b2d48] transition-colors">Get started</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Info/Contributors */}
          <div className="hidden lg:flex col-span-3 flex-col gap-6 h-full overflow-y-auto pr-1">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-2">About this Channel</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {channels.find(c => c.id === activeChannel)?.description}. Keep conversations respectful and professional.
              </p>
            </div>

            {/* Recent Contributors */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex-grow">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-between">
                <span>Contributors</span>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-gray-500">Recent</span>
              </h3>
              <div className="space-y-4">
                {recentContributors.length > 0 ? recentContributors.map((name, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00cba9] to-[#4de3c9] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      {name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">{name}</p>
                      <p className="text-[10px] text-gray-400">Active recently</p>
                    </div>
                  </div>
                )) : (
                  <p className="text-xs text-gray-400 italic">No recent messages.</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;
