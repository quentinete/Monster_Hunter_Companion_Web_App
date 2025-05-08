import React, { useEffect, useState } from 'react';
import '../Style/Weapons.css';

function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://mhw-db.com/weapons')
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement des armes');
        return res.json();
      })
      .then(data => setWeapons(data))
      .catch(err => setError(err.message));
  }, []);

  const Order = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedWeapons = [...weapons].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    if (sortBy === 'elements') {
      aVal = a.elements?.[0]?.type || '';
      bVal = b.elements?.[0]?.type || '';
    }

    if (!aVal) return 1;
    if (!bVal) return -1;

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }

    return sortOrder === 'asc'
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  return (
    <div className="weapons-page">
      <h2>Liste des armes</h2>

      <div className="sort-controls">
        <label htmlFor="sort">Trier par :</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Nom</option>
          <option value="type">Type</option>
          <option value="id">ID</option>
          <option value="rarity">Rareté</option>
          <option value="elements">Éléments</option>
        </select>
        <button onClick={Order}>
          Ordre : {sortOrder === 'asc' ? 'Croissant ↑' : 'Décroissant ↓'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="weapon-list">
        {sortedWeapons.map(weapon => (
          <div key={weapon.id} className="weapon-card">
            <h3>{weapon.name}</h3>
            <p><strong>Type :</strong> {weapon.type}</p>
            <p><strong>Rareté :</strong> {weapon.rarity}</p>
            <p><strong>Éléments :</strong> {weapon.elements?.map(el => el.type).join(', ') || 'Aucun'}</p>
            <p><strong>Attaque de base :</strong> {weapon.attack?.display || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weapons;

