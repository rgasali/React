import { Link } from "react-router-dom";

export default function Inicio(){

    return(
        <div>
            <h1>Ejercicios de React</h1>
            <div className="navBar">
                <Link to="useState">Ejercicios con useState</Link>
                <Link to="useEffect">Ejercicios con useEffect</Link>
                <Link to="eventos">Ejercicios de eventos</Link>
            </div>
            
        </div>
    )

}

