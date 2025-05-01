import React from 'react';

const InventoryTable = ({ items, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Inventory List</h2>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="p-3 border-b">Item Name</th>
            <th className="p-3 border-b">Category</th>
            <th className="p-3 border-b">Quantity</th>
            <th className="p-3 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-6 text-gray-400">
                No inventory items found.
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50 border-b">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white text-sm rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item._id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
