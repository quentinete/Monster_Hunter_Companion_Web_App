import React, { useEffect, useState } from 'react';
import '../Style/Monsters.css';

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://mhw-db.com/monsters')
      .then(res => {
        if (!res.ok) throw new Error('Monster loading error');
        return res.json();
      })
      .then(data => setMonsters(data))
      .catch(err => setError(err.message));
  }, []);

  const Order = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedMonsters = [...monsters].sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    if (sortBy === 'elements') {
      aVal = a.elements?.[0] || '';
      bVal = b.elements?.[0] || '';
    } else if (sortBy === 'weaknesses') {
      aVal = a.weaknesses?.[0]?.element || '';
      bVal = b.weaknesses?.[0]?.element || '';
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
    <div className="monsters-page">
      <h2>List of monsters</h2>

      <div className="sort-controls">
        <label htmlFor="sort">Sort by :</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">name</option>
          <option value="type">Type</option>
          <option value="species">species</option>
          <option value="id">ID</option>
          <option value="elements">elements</option>
          <option value="weaknesses">weaknesses</option>
        </select>
        <button onClick={Order}>
            Order : {sortOrder === 'asc' ? 'Ascending ↑' : 'Descending ↓'}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="monster-list">
        {sortedMonsters.map(monster => (
          <div key={monster.id} className="monster-card">
            <h3>{monster.name}</h3>
            <p><strong>Type :</strong> {monster.type}</p>
            <p><strong>species :</strong> {monster.species}</p>
            <p><strong>elements :</strong> {monster.elements.join(', ') || 'Aucun'}</p>
            <p><strong>weaknesses :</strong> {monster.weaknesses?.map(w => w.element).join(', ') || 'Aucune'}</p>
            <p><strong>Description :</strong> {monster.description || 'Aucune description disponible.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Monsters;
