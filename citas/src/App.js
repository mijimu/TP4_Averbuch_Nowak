import { useState } from 'react';
import './App.css';
import Cita from './Cita/Cita';
import Formulario from './Formulario/Formulario';
import Subtitulo from './Subtitulo/Subtitulo';
import Titulo from './Titulo/Titulo';

function App() {

  const [id, setId] = useState(0);
  const declareId = () => {
    setId(Math.random);
    return id;
  }

  const boolEliminar = (bool) => {
    if(bool){
      setCitaArray((cita) =>
      cita.filter((citaArray) => citaArray.id === id)
    );
    }
  }

  const [citaArray, setCitaArray] = useState([]);
  const nuevaCita = (citaEnviada) => {
    const agregar = [...citaArray, citaEnviada]
    setCitaArray(agregar)
    console.log(citaEnviada)
    console.log('listo')
  }

  return (
    <>
      <Titulo texto="ADMINISTADOR DE PACIENTES" />

      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <Subtitulo texto="CREAR MI CITA" />
            <Formulario sendCitas={nuevaCita} sendId={declareId} />
          </div>
          <div className="col-md-5">
            <Subtitulo className="text-justify" texto="ADMINISTRA TUS CITAS" />
            {citaArray.map(({ id, nombre, duenio, fecha, hora, sintomas }) => (
              <Cita id={id} nombre={nombre} duenio={duenio} fecha={fecha} hora={hora} sintomas={sintomas} sendEliminar={boolEliminar}></Cita>
            ))}

            {/*<Cita nombre="Nina" duenio="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Cita nombre="Sifon" duenio="Flecha" fecha="2021-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Cita nombre="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />*/}
          </div>
          <div className="col-md-1"></div>

        </div>
      </div>


    </>
  );
}

export default App;
