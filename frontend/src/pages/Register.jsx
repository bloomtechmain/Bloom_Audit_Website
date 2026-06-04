import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { plans } from '../config/pricingData';
import { motion } from 'framer-motion';
import { FaCheck, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useGoogleLogin } from '@react-oauth/google';
import logo from '../assets/bloomlogo.png';
import API_URL from '../api';

const COMPANY_TYPES = [
  { value: 'freelancer', label: 'Freelancer' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'consultancy', label: 'Consultancy' },
  { value: 'technology', label: 'Technology' },
  { value: 'construction', label: 'Construction' },
  { value: 'education', label: 'Education' },
  { value: 'other', label: 'Other' },
];

const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: '', color: '' };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const levels = [
    { label: '', color: '' },
    { label: 'Weak', color: 'bg-red-500' },
    { label: 'Fair', color: 'bg-yellow-500' },
    { label: 'Good', color: 'bg-blue-500' },
    { label: 'Strong', color: 'bg-green-500' },
  ];
  return { score, ...levels[score] };
};

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyType: '',
    selectedPlan: null,
    billingCycle: 'monthly',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isGoogleRegistration, setIsGoogleRegistration] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-select plan from URL params (e.g. /register?plan=growth)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planSlug = params.get('plan');
    if (planSlug) {
      const found = plans.find((p) => p.slug === planSlug.toLowerCase());
      if (found) setFormData((prev) => ({ ...prev, selectedPlan: found }));
    }
  }, [location.search]);

  useEffect(() => {
    if (location.state?.isGoogleRegistration) {
      setIsGoogleRegistration(true);
      setFormData((prev) => ({
        ...prev,
        name: location.state.googleData.name,
        email: location.state.googleData.email,
        password: 'GoogleUser',
        confirmPassword: 'GoogleUser',
      }));
    }
  }, [location.state]);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(`${API_URL}/api/auth/google-login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: tokenResponse.access_token }),
        });
        const data = await response.json();
        if (response.ok) {
          if (data.isNewUser) {
            setIsGoogleRegistration(true);
            setFormData((prev) => ({
              ...prev,
              name: data.name,
              email: data.email,
              password: 'GoogleUser',
              confirmPassword: 'GoogleUser',
            }));
          } else {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));
            navigate(data.role === 'admin' ? '/admin' : '/');
          }
        } else {
          setError(data.message || 'Google Login Failed');
        }
      } catch {
        setError('Network error during Google Login');
      }
    },
    onError: () => setError('Google Login Failed'),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const validateStep1 = () => {
    if (!formData.name || formData.name.trim().length < 2) return 'Full name must be at least 2 characters.';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (!isGoogleRegistration) {
      if (formData.password.length < 8) return 'Password must be at least 8 characters.';
      if (!/[A-Z]/.test(formData.password)) return 'Password must contain at least one uppercase letter.';
      if (!/[0-9]/.test(formData.password)) return 'Password must contain at least one number.';
      if (!/[^A-Za-z0-9]/.test(formData.password)) return 'Password must contain at least one special character.';
      if (formData.password !== formData.confirmPassword) return 'Passwords do not match.';
    }
    if (!formData.companyName || formData.companyName.trim().length < 2) return 'Company / Business name is required.';
    if (!formData.companyType) return 'Please select your company type / industry.';
    return null;
  };

  const handleStep1Next = () => {
    const err = validateStep1();
    if (err) { setError(err); return; }
    setError('');
    setStep(2);
  };

  const handlePlanSelect = (plan) => {
    setFormData({ ...formData, selectedPlan: plan });
    setStep(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.selectedPlan) { setError('Please select a plan.'); return; }

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          company_type: formData.companyType,
          plan: formData.selectedPlan.slug,
          billing_cycle: formData.billingCycle,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(`Account created! Sign in to get started with your ${formData.selectedPlan.name} plan.`);
        setTimeout(() => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/login', { state: { successMessage: `Account created! Sign in to get started with your ${formData.selectedPlan.name} plan.` } });
        }, 2500);
      } else {
        if (data.message && data.message.toLowerCase().includes('exists')) {
          setError('This email is already registered. Please sign in instead.');
        } else {
          setError(data.message || 'Registration failed. Please try again.');
        }
      }
    } catch {
      setError('Network error. Please try again.');
    }
  };

  const selectedPrice = formData.selectedPlan
    ? (formData.billingCycle === 'yearly' ? formData.selectedPlan.priceYearly : formData.selectedPlan.priceMonthly)
    : null;

  // ── Step 1: Personal & Company Info ──────────────────────────────────────
  const renderStep1 = () => (
    <div className="flex min-h-screen bg-white font-sans w-full">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-[#00cba9] text-white flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 no-underline text-white">
            <img src={logo} alt="Bloom ERP" className="h-12 w-auto object-contain bg-white rounded-lg p-2" />
            <span className="text-3xl font-bold tracking-tight">Bloom ERP</span>
          </Link>
          <div className="mt-16">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Start with <br /><span className="text-[#0e3b5e]">Starter — $29/mo.</span>
            </h1>
            <p className="text-xl text-green-50 max-w-lg leading-relaxed">
              Four plans from $29/mo. Scale as you grow — upgrade anytime, pay only for what you need.
            </p>
            <div className="mt-10 space-y-3">
              {plans.map((p) => (
                <div key={p.slug} className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck size={10} className="text-white" />
                  </div>
                  <span className="font-semibold">{p.name}</span>
                  <span className="text-white/70 text-sm">— ${p.priceMonthly}/mo · {p.maxUsersLabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10">
          <p className="text-xs text-green-100">© {new Date().getFullYear()} Bloom Audit. All rights reserved.</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 overflow-y-auto">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Create your account</h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-[#00cba9] hover:text-[#00b596]">Sign in</Link>
          </p>

          {!isGoogleRegistration && (
            <div className="mb-6">
              <button type="button" onClick={() => googleLogin()}
                className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#00cba9] transition-all">
                <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
              </button>
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or register with email</span>
                </div>
              </div>
            </div>
          )}

          {isGoogleRegistration && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4 text-sm">
              <strong>Google Account Verified!</strong> Complete your details below.
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input name="name" type="text" required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                placeholder="Your full name" value={formData.name} onChange={handleChange}
                disabled={isGoogleRegistration} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input name="email" type="email" required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                placeholder="you@company.com" value={formData.email} onChange={handleChange}
                disabled={isGoogleRegistration} />
            </div>

            {!isGoogleRegistration && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input name="password" type={showPassword ? 'text' : 'password'} required
                      className="block w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                      placeholder="Min 8 chars, 1 uppercase, 1 number, 1 special"
                      value={formData.password} onChange={handleChange} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i <= passwordStrength.score ? passwordStrength.color : 'bg-gray-200'}`} />
                        ))}
                      </div>
                      <p className={`text-xs font-medium ${passwordStrength.score >= 3 ? 'text-green-600' : passwordStrength.score >= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {passwordStrength.label}
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input name="confirmPassword" type="password" required
                    className={`block w-full px-4 py-3 rounded-lg border text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="Repeat your password" value={formData.confirmPassword} onChange={handleChange} />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company / Business Name</label>
              <input name="companyName" type="text" required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all"
                placeholder="Your company or business name" value={formData.companyName} onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Type / Industry</label>
              <select name="companyType" required
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all bg-white"
                value={formData.companyType} onChange={handleChange}>
                <option value="">Select your industry...</option>
                {COMPANY_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Billing Cycle */}
            <div className="pt-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Billing Cycle</label>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <button type="button" onClick={() => setFormData({ ...formData, billingCycle: 'monthly' })}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-all ${formData.billingCycle === 'monthly' ? 'bg-[#00cba9] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
                  Monthly
                </button>
                <button type="button" onClick={() => setFormData({ ...formData, billingCycle: 'yearly' })}
                  className={`flex-1 py-2.5 text-sm font-semibold transition-all ${formData.billingCycle === 'yearly' ? 'bg-[#00cba9] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
                  Yearly <span className="text-[10px] font-bold ml-1 opacity-80">Save 17%</span>
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</p>}

            <button type="button" onClick={handleStep1Next}
              className="w-full py-3 bg-[#00cba9] hover:bg-[#00b596] text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
              Continue to Plan Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ── Step 2: Plan Selection ────────────────────────────────────────────────
  const renderStep2 = () => (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Choose your plan</h2>
        <p className="mt-3 text-gray-500">
          Billing: <strong className="text-[#00cba9]">{formData.billingCycle === 'yearly' ? 'Yearly (Save 17%)' : 'Monthly'}</strong>
        </p>
        <button onClick={() => setStep(1)} className="mt-3 text-sm text-blue-600 hover:text-blue-800 underline">
          ← Back to your details
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan, index) => {
          const price = formData.billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
          const isSelected = formData.selectedPlan?.slug === plan.slug;
          return (
            <motion.div key={index} whileHover={{ y: -8 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-xl border cursor-pointer transition-all ${
                isSelected ? 'ring-4 ring-[#00cba9] -translate-y-2' : plan.popular ? 'border-[#00cba9]/40' : 'border-gray-100'
              }`}
              onClick={() => handlePlanSelect(plan)}>
              <div className={`p-5 ${plan.headerColor} text-white relative`}>
                {plan.popular && (
                  <div className="absolute top-2 right-2 bg-white text-[#00cba9] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <div className="mb-2">{plan.icon}</div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-white/80 text-xs mt-0.5">{plan.maxUsersLabel}</p>
                <div className="mt-3 flex items-baseline">
                  <span className="text-sm mr-0.5 opacity-80">$</span>
                  <span className="text-3xl font-extrabold">{price}</span>
                  <span className="text-xs opacity-80 ml-1">/{formData.billingCycle === 'yearly' ? 'yr' : 'mo'}</span>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-2 mb-4">
                  {plan.prevPlanName && (
                    <li className="text-xs text-gray-500 font-semibold">Everything in {plan.prevPlanName}, plus:</li>
                  )}
                  {plan.tierFeatures.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600">
                      <FaCheck className="text-green-500 mt-0.5 mr-2 flex-shrink-0" size={10} />
                      {feature}
                    </li>
                  ))}
                  {plan.tierFeatures.length > 5 && (
                    <li className="text-xs text-gray-400 ml-4">+{plan.tierFeatures.length - 5} more features</li>
                  )}
                </ul>
                <button className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${
                  isSelected ? 'bg-[#00cba9] text-white' : plan.popular ? 'bg-[#00cba9] text-white hover:bg-[#00b596]' : 'bg-gray-100 text-gray-800 hover:bg-[#00cba9] hover:text-white'
                }`}>
                  {isSelected ? '✓ Selected' : `Select ${plan.name}`}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  // ── Step 3: Review & Confirm ──────────────────────────────────────────────
  const renderStep3 = () => (
    <div className="max-w-md w-full space-y-6 bg-white p-10 rounded-xl shadow-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 text-center">Review & Confirm</h2>

      {success ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            <FaCheck />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Account Created!</h3>
          <p className="text-gray-600 text-sm">{success}</p>
          <p className="text-gray-400 text-xs mt-2">Redirecting to sign in…</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 bg-gray-50 p-6 rounded-xl text-sm">
            <Row label="Name" value={formData.name} />
            <Row label="Email" value={formData.email} />
            <Row label="Company" value={formData.companyName} />
            <Row label="Industry" value={COMPANY_TYPES.find((t) => t.value === formData.companyType)?.label || formData.companyType} />
            <Row label="Plan" value={
              <span className="text-lg font-bold text-[#00cba9]">{formData.selectedPlan?.name}</span>
            } />
            <Row label="Users" value={formData.selectedPlan?.maxUsersLabel} />
            <Row label="Billing" value={
              <span>
                {formData.billingCycle === 'yearly' ? 'Yearly' : 'Monthly'} —{' '}
                <strong>${selectedPrice}/{formData.billingCycle === 'yearly' ? 'yr' : 'mo'}</strong>
              </span>
            } />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</p>
          )}

          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(2)}
              className="w-1/3 py-2.5 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Change Plan
            </button>
            <button onClick={handleSubmit}
              className="w-2/3 py-2.5 px-4 text-sm font-bold rounded-lg text-white bg-[#00cba9] hover:bg-[#00b596] shadow-lg transition-all">
              Confirm & Create Account
            </button>
          </div>

          <p className="text-center text-xs text-gray-400">
            By registering you agree to our{' '}
            <span className="text-[#00cba9] cursor-pointer">Terms of Service</span> and{' '}
            <span className="text-[#00cba9] cursor-pointer">Privacy Policy</span>.
          </p>
        </>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar solid />

      {/* Step progress indicator */}
      {step < 3 || !success ? (
        <div className="flex justify-center items-center gap-3 py-4 bg-white border-b border-gray-100 mt-16 lg:mt-0">
          {['Your Details', 'Choose Plan', 'Review'].map((label, i) => {
            const num = i + 1;
            const active = step === num;
            const done = step > num;
            return (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    done ? 'bg-[#00cba9] text-white' : active ? 'bg-[#0e3b5e] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {done ? <FaCheck size={10} /> : num}
                  </div>
                  <span className={`text-xs font-medium hidden sm:inline ${active ? 'text-[#0e3b5e]' : 'text-gray-400'}`}>{label}</span>
                </div>
                {i < 2 && <div className={`w-8 h-0.5 ${step > num ? 'bg-[#00cba9]' : 'bg-gray-200'}`} />}
              </React.Fragment>
            );
          })}
        </div>
      ) : null}

      <div className="flex-grow flex items-start justify-center py-12 px-4">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
      <Footer />
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default Register;
