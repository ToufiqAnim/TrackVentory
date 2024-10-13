import React, { ChangeEvent, FormEvent, useState } from "react";
import { TProductsForm } from "./page";
import { v4 } from "uuid";

type TCreateProductModal = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: TProductsForm) => void;
};

const ProductModal = ({ isOpen, onClose, onCreate }: TCreateProductModal) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20 flex items-center justify-center">
      <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-md bg-white">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-5">
          Create New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              onChange={handleChange}
              value={formData.name}
              className="block w-full p-2 border-gray-300 border-2 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleChange}
              value={formData.price}
              className="block w-full p-2 border-gray-300 border-2 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="stockQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Stock Quantity
            </label>
            <input
              type="number"
              name="stockQuantity"
              placeholder="Stock Quantity"
              onChange={handleChange}
              value={formData.stockQuantity}
              className="block w-full p-2 border-gray-300 border-2 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              onChange={handleChange}
              value={formData.rating}
              className="block w-full p-2 border-gray-300 border-2 rounded-md"
              min="0"
              max="5"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
