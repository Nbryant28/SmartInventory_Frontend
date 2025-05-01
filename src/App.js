import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import AddItemForm from './components/Inventory/AddItemForm';
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-item"
          element={
            <PrivateRoute>
              <AddItemForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
