import { useNavigate } from 'react-router-dom'
import "./inicio.css"

function Inicio()
{
    const navigate= useNavigate()

    return(
        <main>
            <h1>No bebas tu dolor</h1>
            <h4>¿Has tenido una mala experiencia, con el servicio del agua que quieras compartir?</h4>
            <p>Hay más gente que comparte tu dolor y tu preocupación: ¿Quieres hablar con alguno de ellos?</p>
            
            <div className='botonchitos'>
            <button onClick={()=> navigate("/")}>Foro</button>
            <button onClick={()=> navigate("/comparte-tu-experiencia")}>Comparte Tu Experiencia</button>
            </div>
            
        </main>
    )
}

export default Inicio;