import { useState } from 'react';
import './Cita.css';

function Cita({ id, nombre, duenio, fecha, hora, sintomas, sendId }) {

    //const [botonEliminar, setBotonEliminar] = useState(false);

    const handleDelete = (e) => {
        alert("Se eliminará la cita!");
        //setBotonEliminar(true);
        //sendEliminar(botonEliminar);
        //console.log(botonEliminar);
        sendId(id);
    }
    
    return (
        <div className="cita mb-4">
            <input type='hidden' value={id}></input>
            <p>Mascota: <span className="nombre">{nombre}</span></p>
            <p>Dueño: <span className="duenio" >{duenio}</span></p>
            <p>Fecha: <span className="fecha" >{fecha}</span></p>
            <p>Hora: <span className="hora" >{hora}</span></p>
            <p>Sintomas: <span className="sintomas">{sintomas}</span></p>
            <button class="button eliminar u-full-width rounded" onClick={handleDelete}>Eliminar ×</button>
        </div>
    )
}

export default Cita;