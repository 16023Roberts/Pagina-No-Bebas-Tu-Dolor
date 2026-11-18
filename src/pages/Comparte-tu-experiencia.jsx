import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";


function ComparteTuExperiencia(){

    const[mostrar, setMostrar]= useState(false)
    const[mensaje, setMensaje]= useState("")

    const[comentario, setComentario]=useState("")


    function cerrarMensaje(){
        setMostrar(false)
    }  

    function enviarForm(evento){
        evento.preventDefault();
        if( comentario.trim()=== "" ){
            setMensaje("Complete todos los campos")
        } else{
            setMensaje("Se envió correctamente")
            limpiarFormulario()
        }

        setMostrar(true)
    }

    function limpiarFormulario()
    {
        setComentario("")
    }

    return(
        <main>
        <h1>Comparte tu Experiencia</h1>
        <form onSubmit={enviarForm}>
            <label>Comentario: </label>
            <textarea
            value={comentario}
            onChange={(evento)=> setComentario(evento.target.value)}
            />

            <button type="submit">Enviar</button>
        </form>
        

        {mostrar && (
            <Modal>
                <h2>Mensaje</h2>
                <p>{mensaje}</p>
                <Boton funcion={cerrarMensaje}>Aceptar</Boton>
            </Modal>
        )}
        </main>
    )
}
export default ComparteTuExperiencia;