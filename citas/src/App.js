
import './App.css';
import Cita  from './Cita/Cita';
import Formulario  from './Formulario/Formulario';
import Subtitulo  from './Subtitulo/Subtitulo';
import Titulo  from './Titulo/Titulo';

function App() {
  return (
    <>
      <Titulo texto="ADMINISTADOR DE PACIENTES" />

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="CREAR MI CITA" />
            <Formulario />
          </div>
          <div className="col-md-12">
            <Subtitulo texto="ADMINISTRA TUS CITAS" />
            <Cita nombre="Nina" duenio="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Cita nombre="Sifon" duenio="Flecha" fecha="2021-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Cita nombre="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
          </div>
        </div>
      </div>

      {/*<script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
  <script src="/static/js/main.chunk.js"></script>*/}
    </>
  );
}

export default App;
