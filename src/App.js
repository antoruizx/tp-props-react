import Main from './components/Main';

function App() {
 let nombre = "Pablo";

let persona = {
  nombre: 'Carlos',
  edad: 20,
  curso: 'programación',
  Asistencia: false
};

let grupo = [
  { nombre: 'Lucas', edad: 25 },
  { nombre: 'Luciana', edad: 19 },
  { nombre: 'Julieta', edad: 26 },
  { nombre: 'Jorge', edad: 30 },
  { nombre: 'Cristian', edad: 30 }
];


  return (
    <div>
      <Main personas={personas} />
    </div>
  );
}

export default App;
