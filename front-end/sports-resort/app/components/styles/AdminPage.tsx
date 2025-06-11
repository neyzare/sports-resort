import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';
import Button from '~/components/styles/Button';

import UserTable from '~/components/styles/UserTable';
import SportTable from '~/components/styles/SportTable';
import AddUserModal from '~/components/styles/AddUserModal';
import AddSportModal from '~/components/styles/AddSportModal';

const API_BASE = 'http://localhost:8080/api/admin';
const defaultUser = { firstname: '', lastname: '', email: '', password: '', role: 'USER' };
const defaultSport = { name: '', description: '', emojie: '', imageUrl: '', lien: '' };

export default function Sport() {
  const [status, setStatus] = useState('user');
  const [users, setUsers] = useState([]);
  const [sports, setSports] = useState([]);
  const [newUser, setNewUser] = useState(defaultUser);
  const [newSport, setNewSport] = useState(defaultSport);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showSportModal, setShowSportModal] = useState(false);

  const TOKEN = localStorage.getItem('jwt');
  const headers = { Authorization: `Bearer ${TOKEN}` };

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      const [uRes, sRes] = await Promise.all([
        axios.get(`${API_BASE}/users`, { headers }),
        axios.get(`${API_BASE}/sports`, { headers }),
      ]);
      setUsers(uRes.data);
      setSports(sRes.data);
    } catch (e) {
      console.error('Erreur fetch:', e);
    }
  };

  const handleAddUser = async () => {
    await axios.post(`${API_BASE}/users`, newUser, { headers });
    setNewUser(defaultUser);
    setShowUserModal(false);
    await loadAll();
  };

  const handleAddSport = async () => {
    await axios.post(`${API_BASE}/sports`, newSport, { headers });
    setNewSport(defaultSport);
    setShowSportModal(false);
    await loadAll();
  };

  const handleDeleteSport = async (sportId) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/sports/${sportId}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      const res = await axios.get('http://localhost:8080/api/admin/sports', {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      setSports(res.data);
    } catch (err) {
      console.error("Erreur lors de la suppression du sport:", err);
    }
  };

  return (
    <>
      <Header />
      <div className="my-container w-full px-2 sm:px-6">
        <div className="flex flex-row gap-4 my-8">
          <Button name="gestions user" onClick={() => setStatus('user')} />
          <Button name="gestion resources" onClick={() => setStatus('ressource')} />
        </div>

        <div className="flex flex-row gap-4 mb-8">
          <Button name="ajouter un user" onClick={() => setShowUserModal(true)} />
          <Button name="ajouter un sport" onClick={() => setShowSportModal(true)} />
        </div>

        <div className="bg-light-white rounded-border my-8">
          {status === 'user' ? (
            <UserTable users={users} />
          ) : (
            <SportTable sports={sports} onDelete={handleDeleteSport}/>
          )}
        </div>
      </div>

      {showUserModal && (
        <AddUserModal
          newUser={newUser}
          setNewUser={setNewUser}
          onClose={() => setShowUserModal(false)}
          onSubmit={handleAddUser}
        />
      )}
      {showSportModal && (
        <AddSportModal
          newSport={newSport}
          setNewSport={setNewSport}
          onClose={() => setShowSportModal(false)}
          onSubmit={handleAddSport}
        />
      )}
      <Footer />
    </>
  );
}

