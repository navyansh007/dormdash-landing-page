import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Landing';
import { PrivacyPolicy } from './PrivacyPolicy';
import { UserPrivacyPolicy } from './UserPrivacyPolicy';
import { PasswordResetRequest } from './PasswordResetRequest';
import { PasswordResetConfirm } from './PasswordResetConfirm';
import { PasswordResetSuccess } from './PasswordResetSuccess';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/user-privacy" element={<UserPrivacyPolicy />} />
        <Route path="/reset-password" element={<PasswordResetRequest />} />
        <Route path="/reset-password-confirm" element={<PasswordResetConfirm />} />
        <Route path="/reset-password-success" element={<PasswordResetSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;