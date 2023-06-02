import './Formulario.css';
import {useState} from 'react';


function Formulario({ texto1 = 'Nombre Mascota', texto2 = 'Nombre Dueño', date = 'Fecha', time = 'Hora', textoBigger = 'Sintomas', submitear = 'Agregar Cita' , sendCitas}) {

    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState('');
    const [duenio, setDuenio] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState(new Date());
    const [sintomas, setSintomas] = useState('');

    const nombreOnchangeHandler = evento => {
        setNombre(evento.target.value)
    }
    const duenioOnchangeHandler = evento => {
        setDuenio(evento.target.value)
    }
    const fechaOnchangeHandler = evento => {
        setFecha(evento.target.value)
    }
    const horaOnchangeHandler = evento => {
        setHora(evento.target.value)
    }
    const sintomasOnchangeHandler = evento => {
        setSintomas(evento.target.value)
    }

    const idHandler = () => {
        const timeForId = new Date().getTime();
        console.log(timeForId);
        setId(timeForId);
    }

    const buttonOnsubmitHandler = evento => {
        evento.preventDefault();
        idHandler();
        console.log('enviando...')
        const nuevaCita = {
            id: id,
            nombre: nombre,
            duenio: duenio,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas,
            eliminar: null,
        }

        console.log(nuevaCita.id)

        sendCitas(nuevaCita);

        setDuenio('');
        setNombre('');
        setFecha(new Date());
        setHora(new Date());
        setSintomas('');
        
      }

        return (
            <form onSubmit={buttonOnsubmitHandler}>
                <input type='hidden' value={id} name="id"></input>
                <label className="texto1  mb-1">{texto1}</label>
                <input type="text" name="mascota" className="u-full-width mb-3" placeholder="Nombre Mascota" value={nombre} onChange={nombreOnchangeHandler}></input>
                <label className="texto2  mb-1">{texto2}</label>
                <input type="text" name="propietario" className="u-full-width mb-3" placeholder="Nombre dueño de la mascota" value={duenio} onChange={duenioOnchangeHandler}></input>
                <label className="date  mb-1">{date}</label>
                <input type="date" name="fecha" className="u-full-width mb-3" value={fecha} onChange={fechaOnchangeHandler}></input>
                <label className="time  mb-1">{time}</label>
                <input type="time" name="hora" className="u-full-width mb-3" value={hora} onChange={horaOnchangeHandler}></input>
                <label className="textoBigger mb-1">{textoBigger}</label>
                <textarea name="sintomas" className="u-full-width rounded mb-3" value={sintomas} onChange={sintomasOnchangeHandler}></textarea>
                <button type="submit" className="submitear u-full-width bttn  rounded">{submitear}</button>
            </form>
        )
    }

    export default Formulario;