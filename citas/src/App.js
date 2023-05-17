import{useState} from 'react';
import './App.css';
import Cita  from './Cita/Cita';
import Formulario  from './Formulario/Formulario';
import Subtitulo  from './Subtitulo/Subtitulo';
import Titulo  from './Titulo/Titulo';

function App() {
  
  const [citas, setCitas] = useState([]);
  
    const agregarCita = evento => {
    evento.preventDefault();
    setCitas(
      [
        ...citas,
       
      ]
    );
    
  }


  return (
    <>
      <Titulo texto="ADMINISTADOR DE PACIENTES" />

      <div className="container">
        <div className="row">
          <div className = "col-md-1"></div>
          <div className="col-md-5">
            <Subtitulo texto="CREAR MI CITA" />
            <Formulario />
          </div>
          <div className="col-md-5">
            <Subtitulo className = "text-justify" texto="ADMINISTRA TUS CITAS" />
            <Cita nombre="Nina" duenio="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Cita nombre="Sifon" duenio="Flecha" fecha="2021-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Cita nombre="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
          </div>
          <div className = "col-md-1"></div>

        </div>
      </div>

      
    </>
  );
}

export default App;
