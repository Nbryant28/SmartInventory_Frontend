import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddItemForm from './AddItemForm';
import InventoryTable from './InventoryTable';
import EditItemModal from './EditItemModal';

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/items`, {
        headers: { Authorization: token }
      });
      setItems(res.data);
    } catch (err) {
      setMessage('Failed to load inventory.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/items/${id}`, {
        headers: { Authorization: token }
      });
      setMessage('Item deleted.');
      fetchItems();
    } catch (err) {
      setMessage('Delete failed.');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SmartInventory</h1>
      {message && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded text-yellow-800">
          {message}
        </div>
      )}

      <AddItemForm onItemAdded={fetchItems} />

      {loading ? (
        <p className="text-center text-gray-500">Loading inventory...</p>
      ) : (
        <InventoryTable items={items} onDelete={handleDelete} onEdit={handleEdit} />
      )}

      <EditItemModal
        item={editingItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onItemUpdated={fetchItems}
      />
    </div>
  );
};

export default InventoryPage;
