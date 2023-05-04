import logo from './logo.svg';
import '../App.css';
import {Cita} from '../Cita';
import {Formulario} from '../Formulario';
import {Subtitulo} from '../Subtitulo';
import {Titulo} from '../Titulo';

function App() {
  return (
    <>
      <Titulo texto="ADMINISTADOR DE PACIENTES"/>
      <Subtitulo texto="CREAR MI CITA"/>
      <Subtitulo texto="ADMINISTRA TUS CITAS"/>
    </>
  );
}

export default App;
