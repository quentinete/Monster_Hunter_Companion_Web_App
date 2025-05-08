import React, { useState } from 'react';
import '../Style/Talismans.css';

const fakeTalismans = [
  { id: 1, name: "Talisman de l’attaque", skill: "Attack Boost", rarity: 5 },
  { id: 2, name: "Talisman du vent", skill: "Windproof", rarity: 3 },
  { id: 3, name: "Talisman de défense", skill: "Defense Boost", rarity: 4 },
];

function Talismans() {
  const [talismans, setTalismans] = useState(fakeTalismans);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleOrder = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedTalismans = [...talismans].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    if (!aVal) return 1;
    if (!bVal) return -1;

    if (typeof aVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }
    return sortOrder === 'asc'
      ? String(aVal).localeCompare(String(bVal))
      : String(bVal).localeCompare(String(aVal));
  });

  return (
    <div className="talismans-page">
      <h2>Liste des talismans</h2>

      <div className="sort-controls">
        <label htmlFor="sort">Trier par :</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Nom</option>
          <option value="skill">Compétence</option>
          <option value="rarity">Rareté</option>
        </select>
        <button onClick={handleOrder}>
          Ordre : {sortOrder === 'asc' ? 'Croissant ↑' : 'Décroissant ↓'}
        </button>
      </div>

      <div className="talisman-list">
        {sortedTalismans.map(talisman => (
          <div key={talisman.id} className="talisman-card">
            <h3>{talisman.name}</h3>
            <p><strong>Compétence :</strong> {talisman.skill}</p>
            <p><strong>Rareté :</strong> {talisman.rarity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Talismans;
