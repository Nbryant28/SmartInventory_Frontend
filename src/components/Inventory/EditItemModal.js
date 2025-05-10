import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditItemModal = ({ item, isOpen, onClose, onItemUpdated }) => {
  const [form, setForm] = useState(item || {});
  const token = localStorage.getItem('token');

  useEffect(() => {
    setForm(item || {});
  }, [item]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/api/items/${item._id}`,
        form,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );
      onItemUpdated(); // refresh inventory
      onClose();       // close modal
    } catch (err) {
      alert('Update failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Edit Item</h2>
        <form onSubmit={handleUpdate}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name || ''}
              onChange={handleChange}
              placeholder="Item Name"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="category"
              value={form.category || ''}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              name="quantity"
              value={form.quantity || ''}
              onChange={handleChange}
              placeholder="Quantity"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="mt-6 flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
