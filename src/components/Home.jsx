import React from 'react';
import Main from './Home';

function Home() {
  let personas = [
    { nombre: "Carlos", edad: 25 },
    { nombre: "Natalia", edad: 20 }
  ];

  return (
    <div>
      <h2>Home</h2>
      <Main personas={personas} />
    </div>
  );
}

export default Home;