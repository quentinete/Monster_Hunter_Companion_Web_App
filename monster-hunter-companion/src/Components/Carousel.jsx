import React, { useState } from 'react';
import '../Style/Carrousel.css';

function Carousel({ items }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % items.length);
  };

  const getItemAt = (offset) => {
    const newIndex = (index + offset + items.length) % items.length;
    return items[newIndex];
  };

  return (

    <div className="carousel">
      <div className="carousel-items">
        <div className="carousel-item secondary" onClick={() => Openall(getItemAt(-1))}>{getItemAt(-1)}</div>
        <div className="carousel-item primary" onClick={() => Openall(getItemAt(0))}>{getItemAt(0)}</div>
        <div className="carousel-item secondary" onClick={() => Openall(getItemAt(1))}>{getItemAt(1)}</div>

      </div>

      <div className="footer-carousel">
        <div className="boutton-carousel">
          <button className="bt" id="prev" onClick={prev}>⟵</button>
          <button className="bt" id="next" onClick={next}>⟶</button>
        </div>
      </div>
    </div>
  );
}

function Openall(items) {
  const all = document.createElement("div");
  all.classList.add("all");


  all.innerHTML = `
    <div class="all-contenu">
      <span class="fermer">&times;</span>
        <div className="carousel-item primary">${items}</div>
    </div>
  `;

  document.body.appendChild(all);

  document.querySelector(".fermer").onclick = () => all.remove();
  all.onclick = (e) => {
    if (e.target === all) all.remove();
  };
}


export default Carousel;
