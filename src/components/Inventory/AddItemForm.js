import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = ({ onItemAdded }) => {
  const [form, setForm] = useState({ name: '', category: '', quantity: '' });
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/items`,
        form,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );
      setForm({ name: '', category: '', quantity: '' });
      onItemAdded(); // refresh inventory
    } catch (err) {
      alert('Failed to add item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Item</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Item Name"
          required
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          required
          className="border rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="border rounded px-3 py-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
