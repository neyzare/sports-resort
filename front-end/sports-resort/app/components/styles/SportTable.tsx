import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function SportTable({ sports, onDelete }) {

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3">Action</th>
        <th className="px-6 py-3">Sport</th>
        <th className="px-6 py-3">Description</th>
        <th className="px-6 py-3">Emoji</th>
        <th className="px-6 py-3">Image</th>
        <th className="px-6 py-3">Lien</th>
      </tr>
      </thead>
      <tbody>
      {sports.map((s, i) => (
        <tr key={s.id || i} className="bg-white border-b">
          <td className="px-6 py-4 flex gap-2">
            <PencilSquareIcon className="size-6 cursor-pointer" />
            <TrashIcon
              className="size-6 text-red-600 cursor-pointer"
              onClick={() => onDelete(s.id)}
            />
          </td>
          <td className="px-6 py-4">{s.name}</td>
          <td className="px-6 py-4">{s.description}</td>
          <td className="px-6 py-4">{s.emojie}</td>
          <td className="px-6 py-4">{s.imageUrl}</td>
          <td className="px-6 py-4">{s.lien}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
