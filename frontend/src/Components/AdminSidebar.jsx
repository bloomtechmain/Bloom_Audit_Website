import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaCog, FaSignOutAlt, FaChartPie, FaTimes } from 'react-icons/fa';
import logo from '../assets/bloomlogo.png';

const AdminSidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const menuItems = [
    { path: '/admin', name: 'Dashboard', icon: <FaTachometerAlt /> },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <div className={`w-64 bg-[#0e3b5e] text-white flex flex-col h-screen fixed left-0 top-0 shadow-xl z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo Area */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Bloom Admin" className="h-10 w-auto object-contain bg-white rounded-lg p-1" />
            <h1 className="text-xl font-bold tracking-tight">Bloom Admin</h1>
          </div>
          <button onClick={onClose} className="lg:hidden text-white p-1 rounded hover:bg-white/10">
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                  ? 'bg-[#00cba9] text-white shadow-lg'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User / Logout Area */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500 hover:text-white transition-all duration-200 border border-red-500/20 hover:border-red-500"
          >
            <FaSignOutAlt />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
