import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Registro.css'

function Registro (){
    const[correo, setCorreo]=useState("")
    const[pass, setPass]= useState("")
    const[nombre, setNom]= useState("")
    const navigate= useNavigate()
    
    function IniciarSesion(evento){
        evento.preventDefault()

        setCorreo("")
        setPass("")
        navigate("/")
    }
    return(
        <main className='login'>
            <div className='login-contenedor'>
                <div className='login-pestanas'>
                    <button onClick={()=> navigate("/login")}>Iniciar sesion</button>
                    <button className='activo' onClick={()=> navigate("/registro")}>Registrarse</button>
                </div>
                <div className='login-formulario'>
                    <h2>Bienvenido</h2>
                    <p>Crea tu cuenta</p>
                    <form onSubmit={IniciarSesion}>
                        <input type='name'
                        placeholder='Nombre completo'
                        value={nombre}
                        onChange={(evento)=>setNom(evento.target.value)}
                        required
                        />
                        <input type='email'
                        placeholder='Correo electronico'
                        value={correo}
                        onChange={(evento)=>setCorreo(evento.target.value)}
                        required
                        />
                        <input type='password'
                        placeholder='Contraseña'
                        value={pass}
                        onChange={(evento)=>setPass(evento.target.value)}
                        required
                        />

                        <button type='submit'>Registrarse</button>
                    </form>
                </div>
            </div>

        </main>
    )
}
export default Registro