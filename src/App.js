// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import AllowanceMaster from './components/AllowanceMaster';
// import DeductionMaster from './components/DeductionMaster';
// import PFMaster from './components/PFMaster';
// import Process from './components/Process';
import { AuthProvider, useAuth } from './auth/AuthContext';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import EmployeeMaster from './pages/EmployeeMaster/EmployeeMaster';
import AllowanceMaster from './pages/AllowanceMaster/AllowanceMaster';
import DeductionMaster from './pages/DeductionMaster/DeductionMaster';
import PFMaster from './pages/PFMaster/PFMaster';
import Process from './pages/Process/Process';
import UploadDocuments from './pages/UploadDocuments/UploadDocuments';
import Configuration from './pages/configuration/Configuration';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <div className="App">
            <AppContent />
          </div>
        </Router>
      </AuthProvider>

    </>

  );
}

function AppContent() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>; // Show loading while checking auth
  }
  return (
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route index element={<Home/>} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="employee-master" element={<EmployeeMaster />} />
            <Route path="allowance-master" element={<AllowanceMaster />} />
            <Route path="deduction-master" element={<DeductionMaster />} />
            <Route path="pf-master" element={<PFMaster />} />
            <Route path="process" element={<Process />} />
            <Route path="upload-docs" element={<UploadDocuments />} />
          </Route>
        </Routes>
    
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;