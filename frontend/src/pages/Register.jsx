import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { smallBizPlans, plans } from '../config/pricingData';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaGoogle } from 'react-icons/fa';
import { useGoogleLogin } from '@react-oauth/google';
import logo from '../assets/bloomlogo.png';

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyType: '', // 'small_business' or 'other_business'
    selectedPackage: null,
  });
  const [error, setError] = useState('');
  const [isGoogleRegistration, setIsGoogleRegistration] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.isGoogleRegistration) {
      setIsGoogleRegistration(true);
      setFormData(prev => ({
        ...prev,
        name: location.state.googleData.name,
        email: location.state.googleData.email,
        password: 'GoogleUser', // Placeholder
        confirmPassword: 'GoogleUser' // Placeholder
      }));
    }
  }, [location.state]);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/google-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });

        const data = await response.json();

        if (response.ok) {
          if (data.isNewUser) {
            setIsGoogleRegistration(true);
            setFormData(prev => ({
              ...prev,
              name: data.name,
              email: data.email,
              password: 'GoogleUser',
              confirmPassword: 'GoogleUser'
            }));
          } else {
            // Existing user - log them in directly
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));
            if (data.role === 'admin') {
              navigate('/admin');
            } else {
              navigate('/');
            }
          }
        } else {
          setError(data.message || 'Google Login Failed');
        }
      } catch (err) {
        console.error(err);
        setError('Network error during Google Login');
      }
    },
    onError: () => {
      console.log('Login Failed');
      setError('Google Login Failed');
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCompanyTypeSelect = (type) => {
    setFormData({ ...formData, companyType: type, selectedPackage: null });
    setStep(2);
  };

  const handlePackageSelect = (pkg) => {
    setFormData({ ...formData, selectedPackage: pkg });
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          company_type: formData.companyType,
          package_name: formData.selectedPackage.name,
          package_price: formData.selectedPackage.price,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/'); // Redirect to home/dashboard
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  // Step 1: Basic Info
  const renderStep1 = () => (
    <div className="flex min-h-screen bg-white font-sans w-full">
      {/* Left Side - Image/Content */}
      <div className="hidden lg:flex w-1/2 bg-[#00cba9] text-white flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 no-underline text-white">
            <img src={logo} alt="Bloom ERP" className="h-12 w-auto object-contain bg-white rounded-lg p-2" />
            <span className="text-3xl font-bold tracking-tight">Bloom ERP</span>
          </Link>
          <div className="mt-20">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Start your <br />
              <span className="text-[#0e3b5e]">growth journey.</span>
            </h1>
            <p className="text-xl text-green-50 max-w-lg leading-relaxed">
              Create an account today and experience the power of seamless financial management designed for your business.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-xs text-green-100">© 2024 Bloom Audit. All rights reserved.</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 overflow-y-auto">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Create your account
            </h2>
            <p className="text-center text-sm text-gray-600 mb-8">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-[#00cba9] hover:text-[#00b596]">
                Sign in
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            {!isGoogleRegistration && (
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => googleLogin()}
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00cba9] transition-all"
                >
                  <FaGoogle className="mr-2 text-red-500" />
                  Sign up with Google
                </button>
                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or register with email</span>
                  </div>
                </div>
              </div>
            )}

            {isGoogleRegistration && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">
                <strong>Google Account Verified!</strong> Please complete your registration details below.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                disabled={isGoogleRegistration}
              />
            </div>
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
                value={formData.email}
                onChange={handleChange}
                disabled={isGoogleRegistration}
              />
            </div>
            {!isGoogleRegistration && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input id="password" name="password" type="password" required className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all" placeholder="Password" value={formData.password} onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                  <input id="confirmPassword" name="confirmPassword" type="password" required className="block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all" placeholder="Confirm" value={formData.confirmPassword} onChange={handleChange} />
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Select Business Type</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleCompanyTypeSelect('small_business')}
                  className={`p-4 border-2 rounded-xl text-center hover:border-[#00cba9] hover:bg-green-50 transition-all group ${formData.companyType === 'small_business' ? 'border-[#00cba9] bg-green-50' : 'border-gray-200'}`}
                >
                  <div className={`font-bold text-gray-800 group-hover:text-[#00cba9] ${formData.companyType === 'small_business' ? 'text-[#00cba9]' : ''}`}>Small Business</div>
                  <div className="text-xs text-gray-500 mt-1">For startups</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleCompanyTypeSelect('other_business')}
                  className={`p-4 border-2 rounded-xl text-center hover:border-[#00cba9] hover:bg-green-50 transition-all group ${formData.companyType === 'other_business' ? 'border-[#00cba9] bg-green-50' : 'border-gray-200'}`}
                >
                  <div className={`font-bold text-gray-800 group-hover:text-[#00cba9] ${formData.companyType === 'other_business' ? 'text-[#00cba9]' : ''}`}>Other Business</div>
                  <div className="text-xs text-gray-500 mt-1">For enterprise</div>
                </button>
              </div>
            </div>

            {(!formData.name || !formData.email || (!isGoogleRegistration && (!formData.password || !formData.confirmPassword))) && (
              <p className="text-center text-xs text-gray-400 mt-2">Please fill all fields to proceed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Step 2: Select Package
  const renderStep2 = () => {
    const availablePlans = formData.companyType === 'small_business' ? smallBizPlans : plans;

    return (
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Choose your plan</h2>
          <p className="mt-4 text-xl text-gray-500">
            You selected {formData.companyType === 'small_business' ? 'Small Business' : 'Other Business'}. Here are the best plans for you.
          </p>
          <button onClick={() => setStep(1)} className="mt-4 text-blue-600 hover:text-blue-800 underline">Back to details</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {availablePlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl border cursor-pointer transition-all ${formData.selectedPackage?.name === plan.name ? 'ring-4 ring-blue-500 transform -translate-y-2' : 'border-gray-100'}`}
              onClick={() => handlePackageSelect(plan)}
            >
              <div className={`p-6 ${plan.headerBg || plan.headerColor} text-white`}>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-white/80 text-sm">{plan.tagline || plan.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">LKR {plan.price.toLocaleString()}</span>
                  <span className="text-sm opacity-80">/mo</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 rounded-lg font-bold bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white transition-colors">
                  Select {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Step 3: Review & Submit
  const renderStep3 = () => (
    <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Review & Register</h2>

      <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
          <div className="text-gray-900">{formData.name}</div>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
          <div className="text-gray-900">{formData.email}</div>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Business Type</label>
          <div className="text-gray-900 capitalize">{formData.companyType.replace('_', ' ')}</div>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase">Selected Package</label>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-600">{formData.selectedPackage.name}</span>
            <span className="text-gray-900 font-medium">LKR {formData.selectedPackage.price.toLocaleString()}/mo</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="w-1/3 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Change Plan
        </button>
        <button
          onClick={handleSubmit}
          className="w-2/3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg"
        >
          Confirm & Register
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar solid />
      <div className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
