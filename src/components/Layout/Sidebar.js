import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiBox, FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { jwtDecode } from 'jwt-decode';

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  let userEmail = '';
  try {
    const decoded = jwtDecode(token);
    userEmail = decoded.email || 'User'; // Assumes you added `email` when generating the token
  } catch (e) {
    userEmail = 'Guest';
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={`fixed z-50 md:static top-0 left-0 h-full w-64 bg-white border-r p-6 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      
      {/* Optional Mobile Close Button */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-xl font-bold text-blue-600">Menu</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-lg">&times;</button>
      </div>

      {/* Sidebar Title */}
      <h2 className="hidden md:block text-2xl font-bold text-blue-600 mb-8">SmartInventory</h2>

      {/* Nav */}
      <nav className="space-y-4 text-gray-700">
        <Link to="/dashboard" className="flex items-center space-x-2 hover:text-blue-600" onClick={onClose}>
          <FiHome />
          <span>Dashboard</span>
        </Link>
        <Link to="/inventory" className="flex items-center space-x-2 hover:text-blue-600" onClick={onClose}>
          <FiBox />
          <span>Inventory</span>
        </Link>
        <Link to="/add-item" className="flex items-center space-x-2 hover:text-blue-600" onClick={onClose}>
          <FiPlusCircle />
          <span>Add Item</span>
        </Link>
      </nav>

      {/* User Info + Logout */}
      <div className="mt-auto pt-6 border-t text-sm text-gray-600">
        <p className="mb-2 truncate">Signed in as:</p>
        <p className="font-semibold truncate">{userEmail}</p>
        <button
          onClick={handleLogout}
          className="mt-4 flex items-center space-x-2 text-red-600 hover:text-red-800"
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
