import React, { useEffect, useState } from "react";
import "../Style/News.css";


const News = () => {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);

  const siteUpdates = [
    {
      title: "Nouveau générateur de builds",
      description: "Crée et partage tes sets d'équipement personnalisés.",
      date: "2025-05-09",
    },
    {
      title: "Ajout du planner de chasse",
      description: "Planifie tes sessions de chasse avec tes amis.",
      date: "2025-05-08",
    },
  ];

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await fetch("https://mhw-db.com/monsters");
        const data = await res.json();

        const sorted = data.sort((a, b) => b.id - a.id).slice(0, 5);
        setMonsters(sorted);
      } catch (error) {
        console.error("Erreur lors du chargement des monstres :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-section-title">🆕 Nouveautés du site</h2>
      <div>
        {siteUpdates.map((update, i) => (
          <div key={i} className="news-card">
            <h3 className="news-card-title">{update.title}</h3>
            <p className="news-card-date">{update.date}</p>
            <p>{update.description}</p>
          </div>
        ))}
      </div>

      <h2 className="news-section-title">🐉 Derniers monstres ajoutés</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          {monsters.map((monster) => (
            <div key={monster.id} className="news-card">
              <h3 className="news-card-title">{monster.name}</h3>
              <p className="news-card-date">Type : {monster.type}</p>
              <p>Espèce : {monster.species}</p>
              {monster.elements?.length > 0 && (
                <p>Éléments : {monster.elements.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default News;
