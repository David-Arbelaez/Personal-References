//import logo from './logo.svg';
import './App.css';
import References from './Components/References.jsx';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Estos son algunos comentarios acerca de mi trabajo:</h1>
        <References
          name='Camilo Salamanca'
          enterprise='Asesol'
          level='Gerente General'
          description='Dio la talla mientras tarabajaba para asesol, la verdad no esperabamos que lo hiciera tan bien. Desempeñó sus tareas administrativas y además nos ayudo a reinventar el diseño de nuestra empresa. Se siente un atens y un despúes luego de su participación en el diseño.'
          image='Chris'
        />
        <References
          name='Diego Arbeláez'
          enterprise='Teleperformance'
          level='Supervisor'
          description='Desde el entrenamiento fue uno de los mejores. Cuando inició formalemente todos sus compañeros le pedía ayuda. Logró bonificar por buen desempeño y la verdad eso no es normal para alguien tan nuevo. Siempre le sugerí que ascendiera en la empresa pero me respondía que eso no era lo que quería, quería ser desarrollador.'
          image='Pego'
        />
      </div>
    </div>
  );
}

export default App;
