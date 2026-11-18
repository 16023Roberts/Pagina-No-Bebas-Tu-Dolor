import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import "./header.css"
function Header()
{
    return(
        <header>
            <Link to='/'>Inicio</Link>
            <nav>
            
            <Link to='/login'><UserRound size={25}/></Link>
            <Link to='/registro'>Registro</Link>
            </nav>
            
            
        </header>
    )
}
export default Header;