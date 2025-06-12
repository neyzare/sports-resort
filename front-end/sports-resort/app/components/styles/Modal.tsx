import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
      <div className="bg-light-white p-8 rounded-lg w-full max-w-md relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
}
