import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './Landing';
import { PrivacyPolicy } from './PrivacyPolicy';
import { UserPrivacyPolicy } from './UserPrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/user-privacy" element={<UserPrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;