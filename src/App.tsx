import './App.css'
import {Routes,Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navber } from './components/Navber'
import { ShoppingCardProvider } from './context/ShoppingCardContext'

function App() {


  return (
<>
<Navber></Navber>
   
   <Container>
          <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/store" element = {<Store/>} />
    <Route path="/about" element = {<About/>} />
   
          </Routes>
       </Container>


</>
    
  )
}

export default App
