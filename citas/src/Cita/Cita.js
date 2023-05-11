import './Cita.css';

function Cita({nombre, duenio, fecha, hora, sintomas}) {
    return(
        <div className="cita mb-4">
            <p>Mascota: <span className="nombre">{nombre}</span></p>
            <p>Dueño: <span className="duenio" >{duenio}</span></p>
            <p>Fecha: <span className="fecha" >{fecha}</span></p>
            <p>Hora: <span className="hora" >{hora}</span></p>
            <p>Sintomas: <span className="sintomas">{sintomas}</span></p>
            <button class="button eliminar u-full-width rounded">Eliminar ×</button>
        </div>
    )
}

export default Cita;