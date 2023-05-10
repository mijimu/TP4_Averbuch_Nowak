function Formulario({texto1 = 'Nombre Mascota', texto2 = 'Nombre Dueño', date = 'Fecha', time = 'Hora', textoBigger = 'Sintomas', submitear = 'Agregar Cita'}) {
    <form>
        <label className="texto1">{texto1}</label>
        <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
        <label className="texto2">{texto2}</label>
        <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
        <label className="date">{date}</label>
        <input type="date" name="fecha" class="u-full-width" value=""></input>
        <label className="time">{time}</label>
        <input type="time" name="hora" class="u-full-width" value=""></input>
        <label className="textoBigger">{textoBigger}</label>
        <textarea name="sintomas" class="u-full-width"></textarea>
        <button type="submit" class="u-full-width button-primary" className="submitear">{submitear}</button>
    </form>
}

export default Formulario;