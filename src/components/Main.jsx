import React from 'react';

function Main({ personas }) {
  return (
    <div>
    <h3>Listado de Personas</h3>
    <ul>
      {personas.map((persona, index) => (
        <li key={index}>
          {persona.nombre} - {persona.edad} años
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Main;
