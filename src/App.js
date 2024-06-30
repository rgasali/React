import { Route, Routes } from "react-router-dom";
import UseState from "./rutas/UseState";
import Inicio from "./rutas/Inicio";
import UseEffect from "./rutas/UseEffect";
import './app.css'
import Eventos from "./rutas/Eventos";

function App() {
  return (
   <div>
    
    <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="useState" element={<UseState/>}></Route>
      <Route path="useEffect" element={<UseEffect/>}></Route>
      <Route path="eventos" element={<Eventos/>}></Route>
    </Routes>  
      
   </div>

  );
}

export default App;
