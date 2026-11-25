import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";
import './TuCuenta.css'

function TuCuenta (){

    const navigate = useNavigate();

    return(
        <main>
            <div>
                <h1> Tu Cuenta </h1>
            </div>

            <div>
                <h3>Contraseña:</h3>
                <p>********</p>
            </div>
        </main>
    )

}