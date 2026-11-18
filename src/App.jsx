import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import ComparteTuExperiencia from './pages/Comparte-tu-experiencia'
import Login from './pages/login'
import Registro from './pages/Registro'
import Header from './componentes/Header'
function App() {
  
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/comparte-tu-experiencia' element={<ComparteTuExperiencia/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element={<Registro/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;