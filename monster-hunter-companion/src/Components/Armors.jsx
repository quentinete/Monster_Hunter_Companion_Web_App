import React, { useEffect, useState } from 'react';
import '../Style/Armors.css';

function Armors() {
  const [armors, setArmors] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://mhw-db.com/armor')
      .then(res => {
        if (!res.ok) throw new Error('Erreur de chargement des armures');
        return res.json();
      })
      .then(data => setArmors(data))
      .catch(err => setError(err.message));
  }, []);

  const Order = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedArmors = [...armors].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

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
    <div className="armors-page">
      <h2>List of Armors</h2>

      <div className="sort-controls">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="type">Type</option>
          <option value="rank">Rank</option>
          <option value="rarity">Rarity</option>
          <option value="id">ID</option>
        </select>
        <button onClick={Order}>
          Order: {sortOrder === 'asc' ? 'Ascending ↑' : 'Descending ↓'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="armor-list">
        {sortedArmors.map(armor => (
          <div key={armor.id} className="armor-card">
            <h3>{armor.name}</h3>
            <p><strong>Type:</strong> {armor.type}</p>
            <p><strong>Rank:</strong> {armor.rank}</p>
            <p><strong>Rarity:</strong> {armor.rarity}</p>
            <p><strong>Base Defense:</strong> {armor.defense.base}</p>
            <p><strong>Resistances:</strong> 
              {` Fire: ${armor.resistances.fire}, Water: ${armor.resistances.water}, Ice: ${armor.resistances.ice}, Thunder: ${armor.resistances.thunder}, Dragon: ${armor.resistances.dragon}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Armors;
