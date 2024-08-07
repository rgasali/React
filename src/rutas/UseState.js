import { Link } from "react-router-dom";
import Gallery from "../componentes/Gallery/Gallery";
import Form from "../componentes/Form/Form";
import FeedbackForm from "../componentes/FeedbackForm/FeedbackForm";
import FeedbackForm2 from "../componentes/FeedbackForm2/FeedbackForm2";


export default function UseState(){

    return(
        <div>
            <h1>Mis ejercicios</h1>
            <Link to="/">Volver al inicio</Link>
            <h2>Ejercicio 1</h2>
                <Gallery/>
            <h2>Ejercicio 2</h2>  
                <Form/>
            <h2>Ejercicio 3</h2>
                <FeedbackForm/>
            <h2>Ejercicio 4</h2>
                <FeedbackForm2/>
            <h2>Ejercicio 5 Consumo de Api con useEffect</h2>
        </div>
    )
}

