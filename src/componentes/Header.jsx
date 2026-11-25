import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import "./header.css"
function Header()
{
    return(
        <header>
            <nav>
                <Link className="inicio" to='/'>Inicio</Link>
            </nav>
            
            <nav>
            
            <Link to='/login'><UserRound size={40}/></Link>
            <Link to='/registro'>Registro</Link>
            </nav>
            
            
        </header>
    )
}
export default Header;