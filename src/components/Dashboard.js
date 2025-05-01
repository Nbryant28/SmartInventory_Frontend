import React from 'react';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to SmartInventory</h2>
          {/* Additional dashboard widgets can go here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;