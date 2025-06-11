import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function UserTable({ users, onDelete }) {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="px-6 py-3">Action</th>
        <th className="px-6 py-3">Prénom</th>
        <th className="px-6 py-3">Nom</th>
        <th className="px-6 py-3">Email</th>
      </tr>
      </thead>
      <tbody>
      {users.map((u, i) => (
        <tr key={i} className="bg-white border-b">
          <td className="px-6 py-4 flex gap-2">
            <PencilSquareIcon className="size-6" />
            <TrashIcon className="size-6" />
          </td>
          <td className="px-6 py-4">{u.firstname}</td>
          <td className="px-6 py-4">{u.lastname}</td>
          <td className="px-6 py-4">{u.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
