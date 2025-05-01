import React, { useState } from 'react';

const AddItemForm = ({ onSubmit }) => {
  const [item, setItem] = useState({ name: '', category: '', quantity: 0 });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem({ name: '', category: '', quantity: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <input name="name" value={item.name} onChange={handleChange} placeholder="Item Name" className="w-full p-2 border rounded" required />
      <input name="category" value={item.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" required />
      <input name="quantity" type="number" value={item.quantity} onChange={handleChange} placeholder="Quantity" className="w-full p-2 border rounded" required />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Add Item</button>
    </form>
  );
};

export default AddItemForm;