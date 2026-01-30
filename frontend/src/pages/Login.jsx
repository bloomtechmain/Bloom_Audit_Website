import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));

        // Redirect based on role
        if (data.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Left Side - Image/Content */}
      <div className="hidden lg:flex w-1/2 bg-[#0e3b5e] text-white flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00cba9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1c3bd8]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <Link to="/" className="text-3xl font-bold tracking-tight text-white">Bloom ERP</Link>
          <div className="mt-20">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Master your <br />
              <span className="text-[#00cba9]">financial future.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
              Join thousands of businesses who trust Bloom ERP for their accounting, auditing, and financial management needs.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0e3b5e] bg-gray-300"></div>
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by 500+ Accountants</p>
          </div>
          <p className="text-xs text-blue-300">© 2024 Bloom Audit. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your details to sign in
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm font-medium text-[#00cba9] hover:text-[#00b596]">Forgot password?</a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg border border-red-100 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#00cba9] hover:bg-[#00b596] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00cba9] transition-all transform hover:-translate-y-0.5"
            >
              Sign in
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-[#00cba9] hover:text-[#00b596]">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
