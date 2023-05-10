function Cita({nombre, duenio, fecha, hora, sintomas}) {
    <div class="cita">
        <p>Mascota: <span className="nombre">{nombre}</span></p>
        <p>Dueño: <span className="duenio" >{duenio}</span></p>
        <p>Fecha: <span className="fecha" >{fecha}</span></p>
        <p>Hora: <span className="hora" >{hora}</span></p>
        <p>Sintomas: <span className="sintomas">{sintomas}</span></p>
        <button class="button eliminar u-full-width">Eliminar ×</button>
    </div>
}

export default Cita;