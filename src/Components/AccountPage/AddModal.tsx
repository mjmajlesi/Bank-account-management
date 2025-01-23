import React from "react";
import { Category } from "../../data";
import { useAccountContext } from "./AccountContext";

interface INewModal {
  isOpen: boolean;
  onClose: () => void;
}

const NewModal = ({ isOpen, onClose }: INewModal) => {
  const { SetCards, Cards } = useAccountContext();

  const handleAddItem = (id: number) => {
    const newItem = Category.find(item => item.id === id);
    if (newItem && !Cards.some(card => card.id === id)) {
      SetCards(prev => [
        ...prev,
        {
          ...newItem,
          value: 0,
          spent: 0,
          TotalValue: 0
        }
      ]);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(49,49,49,0.8)] flex items-center justify-center">
      <div className="bg-main p-6 rounded-lg max-w-4xl min-w-[300px]">
        <h2 className="text-2xl font-bold mb-4">Select Category</h2>
        <div className="grid grid-cols-3 gap-4">
          {Category.map((item) => (
            <div
              key={item.id}
              onClick={() => handleAddItem(item.id)}
              className="flex flex-col items-center cursor-pointer p-2 hover:bg-gray-700 rounded"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NewModal;
