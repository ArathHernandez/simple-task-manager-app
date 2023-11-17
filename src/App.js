import './App.css';
import batmanLogo from './imagenes/batman.png'
import Tarea from './componentes/Tarea.js';
import TareaFormulario from './componentes/TareaFormulario.js';
import ListaDeTareas from './componentes/ListaDeTareas.js';

function App() {
  return (
    <div className="App">
      <div className='batman-logo-contenedor'>
        <img
        src={batmanLogo}
        className='batman-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>My tasks</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
