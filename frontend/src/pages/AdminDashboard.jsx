import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminSidebar from '../Components/AdminSidebar';
import AdminUpgradeRequests from '../Components/AdminUpgradeRequests';
import { FaUserCircle, FaCheck, FaClock, FaUsers, FaExclamationCircle, FaChartLine, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dashboardStats, setDashboardStats] = useState({ pendingUsers: 0, pendingUpgrades: 0 });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeTab, setActiveTab] = useState('users'); // 'users' or 'upgrades'

  useEffect(() => {
    fetchUsers();
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setDashboardStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:5000/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        setError('Failed to fetch users');
        if (response.status === 401) navigate('/login');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const confirmPackage = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/admin/confirm-package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId })
      });

      if (response.ok) {
        setUsers(users.map(user =>
          user.id === userId ? { ...user, package_status: 'confirmed' } : user
        ));
        fetchStats(); // Refresh badges
      } else {
        alert('Failed to confirm package');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const deleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
        fetchStats(); // Refresh badges
      } else {
        alert('Failed to delete user');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const handleEditClick = (user) => {
    setEditingUser({ ...user });
    setShowEditModal(true);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/admin/users/${editingUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(editingUser)
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
        setShowEditModal(false);
        setEditingUser(null);
      } else {
        alert('Failed to update user');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  const stats = {
    totalUsers: users.length,
    pendingApprovals: users.filter(u => u.package_status === 'pending').length,
    activeUsers: users.filter(u => u.package_status === 'confirmed').length
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#00cba9]"></div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 ml-0 overflow-y-auto">
        {/* Top Header */}
        <div className="bg-white shadow-sm py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>
            <h2 className="text-xl font-bold text-gray-800 hidden md:block">Overview</h2>
            <div className="flex bg-gray-100 rounded-lg p-1 ml-0 md:ml-6">
              <button
                onClick={() => setActiveTab('users')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'users' ? 'bg-white text-[#0e3b5e] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Users
                {dashboardStats.pendingUsers > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                    {dashboardStats.pendingUsers}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('upgrades')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'upgrades' ? 'bg-white text-[#0e3b5e] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Upgrade Requests
                {dashboardStats.pendingUpgrades > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                    {dashboardStats.pendingUpgrades}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">Welcome, Admin</div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <FaUserCircle size={24} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your platform's users and subscriptions</p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Users</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.totalUsers}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-full text-blue-600">
                <FaUsers size={24} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.pendingApprovals}</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-full text-yellow-600">
                <FaExclamationCircle size={24} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Active Plans</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stats.activeUsers}</p>
              </div>
              <div className="p-4 bg-green-50 rounded-full text-green-600">
                <FaChartLine size={24} />
              </div>
            </motion.div>
          </div>

          {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r">{error}</div>}

          {activeTab === 'upgrades' ? (
            <AdminUpgradeRequests onUpdate={fetchStats} />
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">Recent Registrations</h3>
                <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">{users.length} Users</span>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Business Type</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Package</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-gray-500 border border-gray-200">
                              <span className="font-bold text-sm">{user.name.charAt(0).toUpperCase()}</span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">{user.name}</div>
                              <div className="text-xs text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-600 capitalize">
                            {user.company_type?.replace('_', ' ') || '-'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.package_name ? (
                            <div>
                              <div className="text-sm font-bold text-gray-800">{user.package_name}</div>
                              <div className="text-xs text-gray-500">LKR {user.package_price}</div>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-400 italic">No Package</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.package_status === 'confirmed' ? (
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 border border-green-200 items-center gap-1">
                              <FaCheck size={10} /> Active
                            </span>
                          ) : user.package_status === 'pending' ? (
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200 items-center gap-1">
                              <FaClock size={10} /> Pending
                            </span>
                          ) : (
                            <span className="text-sm text-gray-500">-</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {user.package_status === 'pending' && (
                            <button
                              onClick={() => confirmPackage(user.id)}
                              className="text-white bg-[#00cba9] hover:bg-[#00b596] px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-all mr-2"
                            >
                              Approve
                            </button>
                          )}
                          <button
                            onClick={() => handleEditClick(user)}
                            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-all mr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className="text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded text-xs font-bold shadow-sm transition-all"
                          >
                            Delete
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {users.length === 0 && !loading && (
                <div className="p-12 text-center text-gray-500 flex flex-col items-center">
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <FaUsers size={24} className="opacity-30" />
                  </div>
                  <p>No registered users yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit User</h2>
            <form onSubmit={handleUpdateUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#00cba9] focus:border-[#00cba9] p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#00cba9] focus:border-[#00cba9] p-2 border"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Type</label>
                <select
                  value={editingUser.company_type || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, company_type: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#00cba9] focus:border-[#00cba9] p-2 border"
                >
                  <option value="small_business">Small Business</option>
                  <option value="other_business">Other Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Package Name</label>
                <input
                  type="text"
                  value={editingUser.package_name || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, package_name: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#00cba9] focus:border-[#00cba9] p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Package Price</label>
                <input
                  type="text"
                  value={editingUser.package_price || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, package_price: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#00cba9] focus:border-[#00cba9] p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={editingUser.package_status || 'pending'}
                  onChange={(e) => setEditingUser({ ...editingUser, package_status: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#00cba9] focus:border-[#00cba9] p-2 border"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#00cba9] text-white rounded hover:bg-[#00b596] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
