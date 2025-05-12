import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { loadData } from './mhwApi';
import '../Style/Monsters.css';

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadData('monsters', 50)
      .then(setMonsters)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (monsters.length === 0) return <p>Chargement...</p>;

  const monsterCards = monsters.map((m) => (
    <div key={m.id} className="monster-card">
      <h3>{m.name}</h3>
      <img
        src={`../Assets/Logo/Monstre/${m.name}.png`}
        alt={m.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = require('../Assets/Logo/logo_mhs.png');
      }}/>
      <p><strong>Type:</strong> {m.type}</p>
      <p><strong>Espèce:</strong> {m.species}</p>
      <p><strong>Éléments:</strong> {m.elements?.join(', ') || 'Aucun'}</p>
      <p><strong>Faiblesses:</strong> {m.weaknesses?.map(w => w.element).join(', ') || 'Aucune'}</p>
    </div>
  ));

  return (
    <div>
      <h2 className='header-Monsters'>Carrousel de monstres</h2>
      <Carousel items={monsterCards} />
    </div>
  );
}

function Openall(src) {
  const all = document.createElement("div");
  all.classList.add("all");

  all.innerHTML = `
    <div class="all-contenu">
      <span class="fermer">&times;</span>
      <img src="${src}" alt="Image plein écran">
    </div>
  `;

  document.body.appendChild(all);

  document.querySelector(".fermer").onclick = () => all.remove();
  all.onclick = (e) => {
    if (e.target === all) all.remove();
  };
}

export default Monsters;