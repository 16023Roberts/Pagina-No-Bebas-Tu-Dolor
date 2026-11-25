import { useNavigate } from 'react-router-dom'
import "./inicio.css"

function Inicio()
{
    const navigate= useNavigate()

    return(
        <main>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet"></link>
            <div className='princip'>
                <div>
                <div className='texto'>
                <h1>No bebas tu dolor</h1>
                <h4>¿Has tenido una mala experiencia, con el servicio del agua que quieras compartir?</h4>
                <p>Hay más gente que comparte tu dolor y tu preocupación: ¿Quieres hablar con alguno de ellos?</p>
                </div>
                <div className="contenedor">
                <button onClick={()=> navigate("/")}>Foro</button>
                <button onClick={()=> navigate("/comparte-tu-experiencia")}>Comparte Tu Experiencia</button>
                </div>
                </div>
                <img className='agua' src='IMG/as.jpg'/>

                
            </div>
            
            
        </main>
    )
}

export default Inicio;