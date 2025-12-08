// components/Dashboard.js
import React from 'react';
import './dashboard.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;