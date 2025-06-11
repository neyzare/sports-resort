import React from 'react';
import Modal from '~/components/styles/Modal';
import Button from '~/components/styles/Button';

export default function AddSportModal({ newSport, setNewSport, onClose, onSubmit }) {
  const fields = ['Nom', 'Description', 'Emoji', 'Image', 'Lien'];
  const keys = ['name', 'description', 'emojie', 'imageUrl', 'lien'];

  return (
    <Modal title="Ajouter un sport" onClose={onClose}>
      {fields.map((ph, idx) => {
        const key = keys[idx];
        return (
          <input
            key={ph}
            type="text"
            placeholder={ph}
            value={newSport[key]}
            onChange={e => setNewSport({ ...newSport, [key]: e.target.value })}
            className="w-full mb-2 p-2 border"
          />
        );
      })}
      <Button name="Créer le sport" className="w-full" onClick={onSubmit} />
    </Modal>
  );
}
