
// components/Sidebar.js
import './sidebar.scss';
import { useAuth } from '../../auth/AuthContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  BsSpeedometer2,
  BsGear,
  BsPeople,
  BsPlusCircle,
  BsDashCircle,
  BsBank,
  BsPlayCircle,
  BsBarChart,
  BsUpload,
} from "react-icons/bs";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const routes = [
    {
      icon: BsSpeedometer2,
      url: '/',
      label: 'Dashboard'
    },
    {
      icon: BsGear,
      url: '/configuration',
      label: 'Configuration'
    },
    {
      icon: BsPeople,
      url: '/employee-master',
      label: 'Employee Master'
    },
    {
      icon: BsPlusCircle,
      url: '/allowance-master',
      label: 'Allowance Master'
    },
    {
      icon: BsDashCircle,
      url: '/deduction-master',
      label: 'Deduction Master'
    },
    {
      icon: BsBank,
      url: '/pf-master',
      label: 'PF Master'
    },
    {
      icon: BsPlayCircle,
      url: '/process',
      label: 'Process'
    },
    {
      icon: BsBarChart,
      url: '/reports',
      label: 'Reports'
    },
    {
      icon: BsUpload,
      url: '/upload-docs',
      label: 'Upload Document'
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <h3 className="logo">HRMS Portal</h3>

        <nav className="menu">
          <ul>
            {routes.map((item) => (
              <li key={item.url} className="custom-link">
                <NavLink to={item.url}>
                  <item.icon className="menu-icon" size={22}/>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='btn-box'>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
