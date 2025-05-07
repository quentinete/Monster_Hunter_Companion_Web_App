import React, { useState } from 'react';
import { loadData, htmlDisplay } from './mhwApi';
import '../Style/Equipment.css';

function Equipment() {
  const [type, setType] = useState('monsters');
  const [number, setNumber] = useState(5);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleLoad = async () => {
    setResult("<p>Chargement...</p>");
    setError('');
    try {
      const data = await loadData(type, number);
      setResult(htmlDisplay(data, type));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <label htmlFor="Select">Type :</label>
      <select id="Select" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="monsters">Monstres</option>
        <option value="weapons">Armes</option>
        <option value="ailments">Ailments</option>
        <option value="armor">Armor</option>
        <option value="armor/sets">Armor Sets</option>
        <option value="decorations">Decorations</option>
        <option value="events">Events</option>
        <option value="charms">Charms</option>
        <option value="items">Items</option>
        <option value="locations">Locations</option>
        <option value="motion-values">Motion Values</option>
        <option value="skills">Skills</option>
      </select>

      <label htmlFor="NumWanted">Nombre :</label>
      <input type="number" id="NumWanted" value={number} min="1" onChange={(e) => setNumber(Number(e.target.value))} />

      <button onClick={handleLoad}>Charge</button>

      <div id="result" dangerouslySetInnerHTML={{ __html: result }} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Equipment;
