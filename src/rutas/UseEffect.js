import { Link } from "react-router-dom"
import Tienda from "../componentes/ColorSwitch/Tienda/Tienda"

export default function UseEffect(){

    return(
        <div>
            <h1>Ejercicios de useEffect</h1>
            <Link to="/">Volver al inicio</Link>
            <h2>Consumir una api</h2>
            <Tienda/>
        </div>
    )
}


