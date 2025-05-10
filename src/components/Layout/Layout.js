import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiMenu } from 'react-icons/fi';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center p-4 bg-white shadow">
          <button onClick={() => setIsSidebarOpen(true)} className="text-gray-700 text-xl">
            <FiMenu />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">SmartInventory</h1>
        </div>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
