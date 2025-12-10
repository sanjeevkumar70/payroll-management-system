// components/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import './sidebar.scss';

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
    <div className="sidebar-wrapper">
          <h3 className="logo">HRMS Portal</h3>
      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/configuration">Configuration</Link></li>
          <li><Link to="/employee-master">Employee Master</Link></li>
          <li><Link to="/allowance-master">Allowance Master</Link></li>
          <li><Link to="/deduction-master">Deduction Master</Link></li>
          <li><Link to="/pf-master">PF Master</Link></li>
          <li><Link to="/process">Process</Link></li>
          <li><Link to="/process">Reports</Link></li>
          <li><Link to="/upload-docs">Upload document</Link></li>
        </ul>
      </nav>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
}

export default Sidebar;
