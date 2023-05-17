import './Formulario.css';


function Formulario({texto1 = 'Nombre Mascota', texto2 = 'Nombre Dueño', date = 'Fecha', time = 'Hora', textoBigger = 'Sintomas', submitear = 'Agregar Cita'}, agregarCita) {
    return (
        <form onSubmit={ (e) => agregarCita(e)}>
            <label className="texto1  mb-1">{texto1}</label>
            <input type="text" name="mascota" className="u-full-width mb-3" placeholder="Nombre Mascota" value=""></input>
            <label className="texto2  mb-1">{texto2}</label>
            <input type="text" name="propietario" className="u-full-width mb-3" placeholder="Nombre dueño de la mascota" value=""></input>
            <label className="date  mb-1">{date}</label>
            <input type="date" name="fecha" className="u-full-width mb-3" value=""></input>
            <label className="time  mb-1">{time}</label>
            <input type="time" name="hora" className="u-full-width mb-3" value=""></input>
            <label className="textoBigger mb-1">{textoBigger}</label>
            <textarea name="sintomas" className="u-full-width rounded mb-3"></textarea>
            <button type="submit" className="submitear u-full-width bttn  rounded">{submitear}</button>
        </form>
    )
}

export default Formulario;