import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-blue-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">SmartInventory</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:text-blue-300">Dashboard</Link>
        <Link to="/inventory" className="hover:text-blue-300">Inventory</Link>
        <Link to="/add-item" className="hover:text-blue-300">Add Item</Link>
      </nav>
    </div>
  );
};

export default Sidebar;