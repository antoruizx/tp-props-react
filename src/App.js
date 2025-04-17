import React from 'react';
import Main from './components/Main';

function App() {
  let personas = [
    { nombre: 'Carlos', edad: 25 },
    { nombre: 'Natalia', edad: 20 },
    ];

  return (
    <div>
      <Main personas={personas} />
    </div>
  );
}

export default App;
