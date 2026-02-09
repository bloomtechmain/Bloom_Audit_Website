import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import AccountingSoftware from './pages/AccountingSoftware';
import BloomByIndustry from './pages/BloomByIndustry';
import DataSecurity from './pages/DataSecurity';
import SmallPricing from './pages/SmallPricing';
import SmartAccounting from './pages/SmartAccounting';
import BusinessRecovery from './pages/BusinessRecovery';
import OnboardingSupport from './pages/OnboardingSupport';
import EndOfFiscalYear from './pages/EndOfFiscalYear';
import BloomBlog from './pages/BloomBlog';
import BloomERPHQ from './pages/BloomERPHQ';
import BloomPracticeManager from './pages/BloomPracticeManager';
import BloomCashbookLedger from './pages/BloomCashbookLedger';
import BloomWorkpapers from './pages/BloomWorkpapers';
import BloomSyftAnalytics from './pages/BloomSyftAnalytics';
import BloomGetSupport from './pages/BloomGetSupport';
import CyberSecurityManagement from './pages/CyberSecurityManagement';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import MyPackage from './pages/MyPackage';
import Community from './pages/Community';
import Guides from './pages/Guides';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/my-package" element={<MyPackage />} />
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/small-business/accounting-software" element={<AccountingSoftware />} />
        <Route path="/small-business/bloom-by-industry" element={<BloomByIndustry />} />
        <Route path="/cyber-security" element={<CyberSecurityManagement />} />
        <Route path="/small-business/data-security" element={<DataSecurity />} />
        <Route path="/small-business/pricing" element={<SmallPricing />} />
        <Route path="/small-business/smart-accounting" element={<SmartAccounting />} />
        <Route path="/small-business/business-recovery" element={<BusinessRecovery />} />
        <Route path="/support/onboarding" element={<OnboardingSupport />} />
        <Route path="/support/end-of-fiscal-year" element={<EndOfFiscalYear />} />
        <Route path="/resources/blog" element={<BloomBlog />} />
        <Route path="/accountants/hq" element={<BloomERPHQ />} />
        <Route path="/accountants/practice-manager" element={<BloomPracticeManager />} />
        <Route path="/accountants/cashbook-ledger" element={<BloomCashbookLedger />} />
        <Route path="/accountants/workpapers" element={<BloomWorkpapers />} />
        <Route path="/accountants/syft-analytics" element={<BloomSyftAnalytics />} />
        <Route path="/support/get-support" element={<BloomGetSupport />} />
        <Route path="/support/community" element={<Community />} />
        <Route path="/resources/guides" element={<Guides />} />
      </Routes>
    </Router>
  );
}

export default App
