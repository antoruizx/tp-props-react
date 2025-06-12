
const Main = ({ nombre, persona, grupo }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>

      <h3>Datos de Persona</h3>
      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Curso: {persona.curso}</li>
        <li>Asistencia: {persona.Asistencia ? "Presente" : "Ausente"}</li>
      </ul>

      <h3>Grupo</h3>
      <ul>
        {grupo.map((integrante, index) => (
          <li key={index}>
            {integrante.nombre} - {integrante.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
