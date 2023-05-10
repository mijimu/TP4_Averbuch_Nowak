import logo from './logo.svg';
import '../App.css';
import { Cita } from '../Cita';
import { Formulario } from '../Formulario';
import { Subtitulo } from '../Subtitulo';
import { Titulo } from '../Titulo';

function App() {
  return (
    <>
      <Titulo texto="ADMINISTADOR DE PACIENTES" />

      <div class="container">
        <div class="row">
          <div class="one-half column"><Subtitulo texto="CREAR MI CITA" />
            <Formulario />
          </div>
          <div class="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS" />
            <Cita nombre="Nina" duenio="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Cita nombre="Sifon" duenio="Flecha" fecha="2021-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Cita nombre="Floki" duenio="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
          </div>
        </div>
      </div>

      <script src="/static/js/bundle.js"></script>
      <script src="/static/js/vendors~main.chunk.js"></script>
      <script src="/static/js/main.chunk.js"></script>
    </>
  );
}

export default App;
