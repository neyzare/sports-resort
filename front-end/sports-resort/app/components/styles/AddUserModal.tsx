import React from 'react';
import Modal from '~/components/styles/Modal';
import Button from '~/components/styles/Button';

export default function AddUserModal({ newUser, setNewUser, onClose, onSubmit }) {
  const inputProps = [
    ['Prénom', 'text', newUser.firstname, v => setNewUser({ ...newUser, firstname: v })],
    ['Nom', 'text', newUser.lastname, v => setNewUser({ ...newUser, lastname: v })],
    ['Email', 'email', newUser.email, v => setNewUser({ ...newUser, email: v })],
    ['Mot de passe', 'password', newUser.password, v => setNewUser({ ...newUser, password: v })],
  ];

  return (
    <Modal title="Ajouter un utilisateur" onClose={onClose}>
      {inputProps.map(([ph, type, value, setter]) => (
        <input
          key={ph}
          type={type}
          placeholder={ph}
          value={value}
          onChange={e => setter(e.target.value)}
          className="w-full mb-2 p-2 border"
        />
      ))}
      <select
        value={newUser.role}
        onChange={e => setNewUser({ ...newUser, role: e.target.value })}
        className="w-full mb-4 p-2 border"
      >
        <option value="USER">Utilisateur</option>
        <option value="ADMIN">Administrateur</option>
        <option value="COACH">Coach</option>
      </select>
      <Button name="Créer l'utilisateur" className="w-full" onClick={onSubmit} />
    </Modal>
  );
}
